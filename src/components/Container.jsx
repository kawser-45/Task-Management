


function Container(props) {
  return (
    <div className={`max-w-screen-lg m-auto py-5 ${props.className}`}>{props.children}</div>
  )
}

export default Container