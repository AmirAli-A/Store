import React from "react";

const myContext = React.createContext()
export const myProvider = myContext.Provider
export const myConsumer = myContext.Consumer