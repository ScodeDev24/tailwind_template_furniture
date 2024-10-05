interface Props{
    children:React.ReactNode
    hover?:string

}

export default function SingleButton({children, hover="hover:bg-white"}:Props) {
    return (
      <div className="container">
      <button className={`${hover} p-1 rounded-3xl px-3`}>
            {children}
      </button>
      </div>
    )
  }
  