import React from "react";
import Header from "../Layout/Header"
import Footer from "../Layout/Footer"
import RemoveAllContact from "./RemoveAllContact";
import AddRandomContact from "./AddRandomContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";

class ContactIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [
                {
                    id: 1,
                    name: "Diego Benitez",
                    phone: "555-555-5555",
                    email: "diegobenitez@example.com",
                    isFavorite: true,
                },
                {
                    id: 2,
                    name: "Nicol Ureña",
                    phone: "555-555-5555",
                    email: "nicolureña@example.com",
                    isFavorite: true,
                },
                {
                    id: 3,
                    name: "Milagro Marcano",
                    phone: "555-555-5555",
                    email: "milagromarcano@example.com",
                    isFavorite: false,
                }
            ],
            selectedContact: undefined,
            isUpdating: false,
        }
    }

    handleAddContact = (newContact) => {
        if(newContact.name === "") {
            return {status: "failure", msg:"Please Enter a Valid Name"}
        }
        else if(newContact.phone === "") {
            return {status: "failure", msg:"Please Enter a Valid Phone Number"}
        }

        const duplicateRecord = this.state.contactList.filter(x => {
            return (x.name === newContact.name && x.phone === newContact.phone)
        });

        if(duplicateRecord.length > 0) {
            return {status: "failure", msg:"Duplicate Record"}
        } 
        else {
            const newFinalContact = {
                ...newContact,
                id: this.state.contactList[this.state.contactList.length - 1].id + 1,
                isFavorite: false,
            };
    
            this.setState((prevState) => {
                return {
                    contactList: prevState.contactList.concat([newFinalContact]),
                };
            });

            return {status: "success", msg:"Contact was added successfully"};
        }
    }

    handleUpdateContact = (updatedContact) => {
        if(updatedContact.name === "") {
            return {status: "failure", msg:"Please Enter a Valid Name"}
        }
        else if(updatedContact.phone === "") {
            return {status: "failure", msg:"Please Enter a Valid Phone Number"}
        }

        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.map((obj) => {
                    if(obj.id === updatedContact.id) {
                        return {
                            ...obj,
                            name: updatedContact.name,
                            email: updatedContact.email,
                            phone: updatedContact.phone,
                        };
                    }

                    return obj;
                }),
                isUpdating: false,
                selectedContact: undefined,
            };
        });

        return {status: "success", msg:"Contact was updated successfully"};
    }

    handleToggleFavorite = (contactID) => {
        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.map((contact) => {
                    if(contact.id === contactID) {
                        return {...contact, isFavorite: !contact.isFavorite};
                    }

                    return contact;
                })
            }
        });
    }

    handleRemoveContact = (contactID) => {
        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.filter(u => { return u.id !== contactID})
            };
            
        })

    }

    handleAddRandomContact = (newContact) => {
        const newFinalContact = {
            ...newContact,
            id: this.state.contactList[this.state.contactList.length - 1].id + 1,
            isFavorite: false,
        };

        this.setState((prevState) => {
            return {
                contactList: prevState.contactList.concat(newFinalContact)
            };
        });
    }

    handleRemoveAllContact = () => {
        this.setState((prevState) => {
            return {
                contactList: []
            };
        });
    }

    handleToggleUpdate= (contact) => {
        this.setState((prevState) => {
            return {
                selectedContact: contact,
                isUpdating: true,
            };
        });
    }

    handleCancelUpdateContact = () => {
        this.setState((prevState) => {
            return {
                selectedContact: undefined,
                isUpdating: false,
            };
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container" style={{minHeight: "85vh"}}>
                    <div className="row py-2">
                            <div className="col-6 col-md-4 offset-md-2">
                                <AddRandomContact handleAddRandomContact={this.handleAddRandomContact}/>
                            </div>
                            <div className="col-6 col-md-4">
                                <RemoveAllContact handleRemoveAllContact={this.handleRemoveAllContact}/>
                            </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-12 col-md-8 offset-md-2 row">
                            <AddContact 
                                selectedContact={this.state.selectedContact} 
                                isUpdating={this.state.isUpdating} 
                                handleAddContact={this.handleAddContact} 
                                handleCancelUpdateContact = {this.handleCancelUpdateContact}
                                handleUpdateContact = {this.handleUpdateContact}
                            />
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-12 col-md-8 offset-md-2 row">
                            <FavoriteContacts
                                contacts = {this.state.contactList.filter(
                                    u => u.isFavorite === true)
                                }
                                removeContact={this.handleRemoveContact} 
                                favoriteClick= {this.handleToggleFavorite}
                                updateContact = {this.handleToggleUpdate}
                            />
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-12 col-md-8 offset-md-2 row">
                            <GeneralContacts
                                contacts = {this.state.contactList.filter(
                                    u => u.isFavorite === false)
                                }
                                removeContact={this.handleRemoveContact} 
                                favoriteClick= {this.handleToggleFavorite}
                                updateContact = {this.handleToggleUpdate}
                            />    
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ContactIndex;