import "./Chip.css";

function Chip({ label, onPress, style }) {
  return (
    <>
      {onPress ? (
        <button onClick={onPress} className={"chip " + style}>
          {label}
        </button>
      ) : (
        <div className="chip">{label}</div>
      )}
    </>
  );
}

export default Chip;
