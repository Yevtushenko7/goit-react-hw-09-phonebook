import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

export default function RegisterView() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target: {name, value} }) => {
        if (name === 'name') {
            setName(value);
        }
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
   }

    return (
        <div>
            <h1>Registration</h1>

            <form onSubmit={handleSubmit} autoComplete="off">

                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>

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
                <button type="submit">Registration</button>
            </form>
        </div>
    );
}



// class RegisterView extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: '',
//     }


//     handleChange = ({ target: { name, value } }) => {
//         this.setState({ [name]: value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onRegister(this.state)
//         this.setState({ name: '', email: '', password: '' });
//     };

// render() {
//     const { name, email, password } = this.state;

//     return (
//         <div>
//             <h1>Registration</h1>

//             <form onSubmit={this.handleSubmit} autoComplete="off">

//                 <label>
//                     Name
//                     <input
//                         type="text"
//                         name="name"
//                         value={name}
//                         onChange={this.handleChange}
//                     />
//                 </label>

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
//                 <button type="submit">Registration</button>
//             </form>
//         </div>
//     );
// };
// };

// const mapDispatchToProps =  {
//     onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);