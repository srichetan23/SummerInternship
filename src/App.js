import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='text-warning bg-dark mb-3'>
      <Header />
      </div>
      <div className='text-warning bg-dark mt-3'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
