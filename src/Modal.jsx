import React, { useEffect, useRef } from "react"

export default function Modal({ setShowModal }) {
  const modalWarpperRef = useRef(null)

  useEffect(() => {
    let checkClickOuside = (e) => {
      if (!modalWarpperRef.current.contains(e.target)) {
        setShowModal(false)
      }
    }

    document.addEventListener("click", checkClickOuside)

    return () => {
      document.removeEventListener("click", checkClickOuside)
    }
  }, [])

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      ></div>
      <div
        style={{
          position: "fixed",
          padding: "25px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          border: "2px solid black",
        }}
        ref={modalWarpperRef}
      >
        <h3>This is the Modal</h3>
        <button onClick={() => setShowModal(false)}>Close Modal</button>
      </div>
    </>
  )
}
