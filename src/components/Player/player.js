import React from 'react';
import Slider from 'rc-slider';

import { Container,Current, Volume, Progress, Controls, ProgressSlider, Time } from './styles';
import VolumeIcon from '../../Assets/images/volume.svg'
import ShuffleIcon from '../../Assets/images/shuffle.svg'
import BackwardIcon from '../../Assets/images/backward.svg'
import PlayIcon from '../../Assets/images/play.svg'
import PauseIcon from '../../Assets/images/pause.svg'
import ForwardIcon from '../../Assets/images/forward.svg'
import RepeatIcon from '../../Assets/images/repeat.svg'


const player = () => (
    <Container>
        <Current>
            <img src="https://i.ytimg.com/vi/72VZs9SDXHo/hqdefault.jpg" alt="cover"/>
            <div>
                <span>Segurança</span>
                <small>Engenheiros do Hawaii</small>
            </div>
        </Current>

        <Progress>
            <Controls>
                <button>
                    <img src={ShuffleIcon} alt="shuffle"/>
                </button>
                <button>
                    <img src={BackwardIcon} alt="previous"/>
                </button>
                <button>
                    <img src={PlayIcon} alt="play"/>
                </button>
                <button>
                    <img src={PauseIcon} alt="pause"/>
                </button>
                <button>
                    <img src={ForwardIcon} alt="next"/>
                </button>
                <button>
                    <img src={RepeatIcon} alt="repeat"/>
                </button>
            </Controls>
            <Time>
                <span>1:39</span>
                <ProgressSlider>
                    <Slider
                        railStyle={{background: "#404040", borderRadius: 10}}
                        trackStyle={{background: "#1ED760"}}
                        handleStyle={{border: 0}}
                    />
                </ProgressSlider>
                <span>4:29</span>
            </Time>
        </Progress>
        <Volume>
            <img src={VolumeIcon} alt="volume"/>
            <Slider 
                railStyle={{background: "#404040", borderRadius: 10}}
                trackStyle={{background: "#FFF"}}
                handlerStyle={{display: 'none'}}
                value={100}
                />
        </Volume>
    </Container>
);

export default player;
