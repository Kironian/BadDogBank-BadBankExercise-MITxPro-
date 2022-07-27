// Bootstrap V

import { useRef, useState, useEffect, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './css/createAccount.css';
import { useBankContext } from "./Context";



// Variables V

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Z0-9-_%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i;

const Register = () => {
    const { bank, addUser } = useBankContext();

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);



    
    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    let newUser = {
        name: user,
        email: email,
        password: pwd,
        balance: 0.00
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = EMAIL_REGEX.test(email);
        const v3 = PWD_REGEX.test(pwd);
        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        addUser(newUser);
        setSuccess(true);
    }

    const resetForm = () => {
        setPwd('');
        setUser('');
        setEmail('');
        setMatchPwd('');
        setSuccess(false);
        console.log(bank);
    }

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                {success ? (
                    <div >
                        <Card.Title>Account Created!</Card.Title>
                        <Link to='/login'><Button>Sign In</Button></Link><br/>
                        <Button onClick={resetForm} variant="primary">Add Another Account</Button>
                    </div>
                ) : (
                    <div >
                        <Card.Title>Create Account</Card.Title>
                            <div className="card-body">
                                <section>
                                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                        <label htmlFor="username">
                                            Username:
                                            <span className={validName ? "valid" : "hide"} disabled="true">
                                            </span>
                                            <span className={validName || !user ? "hide" : "invalid"}>
                                            </span>
                                        </label>
                                        <input 
                                            typ="text"
                                            id="username"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) => setUser(e.target.value)}
                                            required
                                            aria-invalid={validName ? "false" : "true"}
                                            aria-describedby="uidnote"
                                            onFocus={() => setUserFocus(true)}
                                            onBlur={() => setUserFocus(false)}
                                        />

                    {/* email section */}
                                        <label htmlFor="email">
                                            Email:
                                            <span className={validEmail ? "valid" : "hide"}>

                                            </span>
                                            <span className={validEmail || !email ? "hide" : "invalid"}>

                                            </span>
                                        </label>
                                        <input 
                                            typ="text"
                                            id="email"
                                            autoComplete="off"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            aria-invalid={validEmail ? "false" : "true"}
                                            aria-describedby="emailnote"
                                            onFocus={() => setEmailFocus(true)}
                                            onBlur={() => setEmailFocus(false)}
                                        />
                                        <p id="emailnote" className={emailFocus && !validEmail && email || userFocus && user.length>0 && !validEmail || pwdFocus && pwd.length>0 && !validEmail ? "instructions" : "offscreen"}>

                                            Must be valid email address<br />
                                        </p>
                    {/* email section ends */}

                                        <label htmlFor="password">
                                            Password:
                                            <span className={validPwd ? "valid" : "hide"}>

                                            </span>
                                            <span className={validPwd || !pwd ? "hide" : "invalid"}>

                                            </span>
                                        </label>
                                        <input 
                                            typ="password"
                                            id="password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            required
                                            aria-invalid={validPwd ? "false" : "true"}
                                            aria-describedby="pwdnote"
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                        />
                                        <p id="pwdnote" className={pwdFocus && !validPwd || userFocus && user.length>0 && !validPwd || emailFocus && email.length>0 && !validPwd ? "instructions" : "offscreen"}>
    
                                            Make sure you password matches<br />
                                            and has an uppercase.<br />
                                           </p>

                                        <label htmlFor="confirm_pwd">
                                            Confirm password:
                                            <span className={validMatch && matchPwd ? "valid" : "hide"}>

                                            </span>
                                            <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                            </span>
                                        </label>
                                        <input 
                                            typ="password"
                                            id="confirm_pwd"
                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            required
                                            aria-invalid={validMatch ? "false" : "true"}
                                            aria-describedby="confirmnote"
                                            onFocus={() => setMatchPwdFocus(true)}
                                            onBlur={() => setMatchPwdFocus(false)}
                                        />
                                        <p id="confirmnote" className={matchPwdFocus && !validMatch ? "instructions" : "offscreen"}>

                                            Must match the firs password input field.
                                        </p>
                                        <Button disabled={!validName || !validPwd || !validMatch || !validEmail ? true : false} variant="primary" onClick={handleSubmit}>Create Account</Button>

                                </section>
                            </div>
                    </div>
                    )}
                </Card.Body>
        </Card>
    )
}

export default Register;
