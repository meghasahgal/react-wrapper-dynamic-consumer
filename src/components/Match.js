import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const { sign } = useContext(HoroscopeContext);
  const [match, setMatch] = useState(false);
//   upon click, match is truthy; match does not reset
  return (
    <>
    <button onClick={() => setMatch((currentMatchValue) => !currentMatchValue)}>
      Match
    </button>
    {match ? <div>{sign.match}</div> : null}
    {/* if match is truthy do above or below */}
    {/* {match && <div>{sign.match}</div>} */}
    </>
  );
};
Andre Silva to Everyone (9:46 PM)
{/* <button onClick={() => (match ? setMatch(false) : setMatch(true))}> */}
export default Match;
