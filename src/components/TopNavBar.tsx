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

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    tom@example.com
                  </div>
                </div>
                {/* <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
