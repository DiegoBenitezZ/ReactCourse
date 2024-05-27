import { useState } from "react";

const AddMovie = (props) => {
    const [movieState, setMovieState] = useState("");
    const [errorState, seterrorState] = useState(() => {
        return {isSuccessed: false, msg: undefined};
    })


    const handleFormSubmit = (e, props) => {
        e.preventDefault();
        if(movieState === "") {
            seterrorState((prevState) => {
                return {
                    isSuccessed: false,
                    msg: "Movie name field don't be empty",
                };
            });
        }
        else {
            props.addMovie(movieState);
            setMovieState("");
            e.target.reset();

            seterrorState((prevState) => {
                return {
                    isSuccessed: true,
                    msg: "The movie was added to the list",
                };
            });
        }
    }

    return (
        <form onSubmit={(e) => handleFormSubmit(e, props)}>
            <div className="row text-white">
                <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
                <div className="col-8 offset-1">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Movie Name..."
                        defaultValue={movieState}
                        onChange={(e) => setMovieState(e.target.value)}
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-success form-control">Add</button>
                </div>
                {
                    (errorState) ?
                    (<div className={`col-12 text-center pt-2 ${(errorState.isSuccessed) ? "text-success" : "text-danger"}`}>{errorState.msg}</div>) :
                    (<div></div>)
                }
                <hr className="mt-3"/>
            </div>
        </form>
    )
}

export default AddMovie;