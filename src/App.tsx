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
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'nowrap',
					}}
				>
					<Typography variant="h4" component={'div'} sx={{ margin: '1em' }}>
						<Box sx={{ textAlign: 'center' }}>&#127968;</Box>
					</Typography>
					<Typography variant="h4" component={'div'}>
						<Box sx={{ textAlign: 'center' }}>
							{`Tal & Jake's Yard Sale`.toUpperCase()}
						</Box>
					</Typography>
					<Typography variant="h4" component={'div'} sx={{ margin: '1em' }}>
						<Box sx={{ textAlign: 'center' }}>&#127968;</Box>
					</Typography>
				</Box>
				<Grid container spacing={2}>
					{items.map((item) => renderItemCard(item))}
				</Grid>
			</Container>
		</CssBaseline>
	);
}

export default App;
