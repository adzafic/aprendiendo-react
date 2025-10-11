import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <>
      <TwitterFollowCard userName="adzafic">
        <strong>Adnan Dzafic</strong>
      </TwitterFollowCard>
      <TwitterFollowCard userName="ginusharakelyan">
        <strong>Ginush Arakelyan</strong>
      </TwitterFollowCard>
    </>
  );
}
