import { PrismaClient } from '@prisma/client';
import { NextApiResponse } from 'next';
import {
	ReserveItemApiRequest,
	ReserveItemApiRequestBody,
} from '../../types/apiTypes';

const prisma = new PrismaClient();

const reserveItem = async ({
	item,
	name,
	phone,
}: ReserveItemApiRequestBody) => {
	const formattedPhone = phone.replace('+|(|)| |-', '');
	const buyer = await prisma.buyer.upsert({
		create: {
			name,
			phone: formattedPhone,
			items: {
				create: [
					{
						saleItem: {
							connect: {
								id: item.id,
							},
						},
					},
				],
			},
		},
		update: {
			name,
			phone: formattedPhone,
			items: {
				create: [
					{
						saleItem: {
							connect: {
								id: item.id,
							},
						},
					},
				],
			},
		},
		where: {
			phone: formattedPhone,
		},
	});
	return { buyer };
};

const handler = async (req: ReserveItemApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const result = await reserveItem(req.body);
		res.status(200).json(result);
	}
};

export default handler;
