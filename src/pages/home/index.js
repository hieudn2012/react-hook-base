import React, { useState, useEffect } from 'react';
import TudoList from '../../components/TudosList';
import Clock from '../../components/TimeClock';
import Language from '../../components/Language';
import todoApi from '../../api/todo';

function Home() {
  const [dataTask, setDataTask] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await todoApi.getAll();
        setDataTask(response);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }

    fetchProductList();
  }, []);

  function onDelete(id) {
    const taskIndex = dataTask.findIndex((item) => {
      return item.id === id
    });
    const newData = [...dataTask];
    newData.splice(taskIndex, 1);
    setDataTask(newData);
  }

  function onAddNew() {
    const task = { ...arguments[0] };
    const newData = [...dataTask];
    newData.push(task);
    setDataTask(newData);
  }

  return (
    <div className="container">
      <Clock />
      <Language />
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