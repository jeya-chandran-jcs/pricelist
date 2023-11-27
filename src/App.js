import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid bg-skyblue min-vh-100 d-flex align-items-center justify-content-center">
    <div className="row">
      <div className="col-lg-4 d-flex justify-content-center text-center">
        <div className="card p-3 rounded-3">
          <div className="card-header text-center">Free</div>
          <div className="card-body text-center">
            <h5 className="card-title">$0/month</h5>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item" ><i class="fa-solid fa-check"></i>Single user</li>
              <li className="list-group-item"><i class="fa-solid fa-check"></i>50 GB storage</li>
              <li className="list-group-item"><i class="fa-solid fa-check"></i>Unlimited public projects</li>
              <li className="list-group-item"><i class="fa-solid fa-check"></i>Community access</li>
              <li className="list-group-item dim-text">
              <i class="fa-solid fa-x"></i>Unlimited private projects 
              </li>
              <li className="list-group-item dim-text">
              <i class="fa-solid fa-x"></i>Dedicated phone support 
              </li>
              <li className="list-group-item dim-text"><i class="fa-solid fa-x"></i>Free subdomain</li>
              <li className="list-group-item dim-text"><i class="fa-solid fa-x"></i>Monthly status report</li>
            </ul>
            <button className="btn btn-primary mt-3" >Submit</button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 d-flex justify-content-center">
        <div className="card p-3 rounded-3">
          <div className="card-header text-center">Plus</div>
          <div className="card-body text-center">
            <h5 className="card-title">$9/month</h5>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item"><i class="fa-solid fa-check"></i>5 users</li>
              <li className="list-group-item"><i class="fa-solid fa-check"></i>50 GB storage</li>
              <li className="list-group-item "><i class="fa-solid fa-check"></i>Unlimited public projects</li>
              <li className="list-group-item "><i class="fa-solid fa-check"></i>Community access</li>
              <li className="list-group-item "><i class="fa-solid fa-check"></i>Unlimited private projects</li>
              <li className="list-group-item "><i class="fa-solid fa-check"></i>Dedicated phone support</li>
              <li className="list-group-item "><i class="fa-solid fa-check"></i>Free subdomain</li>
              <li className="list-group-item dim-text">
              <i class="fa-solid fa-x"></i>Monthly status report
              </li>
            </ul>
            <button className="btn btn-primary mt-3" >Submit</button>
          </div>
        </div>
      </div>

      <div className="col-lg-4 d-flex justify-content-center">
        <div className="card p-3 rounded-3">
          <div className="card-header text-center">Pro</div>
          <div className="card-body text-center">
            <h5 className="card-title">$49/month</h5>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item"><i class="fa-solid fa-check"></i>Single user</li>
              <li className="list-group-item"><i class="fa-solid fa-check"></i>50 GB storage</li>
              <li className="list-group-item"><i class="fa-solid fa-check"></i>Unlimited public projects</li>
              <li className="list-group-item"><i class="fa-solid fa-check"></i>Community access</li>
              <li className="list-group-item"><i class="fa-solid fa-check"></i>Unlimited private projects</li>
              <li className="list-group-item"><i class="fa-solid fa-check"></i>Dedicated phone support</li>
              <li className="list-group-item"><i class="fa-solid fa-check"></i>Free subdomain</li>
              <li className="list-group-item "><i class="fa-solid fa-check"></i>Monthly status report</li>
            </ul>
            <button className="btn btn-primary mt-3">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}

export default App;
