import "./Form.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from 'react-dom';

class Form extends React.Component {

selectedVideo = this.props.selectedVideo

componentDidUpdate() {
  let submitForm = document.querySelector(".form")
 let foundForm = ReactDOM.findDOMNode(submitForm);
 foundForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  console.log(e.target.form__input.value)

  let comment = {
    name:"Mohan Minaj",
    comment:e.target.form__input.value,
    likes:0,
    timestamp:Date.now()
  }
 })
  


}

render() {
  return (
    <section>
      <div className="form__total-comments">
        {`${this.props.selectedVideo.comments.length} comments`}
      </div>
      <form className="form">
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
                name="form__input"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <button type="submit" className="form__button">comment</button>
          </div>
        </div>
      </form>
    </section>
  );
}}

export default Form;
