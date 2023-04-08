import { CheckCircle } from '@mui/icons-material';
import { Box, Icon, Modal, Paper, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface IRequestSuccessModalProps {
	open: boolean;
	handleClose: () => void;
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

export const RequestSuccessModal = ({
	open,
	handleClose,
}: IRequestSuccessModalProps) => {
	const { classes } = useStyles();
	return (
		<Modal open={open} onClose={handleClose} className={classes.modal}>
			<Paper
				sx={{
					padding: '2em',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '1em',
				}}
			>
				<Icon color="success">
					<CheckCircle />
				</Icon>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography>{`Your request was sent successfully!`}</Typography>
					<Typography>{`We'll contact you soon`}</Typography>
				</Box>
			</Paper>
		</Modal>
	);
};
