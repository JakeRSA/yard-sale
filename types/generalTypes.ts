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
	NAME = 'name',
	PRICE = 'price',
}

export enum FilterValue {
	ALL = 'all',
	AVAILABLE = 'available',
	RESERVED = 'reserved',
}
