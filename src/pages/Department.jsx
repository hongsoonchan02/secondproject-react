import Aside from "../componets/Aside";
import Header from "../componets/Header"

function Department() {
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
                        <section className="page-intro">
                            <div className="page-title-section">
                                <nav className="breadcrumbs">
                                    <span>운영 포털</span>
                                    <span
                                        className="material-symbols-outlined"
                                        style={{
                                            fontSize: "10px",
                                        }}>
                                        chevron_right
                                    </span>
                                    <span className="active-crumb">조직 관리</span>
                                </nav>
                                <h1>부서 관리</h1>
                                <p>
                                    부서의 경계를 정의하고 리더를 배정하며 전체 조직의 리소스 분포를
                                    모니터링합니다.
                                </p>
                            </div>
                            <button className="btn-add">
                                <span className="material-symbols-outlined">add</span>
                                부서 추가
                            </button>
                        </section>
                        <section className="stats-row">
                            <div className="stat-card wide interactive">
                                <div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}>
                                        <span className="stat-label">전체 부서 수</span>
                                        <span
                                            className="material-symbols-outlined"
                                            style={{
                                                color: "var(--primary)",
                                            }}>
                                            analytics
                                        </span>
                                    </div>
                                    <div className="stat-value">12</div>
                                </div>
                                <p className="stat-desc">전역에서 활성화된 부서</p>
                            </div>
                            <div
                                className="stat-card narrow"
                                style={{
                                    backgroundColor: "var(--secondary-container)",
                                    border: "none",
                                }}>
                                <span
                                    className="stat-label"
                                    style={{
                                        color: "var(--on-secondary-container)",
                                    }}>
                                    인원 분포
                                </span>
                                <div>
                                    <div
                                        className="stat-value"
                                        style={{
                                            color: "var(--on-secondary-container)",
                                            fontSize: "32px",
                                        }}>
                                        1,248
                                    </div>
                                    <div
                                        className="progress-container"
                                        style={{
                                            background: "rgba(255,255,255,0.3)",
                                        }}>
                                        <div className="progress-bar" />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-card narrow">
                                <span className="stat-label">평균 부서 성장률</span>
                                <div
                                    style={{
                                        alignItems: "center",
                                        color: "var(--primary)",
                                        display: "flex",
                                        gap: "8px",
                                        marginTop: "16px",
                                    }}>
                                    <span
                                        className="stat-value"
                                        style={{
                                            fontSize: "32px",
                                        }}>
                                        +14%
                                    </span>
                                    <span className="material-symbols-outlined">trending_up</span>
                                </div>
                            </div>
                        </section>
                        <section className="table-card">
                            <div className="table-header">
                                <div className="search-box">
                                    <span
                                        className="material-symbols-outlined"
                                        style={{
                                            color: "var(--on-surface-variant)",
                                            fontSize: "18px",
                                        }}>
                                        search
                                    </span>
                                    <input placeholder="부서 필터링..." type="text" />
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
                                            <th
                                                style={{
                                                    paddingLeft: "32px",
                                                }}>
                                                부서 코드
                                            </th>
                                            <th>부서명</th>
                                            <th>인원</th>
                                            <th>관리자</th>
                                            <th
                                                style={{
                                                    paddingRight: "32px",
                                                    textAlign: "right",
                                                }}>
                                                관리
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td
                                                style={{
                                                    paddingLeft: "32px",
                                                }}>
                                                <span className="dept-code">ENG-001</span>
                                            </td>
                                            <td>
                                                <div className="dept-info-name">시스템 엔지니어링</div>
                                                <div className="dept-info-sub">주요 인프라</div>
                                            </td>
                                            <td>
                                                <div className="count-group">
                                                    <span
                                                        style={{
                                                            fontSize: "14px",
                                                            fontWeight: "500",
                                                        }}>
                                                        142
                                                    </span>
                                                    <div className="avatar-stack">
                                                        <img
                                                            alt="Staff"
                                                            className="avatar-mini"
                                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ4Yx7A2_oUaoBsjy2h4ip2-mcK4xAG5_K7dP6VMQ-ec06isPrpU6ocjYmEOaDP3KSL6axHwJjvur5Uohn-zpp40kDDe7hFHI6oGlEQsb_zSO_txHtfCKtqZov5dbPgAGB4KmnxaBwTxGfgDfKr1rVGh-svH8MHFiPwYPOu1DvqCtcKDhzX9J2tsgM5TA4dHoQRGCGBGoWFc2m9209FbNRdRn5zgItSYPjIJRt7FnkKKtFvEUk601eLdyPeNUfLPtrqE4t1uvosLFr"
                                                        />
                                                        <img
                                                            alt="Staff"
                                                            className="avatar-mini"
                                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAgA11RmMBSjYVJHE8ujpj3RDM6_L6HXJ1uYOELvN6NplqyxYoQr0PvFts0Uph1p4Hsc39U3CXzVYWfYOslaWheHb_wISVi0fzryXyvfY_hEFzHT37BSGf_ixfF0hUt2qSVuj2lM-KSRJ3CYYcj5XPtCbOSOK8LJF7bJTwIWFmCpMuBeJQt66A2fQxe-GT36FxfKG3EGgGVwvTm3muLUQ0Wy3izBaThauTvKZ-tBE1usUC1k31NnvWK6JYGswX5ia0zk9cJ1bex581"
                                                        />
                                                        <div className="avatar-more">+139</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="manager-cell">
                                                    <div className="initial-box">AM</div>
                                                    <div>
                                                        <div
                                                            style={{
                                                                fontSize: "14px",
                                                                fontWeight: "600",
                                                            }}>
                                                            아드리안 머서 (Adrian Mercer)
                                                        </div>
                                                        <div
                                                            style={{
                                                                color: "var(--on-surface-variant)",
                                                                fontSize: "10px",
                                                            }}>
                                                            수석 아키텍트
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    paddingRight: "32px",
                                                    textAlign: "right",
                                                }}>
                                                <button
                                                    style={{
                                                        background: "none",
                                                        border: "none",
                                                        color: "var(--on-surface-variant)",
                                                        cursor: "pointer",
                                                    }}>
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    paddingLeft: "32px",
                                                }}>
                                                <span className="dept-code">MKT-042</span>
                                            </td>
                                            <td>
                                                <div className="dept-info-name">성장 및 전략</div>
                                                <div className="dept-info-sub">수익 운영</div>
                                            </td>
                                            <td>
                                                <div className="count-group">
                                                    <span
                                                        style={{
                                                            fontSize: "14px",
                                                            fontWeight: "500",
                                                        }}>
                                                        86
                                                    </span>
                                                    <div className="avatar-stack">
                                                        <img
                                                            alt="Staff"
                                                            className="avatar-mini"
                                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1P4-cWy2hSabZGuStF4fGIC0i8mW3tj7BziCStNut61uTNwe9DuNQary9k88NjnUrPY1a9Qd6DtDjQUWftUXcEwjr-6C6CV8YBs7APZYDrHkCipuYWU9Orf6LKIhSm4SKUP2RK5Gdv08EE8YBBc8IDDHH7xjG2hx-KlKgSMyOalmVdgUzXXKALgcrGs84zDWzQRKCp7opaTcEW0q5hf6KQnMKrwEKK8yyLbJSedieA6DfN9JMhfyeTLtuXkPgcj9vf04Ls2pf8Zmo"
                                                        />
                                                        <div className="avatar-more">+85</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="manager-cell">
                                                    <div
                                                        className="initial-box"
                                                        style={{
                                                            background: "var(--tertiary-fixed)",
                                                            color: "var(--tertiary)",
                                                        }}>
                                                        EL
                                                    </div>
                                                    <div>
                                                        <div
                                                            style={{
                                                                fontSize: "14px",
                                                                fontWeight: "600",
                                                            }}>
                                                            엘레나 룬드 (Elena Lund)
                                                        </div>
                                                        <div
                                                            style={{
                                                                color: "var(--on-surface-variant)",
                                                                fontSize: "10px",
                                                            }}>
                                                            최고 성장 책임자
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    paddingRight: "32px",
                                                    textAlign: "right",
                                                }}>
                                                <button
                                                    style={{
                                                        background: "none",
                                                        border: "none",
                                                        color: "var(--on-surface-variant)",
                                                        cursor: "pointer",
                                                    }}>
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    paddingLeft: "32px",
                                                }}>
                                                <span className="dept-code">MKT-042</span>
                                            </td>
                                            <td>
                                                <div className="dept-info-name">성장 및 전략</div>
                                                <div className="dept-info-sub">수익 운영</div>
                                            </td>
                                            <td>
                                                <div className="count-group">
                                                    <span
                                                        style={{
                                                            fontSize: "14px",
                                                            fontWeight: "500",
                                                        }}>
                                                        86
                                                    </span>
                                                    <div className="avatar-stack">
                                                        <img
                                                            alt="Staff"
                                                            className="avatar-mini"
                                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1P4-cWy2hSabZGuStF4fGIC0i8mW3tj7BziCStNut61uTNwe9DuNQary9k88NjnUrPY1a9Qd6DtDjQUWftUXcEwjr-6C6CV8YBs7APZYDrHkCipuYWU9Orf6LKIhSm4SKUP2RK5Gdv08EE8YBBc8IDDHH7xjG2hx-KlKgSMyOalmVdgUzXXKALgcrGs84zDWzQRKCp7opaTcEW0q5hf6KQnMKrwEKK8yyLbJSedieA6DfN9JMhfyeTLtuXkPgcj9vf04Ls2pf8Zmo"
                                                        />
                                                        <div className="avatar-more">+85</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="manager-cell">
                                                    <div
                                                        className="initial-box"
                                                        style={{
                                                            background: "var(--tertiary-fixed)",
                                                            color: "var(--tertiary)",
                                                        }}>
                                                        EL
                                                    </div>
                                                    <div>
                                                        <div
                                                            style={{
                                                                fontSize: "14px",
                                                                fontWeight: "600",
                                                            }}>
                                                            엘레나 룬드 (Elena Lund)
                                                        </div>
                                                        <div
                                                            style={{
                                                                color: "var(--on-surface-variant)",
                                                                fontSize: "10px",
                                                            }}>
                                                            최고 성장 책임자
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    paddingRight: "32px",
                                                    textAlign: "right",
                                                }}>
                                                <button
                                                    style={{
                                                        background: "none",
                                                        border: "none",
                                                        color: "var(--on-surface-variant)",
                                                        cursor: "pointer",
                                                    }}>
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    paddingLeft: "32px",
                                                }}>
                                                <span className="dept-code">MKT-042</span>
                                            </td>
                                            <td>
                                                <div className="dept-info-name">성장 및 전략</div>
                                                <div className="dept-info-sub">수익 운영</div>
                                            </td>
                                            <td>
                                                <div className="count-group">
                                                    <span
                                                        style={{
                                                            fontSize: "14px",
                                                            fontWeight: "500",
                                                        }}>
                                                        86
                                                    </span>
                                                    <div className="avatar-stack">
                                                        <img
                                                            alt="Staff"
                                                            className="avatar-mini"
                                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1P4-cWy2hSabZGuStF4fGIC0i8mW3tj7BziCStNut61uTNwe9DuNQary9k88NjnUrPY1a9Qd6DtDjQUWftUXcEwjr-6C6CV8YBs7APZYDrHkCipuYWU9Orf6LKIhSm4SKUP2RK5Gdv08EE8YBBc8IDDHH7xjG2hx-KlKgSMyOalmVdgUzXXKALgcrGs84zDWzQRKCp7opaTcEW0q5hf6KQnMKrwEKK8yyLbJSedieA6DfN9JMhfyeTLtuXkPgcj9vf04Ls2pf8Zmo"
                                                        />
                                                        <div className="avatar-more">+85</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="manager-cell">
                                                    <div
                                                        className="initial-box"
                                                        style={{
                                                            background: "var(--tertiary-fixed)",
                                                            color: "var(--tertiary)",
                                                        }}>
                                                        EL
                                                    </div>
                                                    <div>
                                                        <div
                                                            style={{
                                                                fontSize: "14px",
                                                                fontWeight: "600",
                                                            }}>
                                                            엘레나 룬드 (Elena Lund)
                                                        </div>
                                                        <div
                                                            style={{
                                                                color: "var(--on-surface-variant)",
                                                                fontSize: "10px",
                                                            }}>
                                                            최고 성장 책임자
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    paddingRight: "32px",
                                                    textAlign: "right",
                                                }}>
                                                <button
                                                    style={{
                                                        background: "none",
                                                        border: "none",
                                                        color: "var(--on-surface-variant)",
                                                        cursor: "pointer",
                                                    }}>
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    paddingLeft: "32px",
                                                }}>
                                                <span className="dept-code">MKT-042</span>
                                            </td>
                                            <td>
                                                <div className="dept-info-name">성장 및 전략</div>
                                                <div className="dept-info-sub">수익 운영</div>
                                            </td>
                                            <td>
                                                <div className="count-group">
                                                    <span
                                                        style={{
                                                            fontSize: "14px",
                                                            fontWeight: "500",
                                                        }}>
                                                        86
                                                    </span>
                                                    <div className="avatar-stack">
                                                        <img
                                                            alt="Staff"
                                                            className="avatar-mini"
                                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1P4-cWy2hSabZGuStF4fGIC0i8mW3tj7BziCStNut61uTNwe9DuNQary9k88NjnUrPY1a9Qd6DtDjQUWftUXcEwjr-6C6CV8YBs7APZYDrHkCipuYWU9Orf6LKIhSm4SKUP2RK5Gdv08EE8YBBc8IDDHH7xjG2hx-KlKgSMyOalmVdgUzXXKALgcrGs84zDWzQRKCp7opaTcEW0q5hf6KQnMKrwEKK8yyLbJSedieA6DfN9JMhfyeTLtuXkPgcj9vf04Ls2pf8Zmo"
                                                        />
                                                        <div className="avatar-more">+85</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="manager-cell">
                                                    <div
                                                        className="initial-box"
                                                        style={{
                                                            background: "var(--tertiary-fixed)",
                                                            color: "var(--tertiary)",
                                                        }}>
                                                        EL
                                                    </div>
                                                    <div>
                                                        <div
                                                            style={{
                                                                fontSize: "14px",
                                                                fontWeight: "600",
                                                            }}>
                                                            엘레나 룬드 (Elena Lund)
                                                        </div>
                                                        <div
                                                            style={{
                                                                color: "var(--on-surface-variant)",
                                                                fontSize: "10px",
                                                            }}>
                                                            최고 성장 책임자
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    paddingRight: "32px",
                                                    textAlign: "right",
                                                }}>
                                                <button
                                                    style={{
                                                        background: "none",
                                                        border: "none",
                                                        color: "var(--on-surface-variant)",
                                                        cursor: "pointer",
                                                    }}>
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-footer">
                                <p
                                    style={{
                                        color: "var(--on-surface-variant)",
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        textTransform: "uppercase",
                                    }}>
                                    전체 12개 부서 중 1~5번째 표시 중
                                </p>
                                <div className="pagination">
                                    <button className="page-btn">
                                        <span
                                            className="material-symbols-outlined"
                                            style={{
                                                fontSize: "16px",
                                            }}>
                                            chevron_left
                                        </span>
                                    </button>
                                    <button className="page-btn active">1</button>
                                    <button className="page-btn">2</button>
                                    <button className="page-btn">3</button>
                                    <button className="page-btn">
                                        <span
                                            className="material-symbols-outlined"
                                            style={{
                                                fontSize: "16px",
                                            }}>
                                            chevron_right
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className="util-grid">
                            <div className="promo-card">
                                <div className="promo-content">
                                    <h3>구조 진단이 필요하신가요?</h3>
                                    <p>
                                        Ledger 시스템은 부서 운영 비용과 인력 효율성에 대한 심층 추적
                                        분석을 제공합니다. 몇 초 만에 글로벌 구조 보고서를 생성하십시오.
                                    </p>
                                    <button className="promo-btn">진단 요청하기</button>
                                </div>
                                <div
                                    style={{
                                        background: "rgba(0, 91, 191, 0.1)",
                                        borderRadius: "50%",
                                        bottom: "-80px",
                                        filter: "blur(60px)",
                                        height: "320px",
                                        position: "absolute",
                                        right: "-80px",
                                        width: "320px",
                                    }}></div>
                                <span className="material-symbols-outlined promo-bg-icon">
                                    account_tree
                                </span>
                            </div>
                            <div className="compliance-card">
                                <span
                                    className="material-symbols-outlined icon"
                                    style={{
                                        fontVariationSettings: "'FILL' 1",
                                    }}>
                                    verified
                                </span>
                                <h4>준수 여부 확인</h4>
                                <p>
                                    현재 모든 부서가 4분기 기업 인력 비율 및 다양성 벤치마크 기준을
                                    충족하고 있습니다.
                                </p>
                            </div>
                        </section>
                    </main>
                </body>
            </html>
        </>
    )
}

export default Department;