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
  let therapistToRemove = props.therapistToRemove;
  let clientToArrange = props.clientToArrange;
  const usersAdded = props.usersAdded;
  const setUsersAdded = props.setUsersAdded;
  const updateData = props.updateData;
  const setUpdateData = props.setUpdateData;
  const therapistToUpdate = props.therapistToUpdate;
  const setTherapistToUpdate = props.setTherapistToUpdate;
  const setCheck = props.setCheck;
  const check = props.check;
  const userLoggedIn = props.userLoggedIn;
  const setUserLocalStorageAddedToFavArr = props.setUserLocalStorageAddedToFavArr;

  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));

  const navigate = useNavigate();

  async function handle(e) {
    e.preventDefault();


    if (userLocalStorage.favorites) {
      if (userToAdd) {
        const objWithIdIndex = updateData.favoritesToUpdate.findIndex(
          (obj) => obj._id === userToAdd._id
        );
        if (e.target.innerHTML === "Add To Favorites") {
          userLocalStorage.favorites.push(userToAdd);
          let newFavorites = [...new Set(userLocalStorage.favorites)];
          userLocalStorage.favorites = newFavorites;

          localStorage.setItem("user", JSON.stringify(userLocalStorage));


          setUpdateData((prevState) => ({
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
         
          const objIdIndex = userLocalStorage.favorites.findIndex(
            (obj) => obj._id === userToAdd._id
          );

          userLocalStorage.favorites.splice(objIdIndex, 1);
          let newFavorites = [...new Set(userLocalStorage.favorites)];
          userLocalStorage.favorites = newFavorites;

          localStorage.setItem("user", JSON.stringify(userLocalStorage));

          const objWithIdIndex = userToAdd.addedToFavorites.findIndex(
            (obj) => obj._id === userLoggedIn._id
          ); 

          setUpdateData((prevState) => {
           
            const newFavoritesToUpdate = prevState.favoritesToUpdate.splice(
              objIdIndex,
              1
            );

            return {
              ...prevState,
              favoritesToUpdate: userLocalStorage.favorites,
            };
          });

          setCheck((check) => {
            return [check + 1];
          });

          e.target.innerHTML = "Add To Favorites";
          return;
        }
      }

      if (therapistToRemove) {
        if (e.target.innerHTML === "Remove From Favorites") {
          const objIdIndex = userLocalStorage.favorites.findIndex(
            (obj) => obj._id === therapistToRemove._id
          );

          userLocalStorage.favorites.splice(objIdIndex, 1);
          let newFavorites = [...new Set(userLocalStorage.favorites)];
          userLocalStorage.favorites = newFavorites;

          localStorage.setItem("user", JSON.stringify(userLocalStorage));

          const objWithIdIndex = therapistToRemove.addedToFavorites.findIndex(
            (obj) => obj._id === userLoggedIn._id
          );

        
          setTherapistToUpdate((prevState) => {
            return {
              id: therapistToRemove._id,
              addedToFavorites: therapistToRemove.addedToFavorites,
            };
          });

          setUpdateData((prevState) => {
           
            const newFavoritesToUpdate = prevState.favoritesToUpdate.splice(
              objIdIndex,
              1
            );

            return {
              ...prevState,
              favoritesToUpdate: userLocalStorage.favorites,
            };
          });
        }

        if (e.target.innerHTML === "Send Info") {
          const objIdIndex = userLocalStorage.favorites.findIndex(
            (obj) => obj._id === therapistToRemove._id
          );

          let newAddedToFavorites = [
            ...therapistToRemove.addedToFavorites,
            userLoggedIn,
          ];
          userLocalStorage.favorites[objIdIndex].addedToFavorites =
            newAddedToFavorites;
          console.log(userLocalStorage);
          localStorage.setItem("user", JSON.stringify(userLocalStorage));

          setTherapistToUpdate(() => ({
            id: therapistToRemove._id,
            addedToFavorites: newAddedToFavorites,
          }));

        }
      }
      
    }

    if (userLocalStorage.addedToFavorites) {
      if (e.target.innerHTML === "I Called") {
        let lastAddedToFavArr = userLocalStorage.addedToFavorites.length - 1;
        const indexOfClient = userLocalStorage.addedToFavorites.findIndex(
          (object) => {
            return object._id === clientToArrange._id;
          }
        );

        let sliceArr = userLocalStorage.addedToFavorites.slice(indexOfClient);
        let sliceArrEnd = userLocalStorage.addedToFavorites.slice(0,indexOfClient);

        let fixedArr = sliceArr.map((client) => {
          let arrangeArr = sliceArr.indexOf(client) - 1;
          sliceArr[arrangeArr] = client;
          sliceArr.push(clientToArrange);
          let jsonObject = sliceArr.map(JSON.stringify);
          let uniqueSet = new Set(jsonObject);
          let uniqueArray = Array.from(uniqueSet).map(JSON.parse);

          return uniqueArray;
        });
        let newAddedToFavoritesArr = sliceArrEnd.concat(fixedArr[fixedArr.length - 1])
        userLocalStorage.addedToFavorites = newAddedToFavoritesArr
        userLocalStorage.clientsIcalled.push(clientToArrange)
        localStorage.setItem("user", JSON.stringify(userLocalStorage));
        setUserLocalStorageAddedToFavArr(newAddedToFavoritesArr)
        setTherapistToUpdate(() => ({
          id: userLocalStorage._id,
          addedToFavorites: userLocalStorage.addedToFavorites,
          clientsIcalled: userLocalStorage.clientsIcalled
        }));
      }
    }
    setCheck((check) => {
      return [check + 1];
    });
  }

  return (
    <button type="submit" onClick={handle} className="mainBtn">
      {value}
    </button>
  );
}


