import React, {useState} from 'react';
import CloudServices from './modules/cloudservices'
import HomeTemplate from './modules/home'
import SecurityRequirements from './modules/securityRequirements';
import Services from './modules/services';
import SummaryChart from './modules/chart';

function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [state, setState] = useState({
        cloudService: '',
        services:'',
        requirements:'',
    })

    function changeCurrentStep(step) {
        setCurrentStep(step)
    }

    function onSelectCloudService() {
        // setShowService(true);
    }
    function onSelectService() {
        
    }

    return (
        <HomeTemplate>
            {currentStep===1 && <CloudServices onSelectCloudService={onSelectCloudService} changeCurrentStep={changeCurrentStep}/>}
            {currentStep===2 && <Services name="Services" onSelectService={onSelectService}/>}
            {currentStep===3 && <SecurityRequirements/>}
            {currentStep ===4 && <SummaryChart/>}
        </HomeTemplate>
    );
}

export default App;
