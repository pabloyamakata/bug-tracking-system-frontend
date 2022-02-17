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
    projectLeader: string, 
    currentStatus: string, 
    startDate: string, 
    deadLine: string,
    frontend: string,
    backend: string,
    database: string,
    description: string
) => ({
    number,
    name,
    projectLeader,
    currentStatus,
    startDate,
    deadLine,
    frontend,
    backend,
    database,
    description
});

const rows = [
    createData(
        1, 
        'Project 1', 
        'Barry Allen', 
        'Pending', 
        '19/01/2019', 
        '20/04/2020', 
        'React', 
        'PHP', 
        'MySQL', 
        'See'
    )
];

function Projects() {
    return(
        <CustomPaper elevation={0}>
            <TableContainer component={Paper} square>
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
                        {rows.map((row) => (
                            <TableRow
                            key={row.number}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{row.number}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.projectLeader}</TableCell>
                                <TableCell>{row.currentStatus}</TableCell>
                                <TableCell>{row.startDate}</TableCell>
                                <TableCell>{row.deadLine}</TableCell>
                                <TableCell>{row.frontend}</TableCell>
                                <TableCell>{row.backend}</TableCell>
                                <TableCell>{row.database}</TableCell>
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

export default Projects;