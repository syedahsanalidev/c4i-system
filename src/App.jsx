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
        services: [],
        requirements: '',
        networkSecurity: '',
        chartData: []
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
                const tempData = [];
                const {services,requirements} = state;
                services.forEach((item) => {
                    const requirementQuestions = response.filter((evaluationItem) =>evaluationItem.requirementId === requirements);
                    const serviceQuestions = requirementQuestions.filter((evaluationItem) => evaluationItem.serviceId === item.id);
                    const sum=serviceQuestions.reduce((a, b) => parseFloat(a) + parseFloat((b['score'] || 0)), 0);
                    const percentage=Math.round((sum/serviceQuestions.length)*100);
                    tempData.push({text:item.title,value:percentage});
                });
                setState({...state,chartData:tempData});
                changeCurrentStep(4);
            }).catch(function (err) {
                throw err;
            })
        }
        readCsv();
    }

    const {cloudService, requirements,chartData} = state;
    return (
        <HomeTemplate>
            {currentStep === 1 &&
            <CloudServices cloudService={cloudService} onSelectCloudService={onSelectCloudService}
                           changeCurrentStep={changeCurrentStep}/>}
            {currentStep === 2 &&
            <Services cloudService={cloudService}
                      changeCurrentStep={changeCurrentStep} onSelectServices={onSelectServices}/>}
            {currentStep === 3 &&
            <SecurityRequirements requirmentId={requirements} onSelectRequirements={onSelectRequirements}
                                  calculatePercentage={calculatePercentage}/>}
            {currentStep === 4 && <SummaryChart data={chartData}/>}
        </HomeTemplate>
    );
}

export default App;
