import React from "react";
import { useState,useReducer,useMemo,useCallback,useEffect} from "react";

function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );
  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>First: {state.first}</div>
      <div>Last: {state.last}</div>
    </div>
  );
}

function SortedList({ list, sortFunc }) {
  console.log("SortedList render");

  const sortedList = useMemo(() => {
    console.log("Running sort");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return <div>{sortedList.join(", ")}</div>;
}

function useMemmoo() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const countTotal = count1 + count2;

  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  return (
    <>
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFunc={sortFunc} />
      <button onClick={() => setCount1(count1 + 1)}>Count1: {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2: {count2}</button>
      <div>Total: {countTotal}</div>
    </>
  );
  }
function NameList() {
  const [list, setList] = useState(["jack", "jill", "john"]);
  const [name, setName] = useState("");

  const onAddName = () => {
    setList([...list, name]);
    setName(""); // Clear the name input field after adding it to the list
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}


function Counter() {

  let [count,setCount] = useState(0);
  function addone(){
    setCount(count+1);
  }

  return (
   <div class="App">
     <button onClick={addone}>count={count}</button>
   </div>
  );
}

//UseEffect

function UseEffectt(){

  const Stopwatch = () => {
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      const interval = (() => {
        setTime((time) => 
          time + 1);
        },1000);
      
      // return () => clearInterval(interval);
    }, []);
  
    return <div>Time: {time}</div>;
  };
  

  const [names,setNames] = useState([]);

  useEffect(()=>{
    fetch("/names.json")
    .then((response)=>response.json())
    .then((data)=>setNames(data))
  });
  const [seletedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
      <div>
        <Stopwatch />
       <div>
        {names.map((name) => (
          <button onClick={() => onSelectedNameChange(name)}>{name}</button>
        ))}
      </div>
      <div>{JSON.stringify(seletedNameDetails)}</div>
        </div>

  )
}




function App(){
  return(
    <div>
      <Counter/>
      <Counter/>
      <NameList/>
      <UserForm />
      <useMemmoo />
      <UseEffectt />
    </div>
  )
}
export default App;
