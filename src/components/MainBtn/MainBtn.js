import Button from "react-bootstrap/Button";
import "../MainBtn/MainBtn.css";
export function MainBtn(props) {
  const value = props.value;
  const color = props.color;
  return (
    <Button
      className="mainBtn"
      variant={color}
      as="input"
      type="submit"
      value={value}
    />
  );
}
