
// import Info from "./Info";

import Board from "./componetns/Board";

  
import { useState } from 'react';
import Game from "./componetns/Game";
  
function App() {
  
    // const [reset, setReset] = useState(false);
  
    // const [winner, setWinner] = useState('');
  
   
    // const resetBoard = () => {
    //     setReset(true);
    // }
  
    return (
        <div className="App">
{/*            
            <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
             
                <div className='winner-text'>{winner}</div>
               
                <button onClick={() => resetBoard()}>
                    Reset Board
                </button>
            </div> */}
           
            {/* <Board /> */}
            <Game/>
            
            {/* <Info /> */}
        </div>
    );
}
  
export default App;

// reset={reset} setReset={setReset} winner={winner}   setWinner={setWinner} 