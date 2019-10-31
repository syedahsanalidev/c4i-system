import React, {useState} from 'react';
import CloudServices from './modules/cloudservices'
import HomeTemplate from './modules/home'
import SecurityRequirements from './modules/securityRequirements';
import Services from './modules/services';
import SummaryChart from './modules/chart';

function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [state, setState] = useState({
        cloudService: 0,
        service: '',
        requirements: '',
    })

    function changeCurrentStep(step) {
        setCurrentStep(step)
    }

    function onSelectCloudService(cloudServiceId) {
        setState({...state, cloudService: cloudServiceId})
    }

    function onSelectService(serviceId) {
        setState({...state, service: serviceId})
    }

    function onSelectRequirements() {

    }

    const {cloudService} = state;
    return (
        <HomeTemplate>
            {currentStep === 1 &&
            <CloudServices onSelectCloudService={onSelectCloudService} changeCurrentStep={changeCurrentStep}/>}
            {currentStep === 2 &&
            <Services cloudService={cloudService} onSelectService={onSelectService}
                      changeCurrentStep={changeCurrentStep}/>}
            {currentStep === 3 &&
            <SecurityRequirements onSelectRequirements={onSelectRequirements} changeCurrentStep={changeCurrentStep}/>}
            {currentStep === 4 && <SummaryChart/>}
        </HomeTemplate>
    );
}

export default App;
