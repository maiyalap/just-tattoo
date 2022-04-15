
import "./TattooPost.css";

function TattooPost(props){
    const { tattoo ,onBgClick } = props;
    return(
        <div className="tattoo-post">
            <div className="tattoo-bg" onClick={onBgClick} />
            <div className="tattoo-content">
                <img src={tattoo.thumbnailUrl} />
                <h4> {tattoo.title} </h4>
            </div>
        </div>
    );
}


export default TattooPost;