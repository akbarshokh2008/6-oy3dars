import "./index.css";
function Card({ user }) {
  return (
    <div className="card">
      <p>
        <b>Ismi:</b> {user.name}
      </p>
      <p>
        <b>Familyasi:</b> {user.family}
      </p>
      <p>
        <b>Yoshi:</b> {user.number}
      </p>
    </div>
  );
}

export default Card;
