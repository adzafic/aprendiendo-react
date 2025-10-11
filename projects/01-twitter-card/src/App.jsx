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
      isFollowing: false,
    },
  ];

  /*posible solucion para generar una id unica para cada usuario
  const usersId = users.map((item) => {
    return { ...item, id: crypto.randomUUID() };
  });
  */
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            /* utilizamos el usuario dado que sera el id unico*/
            key={userName}
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
