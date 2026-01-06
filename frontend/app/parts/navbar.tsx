export default function Navbar() {
  return (
    <div className={"flex min-w:screen bg-red-500 max-h:fit h:screen"}>
      <div className={"flex w-4/5 items-center"}>
        {" "}
        <h1 className="p-3 bold text-2xl">leerling</h1>
      </div>
      <div className={"flex w-3/5"}>
        <ul className="flex">
          <li className={"p-4"}>Start</li>
          <li className={"p-4"}>Ga naar</li>
          <li className={"p-4"}>Berichten</li>
          <li className={"p-4"}>Links</li>
          <li className={"p-4"}>Zoeken</li>
          <li className={"p-4"}>Hulp</li>
          <li className={"p-4"}>Log uit</li>
        </ul>
      </div>
    </div>
  );
}
