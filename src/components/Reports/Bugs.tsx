import { useState, useEffect } from 'react';
import axios from 'axios';

import { CustomPaper } from './ReportStyles';
import DescriptionModal from './DescriptionModal';

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

const bugs_URL = 'http://localhost/bug-tracker-backend/bugs.php';
const bugDeletionURL = 'http://localhost/bug-tracker-backend/bugdeletion.php';

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

let rowIndex = 0;

function Bugs() {
    const [bugArray, setBugArray] = useState<BugInterface[]>([]);
    const [bugDeletion, setBugDeletion] = useState(false);

    useEffect(() => {
        axios({
            method: 'get',
            url: bugs_URL,
            withCredentials: true 
        })
        .then(res => setBugArray(res.data));
    }, [bugDeletion]);

    const getRowIndex = () => {
        if(rowIndex >= bugArray.length) return rowIndex = 1;
        else return ++rowIndex;
    };

    const handleBugDeletion = async (id: number) => {
        if(window.confirm('Do you really want to delete this bug?')) {
            const formData = new FormData();
            const bug_id = { id: id };
            formData.append('bug_id', JSON.stringify(bug_id));
            await axios({
                method: 'post',
                url: bugDeletionURL,
                data: formData,
                withCredentials: true
            });
            setBugDeletion(!bugDeletion);
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
                            <TableCell>Project</TableCell>
                            <TableCell>P. Leader</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Severity</TableCell>
                            <TableCell>Start</TableCell>
                            <TableCell>End</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bugArray.map((bug: BugInterface) => (
                            <TableRow
                            key={bug.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            hover>
                                <TableCell component="th" scope="row">{getRowIndex()}</TableCell>
                                <TableCell>{bug.name}</TableCell>
                                <TableCell>{bug.project}</TableCell>
                                <TableCell>{bug.project_leader}</TableCell>
                                <TableCell>{bug.current_status}</TableCell>
                                <TableCell>{bug.priority_level}</TableCell>
                                <TableCell>{bug.severity_level}</TableCell>
                                <TableCell>{bug.initial_date}</TableCell>
                                <TableCell>{bug.final_date}</TableCell>
                                <TableCell>
                                    <DescriptionModal description={bug.description} />
                                </TableCell>
                                <TableCell>
                                    <IconButton sx={{padding: 0}}>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                    onClick={() => {handleBugDeletion(bug.id)}} 
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