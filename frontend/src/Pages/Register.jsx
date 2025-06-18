import React from 'react';

const Register = () => {
  return (
    <div style={styles.container}>
      {/* Left Side */}
      <div style={styles.left}>
        <div style={styles.formBox}>
          <h2 style={styles.logo}>Logo Here</h2>
          <p style={styles.welcome}>Join us today!</p>
          <h1 style={styles.title}>Sign up</h1>

          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            style={styles.input}
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="************"
            style={styles.input}
          />

          <label style={styles.label}>Confirm Password</label>
          <input
            type="password"
            placeholder="************"
            style={styles.input}
          />

          <button style={styles.button}>SIGN UP →</button>

          <p style={styles.signupText}>
            Already have an account? <span style={styles.signupLink}>Sign in</span>
          </p>
        </div>
      </div>

      {/* Right Side Illustration */}
      <div style={styles.right}>
        <img
          src="https://cdn.dribbble.com/users/458522/screenshots/14524003/media/5fd5885e2f9fdf0642a1c1c1bb4cb0db.png"
          alt="Illustration"
          style={styles.image}
        />
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'sans-serif',
  },
  left: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBox: {
    width: '80%',
    maxWidth: '350px',
  },
  logo: {
    color: '#ff084e',
  },
  welcome: {
    fontSize: '14px',
    color: '#888',
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  label: {
    display: 'block',
    marginTop: '15px',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '10px',
    background: '#fff4f1',
    border: 'none',
    marginTop: '5px',
    borderRadius: '4px',
  },
  button: {
    marginTop: '20px',
    width: '100%',
    padding: '10px',
    backgroundColor: '#ff084e',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  signupText: {
    marginTop: '20px',
    fontSize: '12px',
    color: '#888',
  },
  signupLink: {
    color: '#f36d47',
    cursor: 'pointer',
  },
  right: {
    flex: 1,
    backgroundColor: '#ffece4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '60%',
    objectFit: 'contain',
  },
};

export default Register;
