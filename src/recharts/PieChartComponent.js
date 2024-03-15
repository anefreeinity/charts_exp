import React, { useRef } from "react";
import { PieChart, Pie } from "recharts";
import { useSaveAsImage } from "../useSaveAsImage";
import SelectImage, { submitForm } from "../SelectImage";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

export default function PieChartComponent({ width, height, dialog }) {
  const ref = useRef(null);
  const { handleDivDownload } = useSaveAsImage("pie", ref);

  function handelSubmit(event) {
    let form = submitForm(event);
    handleDivDownload(form.format, form.name);
  }

  return (
    <div>
      <SelectImage ref={dialog} onSubmit={handelSubmit} />
      <div ref={ref}>
        <PieChart id="pie" width={width} height={height}>
          <Pie
            data={data01}
            dataKey="value"
            cx={width / 2}
            cy={height / 2}
            outerRadius={height * 0.25}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            cx={width / 2}
            cy={height / 2}
            innerRadius={height * 0.3}
            outerRadius={height * 0.45}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
}
