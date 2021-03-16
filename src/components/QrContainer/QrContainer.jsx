import { useState } from "react";
import EventButton from "../EventButton/EventButton";
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import QrReader from "react-qr-reader";

function QrContainer({ reader, setInvoice, setIsRefundOptionsVisible, children }) {
    const [error, setError] = useState('');
    const [status, setStatus] = useState('');
    const handleError = (error) => {
        setError(error);
    };
    const handleScan = (data) => {
        setInvoice(JSON.parse(data));
        setTimeout(() => {
            setStatus("Code successfully uploaded!")
        }, 200);
        setIsRefundOptionsVisible(true);
    };
    const handleImageSubmit = () => {
        reader.current.openImageDialog();
    };
    const previewStyle = {
        height: 240,
        width: 320
    };
    return (
        <>
            <div className="row qr-scanner popup">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 align-self-center">
                    <QrReader
                        ref={reader}
                        delay={100}
                        legacyMode
                        onError={handleError}
                        onScan={handleScan}
                        style={previewStyle}
                        facingMode="environment"
                    />
                    <p className="mt-5">{error ? error : status}</p>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mt-sm-5 mt-5 refund-form p-3">
                    <p className="mb-4">Make sure that your QR Code is bright and visible enough in front of the camera.</p>
                    <h6 className="fw-5 mb-4">Your camera doesn't work?</h6>
                    <EventButton style="alternate" icon={WallpaperIcon} onClick={handleImageSubmit}>
                        Upload a QR Code
                    </EventButton>
                    {children}
                </div>
            </div>
        </>
    );
};

export default QrContainer;