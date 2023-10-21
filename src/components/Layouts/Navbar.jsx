
function Navbar() {
  return (
    <div className="bg-[#312450] text-white flex justify-center p-4">
      <nav>
        <ul className="flex gap-5 text-gray-300 text-xs font-semibold uppercase">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar