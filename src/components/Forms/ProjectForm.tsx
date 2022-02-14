import { useFormik } from 'formik';
import * as yup from 'yup';

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

function ProjectForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            projectLeader: '',
            currentStatus: '',
            startDate: '',
            deadLine: '',
            frontend: '',
            backend: '',
            database: ''
        },
        validationSchema: yup.object({
            name: yup.string()
            .min(3, 'Name must contain between 3 and 30 characters')
            .max(30, 'Name must contain between 3 and 30 characters')
            .required('Name is required'),
            description: yup.string()
            .max(100, 'Description must be 100 characters or less')
            .required('Description is required'),
            projectLeader: yup.string()
            .min(3, 'Name of project leader must contain between 3 and 40 characters')
            .max(40, 'Name of project leader must contain between 3 and 40 characters')
            .required('Name of project leader is required'),
            currentStatus: yup.string().required("Project current status is required"),
            startDate: yup.date().required("Start date is required"),
            deadLine: yup.date().required('Estimated deadline is required'),
            frontend: yup.string()
            .min(3, 'Frontend technology in use must contain between 3 and 30 characters')
            .max(30,'Frontend technology in use must contain between 3 and 30 characters')
            .required('At least one frontend technology must be specified'),
            backend: yup.string()
            .min(2, 'Backend technology in use must contain between 2 and 30 characters')
            .max(30, 'Backend technology in use must contain between 2 and 30 characters')
            .required('At least one backend technology must be specified'),
            database: yup.string()
            .min(3, 'Database name must contain between 3 and 30 characters')
            .max(30, 'Database name must contain between 3 and 30 characters')
            .required('Database is required')
        }),
        onSubmit: () => console.log('ProjectForm submitted!')
    });
    return(
        <CustomPaper elevation={0}>
            <Typography 
            variant='h5' 
            sx={{margin: '25px 0 0 20px'}}>
            Add Project
            </Typography>
        
            <Box 
            component='form'
            onSubmit={formik.handleSubmit}>
                <Grid container>
                    <CustomGrid item xs={12} sm={6}>
                        <CustomTextField 
                        type='text'
                        label='Name'
                        name='name'
                        error={
                            formik.touched.name &&
                            formik.errors.name ?
                            true : false
                        }
                        helperText={
                            formik.touched.name &&
                            formik.errors.name ?
                            formik.errors.name :
                            null 
                        }
                        value={formik.values.name} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        label='Description'
                        name='description'
                        error={
                            formik.touched.description &&
                            formik.errors.description ?
                            true : false
                        }
                        helperText={
                            formik.touched.description &&
                            formik.errors.description ?
                            formik.errors.description :
                            null 
                        }
                        value={formik.values.description} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        variant='outlined' 
                        size='small' 
                        rows={3} 
                        multiline />
                        <CustomTextField 
                        type='text'
                        label='Project Leader'
                        name='projectLeader'
                        error={
                            formik.touched.projectLeader &&
                            formik.errors.projectLeader ?
                            true : false
                        }
                        helperText={
                            formik.touched.projectLeader &&
                            formik.errors.projectLeader ?
                            formik.errors.projectLeader :
                            null 
                        }
                        value={formik.values.projectLeader} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        label='Current Status'
                        name='currentStatus'
                        error={
                            formik.touched.currentStatus &&
                            formik.errors.currentStatus ?
                            true : false
                        }
                        helperText={
                            formik.touched.currentStatus &&
                            formik.errors.currentStatus ?
                            formik.errors.currentStatus :
                            null 
                        }
                        value={formik.values.currentStatus} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        variant='outlined' 
                        size='small'
                        defaultValue={''}
                        select>
                            <MenuItem value='Pending'>Pending</MenuItem>
                            <MenuItem value='Finished'>Completed</MenuItem>
                        </CustomTextField>
                        <CustomTextField
                        type='date' 
                        label='Start Date'
                        name='startDate'
                        InputLabelProps={{ shrink: true }}
                        error={
                            formik.touched.startDate &&
                            formik.errors.startDate ?
                            true : false
                        }
                        helperText={
                            formik.touched.startDate &&
                            formik.errors.startDate ?
                            formik.errors.startDate :
                            null 
                        }
                        value={formik.values.startDate} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        variant='outlined' 
                        size='small' />
                    </CustomGrid>
        
                    <CustomGrid item xs={12} sm={6}>
                        <CustomTextField
                        type='date'
                        label='Deadline'
                        name='deadLine'
                        InputLabelProps={{ shrink: true }}
                        error={
                            formik.touched.deadLine &&
                            formik.errors.deadLine ?
                            true : false
                        }
                        helperText={
                            formik.touched.deadLine &&
                            formik.errors.deadLine ?
                            formik.errors.deadLine :
                            null 
                        }
                        value={formik.values.deadLine} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        label='Frontend'
                        name='frontend'
                        error={
                            formik.touched.frontend &&
                            formik.errors.frontend ?
                            true : false
                        }
                        helperText={
                            formik.touched.frontend &&
                            formik.errors.frontend ?
                            formik.errors.frontend :
                            null 
                        }
                        value={formik.values.frontend} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        label='Backend'
                        name='backend'
                        error={
                            formik.touched.backend &&
                            formik.errors.backend ?
                            true : false
                        }
                        helperText={
                            formik.touched.backend &&
                            formik.errors.backend ?
                            formik.errors.backend :
                            null 
                        }
                        value={formik.values.backend} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        label='Database'
                        name='database'
                        error={
                            formik.touched.database &&
                            formik.errors.database ?
                            true : false
                        }
                        helperText={
                            formik.touched.database &&
                            formik.errors.database ?
                            formik.errors.database :
                            null 
                        }
                        value={formik.values.database} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        variant='outlined' 
                        size='small' />

                        <ButtonContainer>
                            <CustomButton
                            type='submit' 
                            variant="contained" 
                            color='primary'>
                            Save
                            </CustomButton>
                            <CustomButton
                            variant='contained'
                            onClick={formik.handleReset}>
                            Reset
                            </CustomButton>
                        </ButtonContainer>
                    </CustomGrid>
                </Grid>
            </Box>
        </CustomPaper>
    )
}

export default ProjectForm;