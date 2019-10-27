import React,{useState} from 'react';
import CloudServices from './modules/cloudservices'
import HomeTemplate from './modules/home'
function App() {
    const [screen,setScreen]=useState('selectedService');
  const [state,setState]=useState({
      service:'',
  })

    function changeScreen() {
      setScreen("selectedService");
  }
    return (
      <HomeTemplate>
        {screen==="cloudServices" && <CloudServices />}
        {screen==="selectedService" && <CloudServices name="Services"/>}
      </HomeTemplate>
  );
}

export default App;
