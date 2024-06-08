import css from "./Contact.module.css";
import { HiUser, HiPhone } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <div className={css.textWrapper}>
          <HiUser className={css.icon} />
          <p>{name}</p>
        </div>
        <div className={css.textWrapper}>
          <HiPhone className={css.icon} />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
}
