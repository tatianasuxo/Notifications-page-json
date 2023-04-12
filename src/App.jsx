import { UserCard } from "./components/UserCard";
import users from "../src/assets/user.json";
import "./App.css";

function App() {
  return (
      
    
    <div className="App">
      <header>
        <div class="notif_box">
          <h2 class="title">Notifications</h2>
          <span id="notifes">3</span>
        </div>
        <p id="mark_all">Mark all as read</p>
      </header>
      <main>
        {users.map((user) => {
          return <UserCard user={user} key={user.id} />;
        })}
      </main>
    </div>
  );
}

export default App;
