import NavigationBar from './NavigationBar';
import './css/app.css'
import { Outlet } from 'react-router-dom';
import { BankProvider } from './Context';

function App() {
  return (
    <BankProvider>
      <div className="App">
        <NavigationBar>
        </NavigationBar>
        <Outlet />
      </div>
    </BankProvider>

  );
}

export default App;
