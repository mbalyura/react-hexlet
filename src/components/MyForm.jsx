import React from 'react';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false,
      },
      mode: 'form',
    };
  }

  handleChange = ({ target }) => {
    const { data } = { ...this.state };
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ data: { ...data, [target.name]: value} });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ mode: 'table' });
  };

  handleBack = (e) => {
    e.preventDefault();
    this.setState({ mode: 'form' });
  };

  renderTable() {
    const { data } = this.state;
    const entries = Object.entries(data).sort();
    const func = (item) => (
      <tr>
        <td key={item[0]}>{item[0]}</td>
        <td key={item[1]}>{String(item[1])}</td>
      </tr>
    );
    return (
      <div className="m-5">
        <button onClick={this.handleBack} type="button" className="btn btn-primary m-2">Back</button>
        <table className="table">
          <tbody>
            {entries.map(func)}
          </tbody>
        </table>
      </div>
    );
  }

  renderForm() {
    const { data } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input onChange={this.handleChange} value={data.email} type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input onChange={this.handleChange} value={data.password} type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <textarea onChange={this.handleChange} value={data.address} type="text" className="form-control" name="address" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input onChange={this.handleChange} value={data.city} type="text" className="form-control" name="city" id="inputCity" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">Country</label>
            <select onChange={this.handleChange} value={data.country} id="inputCountry" name="country" className="form-control">
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
              <input onChange={this.handleChange} checked={data.acceptRules} id="rules" type="checkbox" name="acceptRules" className="form-check-input" />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

  render() {
    const { mode } = this.state;
    switch (mode) {
      case 'form':
        return this.renderForm();
      case 'table':
        return this.renderTable();
      default:
        throw new Error (`${mode} unknown state`)
    }
  }
}
