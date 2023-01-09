export default function ProjectList(props) {
  return props.list.map((item, index) => <li key={index}><img src={item.img} alt="" /></li>)
}