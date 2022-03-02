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
    CustomButton
} from './FormStyles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const formData = new FormData();
const projects_URL = 'http://localhost/bug-tracker-backend/projects.php';
const bugs_URL = 'http://localhost/bug-tracker-backend/bugs.php';
const editBugURL = 'http://localhost/bug-tracker-backend/editbug.php';

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
    ddb: string;
}

interface BugInterface {
    id: number;
    name: string;
    description: string;
    project: string;
    project_leader: string;
    current_status: string;
    priority_level: string;
    severity_level: string;
    initial_date: string;
    final_date: string;
}

const resetValues: BugInterface = {
    id: 0,
    name: '',
    description: '',
    project: '',
    project_leader: '',
    current_status: '',
    priority_level: '',
    severity_level: '',
    initial_date: new Date().toISOString().slice(0, 10),
    final_date: new Date().toISOString().slice(0, 10)
}

function BugUpdater() {
    const { state: { bugId }, setBugId } = useContext(AppContext);
    const [projectArray, setProjectArray] = useState<ProjectInterface[]>([]);
    const [projectLeader, setProjectLeader] = useState<string | false>(false);
    const [projectId, setProjectId] = useState(0);
    const [bugInfo, setBugInfo] = useState<BugInterface>(resetValues);
    const navigate = useNavigate();

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
        axios({
            method: 'get',
            url: bugs_URL,
            withCredentials: true
        })
        .then(res => {
            if(bugId === 0) navigate('/bugreports');
            else {
                const selectedBug = res.data.find((bug: BugInterface) => bug.id === bugId);
                setBugInfo(selectedBug);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bugId]);
    
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: bugInfo.name,
            description: bugInfo.description,
            project: bugInfo.project,
            projectLeader: bugInfo.project_leader,
            currentStatus: bugInfo.current_status,
            priorityLevel: bugInfo.priority_level,
            severityLevel: bugInfo.severity_level,
            initialDate: bugInfo.initial_date,
            finalDate: bugInfo.final_date
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
            finalDate: yup.date()
        }),
        onSubmit: values => {
            formData.append('values', JSON.stringify(values));
            formData.append('project_id', JSON.stringify({ id: projectId }));
            formData.append('bug_id', JSON.stringify({ id: bugId }));
            axios({
                method: 'post',
                url: editBugURL,
                data: formData,
                withCredentials: true
            })
            .then(res => {
                res.data.status && handleFormSuccess();
            });
        }
    });

    const handleFormSuccess = () => {
        setBugInfo(resetValues);
        setBugId(0);
        navigate('/bugreports');
    };

    const handleProjectInfo = (projectInfo: ProjectInterface) => {
        setProjectLeader(projectInfo.project_leader);
        setProjectId(projectInfo.id);
    };
    return(
        <CustomPaper elevation={0}>
            <Typography 
            variant='h5' 
            sx={{marginLeft: '20px', paddingTop: '25px'}}>
            Edit Bug
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
                        select>
                            {projectArray.map((project: ProjectInterface) => (
                                <MenuItem
                                key={project.id} 
                                onClick={() => handleProjectInfo(project)} 
                                value={project.name}>
                                    {project.name}
                                </MenuItem>
                            ))}
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
                        size='small'
                        select>
                            {
                                !projectLeader ? (
                                    <MenuItem value={bugInfo.project_leader}>
                                        {bugInfo.project_leader}
                                    </MenuItem>
                                ) : bugInfo.project_leader !== projectLeader ? (
                                    <MenuItem value={projectLeader}>
                                        {projectLeader}
                                    </MenuItem>
                                ) : bugInfo.project_leader === projectLeader ? (
                                    <MenuItem value={bugInfo.project_leader}>
                                        {bugInfo.project_leader}
                                    </MenuItem>
                                ) : null
                            }
                        </CustomTextField>
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
                            <CustomButton 
                            type='submit'
                            variant="contained" 
                            color='primary'>
                            Save
                            </CustomButton>
                        </ButtonContainer>
                    </CustomGrid>
                </Grid>
            </Box>
        </CustomPaper>
    )
}

export default BugUpdater;