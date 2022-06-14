const Content = () => {
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <part1 {...part1} {...exercises1} />
      <part2 {...part2} {...exercises2} />
      <part3 {...part3} {...exercises3} />
    </div>
  );
};

export default Content;
