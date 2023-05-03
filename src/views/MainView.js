
function MainView({changePage}) {
  return (
    <article id='main-article'>
        <div>
            <h1 className='big-title'>Luckbox</h1>
        </div>
        <div className='content'>
            <div className='card' onClick={() => changePage("prot")}>
                <h2>Prototypes</h2>
                <p>List of things you can try out</p>
            </div>
            <a className="click-card" target='_blank' href="https://luckbox.notion.site/General-Art-Projects-86d26e45510843eebaa04ab00cd7cd18">
                <div className='card'>
                <h2>General art Ideas</h2>
                <p>Ideas/projects I'll some day get arount to finish.</p>
                </div>
            </a>
            <a className="click-card" target='_blank' href="https://luckbox.notion.site/Game-Ideas-c83359c307df4db08f80ed97b1f1ce34">
                <div className='card'>
                <h2>Game Ideas</h2>
                <p>Same as general art ideas but for games.</p>
                </div>
            </a>
            <a className="click-card" target='_blank' href="https://drive.google.com/file/d/1YuWHkKOqSlEf6hAt_0pjEL4Fay5tFOrf/view?usp=sharing">
                <div className='card'>
                <h2>Curriculum</h2>
                <p>List of my work experience</p>
                </div>
            </a>
            
        </div>
    </article>
  );
}

export default MainView;