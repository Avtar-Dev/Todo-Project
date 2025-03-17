import "bootstrap/dist/css/bootstrap.min.css";
import Todo from "./screens/Todo_simpleArr";

const App = () => {
  return (
    <div className="min-vh-100 bg-info d-flex flex-column justify-content-center align-items-center">
      <Todo></Todo>
    </div>
  );
};

export default App;
