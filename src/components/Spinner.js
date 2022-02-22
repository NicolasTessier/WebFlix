import { TailSpin } from "react-loader-spinner";
import "./Spinner.css";

function Spinner() {
  return (
    <TailSpin wrapperClass="spinner" color="#00BFFF" height={80} width={80} />
  );
}
export default Spinner;
