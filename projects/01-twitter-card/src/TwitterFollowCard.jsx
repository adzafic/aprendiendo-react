import { useState } from "react";

export function TwitterFollowCard({ children, userName = "unknown" }) {
  const [isFollowing, SetIsFollowing] = useState(false);
  const textoBotton = isFollowing ? "Siguendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = function () {
    SetIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="avatar de adzafic"
          src={`https://unavatar.io/x/${userName}`}
        />
        <div className="tw-followCard-info">
          {children}
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {textoBotton}
        </button>
      </aside>
    </article>
  );
}
