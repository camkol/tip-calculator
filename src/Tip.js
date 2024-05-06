export default function Tip({ tipper, setTipper, children }) {
  const tip = [
    {
      percentage: 0,
      text: "Dissatisfied (0%)",
    },
    {
      percentage: 0.05,
      text: "It was okay (5%)",
    },
    {
      percentage: 0.1,
      text: "It was good (10%)",
    },
    {
      percentage: 0.2,
      text: "Absolutely amazing! (20%)",
    },
  ];

  return (
    <div className="slot">
      <h3 className="slotA">{children}</h3>
      <select
        className="slotB"
        value={tipper}
        onChange={(e) => setTipper(e.target.value)}
      >
        {tip.map((item) => (
          <option key={item.percentage} value={item.percentage}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
}
