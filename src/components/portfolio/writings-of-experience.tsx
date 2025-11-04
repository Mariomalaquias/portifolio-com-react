type Props = {
  title: String;
  subtitle: String;
  text: String;
};

const WritingsOfExperience = (props: Props) => {
  return (
    <div>
      <h3 className="text-center font-semibold">{props.title}</h3>
      <p className="text-center font-semibold text-gray-400">
        {props.subtitle}
      </p>
      <p className="mx-60">{props.text}</p>
    </div>
  );
};

export default WritingsOfExperience;
