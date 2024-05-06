import React, { useState } from "react";
import Bill from "./Bill";
import Tip from "./Tip";
import Output from "./Output";
import Reset from "./Reset";

function App() {
  const [bill, setBill] = useState(0);
  const [yourTip, setYourTip] = useState(0);
  const [friendsTip, setFriendsTip] = useState(0);

  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Tip tipper={yourTip} setTipper={setYourTip}>
        How did you like the service?
      </Tip>
      <Tip tipper={friendsTip} setTipper={setFriendsTip}>
        How did your friend like the service?
      </Tip>
      <Output
        bill={Number(bill)}
        yourTip={Number(yourTip)}
        friendsTip={Number(friendsTip)}
      />
      <Reset
        setBill={setBill}
        setYourTip={setYourTip}
        setFriendsTip={setFriendsTip}
      />
    </div>
  );
}

export default App;
