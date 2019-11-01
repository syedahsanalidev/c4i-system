import React, {useState} from 'react';
import CloudServices from './modules/cloudservices'
import HomeTemplate from './modules/home'
import SecurityRequirements from './modules/securityRequirements';
import Services from './modules/services';
import SummaryChart from './modules/chart';
import * as d3 from "d3";
import data from "./csvs/evaluations.csv";

function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [state, setState] = useState({
        cloudService: 0,
        services:[],
        requirements: '',
        networkSecurity:'',
        chartData:[]
    });

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
        function readCsv() {
            d3.csv(data).then(function (response) {
                const {services}=state;
                changeCurrentStep(4);
                // setCloudServices(response);
            }).catch(function (err) {
                throw err;
            })
        }
        readCsv();
    }

    const {cloudService,requirements} = state;
    return (
        <HomeTemplate>
            {currentStep === 1 &&
            <CloudServices cloudService={cloudService} onSelectCloudService={onSelectCloudService} changeCurrentStep={changeCurrentStep}/>}
            {currentStep === 2 &&
            <Services cloudService={cloudService}
                      changeCurrentStep={changeCurrentStep} onSelectServices={onSelectServices}/>}
            {currentStep === 3 &&
            <SecurityRequirements  requirmentId={requirements} onSelectRequirements={onSelectRequirements} calculatePercentage={calculatePercentage}/>}
            {currentStep === 4 && <SummaryChart data={[
                {text: 'Man', value: 50},
                {text: 'Woman', value: 70}
            ]}/>}
        </HomeTemplate>
    );
}

export default App;
