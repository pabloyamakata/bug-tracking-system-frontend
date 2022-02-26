import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const styles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
}

interface ModalProps {
    description: string;
}

function DescriptionModal({description}: ModalProps) {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <div>
            <Button onClick={handleOpen}>See description</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <Box sx={styles}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Description
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {description}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default DescriptionModal;