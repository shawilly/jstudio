import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

const testimonials = new Map<string, { name: string; score: number }>([
  [
    "Fantastic haircut, color, waxing and conversation",
    { name: "Joanne Johnson", score: 5 },
  ],
  [
    "Excellent service kind and friendly staff.",
    { name: "Issy Plu", score: 5 },
  ],
  [
    "All in all a great experience and enjoyable atmosphere.",
    { name: "Magda Hechema", score: 5 },
  ],
]);

const Reviews = () => {
  return (
    <div className="flex flex-col justify-between lg:flex-row lg:justify-around items-center large:gap-y-[12px]">
      {Array.from(testimonials).map(([review, { name, score }], index) => (
        <div
          key={index}
          className="flex flex-col justify-between w-[75%] lg:basis-2/5 h-[80%] m-4 p-5 bg-primary rounded-lg shadow-md text-secondary text-center hover:drop-shadow-xl bg-white"
        >
          <p>
            &quot;<i>{review}</i>&quot;
          </p>
          <p className="mt-4">
            - <span className="font-semibold">{name}</span>
          </p>
          <div className="flex justify-center text-yellow-500">
            {[...Array(score)].map((_, index) => (
              <MdOutlineStarPurple500 key={index} className="w-6 h-6" />
            ))}
            {[...Array(5 - score)].map((_, index) => (
              <MdOutlineStarBorderPurple500 key={index} className="w-6 h-6" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col justify-center w-screen h-full p-5 bg-purple-300"
    >
      <h1 className="text-4xl text-secondary mt-12 mb-12 w-full flex justify-center font-semibold">
        What people have to say
      </h1>
      <Reviews />
      <div className="flex justify-center p-5 lg:p-12">
        <Button
          className="font-bold grey-100 transition ease-in-out delay-150 hover:scale-110 hover:drop-shadow-2xl duration-300 hover:text-blue-700"
          variant="default"
        >
          Go to&nbsp;
          <span className="inline-block">
            <FaGoogle className="w-6 h-6 mr-[2px] hover:text-green-600" />
          </span>
          <a href="https://www.google.com/search?sa=X&sca_esv=183f9140eeaab3e5&sca_upv=1&tbm=lcl&q=richmond%20hair%20studio%20reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDMwNzK1NLAwNTcxsTQ2MjY1M9vAyPiKUaYoMzkjNz8vRSEjMbNIobikNCUzX6EotSwztbx4ESteaQDlB1W-WQAAAA&rldimm=16072590857449323566&hl=en-IE&ved=0CAUQ5foLahcKEwjIhsiSiJ2FAxUAAAAAHQAAAAAQBA&biw=1512&bih=858&dpr=2#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSURKa3ZQWnZRRRAB">
            oogle reviews
          </a>
        </Button>
      </div>
    </section>
  );
};
