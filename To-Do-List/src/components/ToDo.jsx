import axios from "axios";
import PropTypes from "prop-types";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };

  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <AiFillEdit className="icon" onClick={updateToDo} />
        <RxCross1 className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

// Prop types validation
ToDo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setUpdateUI: PropTypes.func.isRequired,
  setShowPopup: PropTypes.func.isRequired,
  setPopupContent: PropTypes.func.isRequired,
};

export default ToDo;
