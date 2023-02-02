import AppCss from './App.module.css';
import Gritting from './Componantes/Griting.jsx'
import Avatar from './Componantes/Avatar.jsx'
import Button  from './Componantes/Button';

const arr =[1,2,3,4,5,6];
const squere = arr.map((el)=> <li>{el*2}</li>);
console.log(squere)


const user =[
  {
    id :1,
    name: "Vinay",
    image: "https://avatars.githubusercontent.com/u/98196841?v=4"
  },
  {
    id :2,
    name: "Vinay",
    image: "https://avatars.githubusercontent.com/u/98196841?v=4"
  },
  {
    id :3,
    name: "Vinay",
    image: "https://avatars.githubusercontent.com/u/98196841?v=4"
  },
  {
    id :4,
    name: "Vinay",
    image: "https://avatars.githubusercontent.com/u/98196841?v=4"
  },
];

const userAvater= user.map((data)=> (<Avatar imgSrc={data.image} name={data.name}/>))

function App() {
  return (
   
  <div className={AppCss.main}>
  <h1 className='styles.App'>I am Vinay Kumar</h1>
   <Gritting/> 
   {userAvater}
   <Button name="I am a Button"/>

  </div>
  );
}

export default App;
