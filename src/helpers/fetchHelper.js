import React, { useState, useEffect } from "react";

let baseUrl = "http://localhost:5000";

export async function getData(data) {
  let url = `/${data}`;
  const response = await fetch(url);
  const info = await response.json();
  return info;
}





// function getPsycholyTypes() {
//   let url = baseUrl + "/psychologiesTypes";
//   fetch(url, { method: "DELETE", headers: { "x-auth-token": token } })
//     .then((x) => x.json())
//     .then((x) => callback(x))
//     .catch((x) => callback(x));
// }

// function getConfigurationForPostRequest(data) {
//   return {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify(data),
//   };
// }
