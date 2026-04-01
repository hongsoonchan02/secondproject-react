import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/dashboard.css?inline";
import { getDashboard, checkIn, checkOut } from "../api/dashboardAPI";

function Dashboard() {
    // useState(null) = 처음엔 데이터 없음, API 응답 오면 채워짐
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // 페이지 처음 열릴 때 딱 한 번 실행
    useEffect(() => {
        const employeeId = localStorage.getItem("employeeId");

        // 로그인 안 했으면 로그인 페이지로 이동
        if (!employeeId) {
            navigate("/login");
            return;
        }

        getDashboard(employeeId)
            .then((res) => {
                setDashboardData(res.data); // 응답 데이터를 화면에 반영
                setLoading(false);
            })
            .catch((err) => {
                console.error("대시보드 조회 실패:", err);
                setLoading(false);
            });
    }, []); // [] = 처음 한 번만 실행

    // 출근 버튼 클릭 시
    const handleCheckIn = () => {
        const employeeId = localStorage.getItem("employeeId");
        checkIn(employeeId)
            .then((res) => {
                alert("출근 완료!");
                setDashboardData(res.data);
            })
            .catch(() => alert("출근 처리 중 오류가 발생했습니다."));
    };

    // 퇴근 버튼 클릭 시
    const handleCheckOut = () => {
        const employeeId = localStorage.getItem("employeeId");
        checkOut(employeeId)
            .then((res) => {
                alert("퇴근 완료!");
                setDashboardData(res.data);
            })
            .catch(() => alert("퇴근 처리 중 오류가 발생했습니다."));
    };

    // 날짜 포맷: "2024-10-24T09:14:00" → "09:14 AM"
    const formatTime = (dateTimeStr) => {
        if (!dateTimeStr) return "--:--";
        const date = new Date(dateTimeStr);
        return date.toLocaleTimeString("ko-KR", {
            hour: "2-digit", minute: "2-digit", hour12: true,
        });
    };

    // 날짜 포맷: "2024-10-24T09:14:00" → "2024년 10월 24일"
    const formatDate = (dateTimeStr) => {
        if (!dateTimeStr) return "";
        const date = new Date(dateTimeStr);
        return date.toLocaleDateString("ko-KR", {
            year: "numeric", month: "long", day: "numeric",
        });
    };

    // 오늘 출근/퇴근 여부 판단
    const isCheckedIn = dashboardData?.checkedInToday;
    const isCheckedOut = false;

    if (loading) return <div>로딩 중...</div>;

    return (
        <>
            <Sidebar />
            <Header />
            <div className="main-dashboard">
                <div className="content-padding">
                    <div className="page-header">
                        <div className="page-title">
                            <nav className="breadcrumbs">
                                <span>운영 포털</span>
                                <span style={{ color: "var(--outline-variant)" }}>/</span>
                                <span className="active-crumb">대시보드</span>
                            </nav>
                            {/* API에서 받아온 이름으로 교체 */}
                            <h1>반갑습니다, {dashboardData?.name ?? "사용자"} 님.</h1>
                            <p>오늘도 좋은 하루 되세요.</p>
                        </div>
                    </div>
                    <div className="dashboard-grid">
                        {/* 근태 현황 카드 */}
                        <div className="card attendance-card">
                            <div>
                                <div className="card-label-row">
                                    <span className="card-label">근태 현황</span>
                                    <div className="status-badge">
                                        <span className="dot" />
                                        {isCheckedIn ? "출근 완료" : "미출근"}
                                    </div>
                                </div>
                                {/* API에서 받아온 출근 시각으로 교체 */}
                                <p className="time-display">
                                    {isCheckedIn
                                        ? formatTime(dashboardData.todayStartTime)
                                        : "--:--"}
                                </p>
                                <p className="date-sub">{formatDate(new Date().toISOString())}</p>
                            </div>
                            <div className="btn-group">
                                <button
                                    className={`btn ${isCheckedIn ? "btn-disabled" : "btn-primary"}`}
                                    onClick={handleCheckIn}
                                    disabled={isCheckedIn}
                                >
                                    <span className="material-symbols-outlined">login</span>
                                    출근하기
                                </button>
                                <button
                                    className={`btn ${isCheckedIn && !isCheckedOut ? "btn-primary" : "btn-disabled"}`}
                                    onClick={handleCheckOut}
                                    disabled={!isCheckedIn || isCheckedOut}
                                >
                                    <span className="material-symbols-outlined">logout</span>
                                    퇴근하기
                                </button>
                            </div>
                        </div>
                        {/* Stats Column */}
                        <div className="stats-col">
                            <div className="card stat-card">
                                <div className="stat-header">
                                    <div className="stat-icon icon-blue">
                                        <span className="material-symbols-outlined">calendar_month</span>
                                    </div>
                                    <div>
                                        <p className="stat-title">연차 휴가</p>
                                        <p className="stat-desc">잔여 휴가 일수</p>
                                    </div>
                                </div>
                                <div className="stat-value-box">
                                    <span className="stat-value" style={{ color: "var(--primary)" }}>
                                        {"-"}
                                    </span>
                                    <span className="stat-unit">일</span>
                                </div>
                            </div>
                            <div className="card stat-card">
                                <div className="stat-header">
                                    <div className="stat-icon icon-orange">
                                        <span className="material-symbols-outlined">work_history</span>
                                    </div>
                                    <div>
                                        <p className="stat-title">이번 달 근무</p>
                                        <p className="stat-desc">출근 기록 일수</p>
                                    </div>
                                </div>
                                <div className="stat-value-box">
                                    <span className="stat-value">
                                        {dashboardData?.monthlyWorkDays ?? "-"}
                                    </span>
                                    <span className="stat-unit">일</span>
                                </div>
                            </div>
                        </div>
                        {/* 최근 활동 테이블 */}
                        <div className="card history-card">
                            <div className="history-header">
                                <div className="history-title-box">
                                    <h3>최근 활동</h3>
                                    <p />
                                </div>
                            </div>
                            <div className="table-container">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>날짜</th>
                                        <th>출근</th>
                                        <th>퇴근</th>
                                        <th>근무 시간</th>
                                        <th className="align-right">상태</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/* map: 배열을 반복해서 각 항목을 tr로 변환 */}
                                    {dashboardData?.attendanceList?.map((record, index) => (
                                        <tr key={index}>
                                            <td>{formatDate(record.date)}</td>
                                            <td>{formatTime(record.startTime)}</td>
                                            <td>{formatTime(record.endTime)}</td>
                                            <td>{record.allTime ?? "-"}</td>
                                            <td className="align-right">
                                                    <span className={`tag tag-${
                                                        record.state === "정상" ? "normal" :
                                                            record.state === "연장근무" ? "extra" : "normal"
                                                    }`}>
                                                        {record.state}
                                                    </span>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <div className="table-footer">
                                    <p className="footer-info">최근 근태 기록</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withPageStyle(Dashboard, "dashboard.css", pageCss);