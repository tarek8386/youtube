function Sidebarvideos(props) {
    const imgStyle = {
        height: "80px",
        width: "100px",
    };
    return (
        <div onClick={(e) => props.selectPlayingVideo(props.videoId)}>
            <label className="border">
                <img src={props.imgUrl} style={imgStyle} alt="..." />
                <strong>{props.title}</strong>
                <p>{props.channelTitle}</p>
            </label>
        </div>
    );
}
export default Sidebarvideos;