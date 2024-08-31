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

const data2 = [
  {
    name: "Janeiro",
    uv: 7,
    pv: 2,
  },
  {
    name: "Fevereiro",
    uv: 2,
    pv: 3,
  },
  {
    name: "Março",
    uv: 3,
    pv: 4,
  },
  {
    name: "Abril",
    uv: 9,
    pv: 4,
  },
  {
    name: "Maio",
    uv: 6,
    pv: 7,
  },
  {
    name: "Junho",
    uv: 10,
    pv: 11,
  },
  {
    name: "Julho",
    uv: 5,
    pv: 6,
  },
  {
    name: "Agosto",
    uv: 4,
    pv: 5,
  },
  {
    name: "Setemrbo",
    uv: 7,
    pv: 8,
  },
  {
    name: "Outubro",
    uv: 11,
    pv: 12,
  },
  {
    name: "Novembro",
    uv: 8,
    pv: 9,
  },
  {
    name: "Dezembro",
    uv: 5,
    pv: 6,
  },
];

const CustomTooltip = ({active, payload, label}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-base-200 p-2 rounded-md">
        <p className="label">{`${label}`}</p>
        <p className="desc font-semibold">{`${payload[0].value} adoções`}</p>
      </div>
    );
  }

  return null;
};

function CatsChart({data}) {
  const theme = useSelector((state) => state.userState.theme);

  return (
    <div className="mt-16">
      <h2 className="text-xl mb-4">Adoção De Felinos Por Mês</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={500}
          height={400}
          data={data2}
          margin={{
            top: 20,
            bottom: 20,
          }}
        >
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="uv"
            barSize={35}
            fill={theme === "cupcake" ? "#ef9fbc" : "#bd93f9"}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke={theme === "cupcake" ? "#bd93f9" : "#ef9fbc"}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CatsChart;
