import { useState, useRef } from 'react';

import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import {
    CustomPaper,
    CustomGrid, 
    CustomTextField, 
    ButtonContainer, 
    CustomButton,
    SuccessMessage
} from './FormStyles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const formData = new FormData();
const newBugURL = 'http://localhost/bug-tracker-backend/newbug.php';

function BugForm() {
    const [wasBugReported, setWasBugReported] = useState(false);
    const resetRef = useRef<HTMLButtonElement>(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            project: '',
            projectLeader: '',
            currentStatus: '',
            priorityLevel: '',
            severityLevel: '',
            initialDate: '',
            finalDate: ''
        },
        validationSchema: yup.object({
            name: yup.string()
            .min(3, 'Name must contain between 3 and 30 characters')
            .max(30, 'Name must contain between 3 and 30 characters')
            .required('Name is required'),
            description: yup.string()
            .max(100, 'Description must be 100 characters or less')
            .required('Description is required'),
            project: yup.string().required('A project is required'),
            projectLeader: yup.string()
            .max(60, "Name of project leader must be 60 characters or less")
            .required('A project leader is required'),
            currentStatus: yup.string().required("Bug current status is required"),
            priorityLevel: yup.string().required('Priority level required'),
            severityLevel: yup.string().required('Severity level required'),
            initialDate: yup.date().required('Initial date is required'),
            finalDate: yup.date()
        }),
        onSubmit: values => {
            formData.append('values', JSON.stringify(values));
            axios.post(newBugURL, formData)
            .then(res => {
                res.data.status && handleFormSuccess();
            });
        }
    });

    const handleFormSuccess = () => {
        resetRef.current?.click();
        setWasBugReported(true);
        setTimeout(() => setWasBugReported(false), 10000);
    };
    return(
        <CustomPaper elevation={0}>
            <Typography 
            variant='h5' 
            sx={{marginLeft: '20px', paddingTop: '25px'}}>
            Report Bug
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
                        label='Project'
                        name='project'
                        error={
                            formik.touched.project &&
                            formik.errors.project ?
                            true : false
                        }
                        helperText={
                            formik.touched.project &&
                            formik.errors.project ?
                            formik.errors.project :
                            null 
                        } 
                        value={formik.values.project} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
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
                            <MenuItem value='Solved'>Solved</MenuItem>
                        </CustomTextField>
                    </CustomGrid>

                    <CustomGrid item xs={12} sm={6}>
                        <CustomTextField 
                        label='Priority Level'
                        name='priorityLevel'
                        error={
                            formik.touched.priorityLevel &&
                            formik.errors.priorityLevel ?
                            true : false
                        }
                        helperText={
                            formik.touched.priorityLevel &&
                            formik.errors.priorityLevel ?
                            formik.errors.priorityLevel :
                            null 
                        }
                        value={formik.values.priorityLevel} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        variant='outlined' 
                        size='small' 
                        defaultValue={''} 
                        select>
                            <MenuItem value='High'>High</MenuItem>
                            <MenuItem value='Moderate'>Moderate</MenuItem>
                            <MenuItem value='Low'>Low</MenuItem>
                        </CustomTextField>
                        <CustomTextField 
                        label='Severity Level' 
                        name='severityLevel'
                        error={
                            formik.touched.severityLevel &&
                            formik.errors.severityLevel ?
                            true : false
                        }
                        helperText={
                            formik.touched.severityLevel &&
                            formik.errors.severityLevel ?
                            formik.errors.severityLevel :
                            null 
                        }
                        value={formik.values.severityLevel} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        variant='outlined' 
                        size='small' 
                        defaultValue={''} 
                        select>
                            <MenuItem value='High'>High</MenuItem>
                            <MenuItem value='Moderate'>Moderate</MenuItem>
                            <MenuItem value='Low'>Low</MenuItem>
                        </CustomTextField>
                        <CustomTextField 
                        type='date'
                        label='Initial Date' 
                        name='initialDate'
                        InputLabelProps={{ shrink: true }}
                        error={
                            formik.touched.initialDate &&
                            formik.errors.initialDate ?
                            true : false
                        }
                        helperText={
                            formik.touched.initialDate &&
                            formik.errors.initialDate ?
                            formik.errors.initialDate :
                            null 
                        }
                        value={formik.values.initialDate} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        variant='outlined' 
                        size='small' />
                        <CustomTextField 
                        type='date'
                        label='Final Date'
                        name='finalDate'
                        InputLabelProps={{ shrink: true }}
                        error={
                            formik.touched.finalDate &&
                            formik.errors.finalDate ?
                            true : false
                        }
                        helperText={
                            formik.touched.finalDate &&
                            formik.errors.finalDate ?
                            formik.errors.finalDate :
                            null 
                        }
                        value={formik.values.finalDate} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        variant='outlined' 
                        size='small' />

                        <ButtonContainer>

                        {
                            wasBugReported && 
                            <SuccessMessage>
                            Bug was reported successfully!
                            </SuccessMessage>
                        }

                            <CustomButton 
                            type='submit'
                            variant="contained" 
                            color='primary'>
                            Save
                            </CustomButton>
                            <CustomButton
                            ref={resetRef}
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

export default BugForm;