import "./NextVideos.scss";
import { Link } from "react-router-dom";

function NextVideos({ videosList, selectChosenVideo }) {
  return (
    <div className="videos__section">
      <h2 className="videos__title">Next Videos</h2>
      <ul className="videos">
        {videosList.map((video) => {
          return (
            <Link
              to={`/videos/${video.id}`}
              key={video.id}
              className="videos-list__container"
            >
              <img
                className="videos-list__img"
                src={video.image}
                alt="selected image"
              />

              <div className="videos-list__right">
                <p className="videos-list__item">{video.title}</p>
                <p className="videos-list__channel">{video.channel}</p>
              </div>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default NextVideos;
