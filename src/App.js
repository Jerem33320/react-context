import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="jerem">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
