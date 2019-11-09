import React, {useEffect, useState} from 'react';
import * as d3 from "d3";
import questionsData from "../../csvs/questions.csv";
import data from "../../csvs/requirements.csv";
import './questions.css'
import Navigation from "../navigation";

const StudentFilter = ({updateSearch, searchText}) => {

    function handleChange(event) {
        updateSearch(event.target.value);
    }

    return (
        <input type="text" placeholder="Search here for Questions" className="input-search" onChange={handleChange}
               value={searchText}/>
    )
};

const Student = ({student}) => <tbody>
<tr>
    <td className="student-item">{student.questionTitle}</td>
    <td className="student-item">{student.metrices}</td>
</tr>
</tbody>;

const StudentList = ({students, filter}) => {
    function filterStudents(students) {
        if (!filter) {
            return students
        }
        return students.filter((student) => student.questionTitle.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
    }

    return (
        <table className="student-list">
            <thead>
            <tr>
                <th>Questions</th>
                <th>Metrices</th>
            </tr>
            </thead>
            {filterStudents(students)
                .map((student) => <Student key={student.id} student={student}/>)}
        </table>
    )
};

const Requirements = ({title, requirmentId, calculatePercentage}) => {

    const [state, setState] = useState({
        questions: []
    });
    const [filter, setFilter] = useState('');

    useEffect(() => {
        function readCsvForRequirements() {
            d3.csv(questionsData).then(function (questionsResponse) {
                const filteredQuestions = questionsResponse.filter((item) => item.requirementId === requirmentId);
                setState({...state, questions: filteredQuestions});
            }).catch(function (err) {
                throw err;
            })
        }

        readCsvForRequirements();
    }, []);

    function updateSearch(inputValue) {
        setFilter(inputValue);
    }

    const {requirements, questions} = state;
    console.log(questions)
    return <section className="quiz_section" id="quizeSection">
        <div className="container">
            <div className="row">
                <div className="col-sm-12" style={{marginTop: "10px"}}>
                    <div className="quiz_content_area">
                        <h1 className="quiz_title">{title}</h1>
                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="app__title">Questions and Metrices</h1>
                                {(questions.length > 0 && requirmentId) && <>
                                    <StudentFilter updateSearch={updateSearch}
                                                   searchText={filter}/>
                                    <StudentList filter={filter} students={questions}/></>}
                            </div>
                        </div>
                        <Navigation calculatePercentage={calculatePercentage}/>
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
