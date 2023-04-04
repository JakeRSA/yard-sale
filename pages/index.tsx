import { Container, CssBaseline, Grid, SelectChangeEvent } from '@mui/material';
import { SaleItem, Image } from '../types/generalTypes';
import { SaleItemCard } from '../components/SaleItemCard/SaleItemCard';
import {
	FilterValue,
	SortValue,
	TableToolbar,
} from '../components/TableToolbar';
import { PageHeader } from '../components/PageHeader';
import { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

interface IAppProps {
	items: SaleItem[];
	images: Image[];
}

function App({ items }: IAppProps) {
	const [sortedItems, setSortedItems] = useState(items);
	const [itemsToDisplay, setItemsToDisplay] = useState(sortedItems);
	const [filterValue, setFilterValue] = useState(FilterValue.ALL);
	const [sortValue, setSortValue] = useState(SortValue.NAME);

	const handleChangeFilterValue = (e: SelectChangeEvent<FilterValue>) => {
		const newFilterValue = e.target.value as FilterValue;
		setFilterValue(newFilterValue);
		const filteredItems = sortedItems.filter((item) => {
			switch (newFilterValue) {
				case FilterValue.ALL:
					return item;
				case FilterValue.AVAILABLE:
					return !item.buyerIdsOnSaleItem.length;
				case FilterValue.RESERVED:
					return !!item.buyerIdsOnSaleItem.length;
				default:
					return item;
			}
		});
		setItemsToDisplay(filteredItems);
	};

	const handleChangeSortValue = (e: SelectChangeEvent<SortValue>) => {
		const newSortValue = e.target.value as SortValue;
		setSortValue(newSortValue);
		const newlySortedItems = [...sortedItems].sort((a, b) => {
			switch (newSortValue) {
				case 'name':
					return parseInt(a.title) - parseInt(b.title);
				case 'price':
					return a.price - b.price;
				default:
					return parseInt(a.title) - parseInt(b.title);
			}
		});
		setSortedItems(newlySortedItems);
	};

	useEffect(() => {
		const filteredItems = sortedItems.filter((item) => {
			switch (filterValue) {
				case FilterValue.ALL:
					return item;
				case FilterValue.AVAILABLE:
					return !item.buyerIdsOnSaleItem.length;
				case FilterValue.RESERVED:
					return !!item.buyerIdsOnSaleItem.length;
				default:
					return item;
			}
		});
		setItemsToDisplay(filteredItems);
	}, [sortedItems]);

	const renderItemCard = (item: SaleItem, index: number) => {
		return (
			<Grid item xs={12} md={6} lg={4} xl={3} key={index}>
				<SaleItemCard item={item} />
			</Grid>
		);
	};

	return (
		<CssBaseline>
			<Container>
				<PageHeader />
				<TableToolbar
					filterValue={filterValue}
					onChangeFilter={handleChangeFilterValue}
					sortValue={sortValue}
					onChangeSort={handleChangeSortValue}
				/>
				<Grid container spacing={2}>
					{itemsToDisplay.map((item, index) => renderItemCard(item, index))}
				</Grid>
			</Container>
		</CssBaseline>
	);
}

export async function getStaticProps() {
	const prisma = new PrismaClient();
	const saleItems = await prisma.saleItem.findMany();
	const images = await prisma.image.findMany();
	const buyersOnSaleItem = await prisma.buyersOnSaleItem.findMany();
	const items: SaleItem[] = saleItems.map((dbItem) => ({
		...dbItem,
		images: [],
		buyerIdsOnSaleItem: [],
	}));
	buyersOnSaleItem.forEach((buyer) => {
		const itemToMutate = items.find((item) => item.id === buyer.itemId);
		itemToMutate?.buyerIdsOnSaleItem.push({
			...buyer,
			assignedAt: buyer.assignedAt.getTime(),
		});
	});
	images.forEach((image) => {
		const itemForImage = items.find((item) => item.id === image.itemId);
		if (itemForImage) {
			itemForImage?.images.push(image);
		}
	});

	return {
		props: {
			items,
		},
	};
}

export default App;
