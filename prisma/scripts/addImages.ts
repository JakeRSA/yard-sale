import { PrismaClient } from '@prisma/client';
import pcloudSdk from 'pcloud-sdk-js';

const prisma = new PrismaClient();

// this script should be run in dev environment only - follow pcloud oauth instructions and run pcloudAuth.js to get access token
async function main() {
	const client = pcloudSdk.createClient(
		'EtRS7Z1Q53NMSGVIZnc2Bo7ZzL3hjE4jkLjjtSAhEioqwjP0Ch9y'
	);
	// eslint-disable-next-line
	const yardSaleFolder = await client.listfolder(16892791281);
	// @ts-expect-error
	yardSaleFolder?.contents?.forEach(async (folderItem) => {
		if (folderItem.isfolder) {
			const dbItem = await prisma.saleItem.findFirst({
				where: {
					title: folderItem.name as string,
				},
			});
			if (dbItem) {
				const itemFolder = await client.listfolder(
					folderItem.folderid as number
				);
				// @ts-expect-error
				itemFolder?.contents?.forEach(async (subItem) => {
					if (subItem.contenttype === 'image/jpeg') {
						// @ts-expect-error
						const srcFromSubDir = `${itemFolder.name as string}/${
							subItem.name as string
						}`;
						const existingImage = await prisma.image.findFirst({
							where: {
								src:
									'https://filedn.com/ly26l0AIs1CYrO29uHy9zDm/Yard%20Sale/' +
									srcFromSubDir,
							},
						});
						if (!existingImage) {
							await prisma.image.create({
								data: {
									itemId: dbItem.id,
									src:
										'https://filedn.com/ly26l0AIs1CYrO29uHy9zDm/Yard%20Sale/' +
										srcFromSubDir,
								},
							});
						}
					}
				});
			}
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
