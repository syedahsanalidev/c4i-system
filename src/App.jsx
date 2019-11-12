import React, {useState, useContext} from 'react';
import CloudServices from './modules/cloudservices'
import HomeTemplate from './modules/home'
import SecurityRequirements from './modules/securityRequirements';
import Services from './modules/services';
import SummaryChart from './modules/chart';
import Questions from './modules/questions'
import * as d3 from "d3";
import data from "./csvs/evaluations.csv";
import providersData from "./csvs/providers.csv";
import serviceInProviderData from "./csvs/serviceInProvider.csv";
import requirementsData from "./csvs/requirements.csv";
import context from './modules/navigation/context';

function App() {
    const {step, pages, handleContinue} = useContext(context);
    const [state, setState] = useState({
        cloudService: 0,
        serviceExample: 0,
        services: [],
        requirements: [],
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
        async function readCsv() {
            const {requirements, serviceExample} = state;
            const evaluations = await d3.csv(data);
            const providers = await d3.csv(providersData);
            const serviceInProviders = await d3.csv(serviceInProviderData);
            const requirementsCSv = await d3.csv(requirementsData);
            const filterdServiceInProvider = serviceInProviders.filter(function (item) {
                return item.serviceId === serviceExample && item.isAvailable === "1"
            });
            const tempData = [];
            let headings = [];
            headings.push("Security Requirements");
            filterdServiceInProvider.forEach(function (item) {
                headings.push(item.providerId);
            });
            let tempheadings = [];
            tempheadings.push("Security Requirements");
            filterdServiceInProvider.forEach(function (item) {
                const providerObj=providers.find(function (providerItem) {
                    return providerItem.id===item.providerId;
                })
                tempheadings.push(providerObj.title);
            });
            tempData.push(tempheadings);
            const rowsData=[];
            requirements.forEach(function (item) {
                let columns = [];
                headings.forEach(function (heading, index) {
                    if (index === 0) {
                        const requirementObj=requirementsCSv.find(function (requirementItem) {
                            return requirementItem.value===item;
                        })
                        columns.push(requirementObj.desc);
                    } else {
                        const requirementQuestions = evaluations.filter((evaluationItem) => evaluationItem.requirementId === item);
                        const serviceQuestions = requirementQuestions.filter((evaluationItem) => evaluationItem.providerId === heading);
                        const sum = serviceQuestions.reduce((a, b) => parseFloat(a) + parseFloat((b['score'] || 0)), 0);
                        const percentage = Math.round((sum / serviceQuestions.length) * 100);
                        columns.push(percentage);
                    }
                })
                rowsData.push(columns);
            });
            var colSum = rowsData.reduce(function(a, b) {
                return  a.map(function(x, i) {
                    return  x + b[i];
                });
            });
            colSum.forEach(function (item,i) {
                if(i!==0){
                    colSum[i]=Math.round(item/rowsData.length);
                }else{
                    colSum[i]='Overall'
                }
            });
            setState({...state, chartData: [...tempData,...rowsData,colSum]});
        }

        readCsv();
        handleContinue();
    }

    function fetchQuestions(item, index) {
        if (step === index + 4) {
            return <Questions key={index} requirmentId={item} calculatePercentage={calculatePercentage}/>
        }
    }

    const {cloudService, requirements, chartData, serviceExample, currentStep} = state;
    return (
        <HomeTemplate>
            {step === 1 &&
            <CloudServices cloudService={cloudService} onSelectCloudService={onSelectCloudService}/>}
            {step === 2 &&
            <Services cloudService={cloudService} serviceExample={serviceExample}
                      onSelectServices={onSelectServices}
                      onSelectServiceExample={onSelectServiceExample}/>}
            {step === 3 &&
            <SecurityRequirements requirments={requirements} onSelectRequirements={onSelectRequirements}/>}
            {requirements.length > 0 && requirements.map((item, index) =>
                fetchQuestions(item, index)
            )}
            {step === pages + 1 && <SummaryChart data={chartData}/>}
        </HomeTemplate>
    );
}

export default App;
