import Header from "@/components/Header";
import banner from "../../public/Home_Banner.jpg";
import brand from "../../public/build-your-brand-icon.webp";
import awareness from "../../public/generate-awarenes-icon.png";
import business from "../../public/grow-your-business-icon.png";
import Image from "next/image";
import TopNavBar from "@/components/TopNavBar";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";

const people = [
  {
    name: "Build your brand",
    email: "leslie.alexander@example.com",
    imageUrl: brand.src,
  },
  {
    name: "Generate awareness",
    email: "michael.foster@example.com",
    imageUrl: awareness.src,
  },
  {
    name: "Grow your business",
    email: "dries.vincent@example.com",
    imageUrl: business.src,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex flex-col  ">
        <div className="min-h-[calc(100vh-204px)]">
          <Image
            src={banner}
            alt=""
            className="absolute inset-0 -z-10 h-auto w-full object-cover"
          />

          <div className="flex container pt-24 w-full mx-auto">
            <div className="max-w-xl">
              <h1 className="text-primary text-6xl mb-6 leading-[.883em] uppercase font-bold">
                Your marketing doesnt need to be a balancing act
              </h1>
              <p className="text-4xl text-body font-light">
                It can be all the good parts you need, working together to make
                your business{" "}
                <span className="font-bold">truly noticeable.</span>
              </p>
              <Button
                variant="outline"
                className="mt-6  hover:bg-secondary hover:text-white  bg-transparent border-2  text-secondary text-lg font-medium border-secondary rounded-none"
              >
                Learn More <Icons.chevronsRight className="ml-2  h-auto w-4" />
              </Button>
            </div>
          </div>
        </div>
        <section className="relative container py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-primary uppercase mb-6 text-3xl">
                Design At Work gives you{" "}
                <strong>all the parts to build a brand</strong> — and a plan —
                to market your business.
              </h2>
              <div className="grid lg:grid-cols-3 gap-16">
                <div className="flex items-start justify-end">
                  <img
                    alt="Orange Chevrons Right"
                    className="mt-3"
                    width="56"
                    height="21"
                    src="https://designatwork.com/wp-content/themes/designatwork/assets/images/orange-cevron-right.svg"
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-lg">
                    When you have a remarkable company, sometimes getting
                    business isn’t the hard part. It’s maintaining it. Growing
                    it. Keeping it. Marketing is essential to this continuity —
                    to this progress. And as a{" "}
                    <a
                      className="text-secondary font-medium underline underline-offset-2"
                      href="https://designatwork.com/integrated-marketing/"
                    >
                      full-service integrated marketing firm
                    </a>{" "}
                    in Houston, Texas, Design At Work takes ownership of your
                    marketing through collaboration, execution and partnership.
                    It’s our way of being great to make you exceptional.
                  </p>
                  <p className="mt-6">
                    Your business is unique. And your marketing should be, too.
                    Design At Work gets you{" "}
                    <strong className="text-primary">differently.</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className=" relative p-16 bg-white daw-corner-frame max-w-fit ">
              <ul role="list" className=" ">
                {people.map((person) => (
                  <li key={person.email} className="flex gap-x-4 py-5">
                    <img
                      className="h-16 w-16 flex-none  bg-gray-50"
                      src={person.imageUrl}
                      alt=""
                    />
                    <div className="min-w-0 flex items-center">
                      <p className="text-lg uppercase font-bold tracking-widest leading-6 text-body">
                        {person.name}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="absolute bottom-[-1rem] hover:bg-secondary hover:text-white left-0 right-0 max-w-fit mx-auto  bg-transparent border-2  text-secondary text-lg font-medium border-secondary rounded-none"
              >
                Request a Consult{" "}
                <Icons.chevronsRight className="ml-2  h-auto w-4" />
              </Button>
            </div>
          </div>
        </section>
        {/* <div className=" py-24 sm:py-32">
          <div className="mx-auto ">
            <div className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
              <div className="block-bg-line bg-gray-200"> </div>
              <div />
              <div className="mx-auto p-20 bg-gray-100 grid w-full max-w-xl grid-cols-3 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                  alt="Tuple"
                  width={105}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                  alt="Reform"
                  width={104}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  width={140}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"
                  alt="Laravel"
                  width={136}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <img
                  className="max-h-12 w-full object-contain object-left"
                  src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
                  alt="Statamic"
                  width={147}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
}
