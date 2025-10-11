import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const users = [
    {
      userName: "adzafic",
      name: "Adnan Dzafic",
      isFollowing: false,
    },
    {
      userName: "ginusharakelyan",
      name: "Ginush Arakelyan",
      isFollowing: true,
    },
    {
      userName: "Javicci",
      name: "Javier Gracia",
      isFollowing: true,
    },
  ];
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            <strong>{name}</strong>
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
