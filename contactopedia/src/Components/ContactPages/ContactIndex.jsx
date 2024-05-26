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
            ]
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container" style={{minHeight: "85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2">
                            <AddRandomContact/>
                        </div>
                        <div className="col-4">
                            <RemoveAllContact/>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact/>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavoriteContacts 
                                    contacts = {this.state.contactList.filter(
                                        u => u.isFavorite === true)
                                    }
                            />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContacts
                                    contacts = {this.state.contactList.filter(
                                        u => u.isFavorite === false)
                                    }
                                />    
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ContactIndex;