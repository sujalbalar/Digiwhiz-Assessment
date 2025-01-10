import './App.css';
import Header from './components/Header';
import EmployeeData from './components/EmployeeData';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className='max-w-[100%]'>
      <Header/>
      <Body/>
      <EmployeeData />
      <Footer/>
    </div>
  );
}

export default App;