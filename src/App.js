import './global.css';
import pageText from './dummyUrlData';

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://staging.ishayoga.eu/index.php/webinar-join-now/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        }
      );
      const res = await response.json(); 
      console.log({res})
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>{title}</h1> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={handleSubmit}><button type="submit">press me</button></form>
      </header>
    </div>
  );
}

export default App;
