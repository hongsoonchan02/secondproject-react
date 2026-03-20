import Aside from "../componets/Aside";
import Header from "../componets/Header";



function Attendance() {
    return (
        <>
            <html key="1" lang="ko">
                <Header />
                <body>
                    <Aside />
                    <header className="topbar">
                        <div className="topbar-left">
                            <h1>Architect Ledger HR</h1>
                        </div>
                        <div className="topbar-right">
                            <button className="icon-btn">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <div className="user-profile">
                                <div className="user-info">
                                    <p className="user-name">마커스 베리티</p>
                                    <p className="user-role">수석 프로젝트 아키텍트 (팀장)</p>
                                </div>
                                <img
                                    alt="Profile"
                                    className="avatar"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD_l8kevGXJ2LE6GRSotSyLW3KIRZbLy1nJpq7NJjsr7K0rF8Y2ogq8rz04NNvqEA2GMq_YbrDOzgCm7Djdma9586_uDn3mO4fTGshaFAwjYe1XrOpAfnFc5oSsAlvO2QCcI6MHaA-eFwOCl2icVY-RVF9WlvT1OScb2laeY76kAamJF09j045LnHajahYQ-k4imgTpn4qjaZ8P60SJ-Tk2_zXJigpsNghmkdQQaDVQiqmDUJtkIfpB_FKmJJQ1K-e7AOUIbVAx7oi"
                                />
                            </div>
                        </div>
                    </header>
                    <main>
                        <div className="page-header">
                            <div className="page-title">
                                <nav className="breadcrumbs">
                                    <span>운영 포털</span>
                                    <span
                                        style={{
                                            color: "var(--outline-variant)",
                                        }}>
                                        /
                                    </span>
                                    <span className="active-crumb">근태 관리</span>
                                </nav>
                                <h1>근태 관리</h1>
                                <p>직원들의 근태 관리 메뉴입니다.</p>
                            </div>
                        </div>
                        <div className="content-canvas">
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <div className="stat-header">
                                        <div className="icon-box blue">
                                            <span
                                                className="material-symbols-outlined"
                                                style={{
                                                    fontVariationSettings: "'FILL' 1",
                                                }}>
                                                check_circle
                                            </span>
                                        </div>
                                        <span className="trend-badge trend-up">+2.4%</span>
                                    </div>
                                    <div>
                                        <p className="stat-value">
                                            22 <span className="stat-unit">일</span>
                                        </p>
                                        <p className="stat-label">이번 달 출근 일수</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-header">
                                        <div className="icon-box orange">
                                            <span
                                                className="material-symbols-outlined"
                                                style={{
                                                    fontVariationSettings: "'FILL' 1",
                                                }}>
                                                schedule
                                            </span>
                                        </div>
                                        <span className="trend-badge trend-down">-12%</span>
                                    </div>
                                    <div>
                                        <p className="stat-value">
                                            03 <span className="stat-unit">일</span>
                                        </p>
                                        <p className="stat-label">지각 횟수</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-header">
                                        <div className="icon-box red">
                                            <span
                                                className="material-symbols-outlined"
                                                style={{
                                                    fontVariationSettings: "'FILL' 1",
                                                }}>
                                                cancel
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="stat-value">
                                            01 <span className="stat-unit">일</span>
                                        </p>
                                        <p className="stat-label">총 결근 일수</p>
                                    </div>
                                </div>
                                <div className="stat-card featured">
                                    <div className="stat-header">
                                        <div className="icon-box glass">
                                            <span
                                                className="material-symbols-outlined"
                                                style={{
                                                    fontVariationSettings: "'FILL' 1",
                                                }}>
                                                leaderboard
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="stat-value">94.8%</p>
                                        <p className="stat-label">근태 점수</p>
                                    </div>
                                </div>
                            </div>
                            <div className="table-container">
                                <div className="table-header">
                                    <div>
                                        <h3>근태 이력</h3>
                                        <p>현재 정산 주기의 이력 데이터입니다.</p>
                                    </div>
                                    <div className="header-actions">
                                        <button className="btn-dark">
                                            <span
                                                className="material-symbols-outlined"
                                                style={{
                                                    fontSize: "16px",
                                                }}>
                                                download
                                            </span>
                                            엑셀 내보내기
                                        </button>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        overflowX: "auto",
                                    }}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>날짜</th>
                                                <th>출근 시각</th>
                                                <th>퇴근 시각</th>
                                                <th>근무 시간</th>
                                                <th className="text-center">상태</th>
                                                <th className="text-right">관리</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="date-cell">
                                                        <span className="date-primary">2023년 10월 24일</span>
                                                        <span className="date-secondary">목요일</span>
                                                    </div>
                                                </td>
                                                <td className="time-cell">08:54 AM</td>
                                                <td className="time-cell">06:12 PM</td>
                                                <td className="time-cell">9시간 18분</td>
                                                <td className="text-center">
                                                    <span className="status-badge status-normal">정상</span>
                                                </td>
                                                <td className="text-right">
                                                    <button className="btn-icon">
                                                        <span
                                                            className="material-symbols-outlined"
                                                            style={{
                                                                fontSize: "18px",
                                                            }}>
                                                            more_vert
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="date-cell">
                                                        <span className="date-primary">2023년 10월 23일</span>
                                                        <span className="date-secondary">수요일</span>
                                                    </div>
                                                </td>
                                                <td className="time-cell">09:42 AM</td>
                                                <td className="time-cell">06:05 PM</td>
                                                <td className="time-cell">8시간 23분</td>
                                                <td className="text-center">
                                                    <span className="status-badge status-late">지각</span>
                                                </td>
                                                <td className="text-right">
                                                    <button className="btn-icon">
                                                        <span
                                                            className="material-symbols-outlined"
                                                            style={{
                                                                fontSize: "18px",
                                                            }}>
                                                            more_vert
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="date-cell">
                                                        <span className="date-primary">2023년 10월 22일</span>
                                                        <span className="date-secondary">화요일</span>
                                                    </div>
                                                </td>
                                                <td className="time-cell">08:50 AM</td>
                                                <td className="time-cell">08:30 PM</td>
                                                <td className="time-cell">11시간 40분</td>
                                                <td className="text-center">
                                                    <span className="status-badge status-overtime">
                                                        연장 근무
                                                    </span>
                                                </td>
                                                <td className="text-right">
                                                    <button className="btn-icon">
                                                        <span
                                                            className="material-symbols-outlined"
                                                            style={{
                                                                fontSize: "18px",
                                                            }}>
                                                            more_vert
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="date-cell">
                                                        <span className="date-primary">2023년 10월 21일</span>
                                                        <span className="date-secondary">월요일</span>
                                                    </div>
                                                </td>
                                                <td className="time-cell">08:58 AM</td>
                                                <td className="time-cell">06:00 PM</td>
                                                <td className="time-cell">9시간 02분</td>
                                                <td className="text-center">
                                                    <span className="status-badge status-normal">정상</span>
                                                </td>
                                                <td className="text-right">
                                                    <button className="btn-icon">
                                                        <span
                                                            className="material-symbols-outlined"
                                                            style={{
                                                                fontSize: "18px",
                                                            }}>
                                                            more_vert
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="date-cell">
                                                        <span className="date-primary">2023년 10월 21일</span>
                                                        <span className="date-secondary">월요일</span>
                                                    </div>
                                                </td>
                                                <td className="time-cell">08:58 AM</td>
                                                <td className="time-cell">06:00 PM</td>
                                                <td className="time-cell">9시간 02분</td>
                                                <td className="text-center">
                                                    <span className="status-badge status-normal">정상</span>
                                                </td>
                                                <td className="text-right">
                                                    <button className="btn-icon">
                                                        <span
                                                            className="material-symbols-outlined"
                                                            style={{
                                                                fontSize: "18px",
                                                            }}>
                                                            more_vert
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="table-footer">
                                        <p className="footer-info">
                                            전체 308개의 근태 기록 중 1~5번째 표시 중
                                        </p>
                                        <div className="pagination">
                                            <button className="page-btn">
                                                <span className="material-symbols-outlined">
                                                    chevron_left
                                                </span>
                                            </button>
                                            <button className="page-btn active">1</button>
                                            <button className="page-btn">2</button>
                                            <button className="page-btn">3</button>
                                            <button className="page-btn">
                                                <span className="material-symbols-outlined">
                                                    chevron_right
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </body>
            </html>
        </>
    )
}

export default Attendance;