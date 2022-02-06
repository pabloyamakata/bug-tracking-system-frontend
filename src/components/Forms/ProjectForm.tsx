import {
    CustomGrid, 
    CustomTextField, 
    ButtonContainer, 
    CustomButton 
} from './Styles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

function ProjectForm() {
    return(
        <Box sx={{paddingBottom: '30px'}}>
            <Typography 
            variant='h5' 
            sx={{margin: '25px 0 0 20px'}}>
            New Project
            </Typography>
        
            <Box component='form'>
                <Grid container>
                    <CustomGrid item xs={12} sm={6}>
                        <CustomTextField 
                        type='text'
                        label='Name' 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        label='Description' 
                        variant='outlined' 
                        size='small' 
                        rows={3} 
                        multiline />
                        <CustomTextField 
                        type='text'
                        label='Project Leader' 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        label='Current Status' 
                        variant='outlined' 
                        size='small'
                        defaultValue={''}
                        select>
                            <MenuItem value='Pending'>Pending</MenuItem>
                            <MenuItem value='Finished'>Completed</MenuItem>
                        </CustomTextField>
                    </CustomGrid>
        
                    <CustomGrid item xs={12} sm={6}>
                        <CustomTextField 
                        label='Start Date' 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField
                        label='Deadline' 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        label='Frontend' 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        label='Backend' 
                        variant='outlined' 
                        size='small' />

                        <ButtonContainer>
                            <CustomButton 
                            variant="contained" 
                            color='primary'>
                            Save
                            </CustomButton>
                            <CustomButton
                            variant='contained'>
                            Reset
                            </CustomButton>
                        </ButtonContainer>
                    </CustomGrid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ProjectForm;