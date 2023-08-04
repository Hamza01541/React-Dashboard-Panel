import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./bar-chart.css";

const BarChart = () => {
  const data = [5, 10, 15, 7, 3];
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    series: [
      {
        name: "Deliveries",
        data: data,
      },
    ],
  };

  return (
    <div className="chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
