import { useSelector } from "react-redux";
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
function InvoicesList() {
    const invoices = useSelector(state => state.invoices);
    console.log(invoices);
    const renderInvoices = () => {
        const invoiceItems = invoices.map((item) => {
            console.log(item)
            const amountAfterVat = (item.amount + item.vat[0].amount).toFixed(2);
            const amountAfterRefund = (amountAfterVat - item.refund.amount).toFixed(2);
            return (
                <div className="row invoices-list-item fw-5 mb-4 text-center slide-up">
                    <div className="d-none d-xl-flex d-lg-flex d-m-flex col-xl-1 col-lg-1 col-m-1"><ReceiptRoundedIcon /></div>
                    <div className="col-1 col-xl-1 col-lg-1 col-m-2 col-sm-1">{item.sender}</div>
                    <div className="col-3 col-xl-1 col-lg-2 col-m-2 col-sm-3">{item.invoice_no}</div>
                    <div className="d-none d-xl-flex d-lg-flex d-m-flex col-xl-1 col-lg-1 col-m-2">{item.description}</div>
                    <div className="col-2 col-xl-2 col-lg-2 col-m-1 col-sm-2">{item.amount} EUR</div>
                    <div className="col-2 col-xl-2 col-lg-1 col-m-2 col-sm-2 blue">{`${amountAfterVat} EUR (${item.vat[0].rate}%)`}</div>
                    <div className="col-2 col-xl-2 col-lg-2 col-m-2 col-sm-2">{`${item.refund.amount} EUR (${item.refund.rate}%)`}</div>
                    <div className="col-2 col-xl-2 col-lg-2 col-m-1 col-sm-2 red">- {item.refund.amount != 0 ? amountAfterRefund : amountAfterVat} EUR</div>
                </div>
            );
        });
        return invoiceItems;
    };
    return invoices.length > 0 ? (
        <div className="row mt-5 ">
            <div className="col-12">
                <h3 clasName="fw-8">Overview</h3>
                <div className="row fw-5 mt-4 mb-2 text-center">
                    <div className="d-none d-xl-flex d-lg-flex d-m-flex col-xl-1 col-lg-1 col-m-1"></div>
                    <div className="col-1 col-xl-1 col-lg-1 col-m-2 col-sm-1">Sender</div>
                    <div className="col-3 col-xl-1 col-lg-2 col-m-2 col-sm-3">No.</div>
                    <div className="d-none d-xl-flex d-lg-flex d-m-flex col-xl-1 col-lg-1 col-m-2">Description</div>
                    <div className="col-2 col-xl-2 col-lg-2 col-m-1 col-sm-2">Amount</div>
                    <div className="col-2 col-xl-2 col-lg-1 col-m-1 col-sm-2">Amount (VAT incl.)</div>
                    <div className="col-2 col-xl-2 col-lg-2 col-m-1 col-sm-2">Refund</div>
                    <div className="col-2 col-xl-2 col-lg-2 col-m-1 col-sm-2">Total</div>
                </div>
                {renderInvoices()}
            </div>
        </div>
    ) : (
        <div className="row invoices-list-empty mt-5 fw-5 text-center">
            <div className="col-12"><p>No invoice registered yet...</p></div>
        </div>
    );
};
export default InvoicesList;