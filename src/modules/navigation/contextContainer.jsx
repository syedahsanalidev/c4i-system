import React, {useState} from 'react';
import {NavigationContextProvider} from "./context";

const ContextContainer = ({children}) => {
    const [pages, setPages] = useState(3);
    const [step, setStep] = useState(1);

    function handleContinue() {
        let tempStep = step;
        if (step < pages) {
            tempStep++;
            setStep(tempStep);
        }
    }

    function handleBack() {
        let tempStep = step;
        if (step > 1) {
            tempStep--;
            setStep(tempStep);
        }
    }

    return <NavigationContextProvider value={{
        pages,
        step,
        handleContinue,
        handleBack,
        setPages
    }}>
        {children}
    </NavigationContextProvider>
};
export default ContextContainer;

