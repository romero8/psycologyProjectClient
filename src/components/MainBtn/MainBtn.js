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
  const usersAdded = props.usersAdded;
  const setUsersAdded = props.setUsersAdded;
  const updateData = props.updateData;
  const setUpdateData = props.setUpdateData;
  const therapistToUpdate = props.therapistToUpdate;
  const setTherapistToUpdate = props.setTherapistToUpdate;
  const setCheck = props.setCheck;
  const check = props.check;
  const userLoggedIn = props.userLoggedIn;
 

  let userLocalStorage = JSON.parse(window.localStorage.getItem("user"));

  const navigate = useNavigate();

  async function handle(e) {
    e.preventDefault();

    // await setCheck((check) => {
    //   return [check + 1];
    // });

  if(userLocalStorage.favorites){
    if(userToAdd){
      const objWithIdIndex = updateData.favoritesToUpdate.findIndex(
        (obj) => obj._id === userToAdd._id
      );
      if (e.target.innerHTML === "Add To Favorites") {
        userLocalStorage.favorites.push(userToAdd);
        let newFavorites = [...new Set(userLocalStorage.favorites)];
        userLocalStorage.favorites = newFavorites;
  
        localStorage.setItem("user", JSON.stringify(userLocalStorage));
  
        // await setTherapistToUpdate(() => ({
        //   id: userToAdd._id,
        //   addedToFavorites: [...userToAdd.addedToFavorites, userLoggedIn],
        // }));
        // let addedToFavoriets = [...userToAdd.addedToFavorites, userLoggedIn]
        // userToAdd.addedToFavorites = addedToFavoriets
  
        
  
        //  setTherapistToUpdate(() => {
         
        //   // let newAddedToFavorites = [...new Set(userToAdd.addedToFavorites)]
        //   return {
        //     id: userToAdd._id,
        //     addedToFavorites: addedToFavoriets,
        //   };
        // });
  
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
        // const objIdIndex = userToAdd.addedToFavorites.findIndex(
        //   (obj) => obj._id === userLoggedIn._id
        // );
        
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


        // userToAdd.addedToFavorites.splice(
        //   objWithIdIndex,
        //   1
        // );
   
        // userToAdd.addedToFavorites.splice(objWithIdIndex,1)
        //  setTherapistToUpdate((prevState) => {
          
        //   return {
        //     id: userToAdd._id,
        //     addedToFavorites: userToAdd.addedToFavorites,
        //   };
        // });
  
  
         setUpdateData((prevState) => {
          // const objWithIdIndex = prevState.favoritesToUpdate.findIndex(
          //   (obj) => obj._id === userToAdd._id
          // );
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




    if(therapistToRemove){

      if(e.target.innerHTML === "Remove From Favorites"){
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
  
        // therapistToRemove.addedToFavorites.splice(
        //   objWithIdIndex,
        //   1
        // );
  
        // therapistToRemove.addedToFavorites.splice(objWithIdIndex,1)
  
         setTherapistToUpdate((prevState) => {
                
          return {
            id: therapistToRemove._id,
            addedToFavorites: therapistToRemove.addedToFavorites,
          };
        });
  
         setUpdateData((prevState) => {
          // const objWithIdIndex = prevState.favoritesToUpdate.findIndex(
          //   (obj) => obj._id === userToAdd._id
          // );
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

      
     


      if(e.target.innerHTML === 'Send Info'){
        const objIdIndex = userLocalStorage.favorites.findIndex(
          (obj) => obj._id === therapistToRemove._id
        );
        
        let newAddedToFavorites = [...therapistToRemove.addedToFavorites, userLoggedIn]
        userLocalStorage.favorites[objIdIndex].addedToFavorites=newAddedToFavorites
        console.log(userLocalStorage)
        localStorage.setItem("user", JSON.stringify(userLocalStorage));

         setTherapistToUpdate(() => ({
          id: therapistToRemove._id,
          addedToFavorites: newAddedToFavorites,
        }));
        
        // therapistToRemove.addedToFavorites = addedToFavoriets
        // e.target.innerHTML='sent'
      }

      

      
    }
    setCheck((check) => {
      return [check + 1];
    });
  }

   


    if(userLocalStorage.addedToFavorites){
      if(e.target.innerHTML === 'I Called'){
        console.log(userLocalStorage)
      }
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
