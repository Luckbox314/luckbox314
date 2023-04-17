import './App.css';

function App() {
  return (
    <div className="App">
      <article id='article'>
      <div>
        <h1 className='luckbox'>Luckbox</h1>
      </div>
      <div className='content'>
        <div className='card'>
          <h2>Prototypes</h2>
          <p>ideas you can try out.</p>
        </div>
        <div className='card'>
          <h2>Ideas</h2>
          <p>List of ideas that I have.</p>
        </div>
        <div className='card'>
          <h2>React Components</h2>
          <p>List of react components that I've created and I find kind of neat.</p>
        </div>
        <div className='card'>
          <h2>Curriculum</h2>
          <p>List of my work experience</p>
        </div>
      </div>
      </article>
      <footer>
        Social media
      </footer>
    </div>
  );
}

export default App;
