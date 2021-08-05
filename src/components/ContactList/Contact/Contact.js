import React, { useCallback  } from "react";
import { useDispatch, useSelector } from "react-redux"
import styles from "../Contact/Contact.module.css";
import { operations,  selectors } from '../../../redux';

export default function Contact() {

  const contacts = useSelector(selectors.getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteClick = useCallback(
    (id) => {
      dispatch(operations.Delete(id))
    },
    [dispatch]
  )

  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={styles.Contact}>
        {name}: {number}
        <button className={styles.button} onClick={() => onDeleteClick(id)} type="button">
          Delete
        </button>
      </li>
    )
  })
};


// const Contact = ({ onDeleteClick, contacts }) => {
 
//   return contacts.map(({ id, name, number }) => {
//     return (
//       <li key={id} className={styles.Contact}>
//         {name}: {number}
//         <button className={styles.button} onClick={() => onDeleteClick(id)} type="button">
//           Delete
//         </button>
//       </li>
//     )
//   })
// };


// const mapStateToProps = (state) => ({
//   contacts: selectors.getFilteredContacts(state),
//   filter: selectors.getFilter(state)
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteClick: (id) => dispatch(operations.Delete(id))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Contact);