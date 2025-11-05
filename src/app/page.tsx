import Education from "@/components/portfolio/education";
import Experience from "@/components/portfolio/experience";
import Footer from "@/components/portfolio/footer";
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
          <p className="text-justify mx-3 lg:mx-60">
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
          <div className="flex items-center justify-center gap-4 md:gap-24 m-4">
            <ProjectLinkButton
              href="/Curriculo-dev-2025.pdf"
              children="Visualizar Currículo"
            />

            <Button className="h-7 px-2 text-xs md:h-10 md:text-sm">
              <a
                href="/Curriculo-dev-2025.pdf"
                target="_blank"
                download="Curriculo-dev-2025.pdf"
                rel="noopener noreferrer"
              >
                Baixar Currículo
              </a>
            </Button>
          </div>

          <section id="projects">
            <h2 className="text-center text-xl font-semibold mb-4">Projetos</h2>
            <ProjectDescription
              title={"Projeto Clone"}
              description={
                "Este é um projeto de clone do frontend do Twitter, desenvolvido como parte do curso de React da B7WEB."
              }
              image1={"/imagemTwitter2.jpg"}
              image2={"/imagemTwitter3.jpg"}
              githubUrl="https://github.com/Mariomalaquias/twitter-frontend"
              projectUrl="https://github.com/Mariomalaquias/twitter-frontend"
            />
          </section>
        </CardContent>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <h2 className="text-center text-xl font-semibold">
            Experiência Profissional
          </h2>
          <Experience />
        </section>
        <section id="education">
          <h2 className="text-center text-xl font-semibold">Educação</h2>
          <Education />
        </section>
        <section id="contact">
          <h2 className="text-center text-xl font-semibold">Contato</h2>
        </section>
      </Card>
      <Card>
        <Footer />
      </Card>
    </div>
  );
}
