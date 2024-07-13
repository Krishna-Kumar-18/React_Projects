import { useEffect, useState } from "react";

export default function Random() {
    const [colorFormat, setColorFormat] = useState('hex');
    const [color, setColor] = useState("black");

    function randomNumber(length)
    {
        return Math.floor(Math.random()*length);
    }

    function handleCreateHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

        let hexColor = "#";
        for(let i=0; i<6; i++) 
        {
            hexColor += hex[randomNumber(hex.length)];
        }

        setColor(hexColor);
    }

    function handleCreateRGBColor() {
        const r = randomNumber(255);
        const g = randomNumber(255);
        const b = randomNumber(255);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    useEffect(()=>{
        if(colorFormat === 'rgb') {
            {handleCreateRGBColor()}
        }
        else 
        {
            {handleCreateHexColor()}
        }
    }, colorFormat);

    return (
        <div style={{
                width : '100vw', 
                height : '100vh', 
                background : color,
                textAlign : 'center'
            }}>
            <button onClick={() => setColorFormat('rgb')}>Generate RGB Color</button>
            <button onClick={() => setColorFormat('hex')}>Generate Hex Color</button>
            <button onClick={colorFormat === 'hex' ? handleCreateHexColor : handleCreateRGBColor}>Generate Random Color</button>

            <div style={{
                    display : 'flex',
                    alignItems : 'center',
                    justifyContent : 'center',
                    fontSize : '30px',
                    color : 'white',
                    flexDirection : 'column',
                    gap : 'px',
                    marginTop : '100px'
                }}>
                <h1>{colorFormat === 'rgb' ? 'RGB Color' : 'Hex Color'}</h1>
                <h2>{color}</h2>
            </div>
        </div>
    );
}