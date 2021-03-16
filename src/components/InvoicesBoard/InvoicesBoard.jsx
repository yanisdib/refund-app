import { useRef, useEffect, useState } from "react";
import QrContainer from "../QrContainer/QrContainer";
import EventButton from "../EventButton/EventButton";
import InvoicesList from "./InvoicesList/InvoicesList";
import PlaylistAddRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RefundForm from "../RefundForm/RefundForm";

import { useDispatch } from "react-redux";
import { startAddInvoice } from "../../actions/invoices";
import LoadingCircles from "../LoadingCircles/LoadingCircles";


function InvoicesBoard() {
    const [isVisible, setIsVisible] = useState(false);
    const [invoice, setInvoice] = useState({});
    const [isRefundOptionsVisible, setIsRefundOptionsVisible] = useState(false);
    const dispatch = useDispatch();
    const reader = useRef(null);
    useEffect(() => {
        console.log(reader.current);
    }, [reader]);
    const onQRButtonClick = () => {
        setIsVisible(true);
    }
    const onSubmit = (data) => {
        dispatch(startAddInvoice(data));
        setIsVisible(false);
        setInvoice({});
    };
    return (
        <>
            <div className="row mt-5 mb-5">
                <div className="col-xl-5 col-lg-5 col-m-6 col-sm-6 col-5"><h4>Refund App</h4></div>
                <div className="col-xl-3 col-lg-3 col-m-3 col-sm-5 col-6 offset-xl-4 offset-lg-4 offset-m-3 offset-sm-1 offset-1">
                    <EventButton style="primary" icon={PlaylistAddRoundedIcon} onClick={onQRButtonClick}>Add an invoice</EventButton>
                </div>
            </div>
            {isVisible ? (
                <QrContainer
                    reader={reader}
                    setInvoice={setInvoice}
                    setIsRefundOptionsVisible={setIsRefundOptionsVisible}
                >
                    {isRefundOptionsVisible ?
                        <RefundForm
                            invoice={invoice}
                            onSubmit={onSubmit}
                        /> : null}
                </QrContainer>
            ) : (null)}
            <InvoicesList />
        </>
    );
};

export default InvoicesBoard;