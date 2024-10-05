
interface MenuProps{
    children:React.ReactNode
    width?: string;
    backgroundColor?:string    
}
export default function Menu({children, width='24rem', backgroundColor="bg-stone-100"}:MenuProps) {
  return (
    <ul className={`${backgroundColor} flex rounded-3xl p-1 px-2`} style={{width}}>
        {children}
    </ul>
  )
}
