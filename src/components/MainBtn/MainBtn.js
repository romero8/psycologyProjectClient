import Button from "react-bootstrap/Button";
import "../MainBtn/MainBtn.css";
import { useState } from "react";
export function MainBtn(props) {
  const value = props.value;
  const color = props.color;
  const userToAdd = props.userToAdd;
  const [userLoggedIn, setUserLoggedIn] = useState(
    JSON.parse(window.localStorage.getItem("user"))
  );

  const [updateData, setUpdateData] = useState({
    userToAdd: userLoggedIn.favorites,
    userLoggedIn: userLoggedIn,
  });

  async function handle(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/userLoggedIn", {
        method: "POST",
        body: JSON.stringify(userLoggedIn),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setUserLoggedIn(data.clientLoggedIn);
      console.log(userLoggedIn);
    } catch (err) {
      console.log(err);
    }

   

    if (value === "Add To Favorties") {
      setUpdateData({
        ...updateData,
        userToAdd: [...userLoggedIn.favorites, userToAdd],
      });
      
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
