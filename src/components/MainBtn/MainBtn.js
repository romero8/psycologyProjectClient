import Button from "react-bootstrap/Button";
import "../MainBtn/MainBtn.css";
import { useState } from "react";
import { Specialties } from "../../pages/Specialties/Specialties";
import { useNavigate } from "react-router-dom";
import { add } from "lodash";
export function MainBtn(props) {
  let value = props.value;
  const color = props.color;
  let userToAdd = props.userToAdd;
  const usersAdded = props.usersAdded;
  const setUsersAdded = props.setUsersAdded;
  const updateData = props.updateData;
  const setUpdateData = props.setUpdateData;
  const therapistToUpdate = props.therapistToUpdate;
  const setTherapistToUpdate = props.setTherapistToUpdate;
  const setCheck = props.setCheck;
  const check = props.check;
  const userLoggedIn = props.userLoggedIn;

  const navigate = useNavigate();

  async function handle(e) {
    e.preventDefault();

    if (e.target.innerHTML === "Add To Favorites") {
      console.log(therapistToUpdate);

      await setTherapistToUpdate(() => ({
        id: userToAdd._id,
        addedToFavorites: [...therapistToUpdate.addedToFavorites, userLoggedIn],
      }));

      await setUpdateData((prevState) => ({
        ...prevState,
        favoritesToUpdate: [...prevState.favoritesToUpdate, userToAdd],
      }));

      setCheck((check) => {
        return [check + 1];
      });

      e.target.innerHTML = "Remove From Favorites";
      return;
    }



    if (e.target.innerHTML === "Remove From Favorites") {

      await setTherapistToUpdate((prevState) => {

        const newAddedToFavorites = prevState.addedToFavorites.splice(userLoggedIn,0)
        return {
          id: userToAdd._id,
          addedToFavorites:newAddedToFavorites
          
        };
      });

      await setUpdateData((prevState) => {

        const newFavoritesToUpdate = prevState.favoritesToUpdate.splice(userToAdd,0)
        return {
          ...prevState,
          favoritesToUpdate: newFavoritesToUpdate
        };
      });
      
     
      

      setCheck((check) => {
        return [check + 1];
      });

      e.target.innerHTML = "Add To Favorites";
      return

    }
  }

  return (
    // <Button
    //   className="mainBtn"
    //   variant={color}
    //   as="input"
    //   type="submit"
    //   value={value}
    //   onClick={handle}
    // />
    <button type="submit" onClick={handle}>
      {value}
    </button>
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
