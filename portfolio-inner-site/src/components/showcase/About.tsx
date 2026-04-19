import React from 'react';

import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Karthick M</h3>
            <br />
            <div className="text-block">
                <p>
                    Hi, I'm an aspiring AI and Software Developer with a strong
                    interest in building intelligent and scalable applications.
                    I'm passionate about turning data into smart solutions and
                    building intelligent systems with code and curiosity.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:km606462@gmail.com">
                        km606462@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    I have a solid foundation in Python and Java, and I enjoy
                    solving challenging problems using Data Structures and
                    Algorithms. I actively practice coding on platforms like
                    LeetCode and HackerRank to improve my logical thinking
                    and coding efficiency.
                </p>
                <br />


                <p>
                    I have worked on projects such as a Deepfake Detection
                    System using PyTorch with Vision Transformer (ViT) and
                    Xception models, and an Image Classification Model to
                    detect whether an image contains a human or not. Through
                    these projects, I've gained hands-on experience in machine
                    learning, model training, and real-world problem solving.
                </p>
                <br />
                <p>
                    Currently, I am strengthening my DSA skills, learning
                    backend development, and exploring more advanced concepts
                    in AI and neural networks. I started with Python, moved
                    to Java, and now I'm focusing on DSA + AI + Backend
                    development.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Skills</h3>
                        <br />
                        <p>
                            Beyond my core programming skills in Python and
                            Java, I have experience with PyTorch, Deep Learning
                            architectures like ViT and Xception, Image
                            Classification, and Model Training & Evaluation.
                            I'm also familiar with basic Web Development,
                            Git & GitHub, and core concepts like Data Structures
                            & Algorithms, Problem Solving, Recursion, Arrays,
                            Strings, and Searching algorithms.
                        </p>
                        <br />
                        <p>
                            My goals include becoming a strong Software
                            Engineer / AI Engineer, mastering Data Structures
                            & Algorithms, building impactful real-world AI
                            applications, and contributing to open-source
                            projects.
                        </p>
                    </div>

                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on LinkedIn{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/m-karthick-072989379/"
                    >
                        Karthick M
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:km606462@gmail.com">
                        km606462@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default About;
