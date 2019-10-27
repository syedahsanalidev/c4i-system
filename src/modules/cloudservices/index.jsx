import React from 'react';
import './cloudservices.css';
const services=()=>{
    return   <section className="quiz_section" id="quizeSection">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="quiz_area">
                        <div className="quiz_backBtn_progressBar">
                            <a href="#" className="quiz_backBtn"><i className="fa fa-arrow-left" aria-hidden="true" /></a>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>{/* end of quiz_backBtn_progressBar */}
                    </div>{/* end of quiz_area */}
                </div>{/* end of col12 */}
                <div className="col-sm-12">
                    <div className="quiz_content_area">
                        <h1 className="quiz_title">Cloud Services</h1>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={1} defaultValue={1} defaultChecked="checked" />
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <div className="quiz_icon quiz_icon1" />
                                            </div>{/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true" /> Title gose Here</h3>
                                            </div>{/* end of quiz_card_title */}
                                        </div>{/* end of quiz_card_content */}
                                    </div>{/* end of single_quiz_card */}
                                </div>{/* end of quiz_card_area */}
                            </div>{/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2} />
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <div className="quiz_icon quiz_icon2" />
                                            </div>{/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true" /> Title Gose Here</h3>
                                            </div>{/* end of quiz_card_title */}
                                        </div>{/* end of quiz_card_content */}
                                    </div>{/* end of single_quiz_card */}
                                </div>{/* end of quiz_card_area */}
                            </div>{/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2} />
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <div className="quiz_icon quiz_icon3" />
                                            </div>{/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true" /> Title Gose Here</h3>
                                            </div>{/* end of quiz_card_title */}
                                        </div>{/* end of quiz_card_content */}
                                    </div>{/* end of single_quiz_card */}
                                </div>{/* end of quiz_card_area */}
                            </div>{/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2} />
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <div className="quiz_icon quiz_icon4" />
                                            </div>{/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true" /> Title Goes Here</h3>
                                            </div>{/* end of quiz_card_title */}
                                        </div>{/* end of quiz_card_content */}
                                    </div>{/* end of single_quiz_card */}
                                </div>{/* end of quiz_card_area */}
                            </div>{/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2} />
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <i className="fa fa-home" aria-hidden="true" />
                                            </div>{/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true" /> Title Goes Here</h3>
                                            </div>{/* end of quiz_card_title */}
                                        </div>{/* end of quiz_card_content */}
                                    </div>{/* end of single_quiz_card */}
                                </div>{/* end of quiz_card_area */}
                            </div>{/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2} />
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <i className="fa fa-telegram" aria-hidden="true" />
                                            </div>{/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true" /> Title Goes Here</h3>
                                            </div>{/* end of quiz_card_title */}
                                        </div>{/* end of quiz_card_content */}
                                    </div>{/* end of single_quiz_card */}
                                </div>{/* end of quiz_card_area */}
                            </div>{/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2} />
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <i className="fa fa-coffee" aria-hidden="true" />
                                            </div>{/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true" /> Title Goes Here</h3>
                                            </div>{/* end of quiz_card_title */}
                                        </div>{/* end of quiz_card_content */}
                                    </div>{/* end of single_quiz_card */}
                                </div>{/* end of quiz_card_area */}
                            </div>{/* end of col3  */}
                            <div className="col-sm-3">
                                <div className="quiz_card_area">
                                    <input className="quiz_checkbox" type="checkbox" id={2} defaultValue={2} />
                                    <div className="single_quiz_card">
                                        <div className="quiz_card_content">
                                            <div className="quiz_card_icon">
                                                <i className="fa fa-check" aria-hidden="true" />
                                            </div>{/* end of quiz_card_media */}
                                            <div className="quiz_card_title">
                                                <h3><i className="fa fa-check" aria-hidden="true" /> Title Goes Here</h3>
                                            </div>{/* end of quiz_card_title */}
                                        </div>{/* end of quiz_card_content */}
                                    </div>{/* end of single_quiz_card */}
                                </div>{/* end of quiz_card_area */}
                            </div>{/* end of col3  */}
                            <div className="col-sm-12">
                                <div className="quiz_next">
                                    <button className="quiz_continueBtn">Continue</button>
                                </div>{/* end of quiz_next */}
                            </div>{/* end of col12 */}
                        </div>{/* end of quiz_card_area */}
                    </div>{/* end of quiz_content_area */}
                </div>{/* end of col12 */}
            </div>{/* end of row */}
        </div>{/* end of container */}
    </section>
};
export default services;
