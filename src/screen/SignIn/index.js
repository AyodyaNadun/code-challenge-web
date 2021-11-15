import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from 'react-redux'
import { signin, getAuthStateFromToken } from '../../store/actions/auth'

const SignIn = (props) => {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    useEffect(() => {
        const tokenStatus = dispatch(getAuthStateFromToken())
        if (tokenStatus) {
            navigate('/');
        }
    }, [])
    const notify = (e) => toast(e);
    const sumbit = async (e) => {
        e.preventDefault();
        const userData = {
            user_name: e.target.user.value,
            password: e.target.pass.value
        }
        const result = await dispatch(signin(userData))
        if (result) {
            notify("Login successfully")
            navigate('/');
        } else {
            notify('Invalid Username or Password')
        }
    }

    return (
        <div class="page-login">
            <div class="ui centered grid container">
                <div class="nine wide column">
                    <div class="ui fluid card" style={styles.singinCard}>
                    <label style={styles.headerLine}>Sign In</label>
                        <div class="content">
                            <form class="ui form" onSubmit={sumbit}>
                                <div class="field">
                                    <label>Username</label>
                                    <input type="text" name="user" placeholder="User" />
                                </div>
                                <div class="field">
                                    <label>Password</label>
                                    <input type="password" name="pass" placeholder="Password" />
                                </div>
                                <button class="ui primary labeled icon button" type="submit">
                                    <i class="unlock alternate icon"></i>
                                    Login
                                </button>
                                <ToastContainer
                                    type="error"
                                    position="top-right"
                                    autoClose={4000}
                                    hideProgressBar={true}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    icon={true}
                                    theme="colored"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


const styles = {
    singinCard: {
        marginTop: "30%"
    },

    headerLine: {
        marginTop: 30,
        marginBottom: 30,
        display: "flex",
        justifyContent: "center",
        fontFamily: "Circular-Loom",
        fontSize:"x-large"
    },

    messageView: {
        backgroundColor:"red"
    }
}

export default SignIn;
