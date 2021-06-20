import React from "react";
import "./App.css";
import ComplimentApp from "./components/compliment/ComplimentApp";
import { store } from "./redux/store";
import {Provider} from 'react-redux'




const App = () => {
  return (  
    
<Provider store={store}>
      <React.Fragment> 
        <ComplimentApp/>
      </React.Fragment>
</Provider>

  

  );
};

export default App;
