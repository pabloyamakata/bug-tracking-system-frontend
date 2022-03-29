import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

import { PieBox } from './PieChartStyles';

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
                        'rgba(118, 255, 3, .8)',
                        'rgba(41, 121, 255, .8)',
                        'rgba(255, 145, 0, .8)',
                        'rgba(255, 23, 68, .8)'
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
                            padding: 20,
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