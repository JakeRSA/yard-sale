import { Modal, Paper, IconButton, Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { ItemImage } from '../demoData';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const useStyles = makeStyles()({
	gridList: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		'&:hover': {
			backgroundcolor: 'red',
		},
	},
	img: {
		outline: 'none',
	},
});

interface IFullScreenImageModalProps {
	open: boolean;
	handleClose: () => void;
	handleNextImage: () => void;
	handlePrevImage: () => void;
	currentImage?: ItemImage;
}

export const FullScreenImageModal = ({
	open,
	handleClose,
	handleNextImage,
	handlePrevImage,
	currentImage,
}: IFullScreenImageModalProps) => {
	const { classes } = useStyles();

	return (
		<Modal
			className={classes.modal}
			open={open}
			onClose={handleClose}
			closeAfterTransition
		>
			<Paper
				sx={{
					height: '90%',
					width: '90%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Grid
					container
					sx={{
						alignItems: 'center',
						margin: '0',
						height: '90%',
					}}
					wrap={'nowrap'}
					zeroMinWidth
				>
					<Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
						<IconButton onClick={handlePrevImage}>
							<ArrowBackIos />
						</IconButton>
					</Grid>
					<Grid item xs={10} sx={{ display: 'flex', justifyContent: 'center' }}>
						<img
							src={currentImage?.src}
							alt="asd"
							style={{ maxHeight: '90vh', maxWidth: '90%' }}
						/>
					</Grid>
					<Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
						<IconButton onClick={handleNextImage}>
							<ArrowForwardIos />
						</IconButton>
					</Grid>
				</Grid>
			</Paper>
		</Modal>
	);
};
