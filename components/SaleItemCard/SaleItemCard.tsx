import { Swiper, SwiperSlide } from 'swiper/react';
import { makeStyles } from 'tss-react/mui';
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	SxProps,
	Button,
} from '@mui/material';
import SwiperCore, {
	Keyboard,
	Scrollbar,
	Pagination,
	Navigation,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ItemImage, SaleItem } from '../../mock/demoData';
import { useState } from 'react';
import { FullScreenImageModal } from './FullScreenImageModal';
import { ItemReservationFormModal } from './ItemReservationFormModal';
import { Favorite } from '@mui/icons-material';
const useStyles = makeStyles()({
	media: {
		height: 0,
		paddingTop: '100%',
		':hover': {
			cursor: 'zoom-in',
		},
	},
	swiperContainer: {
		paddingBottom: '3rem',
		'& .swiper-pagination-bullet': {
			background: 'blue',
		},
		'& .swiper-button-next:after': {
			fontSize: '2rem !important',
		},
		'& .swiper-button-prev:after': {
			fontSize: '2rem !important',
		},
	},
});
SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation]);

interface ISaleItemCardProps {
	item: SaleItem;
	sx?: SxProps;
}

export const SaleItemCard = ({ item, sx }: ISaleItemCardProps) => {
	const {
		title,
		description,
		images,
		dimensions: { x, y, z },
		price,
	} = item;
	const { classes } = useStyles();
	const [fullScreenImageToDisplay, setFullScreenImageToDisplay] = useState<
		ItemImage | undefined
	>(undefined);
	const [isReserveItemModalOpen, setIsReserveItemModalOpen] = useState(false);

	const openReserveItemForm = () => {
		setIsReserveItemModalOpen(true);
	};

	const getNextImage = (image?: ItemImage) => {
		if (image) {
			const numOfImages = images.length;
			const currentIndex = images.findIndex(
				(_image) => _image.src === image.src
			);
			if (currentIndex === numOfImages - 1) {
				return images[0];
			} else return images[currentIndex + 1];
		}
	};

	const getPrevImage = (image?: ItemImage) => {
		if (image) {
			const numOfImages = images.length;
			const currentIndex = images.findIndex(
				(_image) => _image.src === image.src
			);
			if (currentIndex === 0) {
				return images[numOfImages - 1];
			} else return images[currentIndex - 1];
		}
	};

	return (
		<Card sx={sx}>
			<ItemReservationFormModal
				open={isReserveItemModalOpen}
				handleClose={() => setIsReserveItemModalOpen(false)}
				item={item}
			/>
			<FullScreenImageModal
				open={!!fullScreenImageToDisplay}
				handleClose={() => setFullScreenImageToDisplay(undefined)}
				handleNextImage={() => {
					const imageToDisplay = getNextImage(fullScreenImageToDisplay);
					setFullScreenImageToDisplay(imageToDisplay);
				}}
				handlePrevImage={() => {
					const imageToDisplay = getPrevImage(fullScreenImageToDisplay);
					setFullScreenImageToDisplay(imageToDisplay);
				}}
				currentImage={fullScreenImageToDisplay}
			/>
			<CardHeader title={title} />
			<Swiper
				grabCursor
				keyboard={{ enabled: true }}
				pagination={{ clickable: true }}
				navigation
				loop
				className={classes.swiperContainer}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<CardMedia
							className={classes.media}
							image={image.src}
							onClick={() => {
								if (window.innerWidth >= 900) {
									setFullScreenImageToDisplay(image);
								}
							}}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<CardContent>
				<Typography
					variant="body2"
					color="textSecondary"
					component="p"
					height="3em"
				>
					{description}
				</Typography>
				<Typography
					variant="caption"
					component="p"
				>{`${x}cm x ${y}cm x ${z}cm`}</Typography>
				<Typography variant="h5">{`${price}₪`}</Typography>
				<CardActions disableSpacing>
					<Button
						variant="contained"
						fullWidth
						onClick={() => openReserveItemForm()}
						size="large"
						startIcon={<Favorite />}
					>
						I want this!
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};
