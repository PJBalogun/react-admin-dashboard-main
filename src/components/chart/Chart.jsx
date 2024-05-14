import "./chart.scss";
import { faker } from "@faker-js/faker";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Last 6 Months (Revenue)',
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Revenue',
      data: labels.map(()=> faker.number.int({min: 0, max: 2500})),
      borderColor: 'rgb(231, 231, 240)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Chart = ({ title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <Line options={options} data={data} />;
    </div>
  );
};

export default Chart;
