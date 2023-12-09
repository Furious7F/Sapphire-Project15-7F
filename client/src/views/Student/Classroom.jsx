import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getStudentClassroom } from '../../Utils/requests';
import { getClassroom } from '../../Utils/requests';
import { getStudentName } from '../../Utils/requests';
import './Student.less';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function Classroom() {
    const [learningStandard, setLessonModule] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getStudentClassroom();
                if (res.data) {
                    console.log(res.data)
                    if (res.data.lesson_module) {
                        setLessonModule(res.data.lesson_module);
                    }
                } else {
                    message.error(res.err);
                }
            } catch {}
        };
        fetchData();
    }, []);

    const events = [
        {
            id: 1,
            title: 'Meeting with Team',
            start: new Date(2023, 10, 10, 10, 0),
            end: new Date(2023, 10, 10, 12, 0),
            desc: 'Discuss project updates',
        },
        {
            id: 2,
            title: 'Client Presentation',
            start: new Date(2023, 10, 15, 14, 30),
            end: new Date(2023, 10, 15, 16, 0),
            desc: 'Present new features to the client',
        },
        {
            id: 3,
            title: 'Lunch Break',
            start: new Date(2023, 10, 20, 12, 0),
            end: new Date(2023, 10, 20, 13, 0),
            desc: 'Enjoy a break and grab lunch',
        },
        {
            id: 4,
            title: 'Team Workshop',
            start: new Date(2023, 11, 1, 9, 0),
            end: new Date(2023, 11, 1, 12, 0),
            desc: 'Collaborative workshop with the team',
        },
        {
            id: 5,
            title: 'Project Deadline',
            start: new Date(2023, 11, 8, 23, 0),
            end: new Date(2023, 11, 7, 17, 0),
            desc: 'Submit project deliverables',
        },
        {
            id: 6,
            title: 'Team Building Event',
            start: new Date(2023, 11, 12, 14, 0),
            end: new Date(2023, 11, 12, 17, 0),
            desc: 'Team-building activities',
        },
        {
            id: 7,
            title: 'Conference Call',
            start: new Date(2023, 11, 18, 11, 30),
            end: new Date(2023, 11, 18, 13, 0),
            desc: 'Discuss project status with clients',
        },
        {
            id: 8,
            title: 'Holiday Party',
            start: new Date(2023, 11, 22, 18, 0),
            end: new Date(2023, 11, 22, 22, 0),
            desc: 'Celebrate the holiday season',
        },
        {
            id: 9,
            title: 'Workshop on New Technologies',
            start: new Date(2023, 11, 28, 13, 0),
            end: new Date(2023, 11, 28, 15, 0),
            desc: 'Learn about the latest technologies',
        },
        {
            id: 10,
            title: 'Monthly Review Meeting',
            start: new Date(2023, 11, 31, 9, 0),
            end: new Date(2023, 11, 31, 11, 0),
            desc: 'Review accomplishments and plan for the next month',
        },
    ];

    return (
        <div className='container nav-padding'>
            <NavBar />

            <div id='activity-container' className='flex-container'>
                <div className='box'>
                    <h2>Grades</h2>
                    <div className='list-box'>
                        <div className='list-item'>A: Programming Assignment 1</div>
                        <div className='list-item'>C: Programming Assignment 2</div>
                        <div className='list-item'>B: Project 1</div>
                        <div className='list-item'>B: Programming Assignment 3</div>
                        <div className='list-item'>A: Project 2</div>
                        <div className='list-item'>B: Final Exam</div>
                    </div>
                </div>
                <div className='box' style={{ width: '85%' }}>
                    <Calendar
                        localizer={momentLocalizer(moment)}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                    />
                </div>
                <div className='box'>
                    <h2>Classmates</h2>
                    <div className='list-box'>
                        <div className='list-item'>Ron W.</div>
                        <div className='list-item'>Hermione G.</div>
                        <div className='list-item'>Draco M.</div>
                        <div className='list-item'>Vincent C.</div>
                        <div className='list-item'>Gregory G.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}