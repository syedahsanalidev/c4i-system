import React, {useState, useEffect} from 'react';
import './cloudservices.css';
import * as d3 from 'd3';
import data from '../../csvs/cloudServices.csv';
import Navigation from './../navigation';

const CloudServices = ({cloudService,onSelectCloudService, changeCurrentStep}) => {

    const [selectedService] = useState(cloudService);
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
                            {cloudServices.map(({title, id}) => {
                                return <div key={id} className="col-sm-3">
                                    <div className="quiz_card_area">
                                        <input name="cloudService" className="quiz_checkbox"
                                               onClick={() => onSelectCloudService(id)}
                                               type="radio"
                                               id={id} defaultValue={id}
                                               defaultChecked={id===selectedService}
                                        />
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
export default CloudServices;
