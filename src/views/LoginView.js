import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

export default function LoginView() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const handleChange = ({ target: { name, value } }) => {
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    };

    
const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
    }

    

    

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit} autoComplete="off">

                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

// class LoginView extends Component {
//     state = {
//         email: '',
//         password: '',
//     };


// handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
// };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onLogin(this.state)
//         this.setState({ name: '', email: '', password: '' });
//     };

// render() {
//     const { email, password } = this.state;

//     return (
//         <div>
//             <h1>Login</h1>

//             <form onSubmit={this.handleSubmit} autoComplete="off">

//                 <label>
//                     Email
//                     <input
//                         type="email"
//                         name="email"
//                         value={email}
//                         onChange={this.handleChange}
//                     />
//                 </label>

//                 <label>
//                     Password
//                     <input
//                         type="password"
//                         name="password"
//                         value={password}
//                         onChange={this.handleChange}
//                     />
//                 </label>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     )
//     };
// };

// const mapDispatchToProps =  {
//     onLogin: authOperations.login
// };

// export default connect(null, mapDispatchToProps)(LoginView);