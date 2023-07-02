"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import { Icons } from "@/components/Icons";

import { cn } from "@/lib/utils";
import Logo from "../../public/logo.png";
import Image from "next/image";

export default function TopNavBar() {
  return (
    <Disclosure as="nav" className="bg-white relative py-8">
      {({ open }) => (
        <>
          <div className="mx-auto container ">
            <div className="flex justify-between">
              <div className="flex w-full justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block h-8 w-auto lg:hidden"
                    src={Logo}
                    alt="Your Company"
                  />
                  <Image
                    className="hidden h-24 w-auto lg:block"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden  sm:flex sm:flex-col sm:space-y-8">
                  <div className="ml-auto flex space-x-2">
                    <div className="rounded-full border border-secondary p-2   ">
                      <Icons.linkedin className="h-4 w-4  stroke-0 fill-secondary " />
                    </div>

                    <div className="rounded-full border border-secondary p-2   ">
                      <Icons.facebook className="h-4 w-4  stroke-0 fill-secondary " />
                    </div>
                    <div className="rounded-full border border-secondary p-2   ">
                      <Icons.instagram className="h-4 w-4 stroke-secondary stroke-2  " />
                    </div>
                  </div>
                  <div className="flex space-x-8 ">
                    <a
                      href="#"
                      className="inline-flex items-center text-lg uppercase font-medium tracking-widest text-body hover:text-secondary"
                    >
                      Blog
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-lg uppercase font-medium tracking-widest text-body hover:text-secondary"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-lg uppercase font-medium tracking-widest text-body hover:text-secondary"
                    >
                      Culture & Careers
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-lg uppercase font-medium tracking-widest text-body hover:text-secondary"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-body hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Icons.x className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Icons.menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
