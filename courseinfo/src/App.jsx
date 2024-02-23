const Header = ({ text }) => {
  return <h1>{text}</h1>;
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => <p key={index}>{part.name} {part.exercises}</p>)}
    </>
  )
}

const Total = ({ parts }) => {
  let numExercises = parts.reduce(
    (total, part) => total + part.exercises,
    0,
  );
  return <p>Number of exercises {numExercises}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App