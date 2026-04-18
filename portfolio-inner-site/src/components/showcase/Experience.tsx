import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>AI & ML Projects</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>AI / Deep Learning Developer</h3>
                        <b>
                            <p>2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Hands-on experience building AI and deep learning projects
                    using PyTorch and modern neural network architectures.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Built a Deepfake Detection System using PyTorch with
                            Vision Transformer (ViT) and Xception models to
                            detect manipulated media with high accuracy.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed a Human vs Non-Human Image Classifier
                            trained on a custom dataset, focused on improving
                            accuracy and performance.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented complete training and testing pipelines
                            including data preprocessing, augmentation, model
                            training, and evaluation.
                        </p>
                    </li>
                    <li>
                        <p>
                            Gained practical experience with deep learning
                            architectures, transfer learning, and model
                            optimization techniques.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>DSA & Problem Solving</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Competitive Programming</h3>
                        <b>
                            <p>Ongoing</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Actively practicing Data Structures and Algorithms on
                    competitive programming platforms to strengthen problem
                    solving skills.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Solved numerous problems on{' '}
                            <a
                                href="https://leetcode.com/u/M_karthick_18/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LeetCode
                            </a>{' '}
                            covering arrays, strings, searching, recursion, and
                            more.
                        </p>
                    </li>
                    <li>
                        <p>
                            Practiced coding challenges on HackerRank to improve
                            logical thinking and coding efficiency.
                        </p>
                    </li>
                    <li>
                        <p>
                            Strong foundation in core DSA concepts including
                            arrays, strings, searching algorithms, recursion,
                            and problem solving patterns.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Skills & Technologies</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Technical Proficiencies</h3>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <br />
                <h3 style={styles.indent}>Programming Languages:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Python</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Java</p>
                    </li>
                </ul>
                <br />
                <h3 style={styles.indent}>AI / Machine Learning:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• PyTorch</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Deep Learning (ViT, Xception)</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Image Classification</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Model Training & Evaluation</p>
                    </li>
                </ul>
                <br />
                <h3 style={styles.indent}>Development:</h3>
                <ul>
                    <li style={styles.row}>
                        <p>• Basic Web Development</p>
                    </li>
                    <li style={styles.row}>
                        <p>• Git & GitHub</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
