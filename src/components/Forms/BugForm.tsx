import {
    CustomPaper,
    CustomGrid, 
    CustomTextField, 
    ButtonContainer, 
    CustomButton 
} from './Styles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

function BugForm() {
    return(
        <CustomPaper elevation={0}>
            <Typography 
            variant='h5' 
            sx={{marginLeft: '20px', paddingTop: '25px'}}>
            Report Bug
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
                        label='Project' 
                        variant='outlined' 
                        size='small' 
                        defaultValue={''} 
                        select>
                            <MenuItem value='Project 1'>Project 1</MenuItem>
                            <MenuItem value='Project 2'>Project 2</MenuItem>
                            <MenuItem value='Project 3'>Project 3</MenuItem>
                        </CustomTextField>
                        <CustomTextField 
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
                            <MenuItem value='Solved'>Solved</MenuItem>
                        </CustomTextField>
                    </CustomGrid>

                    <CustomGrid item xs={12} sm={6}>
                        <CustomTextField 
                        label='Priority Level' 
                        variant='outlined' 
                        size='small' 
                        defaultValue={''} 
                        select>
                            <MenuItem value='Low'>High</MenuItem>
                            <MenuItem value='High'>Low</MenuItem>
                        </CustomTextField>
                        <CustomTextField 
                        label='Severity Level' 
                        variant='outlined' 
                        size='small' 
                        defaultValue={''} 
                        select>
                            <MenuItem value='Low'>High</MenuItem>
                            <MenuItem value='High'>Low</MenuItem>
                        </CustomTextField>
                        <CustomTextField 
                        label='Initial Date' 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        label='Final Date' 
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
        </CustomPaper>
    )
}

export default BugForm;