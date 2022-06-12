import "./VideoInfo.scss";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";

function VideoInfo({ selectedVideo }) {
  return (
    <section className="video-info__section">
      <div className="video-info" key={selectedVideo.id}>
        <h1 className="video-info__title">{selectedVideo.title}</h1>
        <ul className="vid-list">
          <li className="vid-list__item">{selectedVideo.channel}</li>
          <li className="vid-list__item">
            <div className="vid-list__container">
              <img
                className="vid-list__icon"
                src={views}
                alt={selectedVideo.title}
              ></img>
            </div>
            <span className="vid-list__counter">{selectedVideo.views}</span>
          </li>
          <li className="vid-list__item">
            {new Date(selectedVideo.timestamp).toLocaleDateString()}
          </li>
          <li className="vid-list__item">
            <div className="vid-list__container">
              <img className="vid-list__icon" src={likes} alt=""></img>
            </div>
            <span className="vid-list__counter">{selectedVideo.likes}</span>
          </li>
        </ul>
        <p className="video-info__description">{selectedVideo.description}</p>
      </div>
    </section>
  );
}

export default VideoInfo;
