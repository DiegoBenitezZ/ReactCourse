const RemoveAllContact = (props) => {
    return (
        <button className="btn btn-danger form-control" onClick={() => props.handleRemoveAllContact()}>
            Remove All
        </button>
    );
};

export default RemoveAllContact;