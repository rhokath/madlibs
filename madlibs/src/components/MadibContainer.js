import React, {useState} from 'react'
import MadlibForm from './MadlibForm'
import Story from './Story'


const MadlibContainer = () => {
    //could make a call to an api and retrieve a story and then pass it a helper function
    const [someStory, setSomeStory] = useState(`Love is:`)
    const handleStory = (anObject) => {


    }
    return (
        <div className="madlibContainer">
            <MadlibForm/>
            <Story/>
        </div>
    )
}

export default MadlibContainer;