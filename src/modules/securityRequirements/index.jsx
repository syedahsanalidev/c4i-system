import React, {useEffect, useState} from 'react';
import MultiSelectBox from 'react-multiselect-box'
import 'react-multiselect-box/build/css/index.css'
import * as d3 from "d3";
import data from "./requirements.csv";

const Requirements = ({changeCurrentStep,onSelectRequirements}) => {

    const [state,setState]=useState({
        selectedOne:[],
        requirements:[]
    });

    useEffect(() => {
        function readCsv() {
            d3.csv(data).then(function (response) {
response.pop();
                setState({...state,requirements: response})
            }).catch(function (err) {
                throw err;
            })
        }

        readCsv()
    }, []);
    const securityRequirements = [
        {desc: 'Confidently', value: '1'},
        {desc: 'Integrity', value: '2'},
        {desc: 'Accountability', value: '3'},
        {desc: 'Availability', value: '4'},
        {desc: 'System Configuration', value: '5'},
    ];
    const { selectedOne,requirements } = state;
    // return
    return <section className="quiz_section" id="quizeSection">
        <div className="container">
            <div className="row">
                <div className="col-sm-12" style={{marginTop: "10px"}}>
                    <div className="quiz_content_area">
                        <h1 className="quiz_title">Security Requirements</h1>
                        <div className="row">
                            <MultiSelectBox
                                options={requirements}
                                labelKey="desc"
                                valueKey="value"
                                onAdd={selectedItem => {
                                    setState({
                                        selectedOne: [...state.selectedOne, selectedItem.value]
                                    })
                                }}
                                onRemove={(removedItem, index) => {
                                    setState({
                                        selectedOne: [
                                            ...state.selectedOne.filter(
                                                item => item !== removedItem.value
                                            )
                                        ]
                                    })
                                }}
                                onSelectAll={selectedItems => {
                                    setState({
                                        selectedOne: [
                                            ...state.selectedOne,
                                            ...selectedItems.map(item => item.value)
                                        ]
                                    })
                                }}
                                onRemoveAll={() => {
                                    setState({
                                        selectedOne: []
                                    })
                                }}
                                valueArray={selectedOne}
                            />
                        </div>
                        <div className="col-sm-12">
                            <div className="quiz_next">
                                <button className="quiz_continueBtn" onClick={()=>changeCurrentStep(4)}>Continue</button>
                            </div>{/* end of quiz_next */}
                        </div>{/* end of col12 */}
                        {/* end of quiz_card_area */}
                    </div>
                    {/* end of quiz_content_area */}
                </div>
                {/* end of col12 */}
            </div>
            {/* end of row */}
        </div>
        {/* end of container */}
    </section>
};
export default Requirements;
