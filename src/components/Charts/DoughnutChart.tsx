import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import Box from '@mui/material/Box';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
    return(
        <Box sx={{ width: '300px', height: '300px' }}>
            <Doughnut
            data={{
                labels: ['Pending', 'Solved'],
                datasets: [{
                    label: '',
                    data: [50, 70],
                    backgroundColor: ['red', 'green'],
                    borderWidth: 1,
                    hoverOffset: 4
                }]
            }} />
        </Box>
    )
}

export default DoughnutChart;