import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/slice';
import { useState } from 'react';

import s from './users.module.css';

const Users = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [filter, setFilter] = useState('');

  const onHandleFilter = e => {
    const {value} = e.target;
    setFilter(value.trim())
  }

  const getFilteredItems = () => {
    if (!filter) {
      return data;
    }
    const newItems = data.filter((el) => {
      const { name } = el;
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    return newItems;
  };

  return (
    <>
      <label>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filter}
          name="filter"
          placeholder="enter the name"
          onChange={onHandleFilter}
        ></input>
      </label>
      {isFetching && <p>...Loading</p>}
      <ul>
        {data &&
          getFilteredItems().map(({ id, name, phone }) => (
            <li className={s.item} key={id}>
              {name}: {phone}{' '}
              <button className={s.btn} onClick={() => deleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Users;
