import React, {useState, useRef} from 'react';
import BarChart from 'react-bar-chart';

const Chart = ({data}) => {
    const inputRef = useRef(null);
    const [state, setState] = useState({
        width: 500
    });
    const margin = {top: 20, right: 20, bottom: 30, left: 40};

    const {width} = state;
    return (<section className="quiz_section" id="quizeSection">
        <div className="container">
            <div className="row">
                <div className="col-sm-12" style={{marginTop: "10px"}}>
                    <div className="quiz_content_area">
                        <h1 className="quiz_title">Recommended Service Provider</h1>
                        <div className="row">
                            <div ref={inputRef}>
                                <div style={{width: '50%'}}>
                                    <BarChart ylabel='Percentage'
                                              width={width}
                                              height={500}
                                              margin={margin}
                                              data={data}/>
                                </div>
                            </div>
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
    </section>)
};
export default Chart;

