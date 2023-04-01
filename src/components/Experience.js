import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
    return (
        <div className='timeline text-white bg-gray-700' id='experience'>
            <VerticalTimeline lineColor='black'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2013.09-2017.06"
                    iconStyle={{ background: "black", color: "white" }}
                    icon={<SchoolIcon></SchoolIcon>}
                >
                    <h3 className='vertical-timeline-element-title text-black'>
                        National Taipei University, New Taipei City
                    </h3>
                    <p className='text-black'>Bachelor Degree</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2017.09-2018.04"
                    iconStyle={{ background: "black", color: "white" }}
                    icon={<SchoolIcon></SchoolIcon>}
                >
                    <h3 className='vertical-timeline-element-title text-black'>
                        National Normal University, Taipei City
                    </h3>
                    <p className='text-black'>Master Degree (Unfinshed)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2019.04-2020.08"
                    iconStyle={{ background: "black", color: "white" }}
                    icon={<SchoolIcon></SchoolIcon>}
                >
                    <h3 className='vertical-timeline-element-title text-black'>
                        Aso College, Hakata, Japan
                    </h3>
                    <p className='text-black'>Bachelor Degree (Unfinshed)</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2020.12-2021.08"
                    iconStyle={{ background: "black", color: "white" }}
                    icon={<WorkIcon></WorkIcon>}
                >
                    <h3 className='vertical-timeline-element-title text-black'>
                        National Cheng Kung University,EE Department, Tainan
                    </h3>
                    <p className='text-black'>Research Assitant</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2021.09-present"
                    iconStyle={{ background: "black", color: "white" }}
                    icon={<WorkIcon></WorkIcon>}
                >
                    <h3 className='vertical-timeline-element-title text-black'>
                        Taiwan Obayashi Group, Taipei
                    </h3>
                    <p className='text-black'>Coordinator</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div >
    );
}

export default Experience;