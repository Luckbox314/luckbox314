import './App.css';
import MainView from './views/MainView';
import ProtView from './views/ProtView';
import ln from './logos/In-72.png';
import gh from './logos/github.svg';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("main");

  let view = <MainView />;
  function changePage(newPage) {
    setPage(newPage);
  }

  if (page === "prot"){
    document.title = "Luckbox - " + page;
    view = <ProtView changePage={changePage} />;
  } else {
    document.title = "Luckbox";
    view = <MainView changePage={changePage} />;
  }


  return (
    <div className="App">
      {view}
      <footer>
        <a target='_blank' href="https://www.linkedin.com/in/luckbox314/"><img className="socialMediaLogo" src={ln} alt='LinkedIn' height={40}/></a>
        <a target='_blank' href="https://github.com/Luckbox314"><img className="socialMediaLogo" src={gh} alt='GitHub' height={40}/></a>
      </footer>
    </div>
  );
}

export default App;
