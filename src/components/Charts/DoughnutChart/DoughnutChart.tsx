import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

import { DoughnutBox } from './DoughnutChartStyles';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface DoughnutChartProps {
    bugData: {
        totalBugs: number;
        pendingBugs: number;
    }
}

function DoughnutChart({ bugData: { totalBugs, pendingBugs } }: DoughnutChartProps) {
    return(
        <DoughnutBox>
            <Doughnut
            data={{
                labels: ['Pending', 'Solved'],
                datasets: [{
                    data: [pendingBugs, totalBugs - pendingBugs],
                    backgroundColor: ['#0d47a1', '#2196f3'],
                    borderWidth: 1,
                    hoverOffset: 14,
                    offset: 10
                }]
            }}
            options={{
                rotation: 120,
                animation: {
                    animateScale: true
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Status',
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