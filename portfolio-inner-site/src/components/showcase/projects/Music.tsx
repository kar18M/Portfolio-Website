import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
import edge from '../../../assets/audio/edge_unmastered.mp3';
// @ts-ignore
import dnb from '../../../assets/audio/break.mp3';
// @ts-ignore
import dnbDrums from '../../../assets/audio/dnb_drop_drums.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import dnbDrumsProject from '../../../assets/pictures/projects/audio/dnbDrumsProject.png';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Music & Sound</h1>
            <h3>Ventures</h3>
            <br />
            <div className="text-block">
                <p>
                    Music has been a passion of mine for my whole life. Here are
                    some tracks I enjoy. These audio samples are part of the
                    original template and showcase the interactive music player
                    component.
                </p>
                <br />
                <p>
                    Feel free to listen to these sample tracks while exploring
                    the rest of the portfolio!
                </p>
            </div>
            <h2>Exploring house</h2>
            <br />
            <p>
                A house track showcasing the interactive music player built into
                this portfolio site.
            </p>
            <br />

            <MusicPlayer
                src={house}
                title="Timeless"
                subtitle="Sample Track - 2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> A screenshot of the project file of
                        Timeless. 64 tracks in total.
                    </sub>
                </p>
            </div>
            <p>
                This track demonstrates the rich audio experience possible
                within a web portfolio, with a happy upbeat energy in the intro
                and first drop, transitioning into a euphoric bridge.
            </p>
            <br />
            <h2>Mid-Tempo?</h2>
            <br />
            <p>
                A mid-tempo track with experimental sound design and dark
                atmospherics.
            </p>
            <br />
            <MusicPlayer
                src={edge}
                title="Edge [W.I.P.]"
                subtitle="Sample Track - 2021"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <h2>Drum & Bass</h2>
            <br />
            <p>
                A DnB track featuring powerful basslines and intricate drum
                patterns.
            </p>
            <br />
            <MusicPlayer
                src={dnb}
                title="Break [Demo]"
                subtitle="Sample Track - 2019/2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                Below are the isolated drums and sub bass from the track above.
            </p>
            <br />
            <MusicPlayer
                src={dnbDrums}
                title="Break [Drums and Sub]"
                subtitle="Sample Track - 2019/2022"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <div className="captioned-image">
                <img src={dnbDrumsProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 2:</b> Drums and sub for the track Break. See
                        if you can follow along in the image as the audio above
                        plays!
                    </sub>
                </p>
            </div>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
