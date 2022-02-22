import "./Input.css";

const Input = ({ value, onChange }) => {
  return (
    <input
      className="input"
      value={value}
      onChange={onChange}
      placeholder="Un super film"
    />
  );
};

export default Input;
