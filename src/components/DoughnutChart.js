import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = ({ data }) => {
  return <Doughnut data = {data} />;
};
export default DoughnutChart;










































// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);



// export function App() {
//   return <Doughnut data={data} />;
// }
