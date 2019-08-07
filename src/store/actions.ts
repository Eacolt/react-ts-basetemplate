export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export function increment(s:any){
 
	return{
		type:INCREMENT
	}
}
export const decrement = ()=>({
	type:DECREMENT
})