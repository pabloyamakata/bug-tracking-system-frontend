import { useState, useEffect, useContext, useRef } from 'react';
import { AppContext } from '../../context/AppContext';

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
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const formData = new FormData();
const projects_URL = 'https://bug-tracking-system-backend.000webhostapp.com/projects.php';
const newBugURL = 'https://bug-tracking-system-backend.000webhostapp.com/newbug.php';

interface ProjectInterface {
    id: number;
    name: string;
    description: string;
    project_leader: string;
    start_date: Date;
    deadline: Date;
    current_status: string;
    frontend: string;
    backend: string;
    ddbb: string;
}

function BugForm() {
    const { state: { isLoading }, setIsLoading } = useContext(AppContext);
    const [wasBugReported, setWasBugReported] = useState(false);
    const [projectArray, setProjectArray] = useState<ProjectInterface[]>([]);
    const [projectName, setProjectName] = useState('');
    const [projectLeader, setProjectLeader] = useState('');
    const [projectId, setProjectId] = useState(0);
    const resetRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        axios({
            method: 'get',
            url: projects_URL,
            withCredentials: true
        })
        .then(res => {
            setProjectArray(res.data);
        });
    }, []);

    useEffect(() => {
        formik.setFieldValue('project', projectName);
        formik.setFieldValue('projectLeader', projectLeader);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectName, projectLeader]);

    const formik = useFormik({
        enableReinitialize: true,
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
            .max(1000, 'Description must be 1000 characters or less')
            .required('Description is required'),
            project: yup.string().required('A project is required'),
            projectLeader: yup.string()
            .max(60, "Name of project leader must be 60 characters or less")
            .required('A project leader is required'),
            currentStatus: yup.string().required("Bug current status is required"),
            priorityLevel: yup.string().required('Priority level required'),
            severityLevel: yup.string().required('Severity level required'),
            initialDate: yup.date().required('Initial date is required'),
            finalDate: yup.date().when('currentStatus', {
                is: (currentStatus: string) => currentStatus === 'Pending' || currentStatus === undefined,
                then: yup.date(),
                otherwise: yup.date().required('Final date is required')
            })
        }),
        onSubmit: values => {
            setIsLoading(true);
            formData.append('values', JSON.stringify(values));
            formData.append('project_id', JSON.stringify({ id: projectId }));
            axios({
                method: 'post',
                url: newBugURL,
                data: formData,
                withCredentials: true
            })
            .then(res => {
                res.data.status && handleFormSuccess();
            });
        }
    });

    const handleFormSuccess = () => {
        setIsLoading(false);
        resetRef.current?.click();
        setProjectName('');
        setProjectLeader('');
        setProjectId(0);
        setWasBugReported(true);
        setTimeout(() => setWasBugReported(false), 10000);
    };
    const handleProjectInfo = (projectInfo: ProjectInterface) => {
        setProjectName(projectInfo.name);
        setProjectLeader(projectInfo.project_leader);
        setProjectId(projectInfo.id);
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
                        color='secondary'
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
                            {Array.isArray(projectArray) && projectArray.map((project: ProjectInterface) => (
                                <MenuItem
                                key={project.id} 
                                onClick={() => handleProjectInfo(project)} 
                                value={project.name}>
                                    {project.name}
                                </MenuItem>
                            ))}
                        </CustomTextField>
                        <CustomTextField
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
                        size='small'
                        inputProps={
                            { readOnly: true }
                        } />
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
                            <MenuItem value='Solved'>Solved</MenuItem>
                            <MenuItem value='Closed'>Closed</MenuItem>
                        </CustomTextField>
                    </CustomGrid>

                    <CustomGrid item xs={12} sm={6}>
                        <CustomTextField
                        color='secondary'
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
                            <MenuItem value='Critical'>Critical</MenuItem>
                            <MenuItem value='High'>High</MenuItem>
                            <MenuItem value='Medium'>Medium</MenuItem>
                            <MenuItem value='Low'>Low</MenuItem>
                        </CustomTextField>
                        <CustomTextField
                        color='secondary'
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
                            <MenuItem value='Critical'>Critical</MenuItem>
                            <MenuItem value='High'>High</MenuItem>
                            <MenuItem value='Medium'>Medium</MenuItem>
                            <MenuItem value='Low'>Low</MenuItem>
                        </CustomTextField>
                        <CustomTextField 
                        type='date'
                        color='secondary'
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
                        color='secondary'
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
                            endIcon={
                                isLoading ?
                                <CircularProgress size={17} color='secondary' /> :
                                <SendIcon />
                            }>
                            Save
                            </CustomButton>
                            <CustomButton
                            ref={resetRef}
                            variant='contained'
                            endIcon={<RestartAltIcon style={{ fontSize: '25px' }} />}
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