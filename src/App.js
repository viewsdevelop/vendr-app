import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          id="vendr-logo"
          src={process.env.PUBLIC_URL + '/vendr-logo.png'}
          alt="Logo"
        />
        <br />
        <p className="welcome-text">Coming Soon</p>
      </header>
    </div>
  )
}

export default App
