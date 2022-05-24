import video from './assets/final.mp4';
import logo from './assets/logo.png';
import dropN from './assets/dropN.svg';
import './styles/global.css';
import useState from 'react';

function App(props) {
  // const cardContent = useState(props.cardContent);
  return (
    <>
      <div className="relative">

        <div id='topCard' className='card z-10 absolute'>
          <img id='logoImg' src={logo}/>
        </div> 

        <div id='bottomCard' className='card z-5 absolute bottom-0 right-0' >
          <div id='cardHead' className='font-Archivo text-[#424949]'>
              {props.cardContent.heading}
          </div>
          <div id='cardDesc' className='font-Maven'>
              {props.cardContent.description}
          </div>
          <div id='cardCTA' className='flex flex-row'>
            <div id='cardBtn'>
              <img src={dropN} width='25px'/>
            </div>
            <div className='mx-3 text-[18px] font-Maven'>Read News</div>
          </div>
          
        </div> 


        <video loop autoPlay muted id='bgrVideo' className='h-screen w-screen object-cover'>
          <source src={video} type="video/mp4"/>Your browser does not support the video tag.
        </video> 

      </div>
    </>
  );
}

export default App;
