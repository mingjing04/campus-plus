import { useState } from "react";
import "./App.css";

export default function ChatPage() {
  const [activeMenu, setActiveMenu] = useState("dm");

  // Sample List of users to DM
  const dmUsers = ["Alice", "Bob", "Charlie"];
  const [selectedUser, setSelectedUser] = useState(dmUsers[0]);

  // Sample Messages keyed by user
  const [dmMessages, setDmMessages] = useState({
    Alice: [
      { from: "Alice", text: "Hey! How’s it going?" },
      { from: "You", text: "Good, thanks! You?" },
    ],
    Bob: [{ from: "Bob", text: "Hi there!" }],
    Charlie: [],
  });

  const [dmInput, setDmInput] = useState("");

  const handleSendDM = () => {
    if (!dmInput) return;
    setDmMessages({
      ...dmMessages,
      [selectedUser]: [...(dmMessages[selectedUser] || []), { from: "You", text: dmInput }],
    });
    setDmInput("");
  };

  return (
    <div className="app">
      <div className="sidebar">
        <button
          className={activeMenu === "dm" ? "active" : ""}
          onClick={() => setActiveMenu("dm")}
        >
          DMs
        </button>
        <button
          className={activeMenu === "groups" ? "active" : ""}
          onClick={() => setActiveMenu("groups")}
        >
          Groups
        </button>
      </div>

      <div className="main-content">
        {activeMenu === "dm" && (
          <div className="chat-section">
            <h2>Direct Messages</h2>

            {/* Dropdown to select user */}
            <div className="select-wrapper">
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              {dmUsers.map((user, idx) => (
                <option key={idx} value={user}>
                  {user}
                </option>
              ))}
            </select>
            </div>
            {/* Message log */}
            <div className="messages">
              {(dmMessages[selectedUser] || []).map((msg, idx) => (
                <div
                  key={idx}
                  className={`message ${msg.from === "You" ? "sent" : "received"}`}
                >
                  <strong>{msg.from}: </strong>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input bar */}
            <div className="input-bar">
              <input
                type="text"
                value={dmInput}
                onChange={(e) => setDmInput(e.target.value)}
                placeholder={`Message ${selectedUser}...`}
              />
              <button onClick={handleSendDM}>Send</button>
            </div>
          </div>
        )}

        {activeMenu === "groups" && (
          <div className="chat-section">
            <h2>Community Chats</h2>
            <p>Community chats here...</p>
          </div>
        )}
      </div>
    </div>
  );
}
