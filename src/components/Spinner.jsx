import { ScaleLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-116px)]">
      <ScaleLoader color="#d620a4" height={96} width={16} />
    </div>
  );
};

export default Spinner;
