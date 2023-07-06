import {
	Box,
	CircularProgress,
	Container,
	Grid,
	SelectChangeEvent,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { PageHeader } from '../PageHeader';
import { TableToolbar } from '../TableToolbar';
import { FilterValue, SortValue, SaleItem } from '../../types/generalTypes';
import { SaleItemCard } from '../SaleItemCard/SaleItemCard';
import { InfiniteData, useInfiniteQuery } from 'react-query';
import axios, { AxiosResponse } from 'axios';

const CardsGridItem = ({
	item,
	setLastElement,
	shouldObserveIntersection = false,
}: {
	item: SaleItem;
	setLastElement: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
	shouldObserveIntersection: boolean;
}) => {
	return (
		<Grid
			item
			xs={12}
			md={6}
			lg={4}
			xl={3}
			key={item.id}
			ref={shouldObserveIntersection ? setLastElement : null}
		>
			<SaleItemCard item={item} />
		</Grid>
	);
};

const ItemCardsGrid = ({
	data,
	setLastElement,
}: {
	data: InfiniteData<AxiosResponse<any, any>> | undefined;
	setLastElement: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
}) => {
	return (
		<Grid container spacing={2}>
			{data?.pages.map((group, i: number) => (
				<React.Fragment key={i}>
					{group.data.items.map((item: SaleItem, j: number) => {
						const shouldObserveIntersection =
							i === data.pages.length - 1 && j === group.data.items.length - 6;
						return (
							<CardsGridItem
								item={item}
								setLastElement={setLastElement}
								shouldObserveIntersection={shouldObserveIntersection}
								key={`${i}-${j}`}
							/>
						);
					})}
				</React.Fragment>
			))}
		</Grid>
	);
};

export const StoreFront = () => {
	const [filterValue, setFilterValue] = useState(FilterValue.ALL);
	const [sortValue, setSortValue] = useState(SortValue.NAME_ASC);
	const [lastElement, setLastElement] = useState<HTMLDivElement | null>(null);

	const {
		isLoading,
		// TODO: error UI state
		isError,
		data,
		isFetching,
		isFetchingNextPage,
		fetchNextPage,
	} = useInfiniteQuery(
		['items', filterValue, sortValue],
		({ pageParam = 0 }) => {
			const cursorParam = pageParam ? 'cursor=' + String(pageParam) : '';
			return axios.get(
				`/api/items?${cursorParam}&filter=${filterValue}&sort=${sortValue}`
			);
		},
		// eslint-disable-next-line
		{ getNextPageParam: (lastPage) => lastPage.data?.cursor }
	);

	const handleChangeFilterValue = (e: SelectChangeEvent<FilterValue>) => {
		const newFilterValue = e.target.value as FilterValue;
		setFilterValue(newFilterValue);
	};

	const handleChangeSortValue = (e: SelectChangeEvent<SortValue>) => {
		const newSortValue = e.target.value as SortValue;
		setSortValue(newSortValue);
	};

	useEffect(() => {
		const currentElement = lastElement;
		const observer = new IntersectionObserver(async (entries) => {
			const target = entries[0];
			if (target.isIntersecting && !isFetching) {
				await fetchNextPage();
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

	if (isLoading) {
		return (
			<Container>
				<CircularProgress />
			</Container>
		);
	}

	return (
		<Container>
			<PageHeader />
			<TableToolbar
				filterValue={filterValue}
				onChangeFilter={handleChangeFilterValue}
				sortValue={sortValue}
				onChangeSort={handleChangeSortValue}
			/>
			<ItemCardsGrid data={data} setLastElement={setLastElement} />
			{isFetchingNextPage && (
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
	);
};
