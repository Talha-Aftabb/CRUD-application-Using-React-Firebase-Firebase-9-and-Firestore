import CreateUser from './components/CreateUser';
import ReadUser from './components/ReadUser';

function App() {
  return (
    <div>
      {/* get, update, & delete the data from firestore */}
      <ReadUser />

      {/* create the data on firestore */}
      <CreateUser />
    </div>
  );
}

export default App;
