import "./Form.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function Form({ selectedVideo }) {
  return (
    <section>
      <div className="form__total-comments">
        {`${selectedVideo.comments.length} comments`}
      </div>
      <div className="form">
        <div className="form__container">
          <div className="form__left">
            <div className="form__avatar-holder">
              <img className="form__avatar-img" src={avatar}></img>
            </div>
          </div>
          <div className="form__right">
            <div className="form__right-container-tablet">
              <p className="form__title">Join the conversation</p>
              <textarea
                className="form__input"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <button className="form__button">comment</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
