import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        Introduction to React Workshop
      </h1>
      <h2>
        Today we are going to build a simple application to practice two key
        skills:
      </h2>

      <ul>
        <li> Rendering things using React</li>
        <li> Fetching data from an API</li>
      </ul>

      <h2>To do this we will</h2>
      <ul>
        <li >
          Make a parent <span >and</span> child
          component
        </li>
        <li >
          Use the Fetch API <span >in</span> both
          components
        </li>
        <li>In the parent component (App)</li>
        <ul >
          <li>
            We will fetch a list of pokemon from this
            url:
            https://pokeapi.co/api/v2/pokemon

          </li>
        </ul>
        <li>In the child component (Card)</li>
        <ul>
          <li >
            We will fetch an individual pokemon's information using a different url for each pokemon
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default App;
