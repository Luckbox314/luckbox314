import './ProtView.scss';


function ProtView({changePage}) {
    return (
        <article id='main-article'>
            <div className='title-box'>
                <h1 className='big-title'>
                    Prototypes 
                    <button className='back-button' onClick={() =>changePage("main")}> Back </button>
                </h1>
            </div>
            <div className='content'>
                <a className='click-card' target='_blank' href="https://luckbox314.github.io/trees/">
                    <div className='card'>
                        <h2>Infinite Forest</h2>
                        <div className="iframe-cover"/>
                        <iframe
                            title="Background Iframe"
                            src="https://luckbox314.github.io/trees"
                        />
                    </div>
                </a>
                <a className='click-card' target='_blank' href="https://luckbox314.github.io/ascii-sparkles">
                    <div className='card'>
                        <h2>ASCII Sparkles</h2>
                        <div className="iframe-cover"/>
                        <iframe 
                            title="Inline Frame Example"
                            src="https://luckbox314.github.io/ascii-sparkles">
                        </iframe>
                    </div>
                </a>
                <a className='click-card' target='_blank' href="https://luckbox314.github.io/GameOfLife/">
                    <div className='card'>
                        <h2>Game of Life (WebGPU)</h2>
                        <div className="iframe-cover"/>
                        <iframe 
                            title="Game of Life (WebGPU)"
                            src="https://luckbox314.github.io/GameOfLife/">
                        </iframe>
                    </div>
                </a>
                <a className='click-card' target='_blank' href="https://luckbox314.github.io/flowers/">
                    <div className='card'>
                        <h2>Flowers</h2>
                        <div className="iframe-cover"/>
                        <iframe 
                            title="Game of Life (WebGPU)"
                            src="https://luckbox314.github.io/flowers/">
                        </iframe>
                    </div>
                </a>
                
            </div>
        </article>
    );
  }
  
  export default ProtView;