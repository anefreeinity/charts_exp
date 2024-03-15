import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import { useSaveAsImage } from "../useSaveAsImage";
import SelectImage, { submitForm } from "../SelectImage";
import { useRef } from "react";

const data = [
  {
    name: "Page A",
    uvLabel: "Page A uv",
    pvLabel: "Page A pv",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uvLabel: "Page B uv",
    pvLabel: "Page B pv",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uvLabel: "Page C uv",
    pvLabel: "Page C pv",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uvLabel: "Page D uv",
    pvLabel: "Page D pv",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uvLabel: "Page E uv",
    pvLabel: "Page E pv",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uvLabel: "Page F uv",
    pvLabel: "Page F pv",
    uv: 2390,
    pv: 7000,
    amt: 2500,
  },
  {
    name: "Page G",
    uvLabel: "Page G uv",
    pvLabel: "Page G pv",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function BarChartComponent({ width, height, dialog }) {
  const chartRef = useRef(null);
  const { handleDivDownload } = useSaveAsImage("bar", chartRef);

  function handelSubmit(event) {
    let form = submitForm(event);
    handleDivDownload(form.format, form.name);
  }

  return (
    <div>
      <SelectImage ref={dialog} onSubmit={handelSubmit} />
      <div ref={chartRef}>
        <BarChart
          id="bar"
          width={width}
          height={height}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8">
            <LabelList dataKey="pvLabel" position="top" stroke="#8884d8" />
          </Bar>
          <Bar dataKey="uv" fill="#82ca9d">
            <LabelList dataKey="uvLabel" position="top" stroke="#82ca9d" />
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}
