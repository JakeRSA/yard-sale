import { NextApiRequest } from 'next';
import { SaleItem, SortValue, FilterValue } from './generalTypes';

export interface ReserveItemApiRequestBody {
	item: SaleItem;
	name: string;
	phone: string;
}

export interface ReserveItemApiRequest extends NextApiRequest {
	body: ReserveItemApiRequestBody;
}

export interface GetItemsApiRequestParams {
	cursor?: string;
	take?: string;
	sort?: SortValue;
	filter?: FilterValue;
}

export interface GetItemsApiRequest extends NextApiRequest {
	params: GetItemsApiRequestParams;
}
