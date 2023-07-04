import './App.css';
import MyRedux from './MyRedux';
import 'bootstrap/dist/css/bootstrap.css';
import DataAPI from './DataAPI';
import { useState } from 'react';

function App() {
  const [flag, setFlag] = useState(false);


  const setFlagfalse = () => {
    setFlag(!flag)

  }


  return (
    <div className="App">
      <MyRedux flag={flag} onSubmititing={setFlagfalse}> </MyRedux>
      {/* {flag && <DataAPI> </DataAPI>} */}


    </div>
  );
}

export default App;
