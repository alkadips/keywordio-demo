import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card } from "@mui/material";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Donutchart() {
  const data1 = {
    Red: { value: 12, index: 0 },
    Blue: { value: 19, index: 1 },
    Yellow: { value: 3, index: 2 },
    Green: { value: 5, index: 3 },
    Purple: { value: 2, index: 4 },
    Orange: { value: 3, index: 5 },
  };
  const datavalue = {
    datasets: [
      {
        label: "# of Votes",
        data: [],
        backgroundColor: [],
        borderWidth: 1,
      },
    ],
  };
  const [data, setData] = useState({ ...datavalue });
  const [labels, setlabels] = useState([
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Orange",
  ]);
  const handleChange = (event) => {
    const demo = data1[event.target.value];
    let bgColors = [...data?.datasets[0].backgroundColor];
    let dataValues = [...data?.datasets[0].data];
    if (bgColors.some((c) => c === event.target.value)) {
      setData({
        ...datavalue,
        datasets: [
          {
            ...datavalue?.datasets[0],
            backgroundColor: bgColors,
            data: dataValues,
          },
        ],
      });
      bgColors.splice(demo.index, 1);
      dataValues.splice(demo.index, 1);
    } else {
      bgColors.splice(demo.index, 0, event.target.value);
      dataValues.splice(demo.index, 0, demo.value);
      setData({
        ...datavalue,
        datasets: [
          {
            ...datavalue?.datasets[0],
            backgroundColor: bgColors,
            data: dataValues,
          },
        ],
      });
    }
  };
  return (
    <Card
      sx={{ maxWidth: 310 }}
      style={{ height: "385px" }}
      variant="outlined"
      className="p-5"
    >
      <div className="flex justify-between p-5">
        <div>Ad Insights</div>
        <div>
          <Select
            style={{ height: "35px", width: "90px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={labels}
            label="Color"
            onChange={handleChange}
          >
            {labels.map((label) => (
              <MenuItem key={label} value={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <hr></hr>
      <Doughnut data={data} />
    </Card>
  );
}
