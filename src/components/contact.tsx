import { config } from "@/lib/config";
import { phone_number } from "@/lib/constants";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export const Contact = () => {
  const apiKey = config.googleMapsApiKey();

  return (
    <section
      className="mpb-10 flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-purple-300 p-10 text-white xl:p-5 xl:pb-0"
      id="contact"
    >
      <div className="h-max-3/4 ml-5 w-[100%] border-separate overflow-hidden rounded-l-2xl rounded-r-2xl shadow-lg xl:w-[80%]">
        <GoogleMapsEmbed
          apiKey={apiKey}
          mode="place"
          height={345}
          width="100%"
          q="484+Ancaster+Ave,Ottawa,ON+K2B+5B7,Canada"
        />
      </div>
      <div className="flex h-1/5 w-full flex-row items-center justify-center pt-14 text-xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] xl:pt-10 xl:text-4xl">
        <p className="mt-12 text-center">
          Open Monday to Sunday by appointment
          <br></br>
          <br></br>
          <Link href={`tel:+${phone_number.number}`}>
            <span className="flex items-center justify-center gap-2">
              <span>
                Call us at <br></br>
                <span className="flex flex-row items-center justify-center p-4 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:text-pink-500">
                  <FaPhoneAlt />
                  {phone_number.formatted}
                </span>
                to book in
              </span>
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
};
