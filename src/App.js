import { useState } from "react";
import DetailField from "./components/DetailField";
import NumberField from "./components/NumberField";
import PasswordField from "./components/PasswordField";
import TextField from "./components/TextField";
import { register } from "./services/account";
import "./styles.css";

export default function App() {
  [user, setUser] = useState({});
  return (
    <div className="App">
      <TextField placeholder="Barua pepe" />
      <TextField placeholder="Jina la biashara" />
      <DetailField placeholder="maelezo" />
      <TextField placeholder="Duara" />
      <TextField placeholder="Picha" />
      <NumberField placeholder="Kiasi" />
      <PasswordField placeholder="Nywila" />
      <button
        onClick={() => register()}
        className="pa1 f6 link dim br1 ph3 pv2 mb2 dib white bg-black"
      >
        <span>SAJILI MTOA HUDUMA</span>
      </button>
    </div>
  );
}
