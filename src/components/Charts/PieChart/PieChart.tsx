import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

import { PieBox, ChartMessage } from './PieChartStyles';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface PieChartProps {
    bugsByPriority: {
        criticalPriorityBugs: number;
        highPriorityBugs: number;
        mediumPriorityBugs: number;
        lowPriorityBugs: number;
    }
}

function PieChart({ bugsByPriority }: PieChartProps) {
    return(
        <PieBox>
            {
                Object.values(bugsByPriority).every(value => !value) ?
                <ChartMessage>No Data Available Yet!</ChartMessage> : null
            }

            <Pie
            data={{
                labels: ['Low', 'Medium', 'High', 'Critical'],
                datasets: [{
                    data: [
                        bugsByPriority.lowPriorityBugs,
                        bugsByPriority.mediumPriorityBugs,
                        bugsByPriority.highPriorityBugs,
                        bugsByPriority.criticalPriorityBugs
                    ],
                    backgroundColor: [
                        'rgb(0, 171, 85)',
                        'rgb(24, 144, 255)',
                        'rgb(255, 193, 7)',
                        'rgb(255, 72, 66)'
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
                        text: 'Bugs by Priority',
                        font: {
                            size: 20,
                            family: 'Public Sans, sans-serif'
                        },
                        padding: {
                            top: 15,
                            bottom: 15
                        }
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }} />
        </PieBox>
    )
}

export default PieChart;