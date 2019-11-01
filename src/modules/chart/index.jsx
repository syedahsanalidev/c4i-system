import React, {useState, useRef} from 'react';
import BarChart from 'react-bar-chart';

const Chart = () => {
    const inputRef = useRef(null);
    const [state, setState] = useState({
        width: 500
    });
    const data = [
        {text: 'Man', value: 50},
        {text: 'Woman', value: 70}
    ];
    const margin = {top: 20, right: 20, bottom: 30, left: 40};

    const {width} = state;
    return (<div ref={inputRef}>
        <div style={{width: '50%'}}>
            <BarChart ylabel='Percentage'
                      width={width}
                      height={500}
                      margin={margin}
                      data={data}/>
        </div>
    </div>)
};
export default Chart;

