import logoFull from "../../assets/logo-full.svg";

const WordMark = ({ center = true }: { center?: boolean }) => {
  return (
    <div className={`${center && `flex justify-center items-center`}`}>
      <img src={logoFull} alt="Logo" />
    </div>
  );
};

export default WordMark;
