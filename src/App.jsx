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
        services:[],
        requirements: '',
        networkSecurity:''
    })

    function changeCurrentStep(step) {
        setCurrentStep(step)
    }

    function onSelectCloudService(cloudServiceId) {
        setState({...state, cloudService: cloudServiceId})
    }

    function onSelectServices(serviceArray) {
        setState({...state, services: serviceArray})
    }

    function onSelectRequirements(requirementId) {
        setState({...state, requirements: requirementId})
    }
    
    function calculatePercentage() {
        changeCurrentStep(4);
    }

    const {cloudService,requirements} = state;
    return (
        <HomeTemplate>
            {currentStep === 1 &&
            <CloudServices cloudService={cloudService} onSelectCloudService={onSelectCloudService} changeCurrentStep={changeCurrentStep}/>}
            {currentStep === 2 &&
            <Services cloudService={cloudService}
                      changeCurrentStep={changeCurrentStep}/>}
            {currentStep === 3 &&
            <SecurityRequirements  requirmentId={requirements} onSelectRequirements={onSelectRequirements} calculatePercentage={calculatePercentage}/>}
            {currentStep === 4 && <SummaryChart/>}
        </HomeTemplate>
    );
}

export default App;
