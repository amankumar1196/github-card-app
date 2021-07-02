import React, {useEffect, useState} from 'react';
import './Filter.css';

function Filter(props) {
  const [filterType, setFilterType] = useState()

  const onClickHandler = (type) => {
    setFilterType(type)
    props.filterCallback(type)
  }

  return (
    <div className="d-flex align-items-center">
      <h5>Sort By:</h5>
      <form>
        <label className={filterType === "name" && 'active'} onClick={() => onClickHandler("name")}>
          <input type="radio" name="name" value="name" checked={filterType === "name"} className="d-none"/>
          Name
        </label>
        <label className={filterType === "location" && 'active'} onClick={() => onClickHandler("location")}>
          <input type="radio" name="location" value="location" checked={filterType === "location"} className="d-none"/>
          Location
        </label>
        <label className={filterType === "followers" && 'active'} onClick={() => onClickHandler("followers")}>
          <input type="radio" name="followers" value="followers" checked={filterType === "followers"} className="d-none"/>
          Followers
        </label>
      </form>
    </div>
  );
}

export default Filter;
