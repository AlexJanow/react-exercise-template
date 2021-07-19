import "./User.css";
function User({ characters }) {
  function renderCharacters() {
    const liOfChar = characters.map((char, index) => {
      return (
        <li className="liItem" key={index}>
          <div className={"card" + (char.gender === "female" ? " female" : "")}>
            {char.name.title + " "}
            {char.name.first + " "}
            {char.name.last}
            <div>
              <img
                alt={char.name.first + " " + char.name.last}
                src={char.picture.medium}
              />
            </div>
          </div>
        </li>
      );
    });
    return liOfChar;
  }

  return renderCharacters();
}
export default User;

// It must be a dumb (stateless) component
// It should render the full name of the user, including the title
// It should change its background depending on the gender
// It should render the picture of the user
