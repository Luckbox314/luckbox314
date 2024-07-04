import './ProtView.scss';
import flowers from '../images/screen_cap.png';


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
                <a className='click-card' target='_blank' href="https://luckbox314.github.io/flowers-offline/">
                    <div className='card'>
                        <h2>Flowers</h2>
                        <div className="iframe-cover"/>
                        <img src={flowers} style={{width: "100%", height: "100%"}}/>
                    </div>
                </a>
                <a className='click-card' target='_blank' href="https://luckbox314.github.io/orbit_visualizer/">
                    <div className='card' >
                        <h2>Orbit Visualizer</h2>
                        <div className="iframe-cover" />
                        <iframe 
                            scrolling='no'
                            title="Orbit Visualizer"
                            src="https://luckbox314.github.io/orbit_visualizer/">
                        </iframe>
                    </div>
                </a>
                <a className='click-card' target='_blank' href="https://luckbox314.github.io/orbit_visualizer_epe/">
                    <div className='card' >
                        <h2>Orbit Visualizer (ElPlanetaErrante)</h2>
                        <div className="iframe-cover" />
                        <iframe 
                            scrolling='no'
                            title="Orbit Visualizer EPE"
                            src="https://luckbox314.github.io/orbit_visualizer_epe/">
                        </iframe>
                    </div>
                </a>
                
            </div>
        </article>
    );
  }
  
  export default ProtView;