import { useState } from "react";

const Header = (props) => <h1>{props.name}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>
          {text} {value} %{" "}
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>
        {text} {value}{" "}
      </td>
    </tr>
  );
};

const Statistics = ({ clicks }) => {
  const total = clicks.good + clicks.neutral + clicks.bad;
  const average = (clicks.good * 1 + clicks.bad * -1) / total;
  const positive = clicks.good * (100 / total);

  if (total === 0) {
    return <div> No feedbacks</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={clicks.good} />
          <Statistic text="neutral" value={clicks.neutral} />
          <Statistic text="bad" value={clicks.bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleGoodClick = () => setClicks({ ...clicks, good: clicks.good + 1 });

  const handleNeutralClick = () =>
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });

  const handleBadClick = () => setClicks({ ...clicks, bad: clicks.bad + 1 });

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];
  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const user = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };
  const randomText = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  return (
    <div>
      <Header name="Customer feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header name="Statistics" />
      <Statistics clicks={clicks} />
      <Header name="Anecdote of the day" />
      {anecdotes[selected]}
      <br></br>
      <Button onClick={user} text="vote" />
      <Button onClick={randomText} text="next" />
      <h1>Anecdote with more votes</h1>
      {anecdotes[points.indexOf(Math.max(...points))]}
      <br></br>
      has a total of {Math.max(...points)} votes
    </div>
  );
};

export default App;
