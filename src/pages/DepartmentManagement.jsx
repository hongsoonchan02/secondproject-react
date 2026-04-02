import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import withPageStyle from '../utils/withPageStyle.jsx'
import pageCss from '../styles/dashboard.css?inline'
import useDepartmentManagementHook from '../hooks/useManagementHook.js'
import usePaginationHook from '../hooks/usePaginationHook.js'
import { useState } from 'react'

function DepartmentManagement() {

    const [keyword, setKeyword] = useState("");
    const { data } = useDepartmentManagementHook(keyword);
    const {
        currentPage,
        pagedData,
        firstGroupPageNum,
        lastGroupPageNum,
        handlePageChange,
        goToNextPage,
        goToBeforePage
    } = usePaginationHook(data);

    return (
        <>
            <Sidebar />
            <Header />
            <main>
                <div className="content-canvas">
                    <div className="page-header">
                        <div className="page-title">
                            <nav className="breadcrumbs">
                                <span>운영 포털</span>
                                <span style={{ color: 'var(--outline-variant)' }}>/</span>
                                <span className="active-crumb">부서 관리</span>
                            </nav>
                            <h1>부서 관리</h1>
                            <p>부서를 관리합니다.</p>
                        </div>
                        <div className="header-actions">
                            <button className="btn-dark">
                                <span className="material-symbols-outlined">download</span>
                                엑셀 내보내기
                            </button>
                            <button
                                className="btn-add"
                                onClick={() => (window.location.href = '/department-create')}
                            >
                                <span className="material-symbols-outlined">add</span>
                                부서 추가
                            </button>

                        </div>
                    </div>

                    <section className="table-container">
                        <div className="table-header">
                            <div className="search-bar">
                                <span className="material-symbols-outlined">search</span>
                                <input
                                    type="text"
                                    placeholder="부서명 또는 부서장으로 검색..."
                                    onChange={(e) => setKeyword(e.target.value)}
                                />
                            </div>
                            <button className="btn-dark">
                                <span className="material-symbols-outlined">neurology</span>
                                진단 요청하기
                            </button>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>코드</th>
                                    <th>부서명</th>
                                    <th>부서장</th>
                                    <th>인원</th>
                                    <th>평균 근속</th>
                                    <th style={{ textAlign: 'right' }}>관리</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pagedData.map((dept) => (
                                    <tr key={dept.dpCode}>
                                        <td className="code-cell">{dept.dpCode}</td>
                                        <td className="name-cell">{dept.dpName}</td>
                                        <td>
                                            <div className="manager-cell">
                                                <div className="avatar-shell">{dept.dpManagerName[0]}</div>
                                                <span>{dept.dpManagerName}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="status-badge status-blue">{dept.dpMember}명</span>
                                        </td>
                                        <td>{dept.averegeYear}년</td>
                                        <td style={{ textAlign: 'right' }}>
                                            <button
                                                className="btn-edit"
                                                onClick={() => (window.location.href = `/department-edit/${dept.dpNum}`)}
                                            >
                                                상세 보기
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="table-footer">
                            <p className="footer-info">
                                전체 {data?.length || 0}개의 부서 중 {(currentPage - 1) * 5 + 1} ~ {Math.min(currentPage * 5, data?.length || 0)}번째 표시 중
                            </p>
                            <div className="pagination">
                                <button className="page-btn" onClick={goToBeforePage} type="button">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                {Array.from({ length: lastGroupPageNum - firstGroupPageNum + 1 }, (_, i) => i + firstGroupPageNum).map((pageNum) => (
                                    <button
                                        key={pageNum}
                                        className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                                        type="button"
                                        onClick={() => handlePageChange(pageNum)}
                                    >
                                        {pageNum}
                                    </button>
                                ))}
                                <button className="page-btn" onClick={goToNextPage} type="button">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default withPageStyle(DepartmentManagement, 'dashboard.css', pageCss);