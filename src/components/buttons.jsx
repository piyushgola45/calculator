import { useState } from 'react';
import './buttons.css';
function Buttons({buttonlist,onbuttonclick}){
    return <>
    {buttonlist.map((item)=>(
        <div className="row">
            <button className="col" onClick={onbuttonclick}> 
                {item.first}
            </button>
            <button className="col" onClick={onbuttonclick}>
                {item.seccond}
            </button>
            <button className="col" onClick={onbuttonclick} >
                {item.third}
            </button>
        </div>
    ))}
    </>
}
export default Buttons;