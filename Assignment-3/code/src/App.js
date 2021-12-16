import logo from './logo.svg';
import './App.css';



function App(props) {
  const {employee}=props;

 return(
  <div className="container">
    {/* first container(header container) */}
    <div className="header-container">
          <div className="content1">
              <strong>{employee.name}</strong>
              <label>{employee.id}</label>
          </div>

          <div className="content2">
              <button placeholder="Print">Print</button>
          </div>
          
    </div>

    {/* Second Container */}
    <div className="customer-info">
          <div>
            <strong>Appointment </strong>
            <label>{employee.appointment}</label>
          </div>

          <div>
            <strong>Email: </strong>
            <label>{employee.email}</label>
          </div>

          <div>
            <strong>Phone </strong>
            <label>{employee.phone}</label>
          </div>

    </div>
    

    {/* Third Container */}
    <div className="order-info">
          <div className="order-info1">
                <strong>Status</strong>
                <div className="order-info1-1">
                  <span className="order-info1-span1"></span>
                  <label>{employee.status}</label>
                </div>
                
          </div>

          <div className="order-info1">
                <strong>Door</strong>
                <label>{employee.door}</label>
          </div>

          <div className="order-info1">
                <strong>Time</strong>
                <div className="order-info1-3">
                  <label>{employee.time}</label>
                  <label>{employee.date}</label>
                </div>

          </div>
    </div>

    {/* Fourt Container */}
    <div className="product-list">
        <div className="product-list-box-outer">

          <div className="product-list-box-inner"></div>

        </div>
        


        <div className="product-list-img">
            <div>
                <img src={employee.image_key} alt="employee_image"></img>
            </div>
        </div>


        <div className="product-list-text-content"></div>    
              <div className="product-list-text-content1">
                <strong>{employee.strong1_key}</strong>
                <label>{employee.label1_key}</label>
              </div>
        </div>


</div>
);
}
export default App;

