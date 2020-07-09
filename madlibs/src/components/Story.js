import React, {useContext} from 'react'
import {MadlibContext} from '../context/madlibprovider'

const Story = () => {
    const [madlib] = useContext(MadlibContext)
    console.log('madlib in story', madlib)
    return(
        <div className='story'>
            this is the story componment
    <h2>{`The ${madlib.noun} was ${madlib.adjective} and ${madlib.verb} ${madlib.adverb}`}</h2>
        </div>
    )
}
export default Story;