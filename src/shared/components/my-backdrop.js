import React from 'react';
import OkImage from './icons8-ok.gif'
import CancelImage from './icons8-cancelar.gif'

const backdrop = {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: 100,
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)"
}

const imageStyle = {
    width: "50vw",
    height: "50vh"
}

const MyBackdrop = ({feed, cancelShow}) => {
    React.useEffect(() => {
        setTimeout(() => cancelShow() ,1000)
    }, [])
    return (
    <div style={backdrop}>
        {feed ? <img style={imageStyle} src={OkImage} alt='ok' /> : <img style={imageStyle} src={CancelImage} alt='cancel'/>}
    </div> 
    );
}

export default MyBackdrop;