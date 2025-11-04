import { Card, CardHeader, CardTitle } from "../ui/card";

const Header = () => {
  return (
    <>
      <Card className="mx-3 mt-2 bg-gray-600 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-3">
            Mario Luiz Malaquias
          </CardTitle>
          <nav>
            <ul className="flex justify-center gap-3 ">
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#skills">Habilidades</a>
              </li>
              <li>
                <a href="#experience">Experiência</a>
              </li>
              <li>
                <a href="#education">Educação</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
        </CardHeader>
      </Card>
    </>
  );
};

export default Header;
