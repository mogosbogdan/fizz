import "./App.css";
import { useState } from "react";
import { SwipeableDrawer } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="App">
        <button onClick={handleClick}>Click me</button>
        <>
          <SwipeableDrawer
            anchor={"bottom"}
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
          >
            <div style={{ height: "400px", textAlign: "center" }}>
              <button onClick={() => setOpen(false)}>close</button>
            </div>
          </SwipeableDrawer>
        </>
      </div>
    </>
  );
}

export default App;
