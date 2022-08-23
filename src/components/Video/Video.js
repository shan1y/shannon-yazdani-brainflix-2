import "./Video.scss";

function Video({ selectedVideo }) {
  return (
      <section className="video">
        <video
          className="video__frame"
          controls
          poster={selectedVideo.image}
        ></video>
      </section>
  );
}

export default Video;
