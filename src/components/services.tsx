import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const services = [
  {
    service: "Cut and Style",
    cost: "$40",
  },
  {
    service: "Basic Men's Cut",
    cost: "$30",
  },
  {
    service: "Wash and Blow Dry",
    cost: "$20",
  },
  {
    service: "Color and Style",
    cost: "$80",
  },
  {
    service: "Highlights and Foil",
    cost: "$120",
  },
  {
    service: "Children's Cut",
    cost: "$25",
  },
  {
    service: "Texture/Wave",
    cost: "Contact us for details.",
  },
];

export const Services = () => {
  return (
    <div className="w-[80%]">
      <div id="services" className="h-[200px] w-full"></div>
      <div>
        <h1 className="text-4xl text-secondary mt-12 w-full align-left">
          Services
        </h1>
        <Table className="px-12 m-10 text-secondary">
          <TableCaption>
            Our prices are very competitive. Please speak with one of our
            experts for a quote.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Service</TableHead>
              <TableHead className="font-bold">Cost (starting at)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map(({ service, cost }, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{service}</TableCell>
                <TableCell>{cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
