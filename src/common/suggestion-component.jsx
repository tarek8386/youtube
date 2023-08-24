import React from "react";
import Sidebarvideos from "./sidebar-component";
function Suggestion(props) {
    const videos = props.videos;
    return ( 
        <div className="col-lg-4 col-md-4 mt-3 mt-lg-0">
                <h2>Suggested Videos</h2>
                <div class="list-group">
                {videos.map((video, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Sidebarvideos
                                key={index}
                                videoId={video.id.videoId}
                                imgUrl={video.snippet.thumbnails.high.url}
                                title={video.snippet.title}
                                description={video.snippet.description}
                                channelTitle={video.snippet.channelTitle}
                                selectPlayingVideo={props.selectPlayingVideo}
                            />
                            <br></br>
                        </React.Fragment>
                    );
                })}
            </div>
            </div>
     );
}

export default Suggestion;