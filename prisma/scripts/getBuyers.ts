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
	for (const buyer of buyers) {
		const originalItems = _.cloneDeep(buyer.items);
		buyer.items = [];
		for (const item of originalItems) {
			const itemToAppend = await prisma.saleItem.findFirst({
				where: { id: item.itemId },
			});
			buyer.items.push(itemToAppend);
		}
	}
	fs.writeFileSync('./prisma/scripts/buyers.json', JSON.stringify(buyers));
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
