import React from "react";

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: undefined,
            successMessage: undefined,
        }
    }

    handleAddContactFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.contactName.value.trim();
        const email = e.target.elements.contactEmail.value.trim();
        const phone = e.target.elements.contactPhone.value.trim();   
        const id = e.target.elements.contactId.value.trim();   
        let response = undefined;

        if(this.props.isUpdating) {
            response = this.props.handleUpdateContact({
                id: id,
                name: name, 
                email:email, 
                phone:phone
            });
        }
        else {
            response = this.props.handleAddContact({
                name: name, 
                email:email, 
                phone:phone
            });    
        }

        if(response.status === "success") {
            this.setState({ errorMessage: undefined, successMessage: response.msg })
            document.querySelector(".contact-form").reset();
        }
        else {
            this.setState({ errorMessage: response.msg, successMessage: undefined })
        }
    }
    
    render() {
        return (
            <div className="border col-12 text-white p-2">
                <form onSubmit={this.handleAddContactFormSubmit} className="contact-form row p-2">
                    <div className="col-12 text-white-50">{
                        (!this.props.isUpdating) ? "Add a new Contact" : "Update Contact"
                    }</div>
                    <input 
                        hidden
                        name="contactId" 
                        defaultValue={(this.props.isUpdating) ? this.props.selectedContact.id : ""}
                    />
                    <div className="col-12 col-md-4 p-1">
                        <input 
                            name="contactName" 
                            className="form-control form-control-sm" 
                            placeholder="Name..."
                            defaultValue={(this.props.isUpdating) ? this.props.selectedContact.name : ""}
                        />
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        <input 
                            name="contactEmail" 
                            className="form-control form-control-sm" 
                            placeholder="Email..."
                            defaultValue={(this.props.isUpdating) ? this.props.selectedContact.email : ""}
                        />
                    </div>
                    <div className="col-12 col-md-4 p-1">
                        <input 
                            name="contactPhone" 
                            className="form-control form-control-sm" 
                            placeholder="Phone..."
                            defaultValue={(this.props.isUpdating) ? this.props.selectedContact.phone : ""}
                        />
                    </div>

                    {
                        (this.state.errorMessage === undefined) ? 
                        (<div></div>) :
                        (<div className="col-12 text-center text-danger">
                            {this.state.errorMessage}
                        </div>)
                    }

                    {
                        (this.state.successMessage === undefined) ? 
                        (<div></div>) :
                        (<div className="col-12 text-center text-success">
                            {this.state.successMessage}
                        </div>)
                    }

                    <div className="col-12 row py-2">
                        <div className={(this.props.isUpdating) ? "col-6" : "col-12"}>
                            <button className="btn btn-primary btn-sm form-control">
                                {(this.props.isUpdating) ? "Update" : "Create"}
                            </button>
                        </div>             
                        {
                            (!this.props.isUpdating) ? <div></div> : 
                            <div className="col-6">
                                <button className="btn btn-secondary btn-sm form-control" onClick={() => this.props.handleCancelUpdateContact()}>
                                    Cancel
                                </button>
                            </div>
                        }
                    </div>
                </form>
            </div>
        );
    }
};

export default AddContact;