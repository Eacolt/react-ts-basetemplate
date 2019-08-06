import * as React from 'react'
 interface IProps{
	name?:string;
}
 
interface IState{
	count:number
}
export default class App extends React.Component<IProps,IState>{
	public static defaultProps:IProps = {
		name:'lzt'
	};
	public state = {
		count:100
	}

	constructor(props:IProps){
		super(props)
	}
	public render(){
		return(
			<div>Hello world,I miss you {this.props.name}{this.state.count} times!!</div>
		)
	}
}
 
 
