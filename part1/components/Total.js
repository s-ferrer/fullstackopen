const Total = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <exercises {...(exercises1 + exercises2 + exercises3)} />
    </div>
  );
};

export default Total;
