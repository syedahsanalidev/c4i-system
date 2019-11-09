import React, {useContext} from 'react';
import context from './context';

const Navigation = ({calculatePercentage}) => {
    const {handleContinue, handleBack, step, pages} = useContext(context);
    return <div className="col-sm-12">
        <div className="quiz_next">
            <button className="quiz_continueBtn" disabled={step === 1} onClick={() => handleBack()}>Back</button>
            {step!==pages && <button className="quiz_continueBtn" onClick={() => handleContinue()}>Continue</button>}
            {step===pages && <button className="quiz_continueBtn" onClick={() => calculatePercentage()}>Calculate</button>}
        </div>
        {/* end of quiz_next */}
    </div>
};

export default Navigation;
