import React, {useState} from 'react'
import MadlibForm from './MadlibForm'
import Story from './Story'
import {ToggleProvider, useToggleContext, ToggleIsOpen} from '../context/toggleprovider'

const MadlibContainer = () => {
    //could make a call to an api and retrieve a story and then pass it a helper function
    //okay so i have inputs and those are being saved in state
    // i want to use that state in another component to display a story
    //i need to determine how i'm going to parse the story
    // i need to decide how and when i will display the story
    // const [someStory, setSomeStory] = useState(`Love is:`)
    // const handleStory = (anObject) => {
    // const ToggleIsOpen = ({children}) => {
    //     const {isOpen} = useToggleContext()
    //     if(isOpen){
    //         return <>{children}</>
    //     }
    //     return null
    // }

    // }
    return (
        // <ToggleProvider>
        <div className="madlibContainer">
            <MadlibForm/>
            <ToggleIsOpen>
            <Story/>
            </ToggleIsOpen>
        </div>
        // </ToggleProvider>
    )
}

export default MadlibContainer;