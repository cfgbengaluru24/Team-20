import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Sl.no", "Name of Drug", "Donated"];

const TABLE_ROWS = [
  {
    sl: 1,
    name: "Ferrous Sulfate",
    job: "1300",
  },
  {
    sl: 2,
    name: "Folic Acid",
    job: "9099",
  },
  {
    sl: 3,
    name: "Albendazole",
    job: "7000",
  },
  {
    sl: 4,
    name: "Paracetamol",
    job: "6987",
  },
  {
    sl: 5,
    name: "Ibuprofen",
    job: "5200",
  },
];

export function TableRight() {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr className="border rounded">
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, sl }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50 border rounded">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {sl}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {job}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default TableRight;
