function Child(props) {
  const { name, age } = props;
  return (
    <div>
      <p>
        이름은 {name}이며 {age}살이다.
      </p>
    </div>
  );
}
export default Child;
