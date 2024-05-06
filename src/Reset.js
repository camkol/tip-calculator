export default function Reset({ setBill, setYourTip, setFriendsTip }) {
  function handleReset() {
    setBill(0);
    setYourTip(0);
    setFriendsTip(0);
  }

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
