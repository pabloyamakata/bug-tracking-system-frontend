import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { BarBox, ChartMessage } from './BarChartStyles';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface BarChartProps {
    bugsResolvedPerMonth: {
        thisMonth: number;
        oneMonthAgo: number;
        twoMonthsAgo: number;
        threeMonthsAgo: number;
        fourMonthsAgo: number;
        fiveMonthsAgo: number;
        sixMonthsAgo: number;
    },
    bugsCreatedPerMonth: {
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

function BarChart({ nameOfMonths, bugsResolvedPerMonth, bugsCreatedPerMonth }: BarChartProps) {
    return(
        <BarBox>
            {
                Object.values(bugsResolvedPerMonth).every(value => !value) &&
                Object.values(bugsCreatedPerMonth).every(value => !value) ?
                <ChartMessage>No Data Available Yet!</ChartMessage> : null
            }

            <Bar
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
                datasets: [
                    {
                        label: 'Created',
                        data: [
                            bugsCreatedPerMonth.sixMonthsAgo,
                            bugsCreatedPerMonth.fiveMonthsAgo,
                            bugsCreatedPerMonth.fourMonthsAgo,
                            bugsCreatedPerMonth.threeMonthsAgo,
                            bugsCreatedPerMonth.twoMonthsAgo,
                            bugsCreatedPerMonth.oneMonthAgo,
                            bugsCreatedPerMonth.thisMonth
                        ],
                        backgroundColor: 'rgba(255, 72, 66, .2)',
                        borderColor: 'rgb(255, 72, 66)',
                        borderWidth: 1
                    }, 
                    {
                        label: 'Solved',
                        data: [
                            bugsResolvedPerMonth.sixMonthsAgo,
                            bugsResolvedPerMonth.fiveMonthsAgo,
                            bugsResolvedPerMonth.fourMonthsAgo,
                            bugsResolvedPerMonth.threeMonthsAgo,
                            bugsResolvedPerMonth.twoMonthsAgo,
                            bugsResolvedPerMonth.oneMonthAgo,
                            bugsResolvedPerMonth.thisMonth
                        ],
                        backgroundColor: 'rgba(24, 144, 255, .2)', 
                        borderColor: 'rgb(24, 144, 255)',
                        borderWidth: 1
                    }
                ]
            }}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Created | Solved | Closed Bugs',
                        font: {
                            size: 20,
                            family: 'Public Sans, sans-serif'
                        },
                        padding: {
                            top: 15,
                            bottom: 15
                        }
                    }
                }
            }} />
        </BarBox>
    )
}

export default BarChart;