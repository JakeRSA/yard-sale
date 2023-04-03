import { Box, Typography } from '@mui/material';

export const PageHeader = () => {
	return (
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
	);
};
