export default function Toolbar(props) {
  return props.filters.map((item) => <button 
    key={item}
    onClick={(evt) => props.onSelectedFilter(evt.target.innerText)}
  >
    {item}
  </button>)
}
