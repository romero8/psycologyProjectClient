import "../SearchInput/SearchInput.css";
import Form from "react-bootstrap/Form";
import MultiRangeSlider from "multi-range-slider-react";
import React,{useState} from "react";

export function SearchInput(props) {
  const placeHolder = props.placeHolder;
  const icon = props.icon;
  const type = props.type;
  const searchType = props.searchType;
  const options = props.options;
  const inputSize = props.inputSize;

  

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

 
  {
    if (searchType === "input") {
      return (
        <div className="searchInputContainer">
          <input
            type={type}
            className={inputSize ? `searchInput ${inputSize}` : "searchInput"}
            placeholder={placeHolder}
          ></input>
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }

    if (searchType === "select") {
      return (
        <div className="searchInputContainer">
          <select
            className={inputSize ? `searchInput ${inputSize}` : "searchInput"}
          >
            <option selected disabled>
              {placeHolder}
            </option>
            {options.map((option) => {
              return <option>{option}</option>;
            })}
          </select>
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }
    if (searchType === "range") {
      return (
        <div className="searchInputContainer range long">
          <div>
            <label>{placeHolder}</label>
          <MultiRangeSlider
            min={0}
            max={500}
            step={5}
            minValue={minValue}
            maxValue={maxValue}
            ruler = {false}
            label = {false}
            onInput={(e) => {
              handleInput(e);
            }}
            className="searchInput long"
          />
          </div>
          
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }

    if (searchType === "checkBox") {
      return (
        <div className="searchInputContainer">
          <Form>
            {["radio"].map((type) => (
              <div
                key={`inline-${type}`}
                className={
                  inputSize ? `searchInput ${inputSize}` : "searchInput"
                }
              >
                {/* <Form.Check
                inline
                label="1"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              /> */}

                <label>{placeHolder}</label>
                <br />
                {options.map((option) => {
                  return (
                    <Form.Check
                      inline
                      label={option}
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                  );
                })}
              </div>
            ))}
          </Form>
          <div className="iconContainer">{icon}</div>
        </div>
      );
    }
  }

  //   return (

  // <div className= 'searchInputContainer'>
  //         {searchType == "input" ? (
  //           <input
  //             type={type}
  //             className={inputSize ? `searchInput ${inputSize}` : "searchInput"}
  //             placeholder={placeHolder}
  //           ></input>
  //         ) : (
  //           <select className={inputSize ? `searchInput ${inputSize}` : "searchInput"}>
  //             <option selected disabled>
  //               {placeHolder}
  //             </option>
  //             {options.map((option) => {
  //               return <option>{option}</option>;
  //             })}
  //           </select>
  //         )}

  //         <div className="iconContainer">{icon}</div>
  //       </div>

  //   );
}
