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
const medicineData = [
  { name: "January", medicines: 200 },
  { name: "February", medicines: 220 },
  { name: "March", medicines: 250 },
  { name: "April", medicines: 230 },
  { name: "May", medicines: 260 },
  { name: "June", medicines: 280 },
  { name: "July", medicines: 240 },
  { name: "August", medicines: 300 },
  { name: "September", medicines: 320 },
  { name: "October", medicines: 310 },
  { name: "November", medicines: 330 },
  { name: "December", medicines: 350 },
];

const totalMed = medicineData.reduce((sum, bill) => (sum += bill.medicines), 0);

const donationData = [
  { name: "January", amount: 5000 },
  { name: "February", amount: 6000 },
  { name: "March", amount: 5500 },
  { name: "April", amount: 7000 },
  { name: "May", amount: 7500 },
  { name: "June", amount: 8000 },
  { name: "July", amount: 6500 },
  { name: "August", amount: 9000 },
  { name: "September", amount: 9500 },
  { name: "October", amount: 10000 },
  { name: "November", amount: 8500 },
  { name: "December", amount: 11000 },
];

const totaldonationData = donationData.reduce(
  (sum, bill) => (sum += bill.amount),
  0
);
const AdminDashboard = () => {
  return (
    <div>
      <Nav />
      <div className="text-center font-semibold mt-10 font-size-12 text-xl">
        Analytics
      </div>
      <div className="flex flex-row gap-5 m-5">
        <Card title="Total Visits">
          <MetricLarge value={1980}></MetricLarge>
          <MetricIncrement
            value={89}
            description="since last month"
          ></MetricIncrement>
        </Card>
        <Card title="Total Medicines">
          <MetricLarge value={totalMed}></MetricLarge>
          <MetricIncrement
            value={75}
            description="since last month"
          ></MetricIncrement>
        </Card>
        <Card title="Total Donations">
          <MetricLarge value={totaldonationData}></MetricLarge>
          <MetricIncrement
            value={+17}
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
              data={medicineData}
              metrics={["medicines"]}
              dimensions={["name"]}
            ></BarChart>
          </Card>
          <Card title="Area Chart">
            <AreaChart
              data={donationData}
              metrics={["amount"]}
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
