import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from '../Utilities/Navigation'
import Routs from '../Utilities/Routs'
import { useSelector } from 'react-redux'

function Container() {

    const textColor = useSelector((state) => state.options.text);
    const borderColor = useSelector((state) => state.options.border);
    const backgroundColor = useSelector((state) => state.options.background);


    return (
        <div style={{padding:'10px 10px' ,color: `${textColor}`, background: `${backgroundColor}`, borderColor: `${borderColor}` }}>
            <BrowserRouter>
                <div>
                    <Navigation />
                </div>

                <div>
                    <Routs />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Container
