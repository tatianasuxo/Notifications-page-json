import React from "react";
import "./UserCard.css"
export const UserCard = (props) => {
    const user =props.user
    return (
    <div class="notif_card unread">
      <img src={user.imgsrc} alt="avatar" />
      <div class="description">
        <p class="user_activity">
          <strong>{user.name}</strong>{user.state}
          <b>{user.description}</b>
        </p>
        <p class="time">{user.time}</p>
      </div>
    </div>
  );
};
