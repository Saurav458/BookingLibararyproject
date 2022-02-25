import React, { Component } from "react";
import axios from "axios";
class Search extends Component {
  
  render() {
    return (
      <>
      <div className="parent-div">
        {this.props.anyBook.map((curElem) => {
          const { imgUrl, _id, title, description } = curElem;
          return (
            <div className="cart-items" key={curElem._id}>
              <h2 className="heading">{title}</h2>
              <p className="para">{description}</p>
              <img src="./images/header2.png" className="img" />
              <button type="button" className="newBtn">
                Borrow Book
              </button>
              <a href="/" alt="" className="anchor">
                View details
              </a>
            </div>
          );
        })}
        </div>
      </>
    );
  }
}
export default Search;
