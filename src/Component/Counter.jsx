import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, set } from "../Store/MainStore";
import { useState } from "react";
const Counter = () => {
  const reduxValueReader = useSelector((state) => state.value);
  const dispatcher = useDispatch();
  const [setValue, setSetValue] = useState();
  return (
    <div>
      {" "}
      {reduxValueReader}
      <button onClick={() => dispatcher(increment())}>increment +</button>
      <button onClick={() => dispatcher(decrement())}>decrement -</button>
      <input type="number" onChange={(e) => setSetValue(e.target.value)} />
      <button onClick={() => dispatcher(set(setValue))}>set Value</button>
    </div>
  );
};

export default Counter;
