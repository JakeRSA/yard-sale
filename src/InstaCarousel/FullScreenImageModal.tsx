import { Modal, Paper, Box, IconButton } from '@mui/material';
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
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '90%',
					}}
				>
					<IconButton onClick={handlePrevImage}>
						<ArrowBackIos />
					</IconButton>
					<img
						src={currentImage?.src}
						alt="asd"
						style={{ maxHeight: '90%', maxWidth: '90%' }}
					/>
					<IconButton onClick={handleNextImage}>
						<ArrowForwardIos />
					</IconButton>
				</Box>
			</Paper>
		</Modal>
	);
};
