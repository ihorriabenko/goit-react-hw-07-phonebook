import { useState } from 'react';
import { useAddContactMutation } from 'redux/slice';

import s from './form.module.css';

const Form = () => {
  const [user, setUser] = useState({
    name: '',
    phone: '',
  });
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = e => {
    e.preventDefault();

    addContact(user);

    setUser({
      name: '',
      phone: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          value={user.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Phone
        <input
          className={s.inputt}
          value={user.phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={s.btn} type="submit" disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
