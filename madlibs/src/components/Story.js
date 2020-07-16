import React, {useContext} from 'react'
import {MadlibContext} from '../context/madlibprovider'

const Story = () => {
    const [madlib] = useContext(MadlibContext)
    console.log('madlib in story', madlib)
    console.log('madlib object for error handling', Object.entries(madlib))
    // determine if any of the values on the context are empty, don't want to display certain words if not given all values
    const checkProperties= (obj) =>{
        console.log('console log in check prop', obj)
        let state = true
        for(let key in obj){
            if(obj[key] === null || obj[key] === ""){
                state = false
                break
            }
            return state
        }
    }
    let check = checkProperties(madlib)
    return(
  
        <div className='story'>
            { check ?
    <h2>{`The ${madlib.noun} was ${madlib.adjective} and ${madlib.verb} ${madlib.adverb}`}</h2> :
           <h2>need values for all inputs! click try again!</h2>
           }
        </div>
    )
}
export default Story;