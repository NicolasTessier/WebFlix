import "./Rating.css";
const MAX_STARS = 5;

function Rating({ rank }) {
  const note = Math.round(rank / 2);
  return (
    <div className="rateContainer">
      {Array.from({ length: note }, (v, k) => (
        <div className="rate" key={k} />
      ))}
      {Array.from({ length: MAX_STARS - note }, (v, k) => (
        <div className="rate empty" key={k} />
      ))}
      {note + "/5"}
    </div>
  );
}

export default Rating;
