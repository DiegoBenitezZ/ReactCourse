import Contact from "./Contact";

const GeneralContacts = (props) => {
    return (
        <div className="col-12 py-2" style={{ borderRadius: "10px", backgroundColor: "#323637"}}>
            <div className="text-center text-white-50">Other Contacts</div>
            <div className="p-2">
                {
                    props.contacts.map((contact, index) => (
                        <Contact 
                            updateContact={props.updateContact} 
                            removeContact={props.removeContact} 
                            favoriteClick={props.favoriteClick} 
                            contact={contact} 
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default GeneralContacts;