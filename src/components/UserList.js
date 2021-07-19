import { useEffect, useState } from "react";
import User from "./User";
import "./UserList.css";
function UserList() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [amount, setAmount] = useState("10");

  useEffect(() => {
    const temp = localStorage.getItem("characters");
    const loadedChars = JSON.parse(temp);
    if (loadedChars) {
      setCharacters(loadedChars);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(characters);
    localStorage.setItem("characters", temp);
  }, [characters]);

  // function maxResults() {
  //   const amountOfPeople = maxResults.value;
  //   return amountOfPeople;
  // }
  useEffect(
    (amountOfPeople) => {
      setIsLoading(true);
      setIsError(false);
      const url = `https://randomuser.me/api/?inc=email,gender,name,picture&results=${amount}`;

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
    },
    [amount]
  );

  return (
    <div>
      <div>
        <label for="maxResults">Max. results:</label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          name="maxResults"
        />
      </div>
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
