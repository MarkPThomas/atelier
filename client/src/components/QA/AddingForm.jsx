import axios from 'axios';
import React from 'react';

class AddingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formName: '',
      username: '',
      email: '',
      text: '',
      requires: {
        username: '',
        email: '',
        text: ''
      }
    };
  }
  componentDidMount() {
    if (this.props.productId) {
      this.setState({
        formName: 'Question'
      });
    }
    if (this.props.questionId) {
      this.setState({
        formName: 'Answer'
      });
    }
  }

  handleOnChange(e) {
    let id = e.target.id;
    if (id === 'username' || id === 'email' || id === 'text') {
      this.setState({
        [id]: e.target.value
      });
    }
  }


  checkingRequire() {
    let requires = {};
    // if (this.state.username.length === 0) {
    //   requires.username = 'username is require';
    // }
    // if (this.state.text.length === 0) {
    //   requires.text = 'text is require';
    // }
    // if (this.state.email.length === 0) {
    //   requires.email = 'email is require';
    // }
    // if (this.state.email.length > 0) {
    //   const email = this.state.email;
    //   const re = /\S+@\S+\.\S+/;
    //   if (!re.test(email)) {
    //     requires.email = 'email invalid';
    //   }
    // }
    for (let key in this.state.requires) {
      if (this.state.[key].length === 0) {
        requires[key] = `${key} id required`;
      }
    }

    if (Object.keys(requires).length === 0) {
      return true;
    } else {
      this.setState({
        requires: requires
      });
    }
  }

  submit() {
    let data, url;
    if (this.state.formName === 'Question') {
      url = '/qa/questions';
      data = {
        body: this.state.text,
        name: this.state.username,
        email: this.state.email,
        'product_id': this.props.productId
      };
    }
    if (this.state.formName === 'Answer') {
      url = `/qa/questions/${this.props.questionId}/answers`;
      data = {
        body: this.state.text,
        name: this.state.username,
        email: this.state.email
      };
    }

    if (this.checkingRequire()) {
      axios.post(url, data)
        .then(res => {
          console.log(res);
          this.props.closePopup();
        })
        .catch(err => console.log('post qestion err', err));
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit.bind(this)}>
          <label>
            Username:
            <input
              maxlength='60'
              placeholder='Example: Jackson11!'
              id='username'
              value={this.state.username}
              onChange={this.handleOnChange.bind(this)}>
            </input><p style={{ color: 'red' }}>{this.state.requires.username}</p>
            <p className='warning_text'>For privacy reasons, do not use your full name or email address</p>
          </label>
          <label>
            Email:
            <input maxlength='60'
              type='email'
              placeholder='Why did you like the product or not?'
              id='email'
              value={this.state.email}
              onChange={this.handleOnChange.bind(this)}>
            </input><p style={{ color: 'red' }}>{this.state.requires.email}</p>
            <p className='warning_text'>For authentication reasons, you will not be emailed</p>
          </label>
          <label>
            {this.state.formName}:
            <input maxlength='1000'
              placeholder='Maximum 1000 characters'
              id='text'
              value={this.state.text}
              onChange={this.handleOnChange.bind(this)}>
            </input><p style={{ color: 'red' }}>{this.state.requires.text}</p>
          </label><br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddingForm;