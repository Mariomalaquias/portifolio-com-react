import Image from "next/image";
import { Card } from "../ui/card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Button } from "../ui/button";
import { useState } from "react";
import ProjectLinkButton from "../portfolio/link-button";

type Props = {
  title: string;
  description: string;
  image1: string | StaticImport;
  image2: string | StaticImport;
  githubUrl: string; // 2. Adicione a URL do Github
  projectUrl: string; // 3. Adicione a URL do projeto
};

const ProjectDescription = (props: Props) => {
  return (
    <>
      <Card className="bg-gray-400 text-white">
        <h2 className="text-center text-2xl font-semibold">{props.title}</h2>
        <h3 className="text-center text-xl font-semibold">
          Descrição do projeto
        </h3>
        <p className="m-3 text-center">{props.description}</p>
        <div className="flex justify-around ">
          <Image
            src={props.image1}
            alt="foto do mario"
            width={500}
            height={400}
          />
          <Image
            src={props.image2}
            alt="foto do mario"
            width={500}
            height={400}
          />
        </div>
        <div className="flex justify-center gap-4 p-4">
          <ProjectLinkButton href={props.githubUrl}>
            Ver no Github
          </ProjectLinkButton>
          <ProjectLinkButton href={props.projectUrl}>
            Abrir Projeto
          </ProjectLinkButton>
        </div>
      </Card>
    </>
  );
};

export default ProjectDescription;
