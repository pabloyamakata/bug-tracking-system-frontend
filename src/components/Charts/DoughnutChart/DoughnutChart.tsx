import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

import { DoughnutBox, ChartMessage } from './DoughnutChartStyles';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface DoughnutChartProps {
    bugsByStatus: {
        pendingBugs: number;
        solvedBugs: number;
        closedBugs: number;
    }
}

function DoughnutChart({ bugsByStatus: { pendingBugs, solvedBugs, closedBugs } }: DoughnutChartProps) {
    return(
        <DoughnutBox>
            {
                !pendingBugs && !solvedBugs && !closedBugs ?
                <ChartMessage>No Data Available Yet!</ChartMessage> : null
            }

            <Doughnut
            data={{
                labels: ['Pending', 'Solved', 'Closed'],
                datasets: [{
                    data: [pendingBugs, solvedBugs, closedBugs],
                    backgroundColor: [
                        'rgb(255, 72, 66)',
                        'rgb(0, 171, 85)',
                        'rgb(24, 144, 255)'
                    ],
                    borderWidth: 1,
                    hoverOffset: 10,
                    offset: 6
                }]
            }}
            options={{
                responsive: true,
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