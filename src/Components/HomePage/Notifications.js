import React from "react";
import {
  subscribeToChanges,
  clearNotificationsInState,
  removeNotificationFromState,
} from "../../store/actions/postActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

class Notifications extends React.Component {
  componentDidMount = () => {
    this.props.subscribeToChanges();
  };

  componentWillUnmount = () => {
    this.props.clearNotifications();
  };

  render() {
    return (
      <div className="col s12 m4 green">
        {this.props.notifications.map((notification) => {
          if (
            notification.authorLastname === this.props.user.lastname &&
            notification.authorFirstname === this.props.user.firstname
          ) {
            return null;
          } else {
            return (
              <div className="card" key={notification.date.seconds}>
                <button
                  className="btn orange"
                  onClick={() =>
                    this.props.removeNotification(notification.postID)
                  }
                >
                  X Close
                </button>
                <Link to={"/post/" + notification.postID}>
                  <button className="btn green">See the post</button>
                </Link>
                <p>{notification.authorFirstname} has added a new post.</p>
                <p className="ellipsis-for-long-texts">{notification.title}</p>
                <p>
                  {moment
                    .unix(notification.date.seconds)
                    .format("Do MMM YYYY, h:mm a")}
                </p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.posts.notifications,
    user: state.auth.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    subscribeToChanges: () => dispatch(subscribeToChanges()),
    clearNotifications: () => dispatch(clearNotificationsInState()),
    removeNotification: (deletedNotifPostID) =>
      dispatch(removeNotificationFromState(deletedNotifPostID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
