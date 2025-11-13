"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { MenuIcon, TextAlignCenterIcon } from "lucide-react";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      <Card className="mx-3 mt-2 bg-gray-600 text-white">
        <CardHeader className="flex justify-between">
          <div className="flex-12">
            <CardTitle className="font-bold text-center text-lg md:text-3xl ">
              Mario Luiz Malaquias
            </CardTitle>
            <nav className="hidden md:block">
              <ul className="flex justify-center gap-3 ">
                <li>
                  <Link href="#about">Sobre</Link>
                </li>
                <li>
                  <Link href="#projects">Projetos</Link>
                </li>
                <li>
                  <Link href="#skills">Habilidades</Link>
                </li>
                <li>
                  <Link href="#experience">Experiência</Link>
                </li>
                <li>
                  <Link href="#education">Educação</Link>
                </li>
                <li>
                  <Link href="#contact">Contato</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className=" md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  className="hover:bg-gray-800"
                  variant="default"
                  size="icon"
                >
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gray-600">
                <SheetHeader>
                  <SheetTitle className="text-3xl">Navegação</SheetTitle>
                </SheetHeader>

                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <nav>
                    <ul className="flex flex-col gap-3 text-center text-2xl font-semibold mt-12">
                      <li>
                        <Link
                          href="#about"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Sobre
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#projects"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Projetos
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#skills"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Habilidades
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#experience"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Experiência
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#education"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Educação
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#contact"
                          onClick={() => setIsSheetOpen(false)}
                        >
                          Contato
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <SheetFooter></SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </CardHeader>
      </Card>
    </>
  );
};

export default Header;
