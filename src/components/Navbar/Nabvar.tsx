import ButtonItem from "./ButtonItem";
import Menu from "./Menu";
import SingleButton from "./SingleButton";

export default function Nabvar() {
  return (
    <nav className="grid grid-cols-3 items-center p-3">
      <section className="col-span-1 flex justify-center">
        <p className="text-3xl">SCode</p>
      </section>
      <section className="grid grid-cols-2 col-span-2 items-center space-x-5">
        <Menu>
          <ButtonItem text="Home" />
          <ButtonItem text="Catalog" />
          <ButtonItem text="About us" />
          <ButtonItem text="Contacts" />
        </Menu>
        <Menu width="16rem" backgroundColor="bg-white">
          <div className="flex items-center">
            <SingleButton>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </SingleButton>
            <SingleButton>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </SingleButton>
            <SingleButton>
              <div className="container w-28">
                <div className="flex items-center space-x-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm">Hi! Scode</p>
                    <p className="text-sm">Scode Dev</p>
                  </div>
                </div>
              </div>
            </SingleButton>
          </div>
        </Menu>
      </section>



    </nav>
  )
}
