import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { ChartBox, ChartTitle } from './DoughnutChartStyles';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    bugData: {
        totalBugs: number;
        pendingBugs: number;
    }
}

function DoughnutChart({ bugData: { totalBugs, pendingBugs } }: DoughnutChartProps) {
    return(
        <ChartBox>
            <ChartTitle>Pending - Solved Bugs</ChartTitle>
            <Doughnut
            data={{
                labels: ['Pending', 'Solved'],
                datasets: [{
                    label: 'Pending - Solved Bugs',
                    data: [pendingBugs, totalBugs - pendingBugs],
                    backgroundColor: ['#0d47a1', '#2196f3'],
                    borderWidth: 1,
                    hoverOffset: 14,
                    offset: 10
                }]
            }}
            options={{
                animation: {
                    animateScale: true
                },
                plugins: {
                    legend: {
                        title: {
                            display: true,
                            padding: 2
                        },
                        position: 'bottom',
                        labels: {
                            boxWidth: 60,
                            boxHeight: 7,
                            padding: 17,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }} />
        </ChartBox>
    )
}

export default DoughnutChart;