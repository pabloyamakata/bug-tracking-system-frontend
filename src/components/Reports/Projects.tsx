import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { CustomPaper } from './ReportStyles';
import DescriptionModal from '../DescriptionModal/DescriptionModal';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const projectDeletionURL = 'https://bug-tracking-system-backend.000webhostapp.com/projectdeletion.php';
const projects_URL = 'https://bug-tracking-system-backend.000webhostapp.com/projects.php';

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

let rowIndex = 0;

function Projects() {
    const { setProjectId } = useContext(AppContext);
    const [projectArray, setProjectArray] = useState<ProjectInterface[]>([]);
    const [requestAction, triggerRequestAction] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios({
            method: 'get',
            url: projects_URL,
            withCredentials: true 
        })
        .then(res => {
            console.log(typeof res.data);
            setProjectArray(res.data);
        });
    }, [requestAction]);

    const getRowIndex = () => {
        if(rowIndex >= projectArray.length) return rowIndex = 1;
        else return ++rowIndex;
    };

    const handleProjectEdition = (id: number) => {
        setProjectId(id);
        navigate('/editproject');
    };

    const handleProjectDeletion = async (id: number) => {
        if(window.confirm(
            'Do you really want to delete this project?' + 
            ' All related bugs will be deleted as well.'
        )) {
            const formData = new FormData();
            const project_id = { id: id };
            formData.append('project_id', JSON.stringify(project_id));
            await axios({
                method: 'post',
                url: projectDeletionURL,
                data: formData,
                withCredentials: true
            });
            triggerRequestAction(!requestAction);
        }
    };
    return(
        <CustomPaper elevation={0}>
            <TableContainer component={Paper} square elevation={0}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Leader</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>Deadline</TableCell>
                            <TableCell>Frontend</TableCell>
                            <TableCell>Backend</TableCell>
                            <TableCell>Database</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projectArray.map((project: ProjectInterface) => (
                            <TableRow
                            key={project.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            hover>
                                <TableCell component="th" scope="row">{getRowIndex()}</TableCell>
                                <TableCell>{project.name}</TableCell>
                                <TableCell>{project.project_leader}</TableCell>
                                <TableCell>{project.current_status}</TableCell>
                                <TableCell>{project.start_date}</TableCell>
                                <TableCell>{project.deadline}</TableCell>
                                <TableCell>{project.frontend}</TableCell>
                                <TableCell>{project.backend}</TableCell>
                                <TableCell>{project.ddbb}</TableCell>
                                <TableCell>
                                    <DescriptionModal description={project.description} />
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                    onClick={() => handleProjectEdition(project.id)}
                                    sx={{padding: 0}}>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton 
                                    onClick={() => handleProjectDeletion(project.id)}
                                    sx={{padding: 0}}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </CustomPaper>
    )
}

export default Projects;