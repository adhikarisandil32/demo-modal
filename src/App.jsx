import { useState } from "react"
import Modal from "./Modal"
import ReactDOM from "react-dom"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      {isModalOpen &&
        ReactDOM.createPortal(
          <Modal setIsModalOpen={setIsModalOpen} />,
          document.getElementById("portal")
        )}
    </div>
  )
}

export default App
