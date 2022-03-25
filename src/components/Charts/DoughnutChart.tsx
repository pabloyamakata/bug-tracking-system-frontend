import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import Box from '@mui/material/Box';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    bugData: {
        totalBugs: number;
        pendingBugs: number;
    }
}

function DoughnutChart({ bugData: { totalBugs, pendingBugs } }: DoughnutChartProps) {
    return(
        <Box sx={{
            width: '400px', 
            height: '400px',
            ml: 7 
        }}>
            <Doughnut
            data={{
                labels: ['Pending', 'Solved'],
                datasets: [{
                    label: 'Pending - Solved Bugs',
                    data: [pendingBugs, totalBugs - pendingBugs],
                    backgroundColor: ['#0d47a1', '#2196f3'],
                    borderWidth: 1,
                    hoverOffset: 4
                }]
            }}
            options={{
                plugins: {
                    title: {
                        display: true,
                        color: 'red',
                        align: 'start',
                        text: 'Bugs'
                    },
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 70,
                            boxHeight: 20
                        }
                    }
                }
            }} />
        </Box>
    )
}

export default DoughnutChart;