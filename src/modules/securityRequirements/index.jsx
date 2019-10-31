import React, {useEffect, useState} from 'react';
import MultiSelectBox from 'react-multiselect-box'
import 'react-multiselect-box/build/css/index.css'
import * as d3 from "d3";
import data from "./requirements.csv";

const Requirements = ({changeCurrentStep, onSelectRequirements}) => {

    const [state, setState] = useState({
        selectedOne: [],
        requirements: []
    });

    useEffect(() => {
        function readCsv() {
            d3.csv(data).then(function (response) {
                response.pop();
                setState({...state, requirements: response})
            }).catch(function (err) {
                throw err;
            })
        }

        readCsv()
    }, []);
    const {selectedOne, requirements} = state;
    return <section className="quiz_section" id="quizeSection">
        <div className="container">
            <div className="row">
                <div className="col-sm-12" style={{marginTop: "10px"}}>
                    <div className="quiz_content_area">
                        <h1 className="quiz_title">Security Requirements</h1>
                        <div className="row">
                            <select>
                                {requirements.map((item) => {
                                    return <option key={item.value} value={item.value}>{item.desc}</option>
                                })}
                            </select>
                        </div>
                        <div className="col-sm-12">
                            <div className="quiz_next">
                                <button className="quiz_continueBtn" onClick={() => changeCurrentStep(4)}>Continue
                                </button>
                            </div>
                            {/* end of quiz_next */}
                        </div>
                        {/* end of col12 */}
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
