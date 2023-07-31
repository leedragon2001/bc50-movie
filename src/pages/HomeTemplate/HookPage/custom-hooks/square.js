import { useMagicColor } from "./useMagicColor";
import "./style.css";

const Square = () => {
  const color = useMagicColor();
  return (
    <div className="square" style={{ backgroundColor: color }}>
      Square
    </div>
  );
};

export default Square;
