import { Link } from 'react-router-dom';


interface Props {
  text: string
  to: string
}

export default function ButtonItem({ text, to }: Props) {
  return (
    <div className="container">
      <Link to={to}>
        <button className="hover:bg-white p-1 rounded-3xl px-3">
          <p className="text-md">{text}</p>
        </button>
      </Link>
    </div>
  )
}
