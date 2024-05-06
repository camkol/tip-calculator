export default function Bill({ bill, setBill }) {
  return (
    <div className="slot">
      <h3 className="slotA">How much was the bill?</h3>
      <input
        type="number"
        className="slotB"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}
