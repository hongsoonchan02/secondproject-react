import {Link, useNavigate} from "react-router-dom";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/login.css?inline";
import {useState} from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/auth/login", {
            email: email,
            password: password,
        })
            .then((res) => {
                localStorage.setItem("employeeId", res.data.id);
                localStorage.setItem("name", res.data.name);
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("position", res.data.position);
                navigate("/dashboard");
            })
            .catch((err) => {
                console.error("로그인 실패:", err);
                alert("이메일 또는 비밀번호를 확인해주세요.");
            });
    };

    return (
        <>
            <div className="main-wrapper">
                <div className="login-container">
                    <div className="branding-header">
                        <div className="logo-box">
                            <span className="material-symbols-outlined" data-icon="architecture">
                                architecture
                            </span>
                        </div>
                        <h1 className="title">Architect Ledger HR</h1>
                        <p className="subtitle">임원 전용 포털 접속</p>
                    </div>
                    <div className="login-card">
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <div className="form-label-row">
                                    <label className="label-text" htmlFor="login_id">로그인 ID</label>
                                </div>
                                <div className="input-wrapper">
                                    <div className="input-icon">
                                        <span className="material-symbols-outlined" data-icon="badge">badge</span>
                                    </div>
                                    <input
                                        className="form-input"
                                        id="login_id"
                                        name="login_id"
                                        placeholder="사번 또는 이메일"
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-row">
                                    <label className="label-text" htmlFor="password">비밀번호</label>
                                    <Link className="forgot-link" to="/find-password">분실하셨나요?</Link>
                                </div>
                                <div className="input-wrapper">
                                    <div className="input-icon">
                                        <span className="material-symbols-outlined" data-icon="lock">lock</span>
                                    </div>
                                    <input
                                        className="form-input"
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="checkbox-group">
                                <input className="checkbox-input" id="remember" name="remember" type="checkbox" />
                                <label className="checkbox-label" htmlFor="remember">로그인 상태 유지</label>
                            </div>
                            <button className="login-button" type="submit">
                                <span>로그인</span>
                                <span className="material-symbols-outlined" style={{ fontSize: "1.125rem" }}>arrow_forward</span>
                            </button>
                        </form>
                    </div>
                    <p className="support-text">
                        로그인에 문제가 있나요?{" "}
                        <Link className="support-link" to="/it-contact">IT 지원팀에 문의하기</Link>
                    </p>
                </div>
            </div>
            <footer className="footer">
                <div>
                    <p className="footer-text">© 2024 Architect Ledger HR 시스템. 정밀한 거버넌스.</p>
                </div>
            </footer>
            <div className="bg-decor">
                <div className="blob-1"></div>
                <div className="blob-2"></div>
                <div className="line-decor"></div>
            </div>
        </>
    );
}

export default withPageStyle(Login, "login.css", pageCss);
