import React from 'react';

const NavigationContext = React.createContext({});

export default NavigationContext;

export const NavigationContextProvider = NavigationContext.Provider;
export const NavigationContextConsumer = NavigationContext.Consumer;
