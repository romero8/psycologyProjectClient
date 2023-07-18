import Button from "react-bootstrap/Button";
import "../MainBtn/MainBtn.css";
export function MainBtn(props) {
  const value = props.value;
  const color = props.color;

  function handle(e){
   
    if(value === 'Add To Favorties'){
      alert('hello')
    }
  }


  return (
    <Button
      className="mainBtn"
      variant={color}
      as="input"
      type="submit"
      value={value}
      onClick={handle}
    />
  );
}
