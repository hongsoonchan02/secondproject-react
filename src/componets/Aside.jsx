import { Link } from "react-router-dom";


function Aside() {

    const isActive = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    }

    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-header">
                    <div className="logo-box">
                        <div className="logo-icon">
                            <span className="material-symbols-outlined">architecture</span>
                        </div>
                        <div className="logo-text">
                            <h2>운영 포털</h2>
                            <p>글로벌 HR 시스템</p>
                        </div>
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <Link to="/" className={isActive("/")}>
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-sm">대시보드</span>
                    </Link>
                    <Link to="/employee" className={isActive("/employee")}>
                        <span className="material-symbols-outlined">group</span>
                        <span className="text-sm">직원 관리</span>
                    </Link>
                    <Link to="/department" className={isActive("/department")}>
                        <span className="material-symbols-outlined">domain</span>
                        <span className="text-sm">부서 관리</span>
                    </Link>
                    <Link to="/attendance" className={isActive("/attendance")}>
                        <span className="material-symbols-outlined">event_available</span>
                        <span className="text-sm">근태 관리</span>
                    </Link>
                    <Link to="/vacation" className={isActive("/vacation")}>
                        <span className="material-symbols-outlined">event_busy</span>
                        <span className="text-sm">휴가 관리</span>
                    </Link>
                </nav>
                <div className="sidebar-footer">
                    <Link className="nav-link" href="support.html">
                        <span className="material-symbols-outlined">help</span>
                        고객 센터
                    </Link>
                    <Link className="nav-link logout" href="logout.html">
                        <span className="material-symbols-outlined">logout</span>
                        로그아웃
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default Aside;