import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getStudentName, getStudentClassroom, getProjects, removeProjectFromStudent } from '../../Utils/requests';
import './Student.less';

export default function Dashboard(){
    const [learningStandard, setLessonModule] = useState([]);
    const [currentStudent, setCurrentStudent] = useState([]);
    const [currentStudentData, setCurrentStudentData] = useState([]);
    const [currentProj, setCurrentProj] = useState({});
    const [students, setProjStudents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [projects, setProjects] = useState([]);
    const [projectButtons, setProjectButtons] = useState([]);
    const navigate = useNavigate();

    //GETs currently logged in student name
    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await getStudentName();
            if (res.data) {
            if (res.data.students) {
                setCurrentStudentData(res.data.students[0]);
                setCurrentStudent(res.data.students[0].name);
            }
            } else {
            message.error(res.err);
            }
        } catch {}
        };
        fetchData();
    }, []);

    //GETs student classroom
    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await getStudentClassroom();
            if (res.data) {
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

    //GETs all the projects
    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await getProjects();
            if (res.data) {
                setProjects(res.data);
            } else {
            message.error(res.err);
            }
        } catch {}
        };
        fetchData();
    }, []);

    const handleRemoveProj = (item) => {
        setCurrentProj(item);
        setShowModal(true);
        console.log("REMOVE: " + currentProj.name + " modal: " + showModal);
        refreshProjects();
    };
    const handleCloseModal = (confirmed) => {
        setShowModal(false);
        if (confirmed) {
            let projectList = projects;
            setProjects(projectList => projectList.filter(project => project.id !== currentProj.id));
        }
        console.log("modal: " + showModal);
        refreshProjects();
    };

    const handleRefresh = () => {
        refreshProjects();
    };

    //Refreshes the projects
    
    function refreshProjects() {
        const newButtons = projects
            .filter(project => project.student !== null && project.student.name === currentStudent)
            .map((project, index) => {
                const item = project.Name;
                const abbv = extractUppercaseLetters(item);
                
                const handleButtonClick = () => {
                    window.location.href = project.URL;
                };
    
                const handleRemoveButtonClick = (event) => {
                    event.stopPropagation();
                    console.log('Remove button clicked for:', item);
                    handleRemoveProj(item);
                    setCurrentProj(project);
                };
    
                return (
                    <div key={index} onClick={handleButtonClick}>
                        <div id='BE'>
                            <div>
                                <button class='removeButton' id='removeButton' onClick={handleRemoveButtonClick}>
                                    <img src="../../src/assets/bin.png" width="24" height="24" />
                                </button>
                            </div>
                            <div id='buttonElement1'>{abbv}</div>
                            <div id='buttonElement2'>{item}</div>
                        </div>
                    </div>
                );
            });
    
        setProjectButtons(newButtons);
    }
    

    //EZ Abbreviation
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
            {showModal &&
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <p>Are you sure you want to remove {currentProj.name}?</p>
                    <div id="projBut">
                        <button id="yesButton" onClick={() => handleCloseModal(true)}>Yes</button>
                        <button id="noButton" onClick={() => handleCloseModal(false)}>No</button>
                    </div>
                </div>
            </div>}
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
                <button id="refButton" onClick={() => handleCloseModal(true)}>Refresh</button>
                <div id='projList'>
                    {projectButtons.map((button, index) => (
                        <div key={index} id='newButton'>{button}</div>
                    ))}
                </div>
            </div>
        </div>
        );
}