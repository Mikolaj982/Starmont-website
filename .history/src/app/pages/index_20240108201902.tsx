import React from 'react'
import Slider from '../components/Slider';
import '../styles/globalStyles.css';
import Navbar from '../components/Navbar';
import { Provider } from '../context/Context';


export const HomePage = () => {
    return (<>
        <Provider>
            <Navbar />
            <Slider />
        </Provider>
    </>
    )
}
