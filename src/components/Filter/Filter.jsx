// import PropTypes from 'prop-types'
import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state);
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
      ></Input>
    </label>
  );
};
