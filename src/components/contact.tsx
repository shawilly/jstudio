import { config } from "@/lib/config";
import { phone_number } from "@/lib/constants";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  const apiKey = config.googleMapsApiKey();

  return (
    <section
      className="mpb-10 flex h-[80%] flex-col-reverse bg-purple-300 text-white xl:flex-row xl:p-5 xl:pb-0"
      id="contact"
    >
      <div className="mt-10 overflow-hidden xl:m-10 xl:mt-0 xl:h-3/5 xl:w-2/5 xl:rounded-l-2xl xl:rounded-r-2xl">
        <ContactForm />
      </div>
      <div className="relative flex flex-col items-center">
        <div className="xl:w-max-1/2 ml-5 h-[350px] overflow-hidden rounded-l-2xl rounded-r-2xl border-[2px] border-pink-200 bg-pink-300 xl:border-[5px]">
          <GoogleMapsEmbed
            apiKey={apiKey}
            mode="place"
            height={345}
            width={700}
            q="484+Ancaster+Ave,Ottawa,ON+K2B+5B7,Canada"
          />
        </div>
        <div className="flex h-1/5 w-[100%] flex-row items-center justify-center pt-10 font-semibold text-[#282b2d]">
          <p>
            Open Monday to Sunday by appointment
            <br />
            <Link href={`tel:+${phone_number.number}`}>
              <span className="hover:scale-200 underline transition delay-150 duration-300 ease-in-out hover:text-pink-500">
                Feel free to text or call us{"   "}
                {phone_number.formatted}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
