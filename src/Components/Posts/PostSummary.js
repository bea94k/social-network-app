import React from "react";
import Firebase from "firebase";

class PostSummary extends React.Component {
  /* let date = new Date(props.time * 1000);

  let formattedDate =
    date.getDate() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes(); 
    
    console.log(date);
    RETURNS CORRECT DAY, MONTH AND TIME, BUT SCREWS UP YEAR (3989) - works at least in functional component
    */

  constructor(props) {
    super(props);
    this.state = {
      username: null,
    };
  }

  componentDidMount = () => {
    console.log(this.props.postData);

    Firebase.firestore()
      .collection("users")
      .doc(this.props.postData.user)
      .get()
      .then(function (doc) {
        console.log(doc);
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      /* .then((resp) => {
        console.log(resp.data());
        this.setState({
          username: RESP.DATA OR WHATEVER GETS FIRSTNAME AND LASTNAME FROM THE DOC
        });
      }) */
      .catch((err) => {
        console.log("Error when getting username:", err);
      });
  };

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">{this.props.postData.title}</span>
          <p>By: {this.props.postData.user}</p>
          <p>{this.props.postData.content}</p>
          <p>{this.props.postData.time.toString()}</p>
        </div>
      </div>
    );
  }
}

export default PostSummary;
