"use client";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";

export const Services = () => {
  const [serviceRows, _setServiceRows] = useState([
    { service: "Wash, cut, & style", cost: 53 },
    { service: "Wash & blow dry", cost: 35 },
    { service: "Formal hair style", cost: 45 },
    { service: "Up do", cost: 45 },
    { service: "Men's cut & wash", cost: 30 },
    { service: "Boy's cut", cost: 25 },
    { service: "Girl's cut", cost: 30 },
    { service: "Perm and cut", cost: 140 },
    { service: "Root touch up", cost: 85 },
    { service: "Cut & colour", cost: 110 },
    { service: "Cut & colour (long hair)", cost: 120 },
    { service: "Partial highlights", cost: 125 },
    { service: "Cut & partial highlights", cost: 155 },
    { service: "Full highlights", cost: 165 },
    { service: "Toner", cost: 10 },
    { service: "Hair colour refresher", cost: 10 },
    { service: "Gloss treatment", cost: 10 },
    { service: "Balayage" },
    { service: "Ombre" },
    { service: "Full head bleach" },
    { service: "Special effects" },
    { service: "Colour & colour correction" },
  ]);

  // Disabling any because type inference of the columns is difficult with the transformation of header and value
  // Native ts support is unclear in these instances
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [serviceCols, _setServiceCols] = useState<any>([
    { field: "service", flex: 1 },
    {
      headerName: "Cost (starting from)",
      valueGetter: (s: Record<string, Record<string, number>>) =>
        s.data.cost ? `$${s.data.cost}.00 CAD` : "Price by consultation",
      field: "cost",
      flex: 1,
    },
  ]);

  return (
    <section
      id="services"
      className="flex w-full flex-col justify-center bg-gradient-to-b from-[#f9f9f9] to-pink-100 p-5 lg:h-screen"
    >
      <h1 className="mt-12 pb-4 text-4xl font-semibold text-secondary">
        Services we offer
      </h1>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact rowData={serviceRows} columnDefs={serviceCols} />
      </div>
    </section>
  );
};
