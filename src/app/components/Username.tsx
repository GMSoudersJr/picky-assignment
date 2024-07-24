interface UsernameProps {
  username: string
}

const Username = ({username}: UsernameProps) => {

  return (
    <h1>{username}</h1>
  )
}

export default Username;
