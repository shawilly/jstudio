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
    cost: "Contact for details.",
  },
  {
    service: "Basic Men's Cut",
    cost: '"',
  },
  {
    service: "Wash and Blow Dry",
    cost: '"',
  },
  {
    service: "Color and Style",
    cost: '"',
  },
  {
    service: "Highlights and Foil",
    cost: '"',
  },
  {
    service: "Children's Cut",
    cost: '"',
  },
  {
    service: "Texture/Wave",
    cost: '"',
  },
];

export const Services = () => {
  return (
    <div id="services" className="mt-[200px]">
      <div className="container">
        <h1 className="text-4xl text-secondary mt-12 w-full">Services</h1>
        <Table className="px-12 m-10 text-secondary">
          <TableCaption>
            Our prices are very competitive. Please speak with one of our
            experts for a quote.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>Cost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service, index) => (
              <TableRow key={index}>
                <TableCell>{service.service}</TableCell>
                <TableCell>{service.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
