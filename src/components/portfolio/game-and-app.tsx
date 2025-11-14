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
        <div>
          <h2 className="text-white font-bold text-center">{props.name}</h2>
          <Image
            className="border-2 border-red-500 rounded-xl m-3"
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
