import Card from "./component/Card";
import Button from "./component/Button";
import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [number, setNumber] = useState("");
  const [users, setUsers] = useState([]);

  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeFamily(event) {
    setFamily(event.target.value);
  }
  function handleChangeNumber(event) {
    setNumber(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const userForm = {
      name: name,
      family: family,
      number: number,
      id: Date.now(),
    };

    let copied = [...users];
    copied.push(userForm);
    setUsers(copied);
    setName("");
    setFamily("");
    setNumber("");
  }

  return (
    <div className="container">
      <h1>Malumotlaringizni kiriting</h1>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Ismingizni kiriting</label>
        <input
          onChange={handleChangeName}
          value={name}
          type="text"
          name="name"
          required
        />
        <label htmlFor="familya">Familiangizni kiriting</label>
        <input
          onChange={handleChangeFamily}
          value={family}
          type="text"
          name="familya"
          required
        />
        <label htmlFor="yosh">Yoshingizni kiriting</label>
        <input
          onChange={handleChangeNumber}
          value={number}
          type="number"
          name="yosh"
          required
        />
        <Button />
      </form>
      <div className="malumotlar">
        <h2>Malumotlar</h2>
        <div className="cardlar">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
