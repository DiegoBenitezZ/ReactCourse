const MovieList = (props) => {
    return (
        <div className="text-white pb-4">
            {
                props.movieList.map((movie, index) => {
                    return (
                        <div key={index}>{movie}</div>
                    )
                })
            }
        </div>
    );
}

export default MovieList;