import React from 'react';

export default class MyForm extends React.Component {
  static defaultProps = {
    form: () => this.renderForm,
  };

  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: '',
      mode: 'form',
    };
  }
  
  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    this.setState({ [field]: value });
    setTimeout(console.log('this.state: ', this.state), 1000);
  };

  handleCheck = (e) => {
    console.log(e.target);
    const field = e.target.name;
    const value = e.target.cheked;
    this.setState({ [field]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('e: ', e);
    this.renderTable();
  };

  renderTable() {
    const data = Object.entries(this.state).sort();
    const func = (item) => (
      <tr>
        <td key={item[0]}>{item[0]}</td>
        <td key={item[1]}>{item[1]}</td>
      </tr>
    );
    return (
      <div>
        <button type="button">Back</button>
          <table class="table">
            <tbody>
              {data.map(func)}
            </tbody>
          </table>
      </div>
    )
  };

  renderForm() {
    return (
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input onChange={this.handleChange} value={this.state.email} type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input onChange={this.handleChange} value={this.state.password} type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <textarea onChange={this.handleChange} value={this.state.adress} type="text" className="form-control" name="address" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input onChange={this.handleChange} value={this.state.city} type="text" className="form-control" name="city" id="inputCity" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">Country</label>
            <select onChange={this.handleChange} value={this.state.country} id="inputCountry" name="country" className="form-control">
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input onChange={this.handleCheck} value={this.state.acceptRules}  id="rules" type="checkbox" name="acceptRules" className="form-check-input" />
              Accept Rules
            </label>
          </div>
        </div>
        <button onSubmit={this.handleSubmit} type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  };

  render() {
    console.log(this.props);
    return <div/>//this.props[this.state.mode]();
  }
}

