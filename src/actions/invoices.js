export const addInvoice = (invoice) => ({
    type: 'ADD_INVOICE',
    invoice
});

// Add an invoice registration and dispatch the action
export const startAddInvoice = (invoice) => {
    console.log(invoice)
    const { amount, hasRefund, percentage, vat } = invoice;
    const amountTaxed = amount + vat[0].amount;
    let refund = 0;
    return (dispatch) => {
        if (hasRefund==="yes") {
            refund = setRefund(amountTaxed, percentage); // 
        }
        return dispatch(addInvoice({
            refund: { rate: percentage, amount: refund },
            ...invoice
        }));
    };
};

// Calculates the amount refunded
export function setRefund(amount, percentage) {
    const total = (amount / 100) * percentage;
    return total.toFixed(2);
};