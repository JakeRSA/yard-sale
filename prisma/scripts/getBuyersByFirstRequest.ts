import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import _ from 'lodash';

const prisma = new PrismaClient();

// this script should be run in dev environment only - follow pcloud oauth instructions and run pcloudAuth.js to get access token
async function main() {
	const buyers: any = await prisma.buyer.findMany({
		include: {
			items: {},
		},
	});
	const items = await prisma.saleItem.findMany({
		include: {
			buyers: {
				orderBy: { assignedAt: 'asc' },
			},
		},
	});
	for (const buyer of buyers) {
		const originalItems = _.cloneDeep(buyer.items);
		buyer.items = [];
		for (const item of originalItems) {
			const itemId = item.itemId;
			const itemInItemsList = items.find((x) => x.id === itemId);
			if (itemInItemsList && buyer.id === itemInItemsList.buyers[0].buyerId) {
				const itemToAppend = await prisma.saleItem.findFirst({
					where: { id: item.itemId },
				});
				buyer.items.push(itemToAppend);
			}
		}
	}
	const filteredDuplicatePhoneBuyers: any = [];
	for (const buyer of buyers) {
		const buyerFormattedPhone = buyer.phone
			.replace('+972', '0')
			.replaceAll('-', '')
			.replaceAll(' ', '');
		const existingBuyer = filteredDuplicatePhoneBuyers.find(
			(b: any) => b.phone === buyerFormattedPhone
		);
		if (!existingBuyer) {
			filteredDuplicatePhoneBuyers.push({
				...buyer,
				phone: buyerFormattedPhone,
			});
		} else {
			existingBuyer.items = [...existingBuyer.items, ...buyer.items];
		}
	}
	const humanReadableBuyers = filteredDuplicatePhoneBuyers.map(
		// eslint-disable-next-line
        (filteredBuyer: any) => ({
			...filteredBuyer,
			// eslint-disable-next-line
			itemNames: filteredBuyer.items.map((item: any) => item.title),
			totalAmount: filteredBuyer.items.reduce(
				// eslint-disable-next-line
				(acc: number, curr: any) => (acc += curr.price),
				0
			),
		})
	);
	fs.writeFileSync(
		'./prisma/scripts/buyersByFirstRequest.json',
		JSON.stringify(humanReadableBuyers)
	);
	fs.writeFileSync('./prisma/scripts/items.json', JSON.stringify(items));
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
