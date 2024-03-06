import React from 'react';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();
    this.confirmPasswordInput = React.createRef();
    this.nameInput = React.createRef();
    this.profilePicInput = React.createRef();
    this.termsCheckbox = React.createRef();
    this.state = {
      error: ''
    };
  }

  handleSignup = () => {
    const username = this.usernameInput.current.value;
    const password = this.passwordInput.current.value;
    const confirmPassword = this.confirmPasswordInput.current.value;
    const name = this.nameInput.current.value;
    const profilePic = this.profilePicInput.current.value;
    const termsChecked = this.termsCheckbox.current.checked;

    // Perform validation checks
    if (!username || !password || !confirmPassword) {
      this.setState({ error: 'Please fill in all required fields.' });
      return;
    }
    if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match.' });
      return;
    }
    if (!termsChecked) {
      this.setState({ error: 'Please accept the terms and conditions.' });
      return;
    }

    // Simulate signup process (replace with actual API call)
    // For demonstration purposes, just display the entered data
    console.log('Username/Email:', username);
    console.log('Password:', password);
    console.log('Name:', name);
    console.log('Profile Picture:', profilePic);
    console.log('Terms Accepted:', termsChecked);
    
    // Redirect to login page or perform further actions
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="username">Username/Email:</label>
          <input 
            type="text" 
            id="username" 
            ref={this.usernameInput}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            ref={this.passwordInput}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input 
            type="password" 
            id="confirmPassword" 
            ref={this.confirmPasswordInput}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            ref={this.nameInput}
          />
        </div>
        <div>
          <label htmlFor="profilePic">Profile Picture:</label>
          <input 
            type="file" 
            id="profilePic" 
            ref={this.profilePicInput}
          />
        </div>
        <div>
          <input 
            type="checkbox" 
            id="termsCheckbox" 
            ref={this.termsCheckbox}
          />
          <label htmlFor="termsCheckbox">I accept the terms and conditions</label>
        </div>
        {this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>}
        <button onClick={this.handleSignup}>Sign Up</button>
      </div>
    );
  }
}

export default SignupPage;
