import { use, useEffect, useState } from "react";

function FollowMouse() {
  const [enabeled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("Mouse follow is: ", enabeled ? "enabled" : "disabled");
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("Mouse position: ", clientX, clientY);
      setPosition({ x: clientX, y: clientY });
    };

    const limpiarEffecto = () => {
      window.removeEventListener("pointermove", handleMove);
    };

    if (enabeled) {
      window.addEventListener("pointermove", handleMove);
    }

    return limpiarEffecto;
  }, [enabeled]);

  useEffect(() => {
    document.body.style.cursor = enabeled ? "none" : "auto";
  }, [enabeled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "red",
          pointerEvents: "none",
          opacity: 0.8,
          left: -20,
          top: -20,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <h3>Mouse Follow App</h3>
      <button onClick={() => setEnabled(!enabeled)}>
        {enabeled ? "Disable" : "Enable"} Mouse Follow
      </button>
    </>
  );
}

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
