import React from "react";

export const menuContext = React.createContext();

export const MenuProvider =(props)=> {



return (
    <menuContext.Provider value='just for test'>
        {props.children}
    </menuContext.Provider>
)
}