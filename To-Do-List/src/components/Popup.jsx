import axios from "axios";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input, setInput] = useState(popupContent.text || "");

  const updateToDo = () => {
    axios
      .put(`${baseURL}/update/${popupContent.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      })
      .catch((error) => {
        console.error("Error updating ToDo:", error);
      });
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>
        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
};

// Prop types validation
Popup.propTypes = {
  setShowPopup: PropTypes.func.isRequired,
  popupContent: PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.string.isRequired,
  }).isRequired,
  setUpdateUI: PropTypes.func.isRequired,
};

export default Popup;
