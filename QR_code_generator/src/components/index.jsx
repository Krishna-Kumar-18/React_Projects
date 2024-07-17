import { useState } from "react";
import QRCode from "react-qr-code";
import './style.css';

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function handleQrCodeGenerator() {
        setQrCode(input);
        setInput('');
    }

    return (
        <div className="wrapper">
            <h2>QR Code Generator</h2>
            <div className="input_box">
                <input 
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type="text" 
                    name="qr-code"
                    placeholder="Enter your value"
                    size={39}
                />
                <button
                    disabled={input && input.trim() !== "" ? false : true}
                    onClick={handleQrCodeGenerator}
                >
                    Generate
                </button>
            </div>
            <div>
                <QRCode 
                    id="qr-code-value"
                    value={qrCode}
                    bgColor="white"
                    size={400}
                />
            </div>
        </div>
    );
}