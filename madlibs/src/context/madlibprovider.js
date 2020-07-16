import React, {useState} from 'react';

export const MadlibContext = React.createContext();

export const MadlibProvider = (props) => {
    const [madlib, setMadlib] = useState({
        noun: "",
        verb: "",
        adverb: "",
        adjective: ""
    })
    return(
        <MadlibContext.Provider value={[madlib, setMadlib]}>
            {props.children}
        </MadlibContext.Provider>
    )
}