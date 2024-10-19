import './App.css';
import FormContainer from './components/form/FormContainer';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <FormContainer />
      </header>
    </div>
  );
}

export default App;
