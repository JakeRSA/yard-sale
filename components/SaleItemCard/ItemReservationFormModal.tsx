import {
	Button,
	Grid,
	Modal,
	Paper,
	TextField,
	Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { SaleItem } from '../../mock/demoData';

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
	return (
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
				<Button sx={{ marginTop: '2em' }} fullWidth>
					Send request to Tal & Jake
				</Button>
			</Paper>
		</Modal>
	);
};
