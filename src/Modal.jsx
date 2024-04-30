import React, { useEffect, useRef } from "react"

const Modal = ({ setIsModalOpen }) => {
  const modelRef = useRef(null)

  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (!modelRef.current.contains(e.target)) {
        setIsModalOpen(false)
      }
    }

    document.addEventListener("click", checkOutsideClick)

    return () => {
      document.removeEventListener("click", checkOutsideClick)
    }
  }, [])

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: "0",
          top: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <div
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            border: "2px solid black",
            padding: "25px",
          }}
          ref={modelRef}
        >
          <p>This is a modal</p>
          <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
        </div>
      </div>
    </>
  )
}

export default Modal
