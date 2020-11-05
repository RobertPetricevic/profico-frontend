import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const SearchInput = (props) => {
  const [input, setInput] = useState("");

  const changeInputHandler = (e) => {
    setInput(e.target.value);
    props.onSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <label>
        Search:
        <input
          type="text"
          className={styles.searchInput}
          value={input}
          onChange={changeInputHandler}
        />
      </label>
    </div>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
