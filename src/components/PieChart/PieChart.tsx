import React, { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Card from '../Card/Card';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  labels: string[];
  numbers: number[];
}

const PieChart: FC<Props> = ({ labels, numbers }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: numbers,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card color={'secondary'} classNames={'w-full'}>
      <Pie data={data} width={'250px'} height={'250px'} />
    </Card>
  );
};

export default PieChart;
