import './App.css';

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
        <a className="clickCard" target='_blank' href="https://www.overleaf.com/download/project/62db2c91127a7dc14ea52850/build/18794d1cf92-9675fa5bae851046/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-e2-c-f-cnsm&enable_pdf_caching=true">
          <div className='card'>
            <h2>Curriculum</h2>
            <p>List of my work experience</p>
          </div>
        </a>
        <div className='card invisible'>
          Filler
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
