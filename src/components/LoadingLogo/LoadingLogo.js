import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import logo from "../../icons/logo.png";
import { useEffect, useState } from "react";

export function LoadingLogo() {
  const [value, setValue] = useState(false);

  setTimeout(() => {
    setValue(true);
  }, 6000);

  if (!value) {
    return (
      <div className="loadingBox">
        <Spinner animation="grow" className="spinnerLoading" />
        <Image src={logo} roundedCircle className="logoLoading" />
      </div>
    );
  }

  if (value) {
    return (
      <div className="noResultsContainer">
        <h1 className="notResultTitle">
          There are no results for your request.. you can try again later or not.
        </h1>
      </div>
    );
  }
}
