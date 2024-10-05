interface Props{
  text:string
}

export default function ButtonItem({text}:Props) {
  return (
    <div className="container">
    <button className="hover:bg-white p-1 rounded-3xl px-3">
      <p className="text-md">{text}</p>
    </button>
    </div>
  )
}
