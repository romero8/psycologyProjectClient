import Button from "react-bootstrap/Button";
import "../MainBtn/MainBtn.css";
import { useState } from "react";
export function MainBtn(props) {
  const value = props.value;
  const color = props.color;
  let userToAdd = props.userToAdd;
  const usersAdded = props.usersAdded
  const setUsersAdded = props.setUsersAdded
  const updateData = props.updateData
  const setUpdateData = props.setUpdateData
  const setCheck = props.setCheck
  const check = props.check
  const userLoggedIn = props.userLoggedIn
 
  // const [updateData, setUpdateData] = useState({
  //   userToAdd: userLoggedIn.favorites,
  //   userLoggedIn: userLoggedIn,
  // });

  

  async function handle(e) {
    e.preventDefault();

    if (value === "Add To Favorties") {

      // setUsersAdded([...usersAdded,userToAdd])
    userToAdd.addedToFavorites = true
      setUpdateData(prevState => ({ ...prevState, favoritesToUpdate: [...prevState.favoritesToUpdate,userToAdd]}));
      
      
      setCheck((check)=>{
        return [check+1]
      })
      console.log(updateData)
    }
    // {
    //   ...updateData,
    //   favoritesToUpdate: [...userLoggedIn.favorites, userToAdd]
    // }
    
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











 // try {
      //   const res = await fetch("http://localhost:5000/update/client", {
      //     method: "POST",
      //     body: JSON.stringify(updateData),
      //     headers: { "Content-Type": "application/json" },
      //   });
      //   const data = await res.json();
      //   console.log(data);
      // } catch (err) {
      //   console.log(err);
      // }


 // try {
    //   const res = await fetch("http://localhost:5000/userLoggedIn", {
    //     method: "POST",
    //     body: JSON.stringify(userLoggedIn),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   const data = await res.json();
    //   setUserLoggedIn(data.clientLoggedIn);
    //   console.log(userLoggedIn);
    // } catch (err) {
    //   console.log(err);
    // }
