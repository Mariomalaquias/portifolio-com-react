import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  alt: string;
  image: string;
  link: string;
};

const GameAndApp = (props: Props) => {
  return (
    <>
      <Link href={props.link}>
        <div className="m-4">
          <h2 className="text-white font-bold text-center mt-4">
            {props.name}
          </h2>
          <Image
            className="border-2 border-red-500 rounded-xl mx-auto"
            src={props.image}
            width={220}
            height={220}
            alt={props.alt}
          />
        </div>
      </Link>
    </>
  );
};

export default GameAndApp;
