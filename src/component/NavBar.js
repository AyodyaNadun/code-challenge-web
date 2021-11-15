import React, { useState } from 'react'
import { Container } from 'semantic-ui-react'
import { Button, Grid } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/actions/auth'

const Navbar = () => {
    const { isAuth } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const userLogout = () => {
        if (dispatch(logout())) {
            navigate('/login');
        }
    }

    return (
        <Container style={styles.upContainer}>
            <div style={styles.mainContanier}>
                <Grid columns={2} divided>
                    <Grid.Row style={styles.mainRow}>
                        <Grid.Column style={styles.labelSearch}>
                            <p>Search</p>
                        </Grid.Column>
                        <Grid.Column style={styles.logoutButtonLayer}>
                            {isAuth ?
                                <Button style={styles.logButton} onClick={() => userLogout()} secondary>Logout</Button> : <Button style={styles.logButton} primary>Login</Button>
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Container>
    )
}

const styles = {
    upContainer: {
        width: '98%'
    },

    mainContanier: {
        paddingTop: '15px',
        paddingBottom: '15px',
        background: '#c8d0f3',
        marginBottom: '25px',
        borderRadius: 5,
        paddingRight: 10,
        paddingLeft: 10
    },

    mainRow: {
        display: "flex"
    },

    labelSearch: {
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'Circular-Loom',
        fontSize: 'large',
        paddingLeft: '20px'
    },

    p: {
        fontSize: "large",
        display: "flex",
        alignItems: "center",
        fontWeight: 600
    },

    logoutButtonLayer: {
        display: "flex",
        justifyContent:"flex-end"
    },

    logButton: {
        backgroundColor: 'blue',
        color: 'white',
        fontFamily: 'Circular-Loom'
    }
}


export default Navbar