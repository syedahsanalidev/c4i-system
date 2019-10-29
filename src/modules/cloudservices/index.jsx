import React, {useState, useEffect} from 'react';
import './cloudservices.css';
import * as d3 from 'd3';
import data from './cloudServices.csv';

const CloudServices = ({onSelectCloudService}) => {

    const [cloudServices, setCloudServices] = useState([]);

    useEffect(() => {
        function readCsv() {
            d3.csv(data).then(function (response) {
                setCloudServices(response);
            }).catch(function (err) {
                throw err;
            })
        }

        readCsv()
    }, []);

    return <section className="quiz_section" id="quizeSection">
        <div className="container">
            <div className="row">
                <div className="col-sm-12" style={{marginTop: "10px"}}>
                    <div className="quiz_content_area">
                        <h1 className="quiz_title">Cloud Services</h1>
                        <div className="row">
                            {cloudServices.map(({title}, i) => {
                                return <div key={i} className="col-sm-3">
                                    <div className="quiz_card_area">
                                        <input className="quiz_checkbox" onClick={() => onSelectCloudService()}
                                               type="checkbox"
                                               id={1} defaultValue={1}/>
                                        <div className="single_quiz_card">
                                            <div className="quiz_card_content">
                                                <div className="quiz_card_icon">
                                                    <div className="quiz_icon quiz_icon1"/>
                                                </div>
                                                {/* end of quiz_card_media */}
                                                <div className="quiz_card_title">
                                                    <h3><i className="fa fa-check" aria-hidden="true"/> {title}</h3>
                                                </div>
                                                {/* end of quiz_card_title */}
                                            </div>
                                            {/* end of quiz_card_content */}
                                        </div>
                                        {/* end of single_quiz_card */}
                                    </div>
                                    {/* end of quiz_card_area */}
                                </div>
                            })}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={1} defaultValue={1}
                                           defaultChecked="checked"/>
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <div className="quiz_icon quiz_icon1"/>
                                            </div>
                                            {/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true"/> Title gose Here</h3>
                                            </div>
                                            {/* end of quiz_card_title */}
                                        </div>
                                        {/* end of quiz_card_content */}
                                    </div>
                                    {/* end of single_quiz_card */}
                                </div>
                                {/* end of quiz_card_area */}
                            </div>
                            {/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2}/>
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <div className="quiz_icon quiz_icon2"/>
                                            </div>
                                            {/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true"/> Title Gose Here</h3>
                                            </div>
                                            {/* end of quiz_card_title */}
                                        </div>
                                        {/* end of quiz_card_content */}
                                    </div>
                                    {/* end of single_quiz_card */}
                                </div>
                                {/* end of quiz_card_area */}
                            </div>
                            {/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2}/>
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <div className="quiz_icon quiz_icon3"/>
                                            </div>
                                            {/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true"/> Title Gose Here</h3>
                                            </div>
                                            {/* end of quiz_card_title */}
                                        </div>
                                        {/* end of quiz_card_content */}
                                    </div>
                                    {/* end of single_quiz_card */}
                                </div>
                                {/* end of quiz_card_area */}
                            </div>
                            {/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2}/>
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <div className="quiz_icon quiz_icon4"/>
                                            </div>
                                            {/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true"/> Title Goes Here</h3>
                                            </div>
                                            {/* end of quiz_card_title */}
                                        </div>
                                        {/* end of quiz_card_content */}
                                    </div>
                                    {/* end of single_quiz_card */}
                                </div>
                                {/* end of quiz_card_area */}
                            </div>
                            {/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2}/>
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <i className="fa fa-home" aria-hidden="true"/>
                                            </div>
                                            {/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true"/> Title Goes Here</h3>
                                            </div>
                                            {/* end of quiz_card_title */}
                                        </div>
                                        {/* end of quiz_card_content */}
                                    </div>
                                    {/* end of single_quiz_card */}
                                </div>
                                {/* end of quiz_card_area */}
                            </div>
                            {/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2}/>
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <i className="fa fa-telegram" aria-hidden="true"/>
                                            </div>
                                            {/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true"/> Title Goes Here</h3>
                                            </div>
                                            {/* end of quiz_card_title */}
                                        </div>
                                        {/* end of quiz_card_content */}
                                    </div>
                                    {/* end of single_quiz_card */}
                                </div>
                                {/* end of quiz_card_area */}
                            </div>
                            {/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2}/>
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <i className="fa fa-coffee" aria-hidden="true"/>
                                            </div>
                                            {/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true"/> Title Goes Here</h3>
                                            </div>
                                            {/* end of quiz_card_title */}
                                        </div>
                                        {/* end of quiz_card_content */}
                                    </div>
                                    {/* end of single_quiz_card */}
                                </div>
                                {/* end of quiz_card_area */}
                            </div>
                            {/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2}/>
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <i className="fa fa-check" aria-hidden="true"/>
                                            </div>
                                            {/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true"/> Title Goes Here</h3>
                                            </div>
                                            {/* end of quiz_card_title */}
                                        </div>
                                        {/* end of quiz_card_content */}
                                    </div>
                                    {/* end of single_quiz_card */}
                                </div>
                                {/* end of quiz_card_area */}
                            </div>
                            {/* end of col3  */}
                        </div>
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
export default CloudServices;
