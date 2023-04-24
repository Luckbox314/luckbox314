import './App.css';
import ln from './logos/In-72.png';
import gh from './logos/github.svg';

function App() {
  return (
    <div className="App">
      <article id='article'>
      <div>
        <h1 className='luckbox'>Luckbox</h1>
      </div>
      <div className='content'>
        <a className="clickCard" target='_blank' href="https://luckbox.notion.site/General-Art-Projects-86d26e45510843eebaa04ab00cd7cd18">
          <div className='card'>
            <h2>General art Ideas</h2>
            <p>Ideas/projects I'll some day get arount to finish.</p>
          </div>
        </a>
        <a className="clickCard" target='_blank' href="https://luckbox.notion.site/Game-Ideas-c83359c307df4db08f80ed97b1f1ce34">
          <div className='card'>
            <h2>Game Ideas</h2>
            <p>Same as general art ideas but for games.</p>
          </div>
        </a>
        <a className="clickCard" target='_blank' href="https://drive.google.com/file/d/1YuWHkKOqSlEf6hAt_0pjEL4Fay5tFOrf/view?usp=sharing">
          <div className='card'>
            <h2>Curriculum</h2>
            <p>List of my work experience</p>
          </div>
        </a>
        <div className='card invisible'>

        </div>
      </div>
      </article>
      <footer>
        <a target='_blank' href="https://www.linkedin.com/in/luckbox314/"><img className="socialMediaLogo" src={ln} alt='LinkedIn' height={50}/></a>
        <a target='_blank' href="https://github.com/Luckbox314"><img className="socialMediaLogo" src={gh} alt='GitHub' height={50}/></a>
      </footer>
    </div>
  );
}

export default App;
