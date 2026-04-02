import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/department-edit.css?inline";
import useDepartmentUpdateHook from "../hooks/useEditHook.js";

function DepartmentEdit() {

    const {
        handleChange,
        handleSumit,
        formData,
        memberData,
        handleDelete
    } = useDepartmentUpdateHook();
    return (
        <>
            <Sidebar />
            <Header />
            <main>
                <header className="content-header">
                    <div className="breadcrumb">부서 관리 &gt; 상세 정보</div>
                    <h2 className="page-title">기술 전략 본부</h2>
                </header>
                {/* Department Basic Info */}
                <section className="card">
                    <h3 className="section-title">기본 정보</h3>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>부서 코드</label>
                            <input
                                readOnly=""
                                style={{
                                    backgroundColor: "#f3f4f5",
                                    borderColor: "transparent",
                                    fontWeight: 600
                                }}
                                type="text"
                                name="dpCode"
                                defaultValue={formData.dpCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>부서 이름</label>
                            <input
                                type="text"
                                name="dpName"
                                defaultValue={formData.dpName}
                                onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>부서장 사번</label>
                            <input
                                type="text"
                                defaultValue={formData.dpManagerEmpId}
                                name="dpManagerEmpId"
                                onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>부서장 이름</label>
                            <input
                                type="text"
                                defaultValue={formData.dpManagerName}
                                name="name"
                                onChange={handleChange} />
                        </div>
                        <div className="form-group full-width">
                            <label>부서 설명</label>
                            <textarea
                                rows={4}
                                defaultValue={formData.dpDetail}
                                name="dpDetail"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </section>
                {/* Department Members List */}
                <section className="card">
                    <h3 className="section-title">부서원 목록</h3>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>사원 번호</th>
                                    <th>성명</th>
                                    <th>직책</th>
                                    <th>이메일</th>
                                    <th>입사일</th>
                                </tr>
                            </thead>
                            <tbody>
                                {memberData?.map((member) => (
                                <tr key={member.email}>
                                    <td>EMP-2023-01</td>
                                    <td style={{ fontWeight: 600 }}>{member.name}</td>
                                    <td>
                                        <span className="role-badge">{member.position}</span>
                                    </td>
                                    <td>{member.email}</td>
                                    <td>{member.hireDate}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="table-footer">
                            <p
                                style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    color: "var(--on-surface-variant)"
                                }}
                            >
                                전체 인원 12명 중 1~5번째 표시 중
                            </p>
                            <div className="pagination">
                                <button className="page-btn">
                                    <span
                                        className="material-symbols-outlined"
                                        style={{ fontSize: 16 }}
                                    >
                                        chevron_left
                                    </span>
                                </button>
                                <button className="page-btn active">1</button>
                                <button className="page-btn">2</button>
                                <button className="page-btn">3</button>
                                <button className="page-btn">
                                    <span
                                        className="material-symbols-outlined"
                                        style={{ fontSize: 16 }}
                                    >
                                        chevron_right
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Functional Buttons */}
                <footer className="actions-footer">
                    <button className="btn btn-danger" onClick={handleDelete}>
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "1.25rem" }}
                        >
                            delete
                        </span>
                        부서 삭제
                    </button>
                    <div className="button-group">
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                window.location.href = "/department-management";
                            }}
                        >
                            취소
                        </button>
                        <button className="btn btn-primary" onClick={handleSumit}>
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "1.25rem" }}
                            >
                                save
                            </span>
                            저장하기
                        </button>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default withPageStyle(DepartmentEdit, "department-edit.css", pageCss);