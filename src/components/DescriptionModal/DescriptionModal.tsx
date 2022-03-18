import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material';

const styles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
}

const ModalButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.light
}));

interface ModalProps {
    description: string;
}

function DescriptionModal({ description }: ModalProps) {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <div>
            <ModalButton onClick={handleOpen}>See description</ModalButton>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <Box sx={styles}>
                    <Typography
                    sx={{ color: 'primary.contrastText' }}
                    id="modal-modal-title"
                    variant="h6"
                    component="h2">
                        Description
                    </Typography>
                    <Typography
                    id="modal-modal-description"
                    sx={{ mt: 2, color: 'primary.contrastText' }}>
                        {description}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default DescriptionModal;