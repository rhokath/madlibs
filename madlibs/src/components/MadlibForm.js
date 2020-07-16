import React, {useState, useContext} from 'react';
import './index.scss'
import { MadlibContext} from '../context/madlibprovider'
import {ToggleFunctionConsumer, useToggleContext} from '../context/toggleprovider'


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
      
        console.log('madlib', madlib)
        console.log('input', input)

    }
    const handleSubmit = e =>{
        e.preventDefault()
        setMadlib(input)
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