import logo from './logo.svg';
import './App.css';
import Hello from './Component/Hello';
import Hello2 from './Component/Hello2';
import { Navbar, NavbarBrand } from 'reactstrap';
import Comment from './Component/Comment';
import Account from './Component/Account';
import Store from './Component/Store';
import Stock from './Component/Stock';
import Warining from './Component/Warning';
import Warning from './Component/Warning';
import Form from './Component/Form';
import Garage from './Component/Garage';
import Welcome from './Component/Welcome';
import Car from './Component/Car';
import Menu from './Component/MenuComponent';

const cities = ['Jaipiur', 'Jodhpur', 'Udaipur', 'Pune', 'Chandigarh'];
const comment = {
  date: new Date(),
  text: 'I hope you enjoy my restaurant!',
  author: {
    name: 'Alberto',
    avatarUrl: './assets/images/alberto.png'
  }
}

const names= cities.map( (c, index)=>{ return <li key={index}>{c}</li>});

function App() {
  return (
    <div className='App'>
      {/* <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Comment date={comment.date} text={comment.text} author={comment.author}></Comment>
      <Account></Account>
      <Store></Store>
      <Store></Store> 
      <Stock></Stock>
      <Warning></Warning>
      <Form></Form>
      <ul>{names}</ul>
      <Garage></Garage>
      <Welcome name="Van"></Welcome>
      <Welcome name="Thuy Kieu"></Welcome>
      <Welcome name="Thuy Van"></Welcome>
      <Comment date={comment.date} text={comment.text} author={comment.author}/>
      <Car></Car> */}
      <Menu></Menu>
    </div>
  );
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
const elements = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);



// function App() {
//   // const name = 'Jost  Perez';
//   // const element = <h1>Hello, {name}</h1>;
//   const data = { id: "1", name: "Bao Tran" };
//   return (
//     // <div>
//     //   <h1>{element}</h1>
//     //   <h1> Hello</h1>
//     //   <h1> {name}</h1>
//     //   <h1>{elements}</h1>
//     // </div>
//     <div>
//       <Hello msg="Helo, Tran" user={data} />
//       <Hello2 msg="Have fun"></Hello2>
//     </div>
//   );
//   // return (
//   //   <div className="App">
//   //     <h1>Hello World!</h1>
//   //   </div>
//   // );
// }
// đưa giá trị 'elements' làm nội dung của thẻ chứa id là root
// ReactDOM.render(
//   elements,
//   document.getElementById('root')
// );

// function tick(){
//   const element2 = (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {new Date().toLocaleDateString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element2, document.getElementById('root'));
// }
// setInterval(tick, 1000);

export default App;
