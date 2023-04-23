import "../SearchInput/SearchInput.css";

export function SearchInput(props) {
  const placeHolder = props.placeHolder;
  const icon = props.icon;
  const type = props.type;
  const searchType = props.searchType;
  const options = props.options


  

  return (
    <div className="searchInputContainer">
      {searchType == "input" ? (
        <input
          type={type}
          className="searchInput"
          placeholder={placeHolder}
        ></input>
      ) : (
        <select className="searchInput">
            <option selected disabled>{placeHolder}</option>
            {
              options.map((option)=>{
                return <option>{option}</option>
              })
            }
        </select>
      )}

      <div className="iconContainer">{icon}</div>
    </div>
  );
}
