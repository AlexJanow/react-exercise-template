import { useEffect, useState } from "react";
import User from "./User";
import "./UserList.css";
function UserList() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    const url =
      "https://randomuser.me/api/?inc=email,gender,name,picture&results=10";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div>
      <h2>{isLoading === false ? "Search Result:" : "Loading"}</h2>
      <ul>
        {isError ? "Big Error" : !isLoading && <User characters={characters} />}
      </ul>
    </div>
  );
}

export default UserList;

// It must be a stateful component
// On first render, it should get the data coming from the API and store it in its state.
// Make it use an effect, where you use the fetch function to get the data from the API.
// It should render the list of users using the User componen you defined before.
