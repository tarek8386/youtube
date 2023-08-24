function Player(props) {
  const responsive = {
    width: "100%",
    height: "400px",
};

return (
    <div className="col-lg-8 col-md-8 border">
        <iframe
            style={responsive}
            title="player"
            className="embed-responsive-item "
            src={`https://www.youtube.com/embed/${props.playingVideoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>

        <div className="details">
            <h6>{props.title}</h6>
            <div>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
);
}
export default Player;

