import Button from "react-bootstrap/Button";
import "../MainBtn/MainBtn.css";
import { useState } from "react";
export function MainBtn(props) {
  const value = props.value;
  const color = props.color;
  const userToAdd = props.userToAdd;
  const userLoggedIn = JSON.parse(window.localStorage.getItem("user"));


  const [updateData, setUpdateData] = useState({
    userToAdd: userLoggedIn.favorites,
    userLoggedIn: userLoggedIn,
  });

  async function handle(e) {
    e.preventDefault();

    if (value === "Add To Favorties") {
      setUpdateData({...updateData,userToAdd:[...userLoggedIn.favorites,userToAdd]});
console.log(updateData)
      try {
        const res = await fetch("http://localhost:5000/update/client", {
          method: "POST",
          body: JSON.stringify(updateData),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
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
