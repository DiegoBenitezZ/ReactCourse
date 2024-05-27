import React from "react";
import { getRandomUser } from "../utility/api";
import Instructor from "./Instructor"

class CyclOPediaClassPage extends React.Component {
    constructor(props) {
        super(props);
        this.localstate = JSON.parse(localStorage.getItem("cyclopediaState"));

        this.state = this.localstate || {
            instructor: undefined,
            studentList: [],
            studentCount: 0,
            hideInstructor: false,
            inputName: "",
            inputFeedback: "",
        }
    }

    componentDidMount = async () => {
        console.log("Component Did Mount");
        

        if(!this.localstate) {
            const response = await getRandomUser();
            console.log("Response: ", response);

            this.setState((prevState) => {
                return {
                    instructor: {
                        name: response.data.first_name + " " + response.data.last_name,
                        email: response.data.email,
                        phone: response.data.phone_number,
                    }
                };
            });
        }
    }

    componentDidUpdate = async (previousProps, previousState) => {
        console.log("Component Did Update");
        localStorage.setItem("cyclopediaState", JSON.stringify(this.state));

        if(previousState.studentCount < this.state.studentCount) {
            const response = await getRandomUser();

            this.setState((prevState) => {
                return {  
                    studentList: [
                        ...prevState.studentList,
                        {
                            name: response.data.first_name + " " + response.data.last_name
                        }
                    ]
                }
            })
        }
        else if (previousState.studentCount > this.state.studentCount) {
            this.setState((prevState) => {
                return {  
                    studentList: []
                }
            })
        }
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    handleAddStudent = async () => {


        this.setState((prevState) => {
            return {
                studentCount: prevState.studentList.length + 1,
            }
        })
    }

    handleRemoveAllStudent = () => {
        this.setState((prevState) => {
            return {
                studentCount: 0,
            }
        })
    }

    handleToggleHideInstructor = () => {
        this.setState((prevState) => {
            return {
                hideInstructor: !prevState.hideInstructor,
            };
        });
    }

    render() {
        console.log("Render Component");
        return (
            <div>
                <div className="p-3">
                    <span className="h4 text-success me-2">Instructor</span>
                    <i className={`bi ${(this.state.hideInstructor) ? "bi-toggle-off" : "bi-toggle-on"} btn btn-success btn-sm`} onClick={() => {this.handleToggleHideInstructor()}}/>
                    <br/>
                    {
                        (this.state.instructor && !this.state.hideInstructor) ? (<Instructor instructor={this.state.instructor}/>) : ""
                    }
                </div>
                <div className="p-3">
                    <span className="h4 text-success">Feedback</span>
                    <br/>
                    <input
                        type="text"
                        value={this.state.inputName}
                        placeholder="Name..."
                        onChange={(e) => {
                            this.setState((prevState) => { return { inputName: e.target.value }})
                        }}
                    ></input>
                    <span>Value: {this.state.inputName}</span>
                    <br/>
                    <textarea 
                        placeholder="Feedback..."
                        value={this.state.inputFeedback}
                        onChange={(e) => {
                            this.setState((prevState) => { return { inputFeedback: e.target.value } })
                        }}
                        ></textarea>
                    <span>Value: {this.state.inputFeedback}</span>
                </div>
                <div className="p-3">
                    <span className="h4 text-success">Students</span><br/>
                    <div>Student Count: {this.state.studentCount}</div>
                    <button className="btn btn-success btn-sm me-2" onClick={this.handleAddStudent}>Add Student</button>
                    <button className="btn btn-danger btn-sm" onClick={this.handleRemoveAllStudent}>Remove All Students</button>
                    {
                        this.state.studentList.map((student, index) => {
                            return (
                                <div className="text-white" key={index}>- {student.name}</div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default CyclOPediaClassPage