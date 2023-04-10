import {
	Box,
	CircularProgress,
	Container,
	CssBaseline,
	Grid,
	SelectChangeEvent,
} from '@mui/material';
import { FilterValue, SaleItem, SortValue } from '../types/generalTypes';
import { SaleItemCard } from '../components/SaleItemCard/SaleItemCard';
import { TableToolbar } from '../components/TableToolbar';
import { PageHeader } from '../components/PageHeader';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [itemsToDisplay, setItemsToDisplay] = useState<SaleItem[]>([]);
	const [filterValue, setFilterValue] = useState(FilterValue.ALL);
	const [sortValue, setSortValue] = useState(SortValue.NAME);
	const [itemsCursor, setItemsCursor] = useState<number | undefined>(undefined);
	const [isLoadingResults, setIsLoadingResults] = useState(true);
	const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);

	useEffect(() => {
		axios
			.get(`/api/items`)
			.then(({ data: { items, cursor } }) => {
				setItemsToDisplay(items || []);
				setItemsCursor(cursor);
				setIsLoadingResults(false);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	const handleIntersection = async () => {
		setIsLoadingResults(true);
		// eslint-disable-next-line
		const {data} = await axios.get(`/api/items?cursor=${itemsCursor}&filter=${filterValue}&sort=${sortValue}`);
		// eslint-disable-next-line
		setItemsToDisplay((prev) => [...prev, ...(data.items || [])]);
		// eslint-disable-next-line
		setItemsCursor(data.cursor);
		if (!data.cursor) {
			setLastElement(null);
		}
		setIsLoadingResults(false);
	};

	useEffect(() => {
		const currentElement = lastElement;
		const observer = new IntersectionObserver(async (entries) => {
			const target = entries[0];
			if (target.isIntersecting && !isLoadingResults) {
				await handleIntersection();
			}
		});
		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, [lastElement]);

	useEffect(() => {
		setIsLoadingResults(true);
		axios
			.get(`/api/items?filter=${filterValue}&sort=${sortValue}`)
			.then(({ data: { items, cursor } }) => {
				setItemsToDisplay(items || []);
				setItemsCursor(cursor);
				setIsLoadingResults(false);
			})
			.catch((e) => {
				console.error(e);
			});
	}, [filterValue, sortValue]);

	const handleChangeFilterValue = (e: SelectChangeEvent<FilterValue>) => {
		const newFilterValue = e.target.value as FilterValue;
		setFilterValue(newFilterValue);
	};

	const handleChangeSortValue = (e: SelectChangeEvent<SortValue>) => {
		const newSortValue = e.target.value as SortValue;
		setSortValue(newSortValue);
	};

	const renderItemCard = (item: SaleItem) => {
		return (
			<Grid
				item
				xs={12}
				md={6}
				lg={4}
				xl={3}
				key={item.id}
				ref={
					item.id === itemsToDisplay[itemsToDisplay.length - 6].id
						? setLastElement
						: null
				}
			>
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
				{isLoadingResults && (
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							marginTop: '2em',
							marginBottom: '2em',
						}}
					>
						<CircularProgress />
					</Box>
				)}
			</Container>
		</CssBaseline>
	);
}

export default App;
