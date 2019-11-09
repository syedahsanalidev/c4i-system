import React, {useState, useContext} from 'react';
import CloudServices from './modules/cloudservices'
import HomeTemplate from './modules/home'
import SecurityRequirements from './modules/securityRequirements';
import Services from './modules/services';
import SummaryChart from './modules/chart';
import Questions from './modules/questions'
import * as d3 from "d3";
import data from "./csvs/evaluations.csv";
import context from './modules/navigation/context';

function App() {
    const {step} = useContext(context);
    const [state, setState] = useState({
        cloudService: 0,
        serviceExample: 0,
        services: [],
        requirements: '',
        networkSecurity: '',
        chartData: []
    });

    function onSelectCloudService(cloudServiceId) {
        setState({...state, cloudService: cloudServiceId})
    }

    function onSelectServices(serviceArray) {
        setState({...state, services: serviceArray})
    }

    function onSelectServiceExample(serviceExampleId) {
        setState({...state, serviceExample: serviceExampleId})
    }

    function onSelectRequirements(requirements) {
        setState({...state, requirements: requirements})
    }

    function calculatePercentage() {
        function readCsv() {
            d3.csv(data).then(function (response) {
                const tempData = [];
                const {services, requirements} = state;
                services.forEach((item) => {
                    const requirementQuestions = response.filter((evaluationItem) => evaluationItem.requirementId === requirements);
                    const serviceQuestions = requirementQuestions.filter((evaluationItem) => evaluationItem.serviceId === item.id);
                    const sum = serviceQuestions.reduce((a, b) => parseFloat(a) + parseFloat((b['score'] || 0)), 0);
                    const percentage = Math.round((sum / serviceQuestions.length) * 100);
                    tempData.push({text: item.title, value: percentage});
                });
                setState({...state, chartData: tempData});
            }).catch(function (err) {
                throw err;
            })
        }

        readCsv();
    }

    const {cloudService, requirements, chartData, serviceExample, currentStep} = state;
    console.log(requirements);
    return (
        <HomeTemplate>
            {step === 1 &&
            <CloudServices cloudService={cloudService} onSelectCloudService={onSelectCloudService}/>}
            {step === 2 &&
            <Services cloudService={cloudService} serviceExample={serviceExample}
                      onSelectServices={onSelectServices}
                      onSelectServiceExample={onSelectServiceExample}/>}
            {step === 3 &&
            <SecurityRequirements requirmentId={requirements} onSelectRequirements={onSelectRequirements}/>}
            {step === 4 &&
            <Questions requirmentId={'1'} title={'Identity and Access Management'}
                       calculatePercentage={calculatePercentage}/>}
            {step === 5 && <SummaryChart data={chartData}/>}
        </HomeTemplate>
    );
}

export default App;
