import React, {useEffect, useState} from 'react';
import * as d3 from "d3";
import questionsData from "./questions.csv";
import data from "./requirements.csv";
import './securityRequirements.css'

const StudentFilter = ({updateSearch, searchText}) => {

    function handleChange(event) {
        updateSearch(event.target.value);
    }

    return (
        <input type="text" placeholder="Search here for Questions" className="input-search" onChange={handleChange}
               value={searchText}/>
    )
};

const Student = ({student}) => <li className="student-item">{student.questionTitle}</li>;

const StudentList = ({students, filter}) => {
    function filterStudents(students) {
        if (!filter) {
            return students
        }
        return students.filter((student) => student.questionTitle.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
    }
    return (
        <ul className="student-list">
            {filterStudents(students)
                .map((student) => <Student student={student}/>)}
        </ul>
    )
};

const Requirements = ({changeCurrentStep, onSelectRequirements}) => {

    const [state, setState] = useState({
        requirements: [],
        questions:[]
    });
    const [filter, setFilter] = useState('');

    useEffect(() => {
        function readCsvForRequirements() {
            d3.csv(data).then(function (response) {
                response.pop();
                d3.csv(questionsData).then(function (questionsResponse) {
                    setState({...state, questions: questionsResponse,requirements: response});
                }).catch(function (err) {
                    throw err;
                })
            }).catch(function (err) {
                throw err;
            })
        }

        readCsvForRequirements();
    }, []);

    function updateSearch(inputValue) {
        setFilter(inputValue);
    }

    function handleRequirementChange(event) {
        onSelectRequirements(event.target.value);
    }
    const {requirements,questions} = state;
    return <section className="quiz_section" id="quizeSection">
        <div className="container">
            <div className="row">
                <div className="col-sm-12" style={{marginTop: "10px"}}>
                    <div className="quiz_content_area">
                        <h1 className="quiz_title">Security Requirements</h1>
                        <div className="row">
                            <div className="col-sm-12 align-center mb-10">
                                <select onChange={handleRequirementChange}>
                                    <option value="0">Select Secuirty Requirements</option>
                                    {requirements.map((item) => {
                                        return <option key={item.value} value={item.value}>{item.desc}</option>
                                    })}
                                </select>
                            </div>
                            {questions.length>0 && <div className="col-sm-12">
                                <h1 className="app__title">Questions and Metrices</h1>
                                <StudentFilter updateSearch={updateSearch} searchText={filter}/>
                                <StudentList filter={filter} students={questions}/>
                            </div>}
                        </div>
                        <div className="col-sm-12">
                            <div className="quiz_next">
                                <button className="quiz_continueBtn" onClick={() => changeCurrentStep(4)}>Calculate
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
