import React, { useState } from 'react';
import './App.css';
import Card from './components/card/Card';
import Filter from './components/filter/Filter';
import InputForm from './components/inputForm/InputForm';

function App() {
  const [data, setData] = useState([])

  const submitCallback = async (githubname) => {
    const response = await fetch(`https://api.github.com/users/${githubname}`);
    const newRecord = await response.json()

    if (newRecord.message) return alert("User Not Found")
    var checkDuplicate = data.some((item) => item.id === newRecord.id)
    if (checkDuplicate) return alert("User Already Exists")

    setData([...data, newRecord])
  }

  const deleteCallback = (id) => {
    var records = [...data]
    var index = records.findIndex((item) => item.id === id)
    records.splice(index, 1)
    setData(records)
  }

  const filterCallback = (type) => {
    var records = [...data]
    records = records.sort((item1, item2) => type !== "followers" ? item1[type]?.localeCompare(item2[type]) : item1[type] - item2[type]);
    setData(records)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="mb-32">
          <InputForm submitCallback={submitCallback} />
        </div>
        <hr />
        <div className="d-flex">
          <Filter filterCallback={filterCallback} />
        </div>
        <div className="row">
          {data.map(item =>
            <div key={item.id} className="col-sm-12 col-md-6 col-lg-3 mt-32 col">
              <Card gitProfile={item} deleteCallback={deleteCallback} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
