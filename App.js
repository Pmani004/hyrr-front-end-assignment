import React, { useRef, useState } from 'react';

// BalloonGame component
const BalloonGame = () => {
  const [balloonSize, setBalloonSize] = useState(50);
  const [popped, setPopped] = useState(false);

  const pumpBalloon = () => {
    if (!popped) {
      setBalloonSize(balloonSize + 10);
      if (balloonSize >= 150) {
        setPopped(true);
        alert('Balloon popped!');
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Click the balloon to pump it!</h2>
      <div style={{ display: 'inline-block' }}>
        <div
          style={{
            backgroundColor: 'red',
            borderRadius: '50%',
            width: balloonSize + 'px',
            height: balloonSize + 'px',
            transition: 'width 0.5s, height 0.5s',
            cursor: 'pointer'
          }}
          onClick={pumpBalloon}
        ></div>
      </div>
    </div>
  );
};

// AuthPage component
function AuthPage() {
  const [loginMode, setLoginMode] = useState(true);
  const [error, setError] = useState('');
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const nameRef = useRef(null);
  const profilePicRef = useRef(null);
  const termsRef = useRef(null);

  const handleAuthAction = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (loginMode) {
      // Perform login action
      console.log('Login with username:', username, 'and password:', password);
    } else {
      const confirmPassword = confirmPasswordRef.current.value;
      const name = nameRef.current.value;
      const profilePic = profilePicRef.current.value;
      const termsAccepted = termsRef.current.checked;

      if (!username || !password || !confirmPassword || !name) {
        setError('Please fill in all required fields.');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      if (!termsAccepted) {
        setError('Please accept the terms and conditions.');
        return;
      }

      // Perform signup action
      console.log('Signup with username:', username, 'password:', password, 'name:', name, 'profilePic:', profilePic, 'termsAccepted:', termsAccepted);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', background: 'linear-gradient(45deg, violet, red)' }}>
      <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>AIVERSE</h1>
      <h2 style={{ textAlign: 'center', color: '#fff' }}>{loginMode ? 'Login' : 'Sign Up'}</h2>
      <div>
        <label htmlFor="username" style={{ color: '#fff' }}>Username/Email:</label>
        <input type="text" id="username" ref={usernameRef} style={{ width: '100%', marginBottom: '10px' }} />
      </div>
      <div>
        <label htmlFor="password" style={{ color: '#fff' }}>Password:</label>
        <input type="password" id="password" ref={passwordRef} style={{ width: '100%', marginBottom: '10px' }} />
      </div>
      {!loginMode && (
        <>
          <div>
            <label htmlFor="confirmPassword" style={{ color: '#fff' }}>Confirm Password:</label>
            <input type="password" id="confirmPassword" ref={confirmPasswordRef} style={{ width: '100%', marginBottom: '10px' }} />
          </div>
          <div>
            <label htmlFor="name" style={{ color: '#fff' }}>Name:</label>
            <input type="text" id="name" ref={nameRef} style={{ width: '100%', marginBottom: '10px' }} />
          </div>
          <div>
            <label htmlFor="profilePic" style={{ color: '#fff' }}>Profile Picture:</label>
            <input type="file" id="profilePic" ref={profilePicRef} style={{ width: '100%', marginBottom: '10px' }} />
          </div>
          <div>
            <input type="checkbox" id="terms" ref={termsRef} />
            <label htmlFor="terms" style={{ marginLeft: '5px', color: '#fff' }}>I accept the terms and conditions</label>
          </div>
        </>
      )}
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <button onClick={handleAuthAction} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>{loginMode ? 'Login' : 'Sign Up'}</button>
      <p style={{ marginTop: '10px', textAlign: 'center', color: '#fff' }}>{loginMode ? "Don't have an account?" : "Already have an account?"} <button onClick={() => setLoginMode(!loginMode)} style={{ background: 'none', border: 'none', color: '#fff', textDecoration: 'underline', cursor: 'pointer' }}>{loginMode ? 'Sign Up' : 'Login'}</button></p>
      
      {/* Render BalloonGame component only in the login mode */}
      {loginMode && <BalloonGame />}
    </div>
  );
}

export default AuthPage;
