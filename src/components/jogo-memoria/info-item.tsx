type Props = {
  label: string;
  value: string;
};

const InfoItem = ({ value, label }: Props) => {
  return (
    <div className="text-white text-center text-3xl font-bold">
      <h2>{label}</h2>
      <p>{value}</p>
    </div>
  );
};

export default InfoItem;
