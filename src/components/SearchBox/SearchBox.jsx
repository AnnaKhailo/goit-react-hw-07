import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterContact = (event) => {
    dispatch(changeFilter(event.target.value.trim()));
  };

  return (
    <div className={css.searchBox}>
      <p className={css.searchBoxTitle}>Find contacts by name</p>
      <input
        type="text"
        id={id}
        value={filter}
        onChange={handleFilterContact}
      />
    </div>
  );
}
