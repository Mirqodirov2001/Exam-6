import error from "../../assets/images/Not found img.png"
import "./style.scss";

const index = () => {
  return <div className="min-h-full">
    <img className=" mx-auto w-[1500px]" src={error} alt="not found img" />
  </div>;
};

export default index;