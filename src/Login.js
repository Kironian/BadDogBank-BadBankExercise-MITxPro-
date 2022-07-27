import { useRef, useState, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import './css/createAccount.css';
import { Link } from "react-router-dom";
import { useBankContext } from "./Context";

const Login = () => {


    const userRef = useRef();
    const errRef = useRef();

    const [userName, setUserName] = useState('');

    const [pwd, setPwd] = useState('');
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const { bank, setLoggedInUser, setActiveUser } = useBankContext();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrMsg('');
        const user = bank.users.find(user => user.name === userName);
        if (!user) {
            setErrMsg(`You probably forgot a capital letter somewhere...`);
            return;
        }
        if (user.password !== pwd) {
            setErrMsg(`Incorrect Password`);
            return;
        }
        setLoggedInUser(userName);
        setActiveUser(userName);
        setSuccess(true);
    }

    const logOut = async (e) => {
        e.preventDefault();
        setLoggedInUser(null);
        setPwd('');
        setUserName('');
        setSuccess(false);
    }

    return (
        <Card style={{ width: "200rem" }}>
            <Card.Body>
                {success ? (
                    <div >
                        <Card.Title>You Are Logged In!</Card.Title>]
                        <Button variant="primary" onClick={logOut}>Log Out</Button><br/>
                        <Link to="/deposit"><Button variant="primary">Make a Deposit</Button></Link>
                    </div>
                ) : (
                    <div >
                            <Card.Title>Log In</Card.Title>
                            <div className="card-body">
                                <section>
                                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                        <label htmlFor="username">
                                            Username:
                                        </label>
                                        <input 
                                            typ="text"
                                            id="username"
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) => setUserName(e.target.value)}
                                            required
                                            aria-describedby="uidnote"
                                        />

                                        <label htmlFor="password">
                                            Password:
                                        </label>
                                        <input 
                                            typ="password"
                                            id="password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            required
                                            aria-describedby="pwdnote"
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                        />

                                        <Button variant="primary" onClick={handleSubmit} disabled={!userName || !pwd ? true : false}>LOG IN</Button>
=
                                </section>
                            </div>
                        </div>
                    )}
                </Card.Body>
        </Card>
    )

}

export default Login;