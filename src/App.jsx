import React from 'react';
import CloudServices from './modules/cloudservices'
import HomeTemplate from './modules/home'
function App() {
  return (
      <HomeTemplate>
        <CloudServices/>
      </HomeTemplate>
  );
}

export default App;
