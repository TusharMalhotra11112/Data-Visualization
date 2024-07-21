import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import SideBar from './components/SideBar';

function App() {
  const [appliedFilter,setAppliedFilter] = useState({
    "end_year":2099,
    "topic":null,
    "sector":null,
    "region":null,
    "source":null,
  })
  return (
    <div className="App">
          <SideBar appliedFilter={appliedFilter} setAppliedFilter={setAppliedFilter}/>
          <Container appliedFilter={appliedFilter} setAppliedFilter={setAppliedFilter}/>
    </div>
  );
}

export default App;
