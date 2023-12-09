import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getStudentName, getStudentClassroom, getProjects } from '../../Utils/requests';
import './Student.less';

export default function Dashboard(){
    const [learningStandard, setLessonModule] = useState({});
    const [currentStudent, setCurrentStudent] = useState({});
    const [projects, setProjects] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await getStudentName();
            if (res.data) {
            if (res.data.students) {
                //console.log(JSON.stringify(res.data.students[0]));
                setCurrentStudent(res.data.students[0].name);
            }
            } else {
            message.error(res.err);
            }
        } catch {}
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await getStudentClassroom();
            if (res.data) {
                //console.log(JSON.stringify(res.data.lesson_module.name));
                if (res.data.lesson_module)
                {
                    setLessonModule(res.data.lesson_module);
                }
            } else {
            message.error(res.err);
            }
        } catch {}
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await getProjects();
            if (res.data) {
                //console.log(JSON.stringify(res.data));
                if (res.data) {
                    setProjects(res.data);
                }
            } else {
            message.error(res.err);
            }
        } catch {}
        };
        fetchData();
    }, []);

    /*
    const projectList = [];
    const projectTemp = projects;
    for (let i = 0; i < projectTemp.length; i++) {
        console.log(i);
        //console.log(projects[i]);
        console.log(projects[i].student != null);
        console.log(typeof projects[i].student);
        if (projects[i].student != null)
        {
            /*
            for (let j = 0; i < len; j++) {
                //console.log(JSON.stringify(len));
                if (projects[i].student[j] === currentStudent)
                {
                    projectList.push(projects[i]);
                    //console.log(JSON.stringify(projects[i].student[j]));
                    break;
                }
            } */

    const projectList = projects;
    const projectButtons = document.getElementById('projList');
    for (let i = 0; i < projectList.length; i++) {
        const item = projects[i].Name;
        const btn = document.createElement('button');
        btn.id = item.replace(' ', '');
        //btn.innerText = item;
        if (projectButtons.childElementCount < projectList.length-1)
        {
            var abbv = extractUppercaseLetters(item);
            btn.innerHTML = `<div id='BE'><div id='buttonElement1'>${abbv}</div><div id='buttonElement2'>${item}</div></div>`;
            btn.addEventListener("click", function() {
                window.location.href = projects[i].URL;
            })
            if (projects[i].student != null)
            {
                if (projects[i].student.name === currentStudent)
                {
                    projectButtons.appendChild(btn);
                }
            }
        }
    }

    function extractUppercaseLetters(inputString) {
        let uppercaseLetters = '';
        for (let i = 0; i < inputString.length; i++) {
          const char = inputString.charAt(i);
          if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            uppercaseLetters += char;
          }
        }
        return uppercaseLetters;
      }
    
    const handleLessonButton = () => {
        navigate('/studentLessons')
      };
    

    return(
        <div id="totalPage" className='container nav-padding'>
            <NavBar />
            <div id='activity-container'>
                <div id='header'>
                    <div>Dashboard</div>
                </div>
                <h1 id="studentNameHeader">Welcome {typeof currentStudent === 'string' ? JSON.stringify(currentStudent).slice(1, -1) : ''} !</h1>
                <div>
                    <h2 id="lessonModuleHeader">My Lesson Modules</h2>
                    <div id="containerDashboard">
                        <div className="dashboard-box" onClick={handleLessonButton}>
                            <div id="lessonName">
                            {typeof learningStandard.name === 'string' ? JSON.stringify(learningStandard.name).slice(1, -1) : ''}
                            </div>
                            <div id="lessonDisc">
                            {typeof learningStandard.expectations === 'string' ? JSON.stringify(learningStandard.expectations).slice(1, -1) : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <h2 id="programHeader">My Projects</h2>
                <div id="projList"></div>
            </div>
        </div>
        );
}