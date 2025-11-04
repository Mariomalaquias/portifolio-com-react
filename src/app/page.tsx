import Experience from "@/components/portfolio/experience";
import Header from "@/components/portfolio/header";
import ProjectLinkButton from "@/components/portfolio/link-button";
import Skills from "@/components/portfolio/skills";
import ProjectDescription from "@/components/projects/project-description";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-400 m-0">
      <Header />
      <Card className="mx-3 bg-gray-500">
        <CardContent id="about">
          <h2 className="text-center text-xl font-semibold">Sobre</h2>
          <p className="">
            Formado em Análises de Sistema e Engenharia Elétrica com
            conhecimento em desenvolvimento web, utilizando tecnologias como
            HTML, CSS, JavaScript, TypeScript, React, Git, Github, Tailwind,
            MySQL e Node.js. Habilidade em criação de soluções personalizadas,
            desenvolvimento de projetos e gestão de banco de dados. Experiência
            prévia em venda técnica e consultoria técnica, proporcionando uma
            abordagem consultiva no atendimento ao cliente e resolução de
            problemas.
          </p>
          <div className=" flex items-center justify-center ">
            <Image
              src="/foto.png"
              alt="foto do mario"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="flex items-center justify-center gap-24 m-4">
            <ProjectLinkButton
              href="/Curriculo_dev_2025.pdf"
              children="Visualizar Currículo"
            />

            <Button>Baixar Currículo</Button>
          </div>
          <ProjectDescription
            title={"Projeto Clone"}
            description={
              "ste é um projeto de clone do frontend do Twitter, desenvolvido como parte do curso de React da B7WEB."
            }
            image1={"/imagemTwitter2.jpg"}
            image2={"/imagemTwitter3.jpg"}
            githubUrl="https://github.com/Mariomalaquias/twitter-frontend"
            projectUrl="https://github.com/Mariomalaquias/twitter-frontend"
          />
        </CardContent>
        <section id="skills">
          <Skills />
        </section>
        <section>
          <Experience />
        </section>
      </Card>
    </div>
  );
}
