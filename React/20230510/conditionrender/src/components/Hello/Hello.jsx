import One from './One';
import Two from './Two';

export default function Hello(props) {
	const name = props.name;
  if(name){
    return <One name={name}/>
  } else {
    return <Two/>
  }
}
