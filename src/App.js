import Auth from "./components/auth";
import Brand from "./components/brand"
import { useUserContext } from "./userContext";

function App() {
  const { user, loading, error } = useUserContext();
  
  const nametype = user.displayName;
  const [name, ...brand_data] = nametype.split(';');
  const userType = brand_data.at(-1);

  function userTypeCheck() {
    if (user) {
      if (userType == "Brand") {
        return <Brand />
      }
    }
    return <Auth />
  }

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {userTypeCheck()} </>}
    </div>
  );
}

export default App
