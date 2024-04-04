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
    <div className="flex flex-row items-center">
      {Array.from(testimonials).map(([review, { name, score }], index) => (
        <div
          key={index}
          className="w-full
                md:w-[80%]
                lg:w-[60%]
                xl:w-[50%]
                mt-8
                bg-primary
                rounded-lg
                shadow-md
                p-4
                text-secondary
                text-center
                hover:drop-shadow-xl
                "
        >
          <p>
            &quot;<i>{review}</i>&quot;
          </p>
          <p className="mt-4">- {name}</p>
          <div className="flex justify-center">
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
      className="flex justify-center w-full h-screen p-5"
    >
      <div className="container">
        <h1 className="text-4xl text-secondary mt-12 w-full">
          What people have to say
        </h1>
        <Reviews />
        <div className="flex justify-center mt-8">
          <Button className="text-primary" variant="outline">
            <FaGoogle className="w-6 h-6 mr-[2px]" />
            <a href="https://www.google.com/search?sa=X&sca_esv=183f9140eeaab3e5&sca_upv=1&tbm=lcl&q=richmond%20hair%20studio%20reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDMwNzK1NLAwNTcxsTQ2MjY1M9vAyPiKUaYoMzkjNz8vRSEjMbNIobikNCUzX6EotSwztbx4ESteaQDlB1W-WQAAAA&rldimm=16072590857449323566&hl=en-IE&ved=0CAUQ5foLahcKEwjIhsiSiJ2FAxUAAAAAHQAAAAAQBA&biw=1512&bih=858&dpr=2#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSURKa3ZQWnZRRRAB">
              oogle reviews
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
