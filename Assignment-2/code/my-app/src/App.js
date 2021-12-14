import logo from './logo.svg';
import './App.css';



function App() {
  const employee = {
    name: 'Tom',
    location: 'New York',
    bloodGroup: 'B+',
    age: 28,
    profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
         }
    
return(
  <div className="container">
      <div>
    <img src={employee.profileImg} />
    <h1>{employee.name}</h1>
    <p>Location</p>
    <h4>{employee.location}</h4>
    <p>Blood group</p>
    <h4>{employee.bloodGroup}</h4>
    <p>Age</p>
    <h4>{employee.age}</h4>

      </div>

</div>
);
}
export default App;
