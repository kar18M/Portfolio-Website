import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Deepfake Detection System</h2>
                <br />
                <p>
                    A deep learning-based system built using PyTorch to detect
                    manipulated media with high accuracy. The project leverages
                    cutting-edge architectures including Vision Transformer (ViT)
                    and Xception models to identify deepfakes in images and
                    video frames.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Deepfake Detection System
                            architecture overview.
                        </sub>
                    </p>
                </div>
                <p>
                    The system implements a complete training and testing
                    pipeline, from data preprocessing and augmentation to model
                    training and evaluation. I experimented with multiple model
                    architectures to compare their effectiveness in detecting
                    various types of deepfake manipulations.
                </p>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <p>
                            Built using PyTorch with Vision Transformer (ViT) and
                            Xception models
                        </p>
                    </li>
                    <li>
                        <p>
                            Detects manipulated media with high accuracy
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented complete training and testing pipeline
                        </p>
                    </li>
                    <li>
                        <p>
                            Focused on real-world deepfake detection scenarios
                        </p>
                    </li>
                </ul>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/kar18M"
                        >
                            <p>
                                <b>[GitHub]</b> - Karthick's GitHub Profile
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Human vs Non-Human Classifier</h2>
                <br />
                <p>
                    An image classification model that determines whether an
                    image contains a human or not. This project involved training
                    on a custom dataset with a focus on improving accuracy and
                    performance through various optimization techniques.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={saga} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2:</b> Human vs Non-Human
                                classification model training process.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    The classifier was trained on a custom dataset with careful
                    attention to data quality and balance. I implemented data
                    augmentation strategies and fine-tuned hyperparameters to
                    achieve robust classification performance across diverse
                    image types.
                </p>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <p>
                            Classifies whether an image contains a human
                        </p>
                    </li>
                    <li>
                        <p>
                            Trained on a custom dataset
                        </p>
                    </li>
                    <li>
                        <p>
                            Focused on improving accuracy and performance
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented data augmentation and optimization
                        </p>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>Portfolio Website</h2>
                <br />
                <p>
                    This portfolio website you are currently viewing! Built with
                    a 3D interactive experience using Three.js for the outer
                    scene and a React-based OS interface for the inner site.
                    The project challenged me both technically and creatively,
                    combining 3D rendering with a retro desktop OS aesthetic.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={scroll} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> The interactive 3D portfolio
                            experience.
                        </sub>
                    </p>
                </div>
                <p>
                    The website is split into two parts: the 3D site uses
                    Three.js to render the scene and embeds the 2D OS site
                    inside of it using an iframe. The 2D OS site is a React
                    application that works as a standalone web app, giving
                    visitors an engaging retro computing experience while
                    showcasing my work.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/kar18M"
                        >
                            <p>
                                <b>[GitHub]</b> - Source Code
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
