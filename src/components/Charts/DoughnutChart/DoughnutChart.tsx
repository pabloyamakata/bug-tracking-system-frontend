import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

import { DoughnutBox } from './DoughnutChartStyles';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface DoughnutChartProps {
    totalBugs: number;
    pendingBugs: number;
    closedBugs: number;
}

function DoughnutChart({ totalBugs, pendingBugs, closedBugs }: DoughnutChartProps) {
    return(
        <DoughnutBox>
            <Doughnut
            data={{
                labels: ['Pending', 'Solved', 'Closed'],
                datasets: [{
                    data: [pendingBugs, totalBugs - pendingBugs - closedBugs, closedBugs],
                    backgroundColor: ['#ef5350', '#9ccc65', '#2196f3'],
                    borderWidth: 1,
                    hoverOffset: 10,
                    offset: 6
                }]
            }}
            options={{
                rotation: 180,
                animation: {
                    animateScale: true
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Bugs by Status',
                        font: {
                            size: 20
                        },
                        padding: {
                            top: 15,
                            bottom: 15
                        }
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 30,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }} />
        </DoughnutBox>
    )
}

export default DoughnutChart;