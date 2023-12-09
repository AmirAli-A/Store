import react from "react";

const generlContext = react.createContext();

export const GeneralProvider =(props)=>{

    return(
        <generlContext.Provider value={props}>
            {props.children}
        </generlContext.Provider>
    )

}