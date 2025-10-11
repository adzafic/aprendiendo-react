import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <TwitterFollowCard userName="adzafic" initialIsFollowing={false}>
        <strong>Adnan Dzafic</strong>
      </TwitterFollowCard>
      <TwitterFollowCard userName="ginusharakelyan" initialIsFollowing>
        <strong>Ginush Arakelyan</strong>
      </TwitterFollowCard>
    </>
  );
}
