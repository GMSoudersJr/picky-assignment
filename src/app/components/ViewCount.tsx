interface ViewProps {
  views: number
}

const ViewCount = ({views}: ViewProps) => {

  return (
    <p>👀 {views}</p>
  )
}

export default ViewCount;

