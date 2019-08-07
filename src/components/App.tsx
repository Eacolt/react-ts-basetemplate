import * as React from 'react'
import {MouseEvent} from 'react'
import {connect} from 'react-redux'
import {IinitialState} from '../store/reducer'
import { increment } from '../store/actions';
import './App.less'
 interface IProps{
 count:any;
 sayword:string;
 increment?:any;
}
 
interface IState{
	readonly words:string
}

const TextBand = (props:any)=>{return <div>{props.text}</div>};
var monsterStyle:React.CSSProperties={
	position:'relative',
	width:'1.5rem',
	height:'4rem',
margin:'0 auto',
left:'0',
right:'0',
color:'white'
}
var bgground:React.CSSProperties = {
	position:'absolute',
	width:'19.2rem',
	height:'10.8rem',
	background:`url("${process.env.baseURL}/img/ground.jpg") no-repeat`,
	backgroundSize:'100% 100%'
}
  class App extends React.Component<IProps,IState>{
 
	private clickIncrement(s:number){
		this.props.increment(s);
	}
	public render(){
		return(
			 <div id="app">
				 <div className="pos-abs" style={bgground}>

					<div  style={monsterStyle}>
						<img onClick={this.clickIncrement.bind(this,8)} src={`${process.env.baseURL}/img/loading.gif`}/>
						<TextBand text={this.props.sayword}/>
						<TextBand text={this.props.count}/>
					</div>
				 </div>

			 </div>
		)
	}
}


let mapStateToProps = (state:IinitialState)=>{
	return{
		count:state.count,
		sayword:state.sayword
	}
}
let mapDispatchToProps  = {
	increment

}
export default connect(mapStateToProps,mapDispatchToProps)(App);
 
 
