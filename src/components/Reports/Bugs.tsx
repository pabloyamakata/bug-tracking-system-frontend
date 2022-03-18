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

const bugs_URL = 'https://bug-tracking-system-backend.000webhostapp.com/bugs.php';
const bugDeletionURL = 'https://bug-tracking-system-backend.000webhostapp.com/bugdeletion.php';

interface BugInterface {
    id: number;
    name: string;
    description: string;
    project: string;
    project_leader: string;
    current_status: string;
    priority_level: string;
    severity_level: string;
    initial_date: Date;
    final_date: Date;
}

let rowIndex: number;

function Bugs() {
    const { setBugId } = useContext(AppContext);
    const [bugArray, setBugArray] = useState<BugInterface[]>([] as BugInterface[]);
    const [requestAction, triggerRequestAction] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios({
            method: 'get',
            url: bugs_URL,
            withCredentials: true 
        })
        .then(res => {
            rowIndex = 0;
            setBugArray(res.data);
        });
    }, [requestAction]);

    const getRowIndex = () => {
        if(rowIndex >= bugArray.length) rowIndex = 0;
        return ++rowIndex;
    };

    const formatDate = (date: Date) => {
        const dateIsArray = date.toString().split('-');
        dateIsArray.reverse();
        const formattedDate = dateIsArray.join('-');
        return formattedDate;
    };

    const handleBugEdition = (id: number) => {
        setBugId(id);
        navigate('/editbug');
    };
    
    const handleBugDeletion = (id: number) => {
        if(window.confirm('Do you really want to delete this bug?')) {
            const formData = new FormData();
            const bug_id = { id: id };
            formData.append('bug_id', JSON.stringify(bug_id));
            axios({
                method: 'post',
                url: bugDeletionURL,
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
                            <TableCell align='center'>Bug Name</TableCell>
                            <TableCell align='center'>Project</TableCell>
                            <TableCell align='center'>Project Leader</TableCell>
                            <TableCell align='center'>Status</TableCell>
                            <TableCell align='center'>Priority</TableCell>
                            <TableCell align='center'>Severity</TableCell>
                            <TableCell align='center'>Initial Date</TableCell>
                            <TableCell align='center'>Final Date</TableCell>
                            <TableCell align='center'>Description</TableCell>
                            <TableCell align='center'>Edit</TableCell>
                            <TableCell align='center'>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(bugArray) && bugArray.map((bug: BugInterface) => (
                            <TableRow
                            key={bug.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            hover>
                                <TableCell component="th" scope="row" align='center'>{getRowIndex()}</TableCell>
                                <TableCell align='center'>{bug.name}</TableCell>
                                <TableCell align='center'>{bug.project}</TableCell>
                                <TableCell align='center'>{bug.project_leader}</TableCell>
                                <TableCell align='center'>{bug.current_status}</TableCell>
                                <TableCell align='center'>{bug.priority_level}</TableCell>
                                <TableCell align='center'>{bug.severity_level}</TableCell>
                                <TableCell align='center'>{formatDate(bug.initial_date)}</TableCell>
                                <TableCell align='center'>{formatDate(bug.final_date)}</TableCell>
                                <TableCell align='center'>
                                    <DescriptionModal description={bug.description} />
                                </TableCell>
                                <TableCell align='center'>
                                    <IconButton
                                    onClick={() => handleBugEdition(bug.id)}
                                    sx={{padding: 0}}>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align='center'>
                                    <IconButton
                                    onClick={() => handleBugDeletion(bug.id)} 
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

export default Bugs;