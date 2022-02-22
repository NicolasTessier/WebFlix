import "./Chip.css";

function Chip({ label, onPress }) {
  return (
    <>
      {onPress ? (
        <button onClick={onPress} className="chip">
          {label}
        </button>
      ) : (
        <div className="chip">{label}</div>
      )}
    </>
  );
}

export default Chip;
