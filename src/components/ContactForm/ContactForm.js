import React, { useState, useCallback  } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { operations, selectors } from '../../redux';
import styles from '../ContactForm/ContactForm.module.css';


export default function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getContacts)

  const onSubmit = useCallback(
    evt => {
      evt.preventDefault();
      contacts.some(item => item.name === name)
        ? alert(`${name} is already in contacts`)
        : dispatch(operations.Add({ name, number }));

      formReset();
    },
    [contacts, name, number, dispatch],

  );

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const onChange = useCallback(evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля - ${name} не обрабатывается`);
    }
  }, []);


  return (
      <form onSubmit={onSubmit} className={styles.ContactForm}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            onChange={onChange}
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.label}>
          Number:
          <input
            className={styles.input}
            type="tel"
            value={number}
            onChange={onChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" onSubmit={onSubmit} className={styles.button}>
          Add contact
        </button>
      </form>
    )
}

// class ContactForm extends Component {
 

//   state = {
//     name: "",
//     number: "",
//   }

//   onSubmit = (e) => {
//     const { contacts } = this.props
//     const { name } = this.state
//     this.UniCheck(contacts, name)
//     e.preventDefault()

//     this.formReset()
//   }

//   UniCheck = (contacts, name) => {
//     const { onSubmit } = this.props
//     return contacts.some((i) => i.name === name) ? alert(`${name} is already in contacts`) : onSubmit({ ...this.state })
//   }

//   formReset = () => {
//     this.setState({ name: "", number: "" })
//   }

//   onChange = (e) => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value })
//   }

//   render() {
//     const { name, number } = this.state
//     return (
//       <form onSubmit={this.onSubmit} className={styles.ContactForm}>
//         <label className={styles.label}>
//           Name:
//           <input
//             className={styles.input}
//             type="text"
//             onChange={this.onChange}
//             value={name}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </label>
//         <label className={styles.label}>
//           Number:
//           <input
//             className={styles.input}
//             type="tel"
//             value={number}
//             onChange={this.onChange}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//         </label>
//         <button type="submit" onSubmit={this.onSubmit} className={styles.button}>
//           Add contact
//         </button>
//       </form>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   contacts: selectors.getContacts(state),
// })

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (name, number) => {
//     return dispatch(operations.Add(name, number))
//   },
// })


// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };


// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);