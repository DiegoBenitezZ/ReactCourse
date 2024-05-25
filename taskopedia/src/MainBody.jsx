import Student from './components/Student/Student.jsx'
import StudentReview from './components/Student/StudentReview.jsx'
import React from 'react'

class MainBody extends React.Component{
    render() {
        const whatWeWillLearn  = "React Js"
        const lectureCount = 3; 

        return(
            <div style={{minHeight: "70vh"}}>
                <p>In this course, we will learn {whatWeWillLearn} by building TaskOPedia</p>
                <p>Total Lecture - {lectureCount}</p>
                <ul>
                    <li>Basic Foundation</li>
                    <li>Functional and Class Components</li>
                </ul>
    
                <div className='container row'>Students Enrolled</div>
                <Student experience="2" fullName="Diego Benitez" headShot="https://api.lorem.space/image/face?w=150&h=151">
                    <StudentReview/>
                </Student>
                <Student experience="1" fullName="Nicol Ureña" headShot="https://api.lorem.space/image/face?w=150&h=152">
                    <StudentReview />
                </Student>
                <Student experience="0" fullName="Milagro Marcano" headShot="https://api.lorem.space/image/face?w=150&h=153"/>
            </div>
        );
    }
}


export default MainBody;