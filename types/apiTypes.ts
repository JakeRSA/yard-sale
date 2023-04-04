import { NextApiRequest } from 'next';
import { SaleItem } from './generalTypes';

export interface ReserveItemApiRequestBody {
	item: SaleItem;
	name: string;
	phone: string;
}

export interface ReserveItemApiRequest extends NextApiRequest {
	body: ReserveItemApiRequestBody;
}
