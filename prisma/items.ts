import { SaleItem } from '../types/generalTypes';

export const items: SaleItem[] = [
	{
		itemId: 0,
		title: 'tv',
		description: 'Samsung 55 inch',
		x: 0,
		y: 0,
		z: 0,
		price: 1800,
		status: 'available',
		images: [
			{
				src: 'https://filedn.com/ly26l0AIs1CYrO29uHy9zDm/Yard%20Sale/Oven/81KRhLp0JGL._SL1500_.jpg',
			},
			{
				src: 'https://filedn.com/ly26l0AIs1CYrO29uHy9zDm/Yard%20Sale/Oven/91NEQwFKwkL._SL1500_.jpg',
			},
		],
	},
	{
		itemId: 1,
		title: 'oven',
		description: 'Breville Smart Oven',
		x: 0,
		y: 0,
		z: 0,
		price: 800,
		status: 'reserved',
		images: [
			{
				src: 'https://filedn.com/ly26l0AIs1CYrO29uHy9zDm/Yard%20Sale/TV/placesandspaces.jpeg',
			},
		],
	},
];
