import { Modal, Paper, IconButton, Grid, Box, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Image } from '../../types/generalTypes';
import {
	ArrowBackIos,
	ArrowForwardIos,
	FullscreenExit,
} from '@mui/icons-material';

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
	currentImage?: Image;
}

export const FullScreenImageModal = ({
	open,
	handleClose,
	handleNextImage,
	handlePrevImage,
	currentImage,
}: IFullScreenImageModalProps) => {
	const { classes } = useStyles();
	const smallDevice = window.innerWidth <= 900;

	return (
		<Modal
			className={classes.modal}
			open={open}
			onClose={handleClose}
			closeAfterTransition
		>
			<Paper
				sx={{
					height: smallDevice ? '100%' : '90%',
					width: smallDevice ? '100%' : '90%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
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
				{smallDevice && (
					<Box>
						<Button
							variant="contained"
							sx={{ marginBottom: '1em' }}
							endIcon={<FullscreenExit />}
							size="large"
							onClick={handleClose}
						>
							Back to the list
						</Button>
					</Box>
				)}
			</Paper>
		</Modal>
	);
};
