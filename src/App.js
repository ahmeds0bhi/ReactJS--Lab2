import StandardErrorBoundry from "./components/StandardErrorBoundry";
import List from "./components/List";
function App() {
  return (
    <StandardErrorBoundry>
    <div className="text-center">
      <header className="">
        <h1 className='mt-4'>To-Do List Task</h1>
        <hr></hr>
      </header>
    </div>
    <List />
    </StandardErrorBoundry>
  );
}

export default App;