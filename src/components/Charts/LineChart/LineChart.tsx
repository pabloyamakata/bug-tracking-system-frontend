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
    bugsResolvedPerMonth: {
        thisMonth: number;
        oneMonthAgo: number;
        twoMonthsAgo: number;
        threeMonthsAgo: number;
        fourMonthsAgo: number;
        fiveMonthsAgo: number;
        sixMonthsAgo: number;
    },
    nameOfMonths: {
        currentMonth: string;
        oneMonthAgo: string;
        twoMonthsAgo: string;
        threeMonthsAgo: string;
        fourMonthsAgo: string;
        fiveMonthsAgo: string;
        sixMonthsAgo: string;
    }
}

function LineChart({ nameOfMonths, bugsResolvedPerMonth }:LineChartProps) {
    return(
        <LineBox>
            <Line
            data={{
                labels: [
                    nameOfMonths.sixMonthsAgo,
                    nameOfMonths.fiveMonthsAgo,
                    nameOfMonths.fourMonthsAgo,
                    nameOfMonths.threeMonthsAgo,
                    nameOfMonths.twoMonthsAgo,
                    nameOfMonths.oneMonthAgo,
                    nameOfMonths.currentMonth
                ],
                datasets: [{
                    label: 'Amount',
                    data: [
                        bugsResolvedPerMonth.sixMonthsAgo,
                        bugsResolvedPerMonth.fiveMonthsAgo,
                        bugsResolvedPerMonth.fourMonthsAgo,
                        bugsResolvedPerMonth.threeMonthsAgo,
                        bugsResolvedPerMonth.twoMonthsAgo,
                        bugsResolvedPerMonth.oneMonthAgo,
                        bugsResolvedPerMonth.thisMonth
                    ],
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: 'rgba(75, 192, 192, .5)',
                    pointStyle: 'circle',
                    pointRadius: 5,
                    pointHoverRadius: 10,
                    tension: 0.2
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