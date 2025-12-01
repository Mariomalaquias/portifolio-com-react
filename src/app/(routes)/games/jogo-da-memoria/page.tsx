"use client";

import InfoItem from "@/components/jogo-memoria/info-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListRestartIcon, Undo2 } from "lucide-react";
import Image from "next/image";

const JogoDaMemoria = () => {
  let resetCreateGrid = () => {};

  return (
    <div className="min-h-screen w-full bg-amber-400 p-4 md:p-8 flex items-center justify-center">
      <Card
        className="w-full max-w-6xl mx-auto
                   bg-red-600 text-gray-200
                   border-gray-800/30 shadow-[0_0_50px_rgba(0,0,0,0.4),_0_0_70px_rgba(30,30,30,0.3)]
"
        style={{ fontFamily: "var(--font-roboto)" }}
      >
        <CardHeader>
          <CardTitle className="text-center text-5xl font-bold p-8 bg-amber-400 text-red-600">
            Jogo da Memória tema Os Vingadores
          </CardTitle>
        </CardHeader>
        <CardContent className="flex">
          <div>
            <InfoItem label="Tempo" value="00:00" />
            <InfoItem label="Tentativas" value="00" />
            <Button onClick={resetCreateGrid}>
              <Undo2 /> Reiniciar
            </Button>
          </div>
          <div>
            <div className="bg-amber-400">tttt</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JogoDaMemoria;
