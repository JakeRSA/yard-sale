import {
	SaleItem as DbSaleItem,
	Image as DbImage,
	BuyersOnSaleItem as DbBuyersOnSaleItem,
} from '@prisma/client';

export type Image = Pick<DbImage, 'src' | 'id'>;

interface BuyerIdOnSaleItem extends Omit<DbBuyersOnSaleItem, 'assignedAt'> {
	assignedAt: number;
}
export interface SaleItem extends DbSaleItem {
	images: Image[];
	buyerIdsOnSaleItem: BuyerIdOnSaleItem[];
}

export enum SortValue {
	NAME_ASC = 'name_asc',
	NAME_DESC = 'name_desc',
	PRICE_ASC = 'price_asc',
	PRICE_DESC = 'price_desc',
}

export enum FilterValue {
	ALL = 'all',
	AVAILABLE = 'available',
	RESERVED = 'reserved',
}
