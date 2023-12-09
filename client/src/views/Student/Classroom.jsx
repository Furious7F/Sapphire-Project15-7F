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
        {
            id: 11,
            title: 'Task Review',
            start: new Date(2023, 9, 5, 13, 0),
            end: new Date(2023, 9, 5, 15, 0),
            desc: 'Evaluate progress on tasks',
        },
        {
            id: 12,
            title: 'Team Building Workshop',
            start: new Date(2023, 9, 10, 10, 0),
            end: new Date(2023, 9, 10, 12, 0),
            desc: 'Engage in team-building activities',
        },
        {
            id: 13,
            title: 'Client Meeting',
            start: new Date(2023, 9, 15, 14, 30),
            end: new Date(2023, 9, 15, 16, 0),
            desc: 'Discuss client requirements',
        },
        {
            id: 14,
            title: 'Task Deadline',
            start: new Date(2023, 9, 20, 17, 0),
            end: new Date(2023, 9, 20, 18, 0),
            desc: 'Complete and submit tasks',
        },
        {
            id: 15,
            title: 'Project Update',
            start: new Date(2023, 9, 25, 11, 0),
            end: new Date(2023, 9, 25, 13, 0),
            desc: 'Provide updates on ongoing projects',
        },
        {
            id: 16,
            title: 'Team Lunch',
            start: new Date(2023, 9, 28, 12, 0),
            end: new Date(2023, 9, 28, 13, 0),
            desc: 'Enjoy lunch with the team',
        },
        {
            id: 17,
            title: 'Task Discussion',
            start: new Date(2023, 9, 31, 16, 0),
            end: new Date(2023, 9, 31, 18, 0),
            desc: 'Discuss upcoming tasks and challenges',
        },
        {
            id: 18,
            title: 'Task Kickoff',
            start: new Date(2023, 8, 5, 9, 0),
            end: new Date(2023, 8, 5, 11, 0),
            desc: 'Start new project tasks',
        },
        {
            id: 19,
            title: 'Team Meeting',
            start: new Date(2023, 8, 10, 15, 0),
            end: new Date(2023, 8, 10, 16, 30),
            desc: 'Discuss team priorities',
        },
        {
            id: 20,
            title: 'Task Review',
            start: new Date(2023, 8, 15, 11, 0),
            end: new Date(2023, 8, 15, 12, 30),
            desc: 'Review progress on ongoing tasks',
        },
        {
            id: 21,
            title: 'Client Call',
            start: new Date(2023, 8, 20, 14, 0),
            end: new Date(2023, 8, 20, 15, 30),
            desc: 'Discuss client feedback',
        },
        {
            id: 22,
            title: 'Task Deadline',
            start: new Date(2023, 8, 25, 16, 0),
            end: new Date(2023, 8, 25, 18, 0),
            desc: 'Complete and submit tasks',
        },
        {
            id: 23,
            title: 'Project Update',
            start: new Date(2023, 8, 30, 10, 0),
            end: new Date(2023, 8, 30, 12, 0),
            desc: 'Provide updates on ongoing projects',
        },
        {
            id: 24,
            title: 'Team Lunch',
            start: new Date(2023, 8, 31, 12, 30),
            end: new Date(2023, 8, 31, 13, 30),
            desc: 'Enjoy lunch with the team',
        },
        {
            id: 25,
            title: 'Daily Standup',
            start: new Date(2023, 8, 5, 10, 0),
            end: new Date(2023, 8, 5, 10, 30),
            desc: 'Daily team standup meeting',
        },
        {
            id: 26,
            title: 'Weekly Review',
            start: new Date(2023, 8, 10, 14, 0),
            end: new Date(2023, 8, 10, 15, 0),
            desc: 'Weekly project review meeting',
        },
        {
            id: 27,
            title: 'Bi-Weekly Planning',
            start: new Date(2023, 8, 15, 11, 0),
            end: new Date(2023, 8, 15, 12, 0),
            desc: 'Bi-weekly planning session',
        },
        {
            id: 28,
            title: 'Monthly Recap',
            start: new Date(2023, 8, 20, 15, 0),
            end: new Date(2023, 8, 20, 16, 0),
            desc: 'Monthly project recap meeting',
        },
        {
            id: 29,
            title: 'Daily Check-in',
            start: new Date(2023, 8, 25, 9, 0),
            end: new Date(2023, 8, 25, 9, 30),
            desc: 'Brief daily team check-in',
        },
        {
            id: 30,
            title: 'Monthly Planning',
            start: new Date(2023, 8, 30, 14, 0),
            end: new Date(2023, 8, 30, 15, 0),
            desc: 'Monthly project planning session',
        },
        {
            id: 31,
            title: 'Weekly Update',
            start: new Date(2023, 8, 31, 11, 0),
            end: new Date(2023, 8, 31, 12, 0),
            desc: 'Weekly project status update',
        },
        {
            id: 32,
            title: 'Task Wrap-up',
            start: new Date(2023, 11, 5, 14, 0),
            end: new Date(2023, 11, 5, 15, 30),
            desc: 'Conclude tasks and finalize details',
        },
        {
            id: 33,
            title: 'Holiday Celebration',
            start: new Date(2023, 11, 10, 18, 0),
            end: new Date(2023, 11, 10, 20, 0),
            desc: 'Celebrate the holiday season with the team',
        },
        {
            id: 34,
            title: 'Year-End Review',
            start: new Date(2023, 11, 15, 11, 0),
            end: new Date(2023, 11, 15, 12, 30),
            desc: 'Reflect on the year and discuss achievements',
        },
        {
            id: 35,
            title: 'Project Completion',
            start: new Date(2023, 11, 20, 16, 0),
            end: new Date(2023, 11, 20, 17, 30),
            desc: 'Mark the completion of ongoing projects',
        },
        {
            id: 36,
            title: 'Team Appreciation',
            start: new Date(2023, 11, 25, 12, 0),
            end: new Date(2023, 11, 25, 13, 30),
            desc: 'Express gratitude and appreciation within the team',
        },
        {
            id: 37,
            title: 'New Year Planning',
            start: new Date(2023, 11, 28, 14, 0),
            end: new Date(2023, 11, 28, 15, 30),
            desc: 'Prepare for the upcoming year and set goals',
        },
        {
            id: 38,
            title: 'Year-End Party',
            start: new Date(2023, 11, 31, 19, 0),
            end: new Date(2023, 11, 31, 22, 0),
            desc: 'Celebrate the end of the year with a party',
        },
        {
            id: 39,
            title: 'Task Assessment',
            start: new Date(2023, 10, 5, 13, 0),
            end: new Date(2023, 10, 5, 15, 0),
            desc: 'Evaluate progress on tasks',
        },
        {
            id: 40,
            title: 'Team Building Workshop',
            start: new Date(2023, 10, 10, 10, 0),
            end: new Date(2023, 10, 10, 12, 0),
            desc: 'Engage in team-building activities',
        },
        {
            id: 41,
            title: 'Client Meeting',
            start: new Date(2023, 10, 15, 14, 30),
            end: new Date(2023, 10, 15, 16, 0),
            desc: 'Discuss client requirements',
        },
        {
            id: 42,
            title: 'Task Deadline',
            start: new Date(2023, 10, 20, 17, 0),
            end: new Date(2023, 10, 20, 18, 0),
            desc: 'Complete and submit tasks',
        },
        {
            id: 43,
            title: 'Project Update',
            start: new Date(2023, 10, 25, 11, 0),
            end: new Date(2023, 10, 25, 13, 0),
            desc: 'Provide updates on ongoing projects',
        },
        {
            id: 44,
            title: 'Team Lunch',
            start: new Date(2023, 10, 28, 12, 0),
            end: new Date(2023, 10, 28, 13, 0),
            desc: 'Enjoy lunch with the team',
        },
        {
            id: 45,
            title: 'Task Discussion',
            start: new Date(2023, 10, 31, 16, 0),
            end: new Date(2023, 10, 31, 18, 0),
            desc: 'Discuss upcoming tasks and challenges',
        },
        {
            id: 46,
            title: 'Task Kickoff',
            start: new Date(2023, 7, 25, 10, 0),
            end: new Date(2023, 7, 25, 11, 0),
            desc: 'Start new project tasks',
        },
        {
            id: 47,
            title: 'Team Meeting',
            start: new Date(2023, 7, 26, 15, 0),
            end: new Date(2023, 7, 26, 16, 30),
            desc: 'Discuss team priorities',
        },
        {
            id: 48,
            title: 'Task Review',
            start: new Date(2023, 7, 27, 11, 0),
            end: new Date(2023, 7, 27, 12, 30),
            desc: 'Review progress on ongoing tasks',
        },
        {
            id: 49,
            title: 'Client Call',
            start: new Date(2023, 7, 28, 14, 0),
            end: new Date(2023, 7, 28, 15, 30),
            desc: 'Discuss client feedback',
        },
        {
            id: 50,
            title: 'Task Deadline',
            start: new Date(2023, 7, 29, 16, 0),
            end: new Date(2023, 7, 29, 18, 0),
            desc: 'Complete and submit tasks',
        },
        {
            id: 51,
            title: 'Project Update',
            start: new Date(2023, 7, 30, 10, 0),
            end: new Date(2023, 7, 30, 12, 0),
            desc: 'Provide updates on ongoing projects',
        },
        {
            id: 52,
            title: 'Team Lunch',
            start: new Date(2023, 7, 31, 12, 30),
            end: new Date(2023, 7, 31, 13, 30),
            desc: 'Enjoy lunch with the team',
        },
        {
            id: 53,
            title: 'Project Kickoff',
            start: new Date(2023, 11, 1, 9, 0),
            end: new Date(2023, 11, 1, 10, 30),
            desc: 'Initiate new project tasks',
        },
        {
            id: 54,
            title: 'Team Planning',
            start: new Date(2023, 11, 2, 14, 0),
            end: new Date(2023, 11, 2, 15, 30),
            desc: 'Discuss project planning and strategy',
        },
        {
            id: 55,
            title: 'Client Meeting',
            start: new Date(2023, 11, 3, 11, 0),
            end: new Date(2023, 11, 3, 12, 30),
            desc: 'Meeting with clients to discuss project details',
        },
        {
            id: 56,
            title: 'Task Assignment',
            start: new Date(2023, 11, 4, 15, 0),
            end: new Date(2023, 11, 4, 16, 0),
            desc: 'Assign tasks and responsibilities to the team',
        },
        {
            id: 57,
            title: 'Project Update',
            start: new Date(2023, 11, 5, 10, 0),
            end: new Date(2023, 11, 5, 12, 0),
            desc: 'Provide updates on ongoing projects',
        },
        {
            id: 58,
            title: 'Task Deadline',
            start: new Date(2023, 11, 6, 16, 0),
            end: new Date(2023, 11, 6, 18, 0),
            desc: 'Complete and submit tasks',
        },
        {
            id: 59,
            title: 'Team Lunch',
            start: new Date(2023, 11, 7, 12, 30),
            end: new Date(2023, 11, 7, 13, 30),
            desc: 'Enjoy lunch with the team',
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