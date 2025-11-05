type Props = {
  title: String;
  subtitle: String;
  text: String;
};

const WritingsOfExperience = (props: Props) => {
  return (
    <div>
      <h3 className="mt-5 text-center font-semibold">{props.title}</h3>
      <p className="mt-3 text-center font-semibold text-gray-400">
        {props.subtitle}
      </p>
      <p className="mt-2 text-justify mx-3 md:mx-48">{props.text}</p>
    </div>
  );
};

export default WritingsOfExperience;
