import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
    CustomPaper,
    CustomTableRow,
    MessageContainer
} from './ReportStyles';

import DescriptionModal from '../DescriptionModal/DescriptionModal';

import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

const projectDeletionURL = 'https://bug-tracking-system-backend.000webhostapp.com/projectdeletion.php';
const projects_URL = 'https://bug-tracking-system-backend.000webhostapp.com/projects.php';

interface ProjectInterface {
    id: number;
    reporting_date: string;
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

let rowIndex: number;

function Projects() {
    const { state: { isLoading }, setProjectId, setIsLoading } = useContext(AppContext);
    const [projectArray, setProjectArray] = useState<ProjectInterface[]>([] as ProjectInterface[]);
    const [requestAction, triggerRequestAction] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        axios({
            method: 'get',
            url: projects_URL,
            withCredentials: true 
        })
        .then(res => {
            rowIndex = 0;
            setProjectArray(res.data);
            setIsLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestAction]);

    const getRowIndex = () => {
        if(rowIndex >= projectArray.length) rowIndex = 0;
        return ++rowIndex;
    };

    const formatDate = (date: Date) => {
        const dateIsArray = date.toString().split('-');
        dateIsArray.reverse();
        const formattedDate = dateIsArray.join('-');
        return formattedDate;
    };

    const handleProjectEdition = (id: number) => {
        setProjectId(id);
        navigate('/editproject');
    };

    const handleProjectDeletion = (id: number) => {
        if(window.confirm(
            'Do you really want to delete this project?' + 
            ' All related bugs will be deleted as well.'
        )) {
            const formData = new FormData();
            const project_id = { id: id };
            formData.append('project_id', JSON.stringify(project_id));
            axios({
                method: 'post',
                url: projectDeletionURL,
                data: formData,
                withCredentials: true
            })
            .then(res => {
                res.data.status && triggerRequestAction(!requestAction);
            });
        }
    };
    return(
        <CustomPaper elevation={0}>
            <TableContainer component={Paper} square elevation={0}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>No.</TableCell>
                            <TableCell align='center'>Project Name</TableCell>
                            <TableCell align='center'>Project Leader</TableCell>
                            <TableCell align='center'>Status</TableCell>
                            <TableCell align='center'>Start Date</TableCell>
                            <TableCell align='center'>Deadline</TableCell>
                            <TableCell align='center'>Frontend</TableCell>
                            <TableCell align='center'>Backend</TableCell>
                            <TableCell align='center'>Database</TableCell>
                            <TableCell align='center'>Description</TableCell>
                            <TableCell align='center'>Edit</TableCell>
                            <TableCell align='center'>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading ? [1, 2, 3, 4, 5, 6].map(item => (
                            <CustomTableRow key={item}>
                                <TableCell component="th" scope="row" align='center'>
                                    <Typography><Skeleton /></Typography>
                                </TableCell>
                                <TableCell align='center'><Typography><Skeleton /></Typography></TableCell>
                                <TableCell align='center'><Typography><Skeleton /></Typography></TableCell>
                                <TableCell align='center'><Typography><Skeleton /></Typography></TableCell>
                                <TableCell align='center'><Typography><Skeleton /></Typography></TableCell>
                                <TableCell align='center'><Typography><Skeleton /></Typography></TableCell>
                                <TableCell align='center'><Typography><Skeleton /></Typography></TableCell>
                                <TableCell align='center'><Typography><Skeleton /></Typography></TableCell>
                                <TableCell align='center'><Typography><Skeleton /></Typography></TableCell>
                                <TableCell align='center'><Typography><Skeleton /></Typography></TableCell>
                                <TableCell align='center'><Typography><Skeleton /></Typography></TableCell>
                                <TableCell align='center'><Typography><Skeleton /></Typography></TableCell>
                            </CustomTableRow>
                        )) : Array.isArray(projectArray) && projectArray.slice(0).reverse().map((project: ProjectInterface) => (
                            <CustomTableRow
                            key={project.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            hover>
                                <TableCell component="th" scope="row" align='center'>{getRowIndex()}</TableCell>
                                <TableCell align='center'>{project.name}</TableCell>
                                <TableCell align='center'>{project.project_leader}</TableCell>
                                <TableCell align='center'>{project.current_status}</TableCell>
                                <TableCell align='center'>{formatDate(project.start_date)}</TableCell>
                                <TableCell align='center'>{formatDate(project.deadline)}</TableCell>
                                <TableCell align='center'>{project.frontend ? project.frontend : '-'}</TableCell>
                                <TableCell align='center'>{project.backend ? project.backend : '-'}</TableCell>
                                <TableCell align='center'>{project.ddbb ? project.ddbb : '-'}</TableCell>
                                <TableCell align='center'>
                                    <DescriptionModal description={project.description} />
                                </TableCell>
                                <TableCell align='center'>
                                    <IconButton
                                    onClick={() => handleProjectEdition(project.id)}
                                    sx={{padding: 0}}>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align='center'>
                                    <IconButton 
                                    onClick={() => handleProjectDeletion(project.id)}
                                    sx={{padding: 0}}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </CustomTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {!projectArray.length && !isLoading ?
            <MessageContainer>
                <IconButton onClick={() => navigate('/newproject')}>
                    <AddBoxOutlinedIcon sx={{ fontSize: 120 }} />
                </IconButton>
                <Typography sx={{ pt: 1, fontSize: 20 }}>
                    This section is empty. Click to add a project...
                </Typography>
            </MessageContainer> : null}
        
        </CustomPaper>
    )
}

export default Projects;