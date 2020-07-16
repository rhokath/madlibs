import React, {useState, useContext} from 'react'

const ToggleContext = React.createContext(null)

export const ToggleProvider = ({children}) => {
    const [isOpen, toggle] = useToggle()
    return(
        <ToggleContext.Provider value={{isOpen, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}
export const ToggleFunctionConsumer = () => {
    //destructure out of value
    const {isOpen, toggle} = useToggleContext()
    return(
        <button onClick={toggle}>
            {isOpen ? "create story": "try again"}
        </button>
    )

}
export const useToggleContext = () =>{
    const value = useContext(ToggleContext)
    if(value === null){
        throw new Error('useToggleContext must be used in ToggleProvider')
    }
    return value
}
//custom toggle hook
const useToggle = () =>{
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(isOpen => !isOpen)
    }
    return [isOpen, toggle]
}

export const ToggleIsOpen = ({children}) => {
    const {isOpen} = useToggleContext()
    if(!isOpen){
        return <>{children}</>
    }
    return null
}