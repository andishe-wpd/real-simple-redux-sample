import "./styles.css";
import { Provider } from "react-redux";
import { mainStore } from "./Store/MainStore";
import Counter from "./Component/Counter";
export default function App() {
  return (
    <Provider store={mainStore}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Counter />
      </div>
    </Provider>
  );
}
