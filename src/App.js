import "./App.css"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Quests from "./screens/Quests"
import DisplayQuests from "./screens/DisplayQuests"
import Knights from "./screens/Knights"
import DisplayKnights from "./screens/DisplayKnights"
import Team from "./screens/Team"
import Home from "./screens/Home"
import KnightCard from "./components/KnightCard"

function App() {
  return (
    <div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/quests" element={<Quests />} />
        		<Route path="/quests/:id" element={<DisplayQuests />} />
        		<Route path="/knightcard" element={<KnightCard />} />
        		<Route path="/knights" element={<Knights />} />
				<Route path="/knights/:id" element={<DisplayKnights />} />
        		<Route path="/team" element={<Team />} />
			</Routes>
		</div>
  );
}

export default App;
