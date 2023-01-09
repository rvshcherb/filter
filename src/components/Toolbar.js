export default function Toolbar(props) {
  const filters = props.filters.map((item) => {
    const activeClass = item === props.selected ? 'button--active' : null;
    return ({
      filter: item,
      className: activeClass,
    })
  })

  return filters.map((item) => <button
    className={item.className} 
    key={item.filter}
    onClick={(evt) => props.onSelectedFilter(evt.target.innerText)}
  >
    {item.filter}
  </button>)
}
