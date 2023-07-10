import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import AuthContext, { AuthContextType } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import strings from '../lang/Lang';

const Login = () => {
  const auth = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const [emailError, setEmailError] = useState('');

  const [error, setError] = useState();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formValid = true;
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email === '') {
      formValid = false;
      setEmailError('Please enter email');
    } else if (!email.match(emailPattern)) {
      formValid = false;
      setEmailError('Please enter email in valid format');
    } else {
      formValid = true;
      setEmailError('');
    }

    if (formValid) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const data = {
        email: email,
        password: password,
      };

      try {
        const response = await axios.post(
          'http://localhost:5000/api/auth',
          data,
          config
        );
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        auth.login();
        navigate('/posts');
      } catch (err: any) {
        console.log(err);
        setError(err.response.data.errors || 'something went wrong');
      }
    }
  };

  return (
    <div >
      <h1>{strings.sign_in}</h1>
      <p>{strings.sign_info_your_account}</p>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type='text'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type='submit' value='Login' />
      </form>
      <p>
        <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

export default Login;
