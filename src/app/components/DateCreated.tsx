interface DateCreatedProps {
  createdAt: string
}

const DateCreated = ({createdAt}: DateCreatedProps) => {

  const res = new Date(createdAt);
  const date = res.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  return (
    <p>{date}</p>
  )
}

export default DateCreated

