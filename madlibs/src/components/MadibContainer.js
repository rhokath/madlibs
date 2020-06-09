import React, {useState} from 'react'
import MadlibForm from './MadlibForm'


const MadlibContainer = () => {
    //could make a call to an api and retrieve a story and then pass it a helper function
    const [someStory, setSomeStory] = useState(`Love is:`)
    const handleStory = (anObject) => {
        

    }
    return (
        <div>
            <MadlibForm/>
        </div>
    )
}

export default MadlibContainer;