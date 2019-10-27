import React,{useState,useRef} from 'react';
import BarChart from 'react-bar-chart';

const Chart = () => {
    const inputRef = useRef(null);
    const [state,setState]=useState({
        width:500
    });
    const data = [
        {text: 'Man', value: 500},
        {text: 'Woman', value: 300}
    ];
    const margin = {top: 20, right: 20, bottom: 30, left: 40};

    function handleBarClick(element, id){
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    }

    const {width}=state;
    return (<div ref={inputRef}>
        <div style={{width: '50%'}}>
            <BarChart ylabel='Quantity'
                      width={width}
                      height={500}
                      margin={margin}
                      data={data}
                      onBarClick={handleBarClick}/>
        </div>
    </div>)
};
export default Chart;

