import { useRef } from 'react'
import './App.css'
import ControlledFormwWithKeys from './components/ControlledForm-formKeys'
// import ControlledForm from './components/ControlledFormRaw'
import UncontrolledForm from './components/UncontrolledForm'

function App() {
  const formRef = useRef();

  return (
    <>
     <UncontrolledForm />
     {/* <ControlledForm /> */}
     <ControlledFormwWithKeys formRef={formRef} />

     <button 
     type="button" 
     onClick={() => formRef.current.requestSubmit()
     }
     > 
     Submit
     </button>

    </>
  )
}

export default App
