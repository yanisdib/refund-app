import { useState } from "react";

function RefundForm(props) {
    const [isPercentageInputVisible, setIsPercentageInputVisible] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const onFirstRadioChange = (e) => {
        const value = e.target.value;
        setIsPercentageInputVisible(value);
    };
    const onSecondRadioChange = (e) => {
        const value = e.target.value;
        setIsPercentageInputVisible(value);
    };
    const onPercentageChange = (e) => {
        const percentage = e.target.value;
        setPercentage(percentage);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const hasRefund = isPercentageInputVisible;
        if (Object.keys(props.invoice).length > 0) {
            props.onSubmit({
                ...props.invoice,
                hasRefund: hasRefund,
                percentage: percentage
            });
            document.getElementById('refund-form').reset();
        };
    };
    return (
        <form type="submit" id="refund-form" className="row mt-3" onSubmit={onSubmit}>
            <h6 className="fw-5">Do you need a refund?</h6>
            <div className="col-2 col-md-3">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="refundOption1"
                        value="true"
                        onChange={onFirstRadioChange}
                    />
                    <label className="form-check-label" htmlFor="refundOption1">
                        Yes
                    </label>
                </div>
            </div>
            <div className="col-2 col-md-3">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="refundOption2"
                        value="false"
                        onChange={onSecondRadioChange}
                    />
                    <label className="form-check-label" htmlFor="refundOption2">
                        No
                    </label>
                </div>
            </div>
            {!!isPercentageInputVisible ? (
                <div className="form-group mt-3">
                    <label htmlFor="inputPercentage"><h6 className="fw-5">Desired percentage of refund:</h6></label>
                    <br />
                    <input type="number" min="0" max="100" className="form-control" onChange={onPercentageChange} />
                </div>
            ) : (null)}
            <div className="form-group">
                <input type="submit" className=" col-3 btn btn-event-primary mt-3 fw-5" value="Add" />
            </div>
        </form>
    );
};
export default RefundForm
