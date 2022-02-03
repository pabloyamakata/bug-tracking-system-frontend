import { CustomGrid, CustomTextField } from './Styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

function BugForm() {
    return(
        <Box sx={{paddingBottom: '30px'}}>
            <Typography 
            variant='h5' 
            sx={{margin: '25px 0 0 20px'}}>
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
                    </CustomGrid>

                    <CustomGrid item xs={12} sm={6}>
                        <CustomTextField 
                        label='Urgency Level' 
                        variant='outlined' 
                        size='small' 
                        defaultValue={''} 
                        select>
                            <MenuItem value='Low'>Low</MenuItem>
                            <MenuItem value='Medium'>Medium</MenuItem>
                            <MenuItem value='High'>High</MenuItem>
                        </CustomTextField>
                        <CustomTextField 
                        label='Current State' 
                        variant='outlined' 
                        size='small' 
                        defaultValue={''} 
                        select>
                            <MenuItem value='Pending'>Pending</MenuItem>
                            <MenuItem value='Solved'>Solved</MenuItem>
                        </CustomTextField>
                        <CustomTextField 
                        label='Outlined' 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        label='Outlined' 
                        variant='outlined' 
                        size='small' />
                    </CustomGrid>
                </Grid>
            </Box>
        </Box>
    )
}

export default BugForm;