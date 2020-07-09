import React, {useState, useContext} from 'react';
import './index.scss'
import { MadlibContext} from '../context/madlibprovider'
import {ToggleFunctionConsumer, useToggleContext} from '../context/toggleprovider'

// const MadlibForm = () => {
//     const [inputs, setInputs] = useState({person: "", verb: '', adjective: '', adverb: '', })
//     const [isActive, setIsActive] = useState(false)
//     const handleChange = (e)=>{
//         // let inputValue = e.target.value
//         console.log('inputvalue', e.target.value)

//         setInputs({...inputs, [e.target.name]: e.target.value})
//         console.log('inputs', inputs)
//         setIsActive(!isActive)
//     }
//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         console.log('input state', inputs)
//         setInputs({
//             person: "",
//             verb: "",
//             adjective: "",
//             adverb: ""
//         })

//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>person
//             <input
//             className={isActive? `isActive`: `notActive`}
//             type='text'
//             name='person'
//             placeholder='person'
//             value={inputs.person}
//             onChange={handleChange}
//             />
//             </label>
//             <label>
//                 verb
//                 <input
//                 className={isActive? `isActive`: `notActive`}
//                 type='text'
//                 name='verb'
//                 placeholder='verb'
//                 value={inputs.verb}
//                 onChange={handleChange}
//                 />
//             </label>
//             <label>
//                 adjective
//                 <input 
//                 className={isActive? `isActive`: `notActive`}
//                 type='text'
//                 name='adjective'
//                 placeholder='adjective'
//                 value={inputs.adjective}
//                 onChange={handleChange}
//                 />
//             </label>
//             <label>
//                 adverb
//                 <input
//                 className={isActive? `isActive`: `notActive`}
//                 type="text"
//                 name='adverb'
//                 placeholder='adverb'
//                 value={inputs.adverb}
//                 onChange={handleChange}
//                 />
//             </label>
//             <button>create story</button>
//         </form>
//     )
// }
const MadlibForm = () => {
    const {isOpen} = useToggleContext()
    let disabled = !isOpen
    const [madlib, setMadlib] = useContext(MadlibContext)
    const [input, setInput] = useState({
        noun: "",
        verb: "",
        adverb: "",
        adjective: ""
    })
    const handleChange = e => {
        // e.preventDefault()
        setInput({...input, [e.target.name]: e.target.value})
        // setMadlib({...madlib, [e.target.name]: e.target.value})
      
        console.log('madlib', madlib)
        console.log('input', input)

    }
    const handleSubmit = e =>{
        e.preventDefault()
        setMadlib(input)
        // setMadlib({...madlib, [e.target.name]: e.target.value})
        console.log('madlib in submit', madlib)
        setInput({
            noun: "",
            verb: "",
            adverb: "",
            adjective: ""
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>noun
            <input
            // className={isActive? `isActive`: `notActive`}
            type='text'
            name='noun'
            placeholder='noun'
            value={input.noun}
            onChange={handleChange}
            disabled={disabled}
            />
            </label>
            <label>verb
            <input
                // className={isActive? `isActive`: `notActive`}
                type='text'
                name='verb'
                placeholder='verb'
                value={input.verb}
                onChange={handleChange}
                disabled={disabled}
            />
            </label>
            <label>adverb
            <input
                // className={isActive? `isActive`: `notActive`}
                type='text'
                name='adverb'
                placeholder='adverb'
                value={input.adverb}
                onChange={handleChange}
                disabled={disabled}
            />
            </label>
            <label>adjective
            <input
                // className={isActive? `isActive`: `notActive`}
                type='text'
                name='adjective'
                placeholder='adjective'
                value={input.adjective}
                onChange={handleChange}
                disabled={disabled}
                
            />
            </label>

            <ToggleFunctionConsumer/>
        </form>
    )
}
export default MadlibForm