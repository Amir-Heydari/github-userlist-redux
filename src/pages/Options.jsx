import React from 'react'
import { useDispatch } from 'react-redux'
import { textCH, borderCh, backgroundCh } from '../Utilities/options/theme'
function Options({ textColor, borderColor, backgroundColor }) {


    const dispatch = useDispatch();

    console.log(textColor);
    console.log(borderColor);
    console.log(backgroundColor);
    return (
        <div style={{ paddingLeft: '20px' }}>
            <h1>OPTIONS</h1>

            text color: <input type={'color'} onChange={(e) => { dispatch(textCH(e.target.value)) }} /> <br /><br />

            border color: <input type={'color'} onChange={(e) => { dispatch(borderCh(e.target.value)) }} /> <br /><br />

            background color: <input type={'color'} onChange={(e) => { dispatch(backgroundCh(e.target.value)) }} /> <br /><br />

            <button style={{ marginRight: '10px' }} onClick={() => {
                dispatch(textCH('white'));
                dispatch(borderCh("red"));
                dispatch(backgroundCh('black'));
            }}>DARK THEME</button>
            <button onClick={() => {
                dispatch(textCH('cyan'));
                dispatch(borderCh("green"));
                dispatch(backgroundCh('gray'));
            }}
            >LIGHT THEME</button>
        </div>
    )
}

export default Options

