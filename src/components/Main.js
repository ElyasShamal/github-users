import { useEffect, useState } from "react";

// Api link
const url = "https://api.github.com/users";

function Main() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const remove = (id) => {
    let newPerson = users.filter((person) => person.id !== id);
    setUsers(newPerson);
  };
  return (
    <>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <button className="btn" onClick={() => remove(id)}>
                X
              </button>
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blink">
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Main;
