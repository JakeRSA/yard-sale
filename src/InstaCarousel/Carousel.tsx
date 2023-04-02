import { Swiper, SwiperSlide } from 'swiper/react';
import { makeStyles } from 'tss-react/mui';
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	IconButton,
	Typography,
	SxProps,
} from '@mui/material';
import { Favorite, Share, Comment } from '@mui/icons-material';
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
import { SaleItem } from '../demoData';
const useStyles = makeStyles()({
	media: {
		height: 0,
		paddingTop: '100%',
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
	const { title, description, images } = item;

	const { classes } = useStyles();
	return (
		<Card sx={sx}>
			<CardHeader
				title={title}
				// action={
				//     <IconButton>
				//         <MoreVert />
				//     </IconButton>
				// }
			/>
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
						<CardMedia className={classes.media} image={image.src} />
					</SwiperSlide>
				))}
			</Swiper>
			<CardActions disableSpacing>
				<IconButton>
					<Favorite />
				</IconButton>
				<IconButton>
					<Comment />
				</IconButton>
				<IconButton>
					<Share />
				</IconButton>
			</CardActions>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};
