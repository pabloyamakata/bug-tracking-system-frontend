import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import {
    CustomPaper,
    CustomGrid, 
    CustomTextField, 
    ButtonContainer, 
    CustomButton,
    ErrorMessage
} from './FormStyles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';

const formData = new FormData();
const projects_URL = 'https://bug-tracking-system-backend.000webhostapp.com/projects.php';
const editProjectURL = 'https://bug-tracking-system-backend.000webhostapp.com/editproject.php';

interface ProjectInterface {
    id: number;
    name: string;
    description: string;
    project_leader: string;
    start_date: string;
    deadline: string;
    current_status: string;
    frontend: string;
    backend: string;
    ddbb: string;
}

const resetValues: ProjectInterface = {
    id: 0,
    name: '',
    description: '',
    project_leader: '',
    start_date: new Date().toISOString().slice(0, 10),
    deadline: new Date().toISOString().slice(0, 10),
    current_status: '',
    frontend: '',
    backend: '',
    ddbb: ''
}

function ProjectUpdater() {
    const { state: { projectId, isLoading }, setProjectId, setIsLoading } = useContext(AppContext);
    const [isProjectAlreadyKnown, setIsProjectAlreadyKnown] = useState(false);
    const [wasProjectEdited, setWasProjectEdited] = useState(true);
    const [projectInfo, setProjectInfo] = useState<ProjectInterface>(resetValues);
    const navigate = useNavigate();

    useEffect(() => {
        axios({
            method: 'get',
            url: projects_URL,
            withCredentials: true
        })
        .then(res => {
            if(projectId === 0) navigate('/projectreports');
            else {
                const selectedProject = res.data.find((project: ProjectInterface) => project.id === projectId);
                setProjectInfo(selectedProject);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectId]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: projectInfo.name,
            description: projectInfo.description,
            projectLeader: projectInfo.project_leader,
            currentStatus: projectInfo.current_status,
            startDate: projectInfo.start_date,
            deadline: projectInfo.deadline,
            frontend: projectInfo.frontend,
            backend: projectInfo.backend,
            database: projectInfo.ddbb
        },
        validationSchema: yup.object({
            name: yup.string()
            .min(3, 'Name must contain between 3 and 30 characters')
            .max(30, 'Name must contain between 3 and 30 characters')
            .required('Name is required'),
            description: yup.string()
            .max(1000, 'Description must be 1000 characters or less')
            .required('Description is required'),
            projectLeader: yup.string()
            .min(3, 'Name of project leader must contain between 3 and 40 characters')
            .max(40, 'Name of project leader must contain between 3 and 40 characters')
            .required('Name of project leader is required'),
            startDate: yup.date().required("Start date is required"),
            deadline: yup.date().required('Estimated deadline is required'),
            currentStatus: yup.string()
            .max(10, 'Current status text must be 10 characters or less')
            .required("Project current status is required"),
            frontend: yup.string()
            .min(3, 'Frontend technology in use must contain between 3 and 30 characters')
            .max(30,'Frontend technology in use must contain between 3 and 30 characters'),
            backend: yup.string()
            .min(2, 'Backend technology in use must contain between 2 and 30 characters')
            .max(30, 'Backend technology in use must contain between 2 and 30 characters'),
            database: yup.string()
            .min(3, 'Database name must contain between 3 and 30 characters')
            .max(30, 'Database name must contain between 3 and 30 characters')
        }),
        onSubmit: values => {
            setIsLoading(true);
            formData.append('values', JSON.stringify(values));
            formData.append('project_id', JSON.stringify({ id: projectId }));
            axios({
                method: 'post',
                url: editProjectURL,
                data: formData,
                withCredentials: true
            })
            .then(res => {
                switch(res.data.status) {
                    case true:
                        handleFormSuccess();
                        break;
                    case false:
                        setIsLoading(false);
                        setWasProjectEdited(false);
                        setTimeout(() => setWasProjectEdited(true), 10000);
                        break;
                    case 'project already exists':
                        setIsLoading(false);
                        setIsProjectAlreadyKnown(true);
                        setTimeout(() => setIsProjectAlreadyKnown(false), 10000);
                }
            });
        }
    });

    const handleFormSuccess = () => {
        setIsLoading(false);
        setProjectInfo(resetValues);
        setProjectId(0);
        navigate('/projectreports');
    };
    return(
        <CustomPaper elevation={0}>
            <Typography 
            variant='h5' 
            sx={{margin: '25px 0 0 20px'}}>
            Edit Project
            </Typography>
        
            <Box 
            component='form'
            onSubmit={formik.handleSubmit}>
                <Grid container>
                    <CustomGrid item xs={12} sm={6}>
                        <CustomTextField 
                        type='text'
                        color='secondary'
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
                        color='secondary' 
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
                        color='secondary'
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
                        type='date'
                        color='secondary' 
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
                        <CustomTextField
                        type='date'
                        color='secondary'
                        label='Deadline'
                        name='deadline'
                        InputLabelProps={{ shrink: true }}
                        error={
                            formik.touched.deadline &&
                            formik.errors.deadline ?
                            true : false
                        }
                        helperText={
                            formik.touched.deadline &&
                            formik.errors.deadline ?
                            formik.errors.deadline :
                            null 
                        }
                        value={formik.values.deadline} 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        variant='outlined' 
                        size='small' />
                    </CustomGrid>
        
                    <CustomGrid item xs={12} sm={6}>
                        <CustomTextField
                        color='secondary'
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
                            <MenuItem value='Completed'>Completed</MenuItem>
                            <MenuItem value='Closed'>Closed</MenuItem>
                        </CustomTextField>
                        <CustomTextField
                        color='secondary' 
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
                        color='secondary'
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
                        color='secondary'
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

                        {
                            isProjectAlreadyKnown &&
                            <ErrorMessage>Name provided already exists!</ErrorMessage>
                        }

                        {
                            !wasProjectEdited &&
                            <ErrorMessage>At least one field must be edited!</ErrorMessage>
                        }

                            <CustomButton
                            type='submit' 
                            variant="contained" 
                            endIcon={
                                isLoading ?
                                <CircularProgress size={17} color='secondary' /> :
                                <SendIcon />
                            }>
                            Save
                            </CustomButton>
                        </ButtonContainer>
                    </CustomGrid>
                </Grid>
            </Box>
        </CustomPaper>
    )
}

export default ProjectUpdater;