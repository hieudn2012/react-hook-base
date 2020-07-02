import React, { useState } from 'react';
import TudoList from '../../components/TudosList';
import Clock from '../../components/TimeClock';
import { saveTodoListLocal, getTodoListLocal } from '../../cache/cacheUtil';

function Home() {
  const [dataTask, setDataTask] = useState(getTodoListLocal() || []);

  function onDelete(id) {
    const taskIndex = dataTask.findIndex((item) => {
      return item.id === id
    });
    const newData = [...dataTask];
    newData.splice(taskIndex, 1);
    setDataTask(newData);
    saveTodoListLocal(newData);
  }

  function onAddNew() {
    const task = { ...arguments[0] };
    const newData = [...dataTask];
    newData.push(task);
    setDataTask(newData);
    saveTodoListLocal(newData);
  }

  return (
    <div className="container">
      <Clock />
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-10">
          <TudoList
            data={dataTask} onDelete={(id) => onDelete(id)}
            onAddNew={onAddNew}
          />
        </div>
      </div>
    </div>
  )
}

export default Home; 