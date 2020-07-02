import React, { useState } from 'react';

import PropTypes from 'prop-types';
import shortid from 'shortid';

import * as CONST from '../../const';
import { setTastEdit } from '../../redux/actions/todo';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

TudoList.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
}

TudoList.defaultProps = {
  data: [],
  onDelete: null,
  onAddNew: null,
}

function TudoList({ data, onDelete, onAddNew }) {

  // const taskStore = useSelector(state => state.taskReducer.task);
  const dispatch = useDispatch();

  // i18n Translate
  const { t } = useTranslation();

  const [isAddNew, setIsAddNew] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('');

  function addNew() {
    clearForm();
    setIsAddNew(!isAddNew);
  }

  function addTask(e) {
    e.preventDefault();
    if (!onAddNew) return;
    onAddNew({ id: shortid.generate(), name: taskName, status: taskStatus });
    clearForm();
    setIsAddNew(false);
  }

  function deleteItem(id) {
    if (!onDelete) return;
    onDelete(id);
  }

  function editTask(task) {
    dispatch(setTastEdit(task));
    setTaskName(task.name);
    setTaskStatus(task.status);
    setIsAddNew(true);
  }

  function onChangeForm(value, type) {
    switch (type) {
      case CONST.TODO.TASK:
        setTaskName(value);
        break;
      case CONST.TODO.STATUS:
        setTaskStatus(value);
        break;
      default:
        break;
    }
  }

  function clearForm() {
    setTaskName('');
    setTaskStatus('');
  }

  function renderAddNew() {
    return (
      <div className="row">
        <div className="col col-sm-6">
          <form onSubmit={(e) => addTask(e)}>
            <div className="form-group">
              <label htmlFor="task-name">Task Name</label>
              <input
                className="form-control"
                id="task-name"
                value={taskName}
                onChange={(event) => onChangeForm(event.target.value, CONST.TODO.TASK)}
                autoFocus
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <input
                className="form-control"
                id="status"
                value={taskStatus}
                onChange={(event) => onChangeForm(event.target.value, CONST.TODO.STATUS)}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-4">Submit</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div>
      {isAddNew && renderAddNew()}
      <h2>{t('Welcome to React')}</h2>
      <button
        className={`btn btn-${isAddNew ? 'danger' : 'primary'} mb-4`}
        onClick={addNew}>
        {isAddNew ? 'Close' : 'Add New'}
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>
            <tr key={index.toString()}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>
                <button className="btn btn-primary mr-2 mb-1" onClick={() => editTask(item)}>Edit</button>
                <button className="btn btn-danger mb-1" onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default TudoList;