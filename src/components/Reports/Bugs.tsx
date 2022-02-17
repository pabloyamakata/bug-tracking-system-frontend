import { CustomPaper } from './ReportStyles';

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

const createData = (
    number: number,
    name: string, 
    project: string, 
    projectLeader: string, 
    currentStatus: string, 
    priority: string,
    severity: string,
    initialDate: string,
    finalDate: string,
    description: string
) => ({
    number,
    name,
    project,
    projectLeader,
    currentStatus,
    priority,
    severity,
    initialDate,
    finalDate,
    description
});

const rows = [
    createData(
        1, 
        'Bug 1', 
        'Project 1', 
        'Barry Allen', 
        'Pending', 
        'High', 
        'Low', 
        '20/02/2020', 
        '', 
        'See'
    )
];

function Bugs() {
    return(
        <CustomPaper elevation={0}>
            <TableContainer component={Paper} square>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Project</TableCell>
                            <TableCell>Leader</TableCell>
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
                        {rows.map((row) => (
                            <TableRow
                            key={row.number}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{row.number}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.project}</TableCell>
                                <TableCell>{row.projectLeader}</TableCell>
                                <TableCell>{row.currentStatus}</TableCell>
                                <TableCell>{row.priority}</TableCell>
                                <TableCell>{row.severity}</TableCell>
                                <TableCell>{row.initialDate}</TableCell>
                                <TableCell>{row.finalDate}</TableCell>
                                <TableCell>{row.description}</TableCell>
                                <TableCell>
                                    <IconButton sx={{padding: 0}}>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton sx={{padding: 0}}>
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