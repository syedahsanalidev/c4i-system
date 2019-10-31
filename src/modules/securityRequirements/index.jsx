import React, {useEffect, useState} from 'react';
import MultiSelectBox from 'react-multiselect-box'
import 'react-multiselect-box/build/css/index.css'
import * as d3 from "d3";
import data from "./requirements.csv";

const StudentFilter = ({updateSearch, searchText}) => {

    function handleChange(event) {
        updateSearch(event.target.value);
    }

    return (
        <input type="text" placeholder="Find a student" className="input-search" onChange={handleChange}
               value={searchText}/>
    )
}

const Student = ({name}) => <li className="student-item">{name}</li>;

const StudentList = ({students, filter}) => {
    function filterStudents(students) {
        if (!filter) {
            return students
        }
        return students.filter((student) => student.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
    }

    return (
        <ul className="student-list">
            {filterStudents(students)
                .map((student) => <Student name={student}/>)}
        </ul>
    )
};
const Requirements = ({changeCurrentStep, onSelectRequirements}) => {

    const [state, setState] = useState({
        requirements: []
    });
    const [students, setStudents] = useState(['Elia Larkey', 'Joyce Bearce', 'Clint Strahan',
        'Maude Defrank', 'Soila Hendren', 'Eliana Carrales',
        'Marquerite Bettes', 'Mikaela Authement', 'Elyse Toscano',
        'Ginette Solomon', 'Wanita Sprinkle', 'Yen Hagans',
        'Annmarie Schaper', 'Gregg Wilkins', 'Eura Prue', 'Addie Madding',
        'Tameika Murph', 'Keenan Woolsey', 'Hertha Hyer',
        'Sharan Letsinger']);
    const [filter, setFilter] = useState(null);

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

    function updateSearch(inputValue) {
        setFilter(inputValue);
    }

    const {requirements} = state;
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
                            <div className="app">
                                <h1 className="app__title">Your Students</h1>
                                <StudentFilter updateSearch={updateSearch} searchText={filter}/>
                                <StudentList filter={filter} students={students}/>
                            </div>
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
