import { useState } from "react"
import Modal from "./Modal"

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
      </div>

      {showModal &&
        ReactDOM.createPortal(
          <Modal setShowModal={setShowModal} />,
          document.getElementById("portal")
        )}
    </>
  )
}

export default App
