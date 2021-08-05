import React from "react";
import { useDispatch, useSelector } from "react-redux"
import styles from '../Filter/Filter.module.css';
import { actions, selectors } from '../../redux';

export default function Filter() {

  const dispatch = useDispatch();
  const value = useSelector(selectors.getFilter);
  const onFilter = (e) => dispatch(actions.Filter(e.target.value))

  return <input type="text" className={styles.input} value={value} placeholder="Filter" onChange={onFilter} />
};


// const Filter = ({ value, onFilter }) => {
//   return <input type="text" className={styles.input} value={value} placeholder="Filter" onChange={onFilter} />
// }

// const mapStateToProps = (state) => ({
//   value: selectors.getFilter(state),
// })

// const mapDispatchToProps = (dispatch) => ({
//   onFilter: (e) => dispatch(actions.Filter(e.target.value)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Filter)