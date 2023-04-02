import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { SaleItem, items } from './demoData';
import { SaleItemCard } from './InstaCarousel/Carousel';

function App() {
	const renderItemCard = (item: SaleItem) => {
		return (
			<Grid item xs={12} xl={3}>
				<SaleItemCard item={item} />
			</Grid>
		);
	};

	return (
		<CssBaseline>
			<Container>
				<Typography component={'div'}>
					<Box sx={{ textAlign: 'center' }}>{`Tal & Jake's Yard Sale`}</Box>
				</Typography>
				<Grid container spacing={2}>
					{items.map((item) => renderItemCard(item))}
				</Grid>
			</Container>
		</CssBaseline>
	);
}

export default App;
