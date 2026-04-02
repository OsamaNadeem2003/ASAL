export default function Counter(props) {
  return (
    <>
      <div className="Creating-a-Counter">
        <h1>Creating a Counter</h1>
        <h2>{props.value}</h2>
        <button className="increase-button" onClick={() => props.setValue(props.value + 1)}> INCREASE </button>
        <button className="decrease-button" onClick={() => props.setValue(props.value - 1)}> DECREASE </button>
      </div>
    </>
  )
}