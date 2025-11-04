import Image from "next/image";

const Skills = () => {
  return (
    <div>
      <div>
        <h2 className="text-center text-3xl font-bold text-gray-400">
          Habilidades
        </h2>
        <ul>
          <li className="flex items-center justify-center font-bold bg-gray-600 mx-3 rounded-full mx-60 mt-2 p-1">
            <Image
              src="/html5.svg"
              alt="icone do programa"
              width={30}
              height={30}
            />{" "}
            HTML5
          </li>
          <li className="flex items-center justify-center font-bold bg-gray-600 mx-3 rounded-full mx-60 mt-2 p-1">
            <Image
              src="/css3.svg"
              alt="icone do programa"
              width={30}
              height={30}
            />{" "}
            CSS3
          </li>
          <li className="flex items-center justify-center font-bold bg-gray-600 mx-3 rounded-full mx-60 mt-2 p-1">
            <Image
              src="/javascript.svg"
              alt="icone do programa"
              width={30}
              height={30}
            />
            JavaScript
          </li>
          <li className="flex items-center justify-center font-bold bg-gray-600 mx-3 rounded-full mx-60 mt-2 p-1">
            <Image
              src="/typescript.svg"
              alt="icone do programa"
              width={30}
              height={30}
            />
            TypeScript
          </li>
          <li className="flex items-center justify-center font-bold bg-gray-600 mx-3 rounded-full mx-60 mt-2 p-1">
            <Image
              src="/react.svg"
              alt="icone do programa"
              width={30}
              height={30}
            />
            React
          </li>
          <li className="flex items-center justify-center font-bold bg-gray-600 mx-3 rounded-full mx-60 mt-2 p-1">
            <Image
              src="/github.svg"
              alt="icone do programa"
              width={30}
              height={30}
            />
            Github
          </li>
          <li className="flex items-center justify-center font-bold bg-gray-600 mx-3 rounded-full mx-60 mt-2 p-1">
            <Image
              src="/tailwind.svg"
              alt="icone do programa"
              width={30}
              height={30}
            />
            Tailwind
          </li>
          <li className="flex items-center justify-center font-bold bg-gray-600 mx-3 rounded-full mx-60 mt-2 p-1">
            <Image
              src="/node.svg"
              alt="icone do programa"
              width={30}
              height={30}
            />
            Node
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
