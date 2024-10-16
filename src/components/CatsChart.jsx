import {useSelector} from "react-redux";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {useEffect, useState} from "react";

const CustomTooltip = ({active, payload, label}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-base-200 p-2 rounded-md">
        <p className="label">{`${label}`}</p>
        <p className="desc font-semibold">{`${payload[0].value} felino(s) adotado(s)`}</p>
      </div>
    );
  }

  return null;
};

function CatsChart({cats}) {
  const theme = useSelector((state) => state.userState.theme);
  const [chartData, setChartData] = useState([]);
  const chartArr = [
    {
      month: "Janeiro",
      adopted: 0,
    },
    {
      month: "Fevereiro",
      adopted: 0,
    },
    {
      month: "Março",
      adopted: 0,
    },
    {
      month: "Abril",
      adopted: 0,
    },
    {
      month: "Maio",
      adopted: 0,
    },
    {
      month: "Junho",
      adopted: 0,
    },
    {
      month: "Julho",
      adopted: 0,
    },
    {
      month: "Agosto",
      adopted: 0,
    },
    {
      month: "Setembro",
      adopted: 0,
    },
    {
      month: "Outubro",
      adopted: 0,
    },
    {
      month: "Novembro",
      adopted: 0,
    },
    // {
    //   month: "Dezembro",
    //   adopted: 0,
    // },
  ];

  useEffect(
    function () {
      cats.map((cat) => {
        const test = new Date(cat.departureDate).toLocaleString("pt-br", {
          month: "long",
        });

        chartArr.find((item) => {
          if (item.month.toLowerCase() === test) {
            return (item.adopted += 1);
          }
        });
      });

      setChartData(chartArr);
    },
    [cats]
  );
  return (
    <div className="mt-16">
      <h2 className="text-xl mb-4">Adoção De Felinos Por Mês (2024)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            bottom: 20,
          }}
        >
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="adopted"
            barSize={35}
            fill={theme === "cupcake" ? "#ef9fbc" : "#bd93f9"}
          />
          <Line
            type="monotone"
            dataKey="adopted"
            stroke={theme === "cupcake" ? "#bd93f9" : "#ef9fbc"}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CatsChart;
