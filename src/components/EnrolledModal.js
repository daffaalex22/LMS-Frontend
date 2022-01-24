import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { yellow, indigo } from '@mui/material/colors';

const classes = {
    modals: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: indigo[400],
        border: '2px solid #000',
        borderColor: indigo[500],
        boxShadow: 24,
        p: 4,
        borderRadius: '15px'
    }
};

const EnrolledModal = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={classes.modals}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        textAlign="center"
                        color="white"
                    >
                        You Have been Enrolled
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{ mt: 2 }}
                        textAlign="center"
                        color="white"
                    >
                        You can Now Access The Course! <br />
                        Tap Anywhere to Continue!
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default EnrolledModal;