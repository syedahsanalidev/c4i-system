import React, {useState} from 'react';
import CloudServices from './modules/cloudservices'
import HomeTemplate from './modules/home'
import SecurityRequirements from './modules/securityRequirements';
import SummaryChart from './modules/chart';

function App() {
    const [showService, setShowService] = useState(false);
    const [state, setState] = useState({
        service: '',
    })

    function changeScreen() {
        setShowService(true);
    }

    function selectScreen() {
        // setShowService(true);
    }

    return (
        <HomeTemplate>
            {!showService && <CloudServices changeScreen={changeScreen}/>}
            {showService && <CloudServices name="Services" changeScreen={selectScreen}/>}
            <SecurityRequirements/>
            <SummaryChart/>
        </HomeTemplate>
    );
}

export default App;
