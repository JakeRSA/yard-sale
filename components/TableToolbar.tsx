import {
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { FilterValue, SortValue } from '../types/generalTypes';

interface ITableToolbarProps {
	filterValue: FilterValue;
	onChangeFilter: (event: SelectChangeEvent<FilterValue>) => void | undefined;
	sortValue: SortValue;
	onChangeSort: (
		event: SelectChangeEvent<SortValue>,
		child: React.ReactNode
	) => void | undefined;
}

export const TableToolbar = ({
	filterValue,
	onChangeFilter,
	sortValue,
	onChangeSort,
}: ITableToolbarProps) => {
	return (
		<Grid container spacing={1} sx={{ marginBottom: '1em' }}>
			{/* <Grid item xs={6} sm={4} md={3} lg={2}>
				<FormControl sx={{ width: '10em', marginRight: '1em' }}>
					<InputLabel id="filter-select-label">Filter</InputLabel>
					<Select
						autoWidth
						labelId="filter-select-label"
						id="filter-select"
						value={filterValue}
						label="filter"
						onChange={onChangeFilter}
					>
						<MenuItem value={FilterValue.ALL}>All</MenuItem>
						<MenuItem value={FilterValue.RESERVED}>Reserved</MenuItem>
						<MenuItem value={FilterValue.AVAILABLE}>Available</MenuItem>
					</Select>
				</FormControl>
			</Grid> */}
			<Grid item xs={6} sm={4} md={3} lg={2}>
				<FormControl sx={{ width: '10em' }}>
					<InputLabel id="sort-select-label">Sort</InputLabel>
					<Select
						autoWidth
						labelId="sort-select-label"
						id="sort-select"
						value={sortValue}
						label="sort"
						onChange={onChangeSort}
					>
						<MenuItem value={SortValue.NAME_ASC}>A-Z</MenuItem>
						<MenuItem value={SortValue.NAME_DESC}>Z-A</MenuItem>
						<MenuItem value={SortValue.PRICE_ASC}>$ Low to High</MenuItem>
						<MenuItem value={SortValue.PRICE_DESC}>$ High to Low</MenuItem>
					</Select>
				</FormControl>
			</Grid>
		</Grid>
	);
};
