import { PrismaClient } from '@prisma/client';
import pcloudSdk from 'pcloud-sdk-js';

const prisma = new PrismaClient();

// this script should be run in dev environment only - follow pcloud oauth instructions and run pcloudAuth.js to get access token
async function main() {
	await prisma.buyersOnSaleItem.deleteMany();
	await prisma.buyer.deleteMany();
	await prisma.image.deleteMany();
	await prisma.saleItem.deleteMany();
	const client = pcloudSdk.createClient(
		'EtRS7Z1Q53NMSGVIZnc2Bo7ZzL3hjE4jkLjjtSAhEioqwjP0Ch9y'
	);
	// eslint-disable-next-line
	const yardSaleFolder = await client.listfolder(16892791281);
	// @ts-expect-error
	yardSaleFolder?.contents?.forEach(async (folderItem) => {
		if (folderItem.isfolder) {
			const createdItem = await prisma.saleItem.create({
				data: {
					title: folderItem.name as string,
					description: '',
					x: 0,
					y: 0,
					z: 0,
					price: 0,
				},
			});
			const itemFolder = await client.listfolder(folderItem.folderid as number);
			// @ts-expect-error
			itemFolder?.contents?.forEach(async (subItem) => {
				if (subItem.contenttype === 'image/jpeg') {
					// @ts-expect-error
					const srcFromSubDir = `${itemFolder.name as string}/${
						subItem.name as string
					}`;
					await prisma.image.create({
						data: {
							itemId: createdItem.id,
							src:
								'https://filedn.com/ly26l0AIs1CYrO29uHy9zDm/Yard%20Sale/' +
								srcFromSubDir,
						},
					});
				}
			});
		}
	});
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
