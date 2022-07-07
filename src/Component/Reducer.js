import React, { Component } from 'react'

export const initState={
  count: 100
};

export const Reducer = (state = initState, action) => {
  switch(action.type){
    case "INCRE":
      return{
        count: state.count + 1
      }
      break;
    case "DECRE":
      return{
        count: state.count - 1
      }
      break;
    default:
      return state;
  }
};

// export default class Reducer extends Component {
//   render() {
//     return (
//       <div>Reducer</div>
//     )
//   }
// }
