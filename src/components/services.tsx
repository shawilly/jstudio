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
    <section id="services" className="flex flex-col justify-center w-full lg:h-screen p-5 bg-gradient-to-b from-white to-pink-100">
      <h1 className="text-4xl text-secondary mt-12 pb-4">Services we offer</h1>
      <div className=" bg-gray-100 w-full">
        <div className="overflow-x-auto">
          <Table className="md:mx-2 md:mt-4 md:mb-8 mx-8 mt-4 mb-8">
            <TableCaption className="text-sm italic text-gray-600">
              Our prices are very competitive. Please speak with one of our
              experts for a quote.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold text-secondary">
                  Service
                </TableHead>
                <TableHead className="font-semibold text-secondary">
                  Cost (starting at)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map(({ service, cost }, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-200" : ""}
                >
                  <TableCell className="py-2 font-medium">{service}</TableCell>
                  <TableCell className="py-2">{cost}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};
