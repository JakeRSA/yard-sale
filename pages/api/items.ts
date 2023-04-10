import { PrismaClient } from '@prisma/client';
import { NextApiResponse } from 'next';
import {
	GetItemsApiRequest,
	GetItemsApiRequestParams,
} from '../../types/apiTypes';
import { SaleItem } from '../../types/generalTypes';

const prisma = new PrismaClient();

export const getItems = async ({ cursor, take }: GetItemsApiRequestParams) => {
	const dbItems = await prisma.saleItem.findMany({
		cursor: cursor ? { id: parseInt(cursor) } : undefined,
		take: parseInt(take || '20'),
		orderBy: { id: 'asc' },
		skip: 1,
	});
	const itemIds: number[] = [];
	const items: SaleItem[] = [];
	dbItems.forEach((dbItem) => {
		itemIds.push(dbItem.id);
		items.push({
			...dbItem,
			images: [],
			buyerIdsOnSaleItem: [],
		});
	});
	const lastResultId = items[items.length - 1].id;
	const buyersOnSaleItem = await prisma.buyersOnSaleItem.findMany({
		where: { itemId: { in: itemIds } },
	});
	buyersOnSaleItem.forEach((buyer) => {
		const itemToMutate = items.find((item) => item.id === buyer.itemId);
		itemToMutate?.buyerIdsOnSaleItem.push({
			...buyer,
			assignedAt: buyer.assignedAt.getTime(),
		});
	});
	const images = await prisma.image.findMany({
		where: { itemId: { in: itemIds } },
	});
	images.forEach((image) => {
		const itemForImage = items.find((item) => item.id === image.itemId);
		if (itemForImage) {
			itemForImage?.images.push(image);
		}
	});
	return { items, cursor: lastResultId };
};

const handler = async (req: GetItemsApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		try {
			const result = await getItems(req.query);
			res.status(200).json(result);
		} catch (e) {
			res.send(e);
		}
	}
};

export default handler;
