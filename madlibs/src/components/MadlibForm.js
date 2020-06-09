import React, {useState} from 'react';
import './index.scss'


const MadlibForm = () => {
    const [inputs, setInputs] = useState({person: "", verb: '', adjective: '', adverb: '', })
    const [isActive, setIsActive] = useState(false)
    const handleChange = (e)=>{
        // let inputValue = e.target.value
        console.log('inputvalue', e.target.value)

        setInputs({...inputs, [e.target.name]: e.target.value})
        console.log('inputs', inputs)
        setIsActive(!isActive)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('input state', inputs)
        setInputs({
            person: "",
            verb: "",
            adjective: "",
            adverb: ""
        })

    }
    return(
        <form onSubmit={handleSubmit}>
            <label>person
            <input
            className={isActive? `isActive`: `notActive`}
            type='text'
            name='person'
            placeholder='person'
            value={inputs.person}
            onChange={handleChange}
            />
            </label>
            <label>
                verb
                <input
                className={isActive? `isActive`: `notActive`}
                type='text'
                name='verb'
                placeholder='verb'
                value={inputs.verb}
                onChange={handleChange}
                />
            </label>
            <label>
                adjective
                <input 
                className={isActive? `isActive`: `notActive`}
                type='text'
                name='adjective'
                placeholder='adjective'
                value={inputs.adjective}
                onChange={handleChange}
                />
            </label>
            <label>
                adverb
                <input
                className={isActive? `isActive`: `notActive`}
                type="text"
                name='adverb'
                placeholder='adverb'
                value={inputs.adverb}
                onChange={handleChange}
                />
            </label>
            <button>create story</button>
        </form>
    )
}
export default MadlibForm