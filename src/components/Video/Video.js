import "./Video.scss";

function Video({ selectedVideo }) {
  return (
    <div>
      <section className="video">
        <video
          className="video__frame"
          controls
          poster={selectedVideo.image}
        ></video>
      </section>
    </div>
  );
}

export default Video;
