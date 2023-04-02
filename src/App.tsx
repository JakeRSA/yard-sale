import { Box, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { SaleItem, items } from './demoData';
import { SaleItemCard } from './SaleItemCard/SaleItemCard';

function App() {
	const renderItemCard = (item: SaleItem) => {
		return (
			<Grid item xs={12} md={6} lg={4} xl={3}>
				<SaleItemCard item={item} />
			</Grid>
		);
	};

	return (
		<CssBaseline>
			<Container>
				<Typography variant="h2" component={'div'}>
					<Box sx={{ textAlign: 'center' }}>
						&#127968;{`Tal & Jake's Yard Sale`.toUpperCase()}&#127968;
					</Box>
				</Typography>
				<Grid container spacing={2}>
					{items.map((item) => renderItemCard(item))}
				</Grid>
			</Container>
		</CssBaseline>
	);
}

export default App;
