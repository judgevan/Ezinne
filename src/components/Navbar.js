import logo from "../assets/logo.jpeg";
/*import profile from "../assets/ezinne.jpeg";*/

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0 w-full z-50">
      {/* Logo (click → home) */}
      <a href="#home" className="flex items-center space-x-2">
        <img src={logo} alt="Perfect Touch Logo" className="h-10 w-10" />
        <span className="font-bold text-lg">Perfect Touch Edits</span>
      </a>

      {/* Links */}
      <div className="space-x-6 hidden md:flex">
        <a href="#home" className="hover:text-red-500">Home</a>
        <a href="#about" className="hover:text-red-500">About</a>
        <a href="#services" className="hover:text-red-500">Services</a>
        <a href="#samples" className="hover:text-red-500">Samples</a>
        <a href="#contact" className="hover:text-red-500">Contact</a>
      </div>

      {/* Profile picture (also links home) */}
      <a href="#home">
        <img
          //src={profile}
          alt="Ezinne Goodness"
          className="h-10 w-10 rounded-full border-2 border-gray-300 hover:border-red-500"
        />
      </a>
    </nav>
  );
}
