import React, {useEffect, useState, useContext} from 'react';
import MultiSelectBox from 'react-multiselect-box'
import 'react-multiselect-box/build/css/index.css'
import * as d3 from "d3";
import data from "./../../csvs/requirements.csv";
import Navigation from "../navigation";
import context from './../navigation/context';

const Requirements = ({changeCurrentStep, onSelectRequirements}) => {
    const {setPages} = useContext(context);
    const [state, setState] = useState({
        selectedOne: [],
        requirements: []
    });

    useEffect(() => {
        function readCsv() {
            d3.csv(data).then(function (response) {
                delete response["columns"];
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
                            <MultiSelectBox
                                options={requirements}
                                labelKey="desc"
                                valueKey="value"
                                onAdd={selectedItem => {
                                    const selected = [...state.selectedOne, selectedItem.value];
                                    setState({...state, selectedOne: selected})
                                    onSelectRequirements(selected);
                                }}
                                onRemove={(removedItem, index) => {
                                    const selected = [
                                        ...state.selectedOne.filter(
                                            item => item !== removedItem.value
                                        )
                                    ];
                                    setState({
                                        ...state,
                                        selectedOne: selected
                                    });
                                    onSelectRequirements(selected);
                                }}
                                onSelectAll={selectedItems => {
                                    const selected = [
                                        ...state.selectedOne,
                                        ...selectedItems.map(item => item.value)
                                    ];
                                    setState({
                                        ...state,
                                        selectedOne: selected
                                    });
                                    onSelectRequirements(selected);
                                }}
                                onRemoveAll={() => {
                                    setState({
                                        ...state,
                                        selectedOne: []
                                    });
                                    onSelectRequirements([]);
                                }}
                                valueArray={selectedOne}
                            />
                        </div>
                        <Navigation/>
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
