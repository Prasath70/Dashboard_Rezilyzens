import React from "react";
import {
  Pie,
  PieChart,
  Cell,
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
function Summary() {
  const piedata = [
    { name: "Windows", value: 320 },
    { name: "Linux", value: 230 },
    { name: "OtherOs", value: 100 },
  ];
  const dognutdata = [
    { name: "Patch", value: 320 },
    { name: "SOC", value: 230 },
    { name: "VPAT", value: 100 },
  ];

  const gplinedata = [
    {
      name: "HR Department",
      Vulnerability: 5,
      SOC: 10,
    },
    {
      name: "CRM",
      Vulnerability: 4,
      SOC: 2,
    },
    {
      name: "Website",
      Vulnerability: 10,
      SOC: 3,
    },
  ];

  const bardata = [
    {
      name: "Firefall",
      count_1: 5,
    },
    {
      name: "Windows",
      count_2: 4,
    },
    {
      name: "0365",
      count_3: 3,
    },
  ];
  const COLORS = ["#FE4B4A", "#5FFE81", "#FEAA28"];

  return (
    <div className="w-full h-10  rounded-3xl px-2 grid gap-4 flex-1 overflow-auto lg:grid-flow-row lg:grid-cols-2 lg:px-11 lg:py-11">
      <div className="w-full rounded-md border border-[#4D66D0] bg-opacity-10 backdrop-filter backdrop-blur-lg  bg-white">
        <div className="w-full h-10 bg-[#42518F] flex items-center justify-center">
          <h1 className=" text-white tracking-wide ">
            Unpatched Assets Since 30 days
          </h1>
        </div>
        <div className="text-white p-5 ">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={piedata}
                dataKey="value"
                nameKey="name"
                fill="#82ca9d"
                label={({ name }) => ` ${name}`}
              >
                {piedata.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-full rounded-md border border-[#4D66D0] bg-opacity-10 backdrop-filter backdrop-blur-lg  bg-white">
        <div className="w-full h-10 bg-[#42518F] flex items-center justify-center">
          <h1 className=" text-white tracking-wide ">
            Unpatched Assets Since 30 days
          </h1>
        </div>
        <div className="text-white p-5 ">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart width={500} height={300} data={bardata}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fill: "white" }} />
              <YAxis tick={{ fill: "white" }} />
              <Tooltip />
              <Bar
                dataKey="count_1"
                fill={COLORS[0]}
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="count_2"
                fill={COLORS[1]}
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="count_3"
                fill={COLORS[2]}
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-full rounded-md border border-[#4D66D0] bg-opacity-10 backdrop-filter backdrop-blur-lg  bg-white">
        <div className="w-full h-10 bg-[#42518F] flex items-center justify-center">
          <h1 className=" text-white tracking-wide ">
            Unpatched Assets Since 30 days
          </h1>
        </div>
        <div className="text-white p-5 ">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={dognutdata}
                nameKey="name"
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                paddingAngle={7}
                label={({ name }) => ` ${name}`}
              >
                {" "}
                {dognutdata.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-full rounded-md border border-[#4D66D0] bg-opacity-10 backdrop-filter backdrop-blur-lg  bg-white">
        <div className="w-full h-10 bg-[#42518F] flex items-center justify-center">
          <h1 className=" text-white tracking-wide ">
            Weak Points (EMP & Machines)
          </h1>
        </div>
        <div className="text-white p-5 flex-1">
      <div className="text-white p-5">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart width={500} height={300} data={gplinedata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fill: "white" }} />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip />
            <Bar
              dataKey="Vulnerability"
              fill="#5FFE81"
              activeBar={<rect fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="SOC"
              fill="#FE4B4A"
              activeBar={<rect fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Summary;
