"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

const NumberGenerator = () => {
  const [qtd, setQtd] = useState("");
  const [doNumero, setDoNumero] = useState("");
  const [ateONumero, setAteONumero] = useState("");

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[url(/sorteadorM.png)]">
      <Link href={"/"}>
        <Button className="absolute top-10 left-10 cursor-pointer hover:bg-green-600 transition duration-700 ease-in-out bg-green-700">
          Sair do Jogo
        </Button>
      </Link>

      <Card className="bg-green-700 text-green-50">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-green-50">
            Sorteador de números
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-y-4">
            <div className="flex justify-between">
              <Label className="text-xl mr-4">Quantidade de números</Label>
              <Input
                value={qtd}
                onChange={(e) => setQtd(e.target.value)}
                type="number"
                className="w-24"
              />
            </div>
            <div className="flex justify-between">
              <Label className="text-xl">Do número</Label>
              <Input
                value={doNumero}
                onChange={(e) => setDoNumero(e.target.value)}
                type="number"
                className="w-24"
              />
            </div>
            <div className="flex justify-between">
              <Label className="text-xl">Até o número</Label>
              <Input
                value={ateONumero}
                onChange={(e) => setAteONumero(e.target.value)}
                type="number"
                className="w-24"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-evenly mt-4">
            <Button className="cursor-pointer hover:bg-green-600 transition duration-700 ease-in-out bg-green-500">
              Sortear
            </Button>
            <Button className="cursor-pointer hover:bg-green-600 transition duration-700 ease-in-out bg-green-500">
              Reiniciar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NumberGenerator;
