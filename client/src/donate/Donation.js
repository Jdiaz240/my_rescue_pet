import React from 'react'

const Donation = () => {
  return (
    <div>
      <div className="col-md-8 col-md-offset-2">
        {errorDisplay}
        <div className="search-form">
          <h1 className="text-center">DONATION</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="col-md-3">
              <div className="form-group">
                <label className="form-label" htmlFor="currency">
                  Select Currency
                </label>
                <select className="form-control" ref="currency" id="currency">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
            <div className="col-md-9">
              <div className="form-group">
                <label className="form-label" htmlFor="amount">
                  Amount
                </label>
                <input
                  type="text"
                  className="form-control"
                  ref="amount"
                  id="amount"
                  placeholder="Amount"
                />
              </div>
            </div>
            <button
              className="btn btn-primary btn-block"
              disabled={this.state.canSubmit}
            >
              Donate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

  onSubmit(e){
        e.preventDefault();
        var currency = this.refs.currency.value;
        var amount = parseFloat(this.refs.amount.value.trim());

        //check if input from user is actaully number
        if(!this.checkNumber(amount)){
            this.setState({error : "Amount must be number!"});
            return;
        }

        //check if Amount is between 1 and 100
        if(amount > 1000 || amount < 0){
            this.setState({error :"Amount must be between 1 and 1000"});
            return;
        }

        //Helps to disable donate button..
        this.setState({canSubmit: true});
        this.props.onDonationSubmit(amount, currency);
}
    
     checkNumber(z) {
        return isFinite(z) && !isNaN(parseInt(z));
}

export default Donation