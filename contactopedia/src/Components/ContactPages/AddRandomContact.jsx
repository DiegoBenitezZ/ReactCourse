import { getRandomUser } from "../../Utility/api";

const getRandomContact = async (props) => {
    const responseFromAPI = await getRandomUser();

    props.handleAddRandomContact({
        name: `${responseFromAPI.data.first_name} ${responseFromAPI.data.last_name}`,
        email: responseFromAPI.data.email,
        phone: responseFromAPI.data.phone_number,
    });
};

const AddRandomContact = (props) => {
    return (
        <button className="btn btn-success form-control" onClick={() => getRandomContact(props)}>
            Add Random Contact
        </button>
    );
};

export default AddRandomContact;