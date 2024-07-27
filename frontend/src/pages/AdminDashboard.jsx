import {
  Card,
  LineChart,
  BarChart,
  AreaChart,
  MetricLarge,
  MetricIncrement,
} from "frolic-react";
import Nav from "../components/Admin/Nav";
import TableLeft from "../components/Admin/TableLeft";
import TableRight from "../components/Admin/TableRight";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
];

const AdminDashboard = () => {
  return (
    <div>
      <Nav />
      <div className="text-center font-semibold mt-10 font-size-12 text-xl">
        Analytics
      </div>
      <div className="flex flex-row gap-5 m-5">
        <Card title="Total Sales">
          <MetricLarge value={100}></MetricLarge>
          <MetricIncrement
            value={10}
            description="since last month"
          ></MetricIncrement>
        </Card>
        <Card title="Total Sales">
          <MetricLarge value={100}></MetricLarge>
          <MetricIncrement
            value={10}
            description="since last month"
          ></MetricIncrement>
        </Card>
        <Card title="Total Sales">
          <MetricLarge value={100}></MetricLarge>
          <MetricIncrement
            value={-10}
            description="since last month"
          ></MetricIncrement>
        </Card>
      </div>
      <div className="mt-2 p-10 pt-4">
        <div className="grid grid-cols-3 gap-5">
          <Card title="Line Chart">
            <LineChart
              data={data}
              metrics={["uv", "pv", "amt"]}
              dimensions={["name"]}
            ></LineChart>
          </Card>
          <Card title="Bar Chart">
            <BarChart
              data={data}
              metrics={["uv", "pv", "amt"]}
              dimensions={["name"]}
            ></BarChart>
          </Card>
          <Card title="Area Chart">
            <AreaChart
              data={data}
              metrics={["uv", "pv", "amt"]}
              dimensions={["name"]}
            ></AreaChart>
          </Card>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 rounded border-s-fuchsia-50 mt-6  pl-10 p-4 overflow-auto">
          <div className="text-center font-semibold mt-10 font-size-12 text-xl">
            Top Performers
          </div>
          <div className="h-60 overflow-auto">
            <TableLeft />
          </div>
        </div>
        <div className="w-1/2 rounded border-s-fuchsia-50 mt-6  pl-10 p-4 overflow-auto">
          <div className="text-center font-semibold mt-10 font-size-12 text-xl">
            Top Drugs
          </div>
          <div className="h-60 overflow-auto">
            <TableRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
