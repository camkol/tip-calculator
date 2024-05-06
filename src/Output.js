export default function Output({ bill, yourTip, friendsTip }) {
  const totalTip = (bill * (yourTip + friendsTip)).toFixed(2);

  const totalBill = (bill + parseFloat(totalTip)).toFixed(2);

  return (
    <div>
      <h2>
        You pay ${totalBill}(${bill} + ${totalTip} tip)
      </h2>
    </div>
  );
}
