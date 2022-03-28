import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { LineBox } from './LineChartStyles';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface LineChartProps {
    nameOfMonths: {
        currentMonth: string;
        secondMonth: string;
        thirdMonth: string;
        fourthMonth: string;
        fifthMonth: string;
        sixthMonth: string;
        seventhMonth: string;
    }
}

function LineChart({ nameOfMonths }:LineChartProps) {
    return(
        <LineBox>
            <Line
            data={{
                labels: [
                    nameOfMonths.currentMonth,
                    nameOfMonths.secondMonth,
                    nameOfMonths.thirdMonth,
                    nameOfMonths.fourthMonth,
                    nameOfMonths.fifthMonth,
                    nameOfMonths.sixthMonth,
                    nameOfMonths.seventhMonth
                ],
                datasets: [{
                    label: 'Amount',
                    data: ['10', '50', '30', '15', '60', '20', '30'],
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, .5)',
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointHoverRadius: 10
                }]
            }}
            options={{
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Bugs Resolved per Month',
                        font: {
                            size: 20
                        },
                        padding: {
                            top: 15,
                            bottom: 15
                        }
                    }
                }
            }} />
        </LineBox>
    )
}

export default LineChart;