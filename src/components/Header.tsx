import { FC } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/MenuBar";
import TopNavBar from "./TopNavBar";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className="w-full top-0 sticky z-10 bg-white">
      <TopNavBar />
      <Menubar className="menu  hidden lg:flex divide-x rounded-none  justify-center space-x-0  p-0 h-full border-y border-x-0  mx-auto">
        <MenubarMenu>
          <MenubarTrigger className="uppercase border-l   px-12 font-medium text-lg tracking-widest bg-white focus:text-secondary hover:text-secondary focus:bg-white data-[active]:text-secondary data-[state=open]:bg-white cursor-pointer">
            Branding
          </MenubarTrigger>
          <MenubarContent
            className="rounded-none   shadow-none border  divide-y p-0 flex flex-col items-center justify-center text-center  min-w-0 w-[--radix-menubar-trigger-width]"
            sideOffset={0}
            align="center"
          >
            <MenubarItem className="uppercase flex justify-center w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer ">
              Logo Design
            </MenubarItem>

            <MenubarItem className="uppercase flex justify-center  w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer ">
              Brand Development
            </MenubarItem>

            <MenubarItem className="uppercase flex justify-center  w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer">
              Brand Management
            </MenubarItem>
            <MenubarItem className="uppercase flex justify-center  w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer">
              Rebranding
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="uppercase   px-12 font-medium text-lg tracking-widest bg-white focus:text-secondary hover:text-secondary focus:bg-white data-[active]:text-secondary data-[state=open]:bg-white cursor-pointer">
            Integrated Marketing
          </MenubarTrigger>
          <MenubarContent
            className="rounded-none   shadow-none border  divide-y p-0 flex flex-col items-center justify-center text-center  min-w-0 w-[--radix-menubar-trigger-width]"
            sideOffset={0}
            align="center"
          >
            <MenubarItem className="uppercase flex justify-center w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer ">
              Graphic Design
            </MenubarItem>

            <MenubarItem className="uppercase flex justify-center  w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer ">
              CopyWriting
            </MenubarItem>

            <MenubarItem className="uppercase flex justify-center  w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer">
              Content Marketing
            </MenubarItem>
            <MenubarItem className="uppercase flex justify-center  w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer">
              Marketing Strategy
            </MenubarItem>
            <MenubarItem className="uppercase flex justify-center  w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer">
              Public Relations
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="uppercase  px-12 font-medium text-lg tracking-widest bg-white focus:text-secondary hover:text-secondary focus:bg-white data-[active]:text-secondary data-[state=open]:bg-white cursor-pointer">
            Digital Marketing
          </MenubarTrigger>
          <MenubarContent
            className="rounded-none   shadow-none border  divide-y p-0 flex flex-col items-center justify-center text-center  min-w-0 w-[--radix-menubar-trigger-width]"
            sideOffset={0}
            align="center"
          >
            <MenubarItem className="uppercase flex justify-center w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer ">
              Email Marketing
            </MenubarItem>

            <MenubarItem className="uppercase flex justify-center  w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer ">
              Online Marketing
            </MenubarItem>

            <MenubarItem className="uppercase flex justify-center  w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer">
              Social Media Advertising
            </MenubarItem>
            <MenubarItem className="uppercase flex justify-center  w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer">
              Social Media Marketing
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="uppercase     px-12 font-medium text-lg tracking-widest bg-white focus:text-secondary hover:text-secondary focus:bg-white data-[active]:text-secondary data-[state=open]:bg-white cursor-pointer">
            Web Development
          </MenubarTrigger>
          <MenubarContent
            className="rounded-none   shadow-none border  divide-y p-0 flex flex-col items-center justify-center text-center  min-w-0 w-[--radix-menubar-trigger-width]"
            sideOffset={0}
            align="center"
          >
            <MenubarItem className="uppercase flex justify-center w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer ">
              Website Design
            </MenubarItem>

            <MenubarItem className="uppercase flex justify-center  w-full p-4 tracking-widest !leading-none font-medium text-lg hover:text-secondary focus:text-secondary focus:bg-transparent cursor-pointer ">
              Search Engine Optimization
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            asChild
            className="uppercase !border-r  px-12 font-medium text-lg tracking-widest bg-white focus:text-secondary hover:text-secondary focus:bg-white data-[active]:text-secondary data-[state=open]:bg-white cursor-pointer"
          >
            <a href="/#">Work</a>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Header;
