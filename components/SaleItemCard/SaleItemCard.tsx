import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Typography,
	SxProps,
	Button,
	Alert,
	Box,
	IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Image, SaleItem } from '../../types/generalTypes';
import { useState } from 'react';
import { FullScreenImageModal } from './FullScreenImageModal';
import { ItemReservationFormModal } from './ItemReservationFormModal';
import { ArrowBackIos, ArrowForwardIos, Favorite } from '@mui/icons-material';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import NextImage from 'next/image';

interface ISaleItemCardProps {
	item: SaleItem;
	sx?: SxProps;
}

const ImageBox = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		height: '350px',
	},
	[theme.breakpoints.up('md')]: {
		height: '300px',
	},
	[theme.breakpoints.up('lg')]: {
		height: '200px',
	},
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		noWrap: false,
		display: 'flex',
	},
}));

export const SaleItemCard = ({ item, sx }: ISaleItemCardProps) => {
	const { title, description, images, price } = item;
	const [fullScreenImageToDisplay, setFullScreenImageToDisplay] = useState<
		Image | undefined
	>(undefined);
	const [isReserveItemModalOpen, setIsReserveItemModalOpen] = useState(false);

	const openReserveItemForm = () => {
		setIsReserveItemModalOpen(true);
	};

	const [sliderRef, slider] = useKeenSlider(
		{
			slideChanged() {},
			loop: true,
		},
		[]
	);

	const getNextImage = (image?: Image) => {
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

	const getPrevImage = (image?: Image) => {
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

	// TODO: description on hover
	const imageSlider = () => {
		return (
			<div ref={sliderRef} className="keen-slider">
				<IconButton
					onClick={() => {
						slider.current?.prev();
					}}
					style={{
						zIndex: 1,
						position: 'absolute',
						top: 'calc(50% - 25.5px)',
						left: '4px',
					}}
				>
					<ArrowBackIos fontSize="large" />
				</IconButton>
				{images.map((image, index) => (
					<ImageBox key={index} width="100%" className="keen-slider__slide">
						<NextImage
							key={index}
							src={image.src}
							onClick={() => {
								setFullScreenImageToDisplay(image);
							}}
							alt={image.src}
							fill
							style={{ objectFit: 'cover' }}
						/>
					</ImageBox>
				))}
				<IconButton
					onClick={() => {
						slider.current?.next();
					}}
					style={{
						zIndex: 1,
						position: 'absolute',
						top: 'calc(50% - 25.5px)',
						right: '4px',
					}}
				>
					<ArrowForwardIos fontSize="large" />
				</IconButton>
			</div>
		);
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
			{/* TODO: handle overflow title ui */}
			<CardHeader
				style={{ display: 'block' }}
				titleTypographyProps={{ noWrap: true }}
				title={
					<HeaderTitle variant="h5" noWrap>
						{title}
					</HeaderTitle>
				}
				height={'2rem'}
			/>
			{imageSlider()}
			<CardContent>
				<Typography
					variant="h5"
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						height: '50px',
					}}
				>
					{price ? `${price}₪` : 'Free'}
					{!!item.buyerIdsOnSaleItem.length && (
						<Alert
							sx={{
								marginLeft: '0.5em',
								marginRight: '0.5em',
								background: 'none',
							}}
							severity="warning"
						>
							{`Someone's interested`}
						</Alert>
					)}
				</Typography>
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
