import { SaleItem as DbSaleItem, Image as DbImage } from '@prisma/client';

export enum ItemStatus {
	AVAILABLE = 'available',
	RESERVED = 'reserved',
	SOLD = 'sold',
}

export type Image = Pick<DbImage, 'src'>;

export interface SaleItem extends DbSaleItem {
	images: Image[];
}
