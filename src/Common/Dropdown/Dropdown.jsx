import style from "./Dropdown.module.css";

const Dropdown = (props) => {
  return (
    <div>
      <select className={style.dropdown}>
        <option value='Title' key=''>
          Title
        </option>
        <option value='Raiting' key=''>
          Raiting
        </option>
        <option value='Date' key=''>
          Date
        </option>
      </select>
    </div>
  );
};
export default Dropdown;
