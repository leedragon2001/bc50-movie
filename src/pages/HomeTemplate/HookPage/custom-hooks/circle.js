import { useMagicColor } from "./useMagicColor";
import "./style.css";

const Circle = () => {
  const color = useMagicColor();
  return (
    <div className="square circle" style={{ backgroundColor: color }}>
      Circle
    </div>
  );
};

export default Circle;
