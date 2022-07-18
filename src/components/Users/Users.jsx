import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/slice';

import s from './users.module.css';

const Users = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      <label>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          placeholder="enter the name"
          // onChange={onHandleFilter}
        ></input>
      </label>
      {isFetching && <p>...Loading</p>}
      <ul>
        {data &&
          data.map(({ id, name, phone }) => (
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
