import Link from "next/link";
import Dropdown from "./dropdown";

export default function Navbar() {
  return (
    <div className={"flex min-w:screen bg-red-500 max-h:fit h:screen"}>
      <div className={"flex w-4/5 items-center"}>
        {" "}
        <h1 className="p-3 bold text-2xl">leerling</h1>
      </div>
      <div className={"flex w-4/5 justify-end"}>
        <ul className="flex items-center justify-end space-x-2 text-white font-medium">
          <li className={"p-3"}>
            <Link href="/" className="hover:underline">
              Start
            </Link>
          </li>
          <li className={"p-3"}>
            <Dropdown option={1} />
          </li>
          <li className={"p-3"}>
            <Dropdown option={3} />
          </li>
          <li className={"p-3"}>
           <Dropdown option={2} />
          </li>
          <li className={"p-3"}>
            <Link href="/zoeken" className="hover:underline">
              Zoeken
            </Link>
          </li>
          <li className={"p-3"}>
            <Link href="/hulp" className="hover:underline">
              Hulp
            </Link>
          </li>
          <li className={"p-3"}>
            <Link href="/logout" className="hover:underline">
              Log uit
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
