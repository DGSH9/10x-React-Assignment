import logo from './logo.svg';
import './App.css';

function App(props) {
  const {employee}=props;

 return(
  <div className="container">

    <div className="profile-img-container">
    <img src={employee.profileImg} width="100" height="100" alt="profile-avatar"></img>
    </div>

    <div className="title-container">
      <h1>{employee.name}</h1>
    </div>

  <div>
      <div className="profile-info-container">
                <label>
                    Location
                </label>
                <strong>
                  {employee.location}
                </strong>
          
        </div>

      <div className="profile-info-container">
                <label>
                    BLood Group
                </label>
                <strong>
                  {employee.bloodGroup}
                </strong>
        </div>

      <div className="profile-info-container">
                <label>
                  Age
                </label>
                <strong>
                  {employee.age}
                </strong>

        </div>

  </div>

</div>
);
}


export default App;
