import React, {useState, useRef} from 'react';
import {Chart} from "react-google-charts";

const ChartComponent = ({data}) => {
    return (<section className="quiz_section" id="quizeSection">
        <div className="container">
            <div className="row">
                <div className="col-sm-12" style={{marginTop: "10px"}}>
                    <div className="quiz_content_area">
                        <h1 className="quiz_title">Recommended Service Provider</h1>
                        <div className="row">
                            <Chart
                                width={'500px'}
                                height={'300px'}
                                chartType="Bar"
                                loader={<div>Loading Chart</div>}
                                data={data}
                                options={{
                                    // Material design options
                                    chart: {
                                        title: '',
                                        subtitle: '',
                                    },
                                }}
                                // For tests
                                rootProps={{'data-testid': '2'}}
                            />
                        </div>
                        {/* end of quiz_card_area */}
                    </div>
                    {/* end of quiz_content_area */}
                </div>
                <div className="col-sm-12">
                    <div className="quiz_next">
                        <button className="quiz_continueBtn">Update</button>
                    </div>
                    {/* end of quiz_next */}
                </div>
                {/* end of col12 */}
            </div>
            {/* end of row */}
        </div>
        {/* end of container */}
    </section>)
};
export default ChartComponent;

