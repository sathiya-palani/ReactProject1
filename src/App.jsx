
const App = () => {

  const friends =[
    {id: 1 , name: 'John' , age: 22},
    {id: 2 , name: 'Jane' , age: 23},
    {id: 3 , name: 'Siva' , age: 24},
  ]
  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {
          friends.map((friend) =>
          <li key ={friend.id}>{freind.name} {friend.age}</li>
        )
        }
      </ul>
      
      </div>
  )
}

export default App