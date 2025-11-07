"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

function raffleArray<T>(arr: T[]): T[] {
  // O loop começa do fim e vai até o segundo elemento
  for (let i = arr.length - 1; i > 0; i--) {
    // Escolhe um índice aleatório 'j' entre 0 e i
    const j = Math.floor(Math.random() * (i + 1));
    // Troca os elementos nas posições i e j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const AmigoSecreto = () => {
  const [friend, setFriend] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [drawResults, setDrawResults] = useState<string[]>([]);

  const AddFriend = () => {
    if (friend.trim() !== "") {
      setList([...list, friend]);
      setFriend("");
    }
  };

  const RaffleFriends = () => {
    // Validação de mínimo de pessoas
    if (list.length <= 2) {
      alert("Adicione no mínimo 3 pessoas para o sorteio!");
      return;
    }

    // !! IMPORTANTE: Passa uma CÓPIA de 'list' para não modificar o estado
    const shuffledList = raffleArray([...list]);

    const results: string[] = [];

    // Loop para criar os pares
    for (let i = 0; i < shuffledList.length; i++) {
      if (i === shuffledList.length - 1) {
        // O último amigo tira o primeiro para fechar o ciclo
        results.push(`${shuffledList[i]} 🎁 --> ${shuffledList[0]}`);
      } else {
        // O amigo 'i' tira o amigo 'i + 1'
        results.push(`${shuffledList[i]} 🎁 --> ${shuffledList[i + 1]}`);
      }
    }

    // Salva os resultados no estado
    setDrawResults(results);
  };

  // Função para o botão "Reiniciar"
  const resetGame = () => {
    setList([]);
    setFriend("");
    setDrawResults([]);
  };

  return (
    <div className="w-screen h-screen bg-gray-600 flex items-center justify-center bg-[url(/amigo-secretoA.png)] bg-repeat">
      <Link href={"/"}>
        <Button className="absolute top-10 left-10 cursor-pointer hover:bg-green-600 transition duration-700 ease-in-out">
          Sair do Jogo
        </Button>
      </Link>

      <Card className="bg-[linear-gradient(to_right,_#FF0000,_#ADFF2F,_#B8860B)]">
        <CardHeader>
          <CardTitle className="text-white text-center text-4xl drop-shadow-[2px_2px_0_#000]">
            Amigo Secreto
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row">
          {/* Coluna da Esquerda (Adicionar) */}
          <div className="pr-6">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label className="text-xl">Digite o nome de um amigo</Label>
              <Input
                type="text"
                placeholder="Nome do amigo"
                value={friend}
                onChange={(e) => setFriend(e.target.value)}
              />
            </div>
            <div className="mt-4 space-x-2">
              <Button onClick={AddFriend} className="cursor-pointer">
                Adicionar
              </Button>
              <Button onClick={RaffleFriends} className="cursor-pointer">
                Sortear
              </Button>
              <Button
                onClick={resetGame}
                variant="outline"
                className="cursor-pointer"
              >
                Reiniciar
              </Button>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Amigos Adicionados:</h4>
              {list.length === 0 ? (
                <p className="text-sm text-gray-500">
                  Nenhum amigo adicionado ainda.
                </p>
              ) : (
                <ul className="list-disc list-inside">
                  {list.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:ml-6 md:pl-6 md:border-l border-gray-200">
            <h3 className="font-semibold text-lg">Sorteio:</h3>
            {drawResults.length > 0 ? (
              <ul className="list-none mt-2 space-y-1">
                {drawResults.map((result, index) => (
                  <li key={index} className="font-mono text-md">
                    {result}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">
                Clique em "Sortear" para ver os resultados.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AmigoSecreto;
