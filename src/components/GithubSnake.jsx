import { motion } from 'framer-motion'
import {
    FaGithub,
    FaFire,
    FaCodeBranch,
    FaCode,
} from 'react-icons/fa'

export default function GithubSnake() {
    return (
        <section id="github" className="section github-section">
            <div className="container">
                {/* ================= HEADER ================= */}
                <div className="header-center">
                    <div className="sec-label">
                        <div className="sec-label__gradient" />
                        <span className="sec-label__num">07</span>
                        <div className="sec-label__line" />
                        <span className="sec-label__text">GITHUB ACTIVITY</span>
                    </div>

                    <motion.h2
                        className="sec-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Live GitHub <span className="grad-purple">Contribution</span>
                    </motion.h2>

                    <motion.p
                        className="sec-sub"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Real-time GitHub contribution graph, repositories, coding streak, and language analytics.
                    </motion.p>
                </div>

                {/* ================= MAIN CARD ================= */}
                <motion.div
                    className="github-main-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* ===== TOP BADGES ===== */}
                    <div className="github-badges">
                        <div className="github-badge green">
                            <FaGithub />
                            <span>Live GitHub Data</span>
                        </div>
                        <div className="github-badge orange">
                            <FaFire />
                            <span>Auto Updated</span>
                        </div>
                        <div className="github-badge purple">
                            <FaCodeBranch />
                            <span>Real-Time Analytics</span>
                        </div>
                    </div>

                    {/* ===== SNAKE ===== */}
                    <div className="snake-wrapper">
                        <img
                            src="https://raw.githubusercontent.com/Nilamani77/Nilamani77/output/github-contribution-grid-snake-dark.svg"
                            alt="GitHub Snake"
                            className="snake-image"
                        />
                    </div>

                    {/* ===== STATS GRID ===== */}
                    <div className="github-grid">
                        <div className="gh-stat-box">
                            <img
                                src="https://github-readme-stats-sigma-five.vercel.app/api?username=Nilamani77&show_icons=true&theme=tokyonight"
                                alt="GitHub Stats"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        <div className="gh-stat-box">
                            <img
                                src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=Nilamani77&layout=compact&theme=tokyonight"
                                alt="Top Languages"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>

                    {/* ===== STREAK ===== */}
                    <div className="github-streak">
                        <img
                            src="https://streak-stats.demolab.com?user=Nilamani77&theme=tokyonight&hide_border=true&background=0D1117&ring=22c55e&fire=8b5cf6&currStreakLabel=ffffff"
                            alt="GitHub Streak"
                        />
                    </div>

                    {/* ===== GITHUB INFO FOOTER (RENAMED CLASSES) ===== */}
                    <div className="gh-info-row">
                        <div className="gh-info-card">
                            <div className="gh-icon-box green-bg">
                                <FaFire className="gh-info-icon green-text" />
                            </div>
                            <h3 className="gh-info-title">Daily Contributions</h3>
                            <p className="gh-info-desc">Automatically updated from GitHub</p>
                        </div>

                        <div className="gh-info-card">
                            <div className="gh-icon-box purple-bg">
                                <FaCodeBranch className="gh-info-icon purple-text" />
                            </div>
                            <h3 className="gh-info-title">Repositories</h3>
                            <p className="gh-info-desc">Live public repository analytics</p>
                        </div>

                        <div className="gh-info-card">
                            <div className="gh-icon-box cyan-bg">
                                <FaCode className="gh-info-icon cyan-text" />
                            </div>
                            <h3 className="gh-info-title">Programming</h3>
                            <p className="gh-info-desc">Top languages and coding activity</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ================= CSS ================= */}
            <style>
                {`
                .github-section {
                    position: relative;
                }

                .sec-label__gradient {
                    width: 40px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #22c55e);
                }

                .github-main-card {
                    max-width: 1000px; 
                    margin: 40px auto 0;
                    padding: 40px; 
                    border-radius: 24px;
                    background: #0d1117;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    box-sizing: border-box;
                }

                /* --- Badges --- */
                .github-badges {
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                    flex-wrap: wrap;
                    margin-bottom: 30px;
                }

                .github-badge {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    border-radius: 999px;
                    background: #161b22;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    font-size: 13px;
                    font-weight: 600;
                }

                .green { color: #22c55e; }
                .orange { color: #f97316; }
                .purple { color: #8b5cf6; }

                /* --- Snake Animation --- */
                .snake-wrapper {
                    width: 100%;
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    margin-bottom: 24px;
                    background: #0d1117;
                }

                .snake-image {
                    max-height: 160px;
                    width: 100%;
                    display: block;
                    object-fit: cover;
                }

                /* --- Stats & Streak Grid --- */
                .github-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                }

                .gh-stat-box {
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    background: #0d1117;
                }

                .gh-stat-box img, 
                .github-streak img {
                    width: 100%;
                    display: block;
                }

                .github-streak {
                    border-radius: 16px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    margin-bottom: 40px; 
                    background: #0d1117;
                }

                /* --- ISOLATED GITHUB INFO ROW (No clash with Main Footer) --- */
                .gh-info-row {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 20px;
                }

                .gh-info-card {
                    background: #161b22;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    padding: 24px;
                    border-radius: 16px;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .gh-info-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(255, 255, 255, 0.15);
                    box-shadow: 0 10px 25px -10px rgba(0,0,0,0.5);
                }

                .gh-icon-box {
                    padding: 12px;
                    border-radius: 12px;
                    margin-bottom: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Colors specifically scoped */
                .green-bg { background: rgba(34, 197, 94, 0.1); }
                .purple-bg { background: rgba(139, 92, 246, 0.1); }
                .cyan-bg { background: rgba(6, 182, 212, 0.1); }
                
                .green-text { color: #22c55e; }
                .purple-text { color: #8b5cf6; }
                .cyan-text { color: #06b6d4; }

                .gh-info-icon {
                    font-size: 24px;
                }

                .gh-info-title {
                    color: #fff;
                    font-size: 1.1rem;
                    margin: 0 0 8px 0;
                    font-weight: 600;
                }

                .gh-info-desc {
                    color: #8b949e;
                    line-height: 1.6;
                    font-size: 0.9rem;
                    margin: 0;
                }

                /* --- Media Queries --- */
                @media (max-width: 900px) {
                    .github-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 600px) {
                    .github-main-card {
                        padding: 24px 20px;
                    }
                    .gh-info-row {
                        grid-template-columns: 1fr;
                    }
                }
                `}
            </style>
        </section>
    )
}