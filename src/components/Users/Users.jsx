import { useSelector, useDispatch } from 'react-redux';
import { remove,filter } from 'redux/reducer';
import { getfilteredUsers } from 'redux/selectors';

import s from './users.module.css';

const Users = () => {
  const users = useSelector(getfilteredUsers);
  const dispatch = useDispatch();

  const onRemoveUser = id => dispatch(remove(id));
  const onHandleFilter = e => dispatch(filter(e.target.value));

  const elements = users.map(({ id, name, number }) => (
    <li className={s.item} key={id}>
      {name}: {number}{' '}
      <button className={s.btn} onClick={() => onRemoveUser(id)}>
        Delete
      </button>
    </li>
  ));

  return (
    <>
      <label>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          placeholder="enter the name"
          onChange={onHandleFilter}
        ></input>
      </label>
      <ul>{elements}</ul>
    </>
  );
};

export default Users;
