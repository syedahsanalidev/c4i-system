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
    function onSelectRequirements() {
        
    }

    return (
        <HomeTemplate>
            {currentStep===1 && <CloudServices onSelectCloudService={onSelectCloudService} changeCurrentStep={changeCurrentStep}/>}
            {currentStep===2 && <Services onSelectService={onSelectService} changeCurrentStep={changeCurrentStep}/>}
            {currentStep===3 && <SecurityRequirements onSelectRequirements={onSelectRequirements} changeCurrentStep={changeCurrentStep}/>}
            {currentStep ===4 && <SummaryChart/>}
        </HomeTemplate>
    );
}

export default App;
