import { StyledApp } from "./AppStyles";

const App = () => {
  return (
    <StyledApp>
      <div className="App">
        <header className="App-header">
          <h1>e-commerce braz</h1>
        </header>
        <main>
          <h2>list of products</h2>
          <ul>
            <li>brand: samsung</li>
            <li>price: 400€</li>
            <li>storage: 2gb</li>
          </ul>
        </main>
      </div>
    </StyledApp>
  );
};

export default App;
