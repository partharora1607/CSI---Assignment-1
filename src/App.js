import "./App.css";
import Details from "./components/Details";
import Form from "./components/Form";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5dc";
  }, []);

  const [text, setText] = useState(null);

  const [name, setName] = useState(null);

  const [contactNumber, setContactNumber] = useState(null);

  const [email, setEmail] = useState(null);

  const [dob, setDob] = useState(null);

  const [gender, setGender] = useState(null);

  const ToggleName = (name) => {
    setName(name);
  };

  const toggleGender = (gender) => {
    setGender(gender);
  };

  const onResertHandler = () => {
    setText("");
    ToggleName("");
    setContactNumber("");
    setEmail("");
    setDob("");
    toggleGender("");
  };

  return (
    <Router>
      <Switch>
        <Route path="/details" element={<Details />}>
          <Details
            name={name}
            text={text}
            contactNumber={contactNumber}
            email={email}
            dob={dob}
            gender={gender}
            onResertHandler={onResertHandler}
          />
        </Route>
        <Route path="/">
          <Form
            text={text}
            name={name}
            contactNumber={contactNumber}
            email={email}
            ToggleName={ToggleName}
            setName={setEmail}
            setContactNumber={setContactNumber}
            setEmail={setEmail}
            setText={setText}
            setDob={setDob}
            dob={dob}
            toggleGender={toggleGender}
            onResertHandler={onResertHandler}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
