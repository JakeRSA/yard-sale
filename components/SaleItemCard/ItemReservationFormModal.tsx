import {
	Alert,
	Box,
	Button,
	CircularProgress,
	Grid,
	Modal,
	Paper,
	TextField,
	Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { SaleItem } from '../../types/generalTypes';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { RequestSuccessModal } from './RequestSuccessModal';

interface IItemReservationFormModalProps {
	open: boolean;
	handleClose: () => void;
	item: SaleItem;
}

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

export const ItemReservationFormModal = ({
	open,
	handleClose,
	item,
}: IItemReservationFormModalProps) => {
	const { classes } = useStyles();

	const [sendingRequest, setSendingRequest] = useState(false);
	const [requestSuccessModalIsOpen, setRequestSuccessModalIsOpen] =
		useState(false);
	const [buyerName, setBuyerName] = useState('');
	const [buyerPhone, setBuyerPhone] = useState('');
	const updateBuyerName = (e: ChangeEvent<HTMLInputElement>) => {
		setBuyerName(e.target.value);
	};
	const updateBuyerPhone = (e: ChangeEvent<HTMLInputElement>) => {
		setBuyerPhone(e.target.value);
	};

	const handleSubmit = async () => {
		setSendingRequest(true);
		try {
			await axios.post('/api/buyer', {
				item,
				name: buyerName,
				phone: buyerPhone,
			});
			setSendingRequest(false);
			handleClose();
			setRequestSuccessModalIsOpen(true);
			setTimeout(() => setRequestSuccessModalIsOpen(false), 3000);
		} catch (e) {
			setSendingRequest(false);
			console.error(e);
		}
	};

	return (
		<>
			<Modal open={open} onClose={handleClose} className={classes.modal}>
				<Paper
					sx={{ maxWidth: '800px', backgroundcolor: 'white', padding: '2em' }}
				>
					<Typography variant="h4" gutterBottom>
						Who are you?
					</Typography>
					<Typography variant="h6" gutterBottom>
						{`Tell us who you are so we can give you our ${item.title}!`}
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextField
								onChange={updateBuyerName}
								value={buyerName}
								required
								id="name"
								name="name"
								label="Name"
								fullWidth
								autoComplete="name"
								variant="standard"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								onChange={updateBuyerPhone}
								value={buyerPhone}
								required
								id="phone"
								name="phone"
								label="Phone number"
								fullWidth
								autoComplete="tel"
								variant="standard"
							/>
						</Grid>
					</Grid>
					{!!item.buyerIdsOnSaleItem.length && (
						<Alert
							severity="warning"
							sx={{ marginTop: '2em' }}
						>{`Someone else asked for this before you. But if they decide they don't want it anymore, you'll get a chance`}</Alert>
					)}
					{sendingRequest ? (
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								marginTop: '2em',
							}}
						>
							<CircularProgress />
						</Box>
					) : (
						<Button
							sx={{ marginTop: '2em' }}
							onClick={handleSubmit}
							fullWidth
							disabled={buyerName === '' || buyerPhone === ''}
						>
							Send request to Tal & Jake
						</Button>
					)}
				</Paper>
			</Modal>
			<RequestSuccessModal
				open={requestSuccessModalIsOpen}
				handleClose={() => setRequestSuccessModalIsOpen(false)}
			/>
		</>
	);
};
