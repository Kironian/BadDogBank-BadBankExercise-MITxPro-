// importing in the styles here.
import { Link } from 'react-router-dom';
import './css/navigationbar.css';

// 

function NavigationBar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">

      <Link className="navbar-brand" to="home">Bad Dog Bank</Link>

      <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">


        <span className="navbar-toggler-icon"></span>
      </button>



      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li id="home" className="nav-item">
          

            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Welcome to Bad Dog Bank. We chew up your money." to="home">Home</Link>
          </li>
          <li id="createAccount" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Help us, help you, go broke." to="createAccount">Create Account</Link>
          </li>
          <li id="logIn" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Oh wow you came back." to="login">Log In</Link>
          </li>
          <li id="deposit" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Give us your money." to="deposit">Deposit</Link>
          </li>
          <li id="withdraw" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Grrrrrrr." to="withdraw">Withdraw</Link>
          </li>
          <li id="allData" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Steal all the user info here ^"  to="data">All Data</Link>


          </li>          
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;