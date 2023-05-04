import "./App.css";
import useGetUser from "./hooks/useGetUser";
import UserCard from "./components/UserCard";

function App() {
  const { users, isLoading, error, getNextUser } = useGetUser();
  const stringUser = JSON.stringify(users);

  return (
    <>
      <div>
        <h2>1. Show All User Data (the uglier the better)</h2>
        <div style={styles.jsonContainer}>
          {error && <div>{error}</div>}
          <p>{stringUser}</p>
          {isLoading && <div>Loading...</div>}
        </div>
      </div>
      <div>
        <h2>
          2. Display the name and the photo of a user as a UI component. <br />
          Although there is one item, think of it as its possible to have more than one.
        </h2>
        <div style={styles.cardContainer}>
          {users.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      </div>
      <div>
        <h2>
          3. Add a button that on click gets the next item and appends it to the current items.
          Endpoint example (?page=2)
        </h2>
        <button onClick={getNextUser}>Next</button>
        {isLoading && <div>Loading...</div>}
      </div>
    </>
  );
}

export default App;

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
    justifyContent: "center",
  },
  jsonContainer: {
    height: "30vh",
    border: "1px solid grey",
    wordWrap: "break-word" as "break-word",
    overflow: "auto",
  },
};
