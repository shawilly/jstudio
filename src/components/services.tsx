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
    <section
      id="services"
      className="flex w-full flex-col justify-center bg-gradient-to-b from-[#f9f9f9] to-pink-100 p-5 lg:h-screen"
    >
      <h1 className="mt-12 pb-4 text-4xl font-semibold text-secondary">
        Services we offer
      </h1>
      <div className=" w-full bg-gray-100">
        <div className="overflow-x-auto">
          <Table className="mx-8 mb-8 mt-4 md:mx-2 md:mb-8 md:mt-4">
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
