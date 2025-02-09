export default function Navbar() {
    return (
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">My Website</h1>
          <div>
            <a href="/" className="mr-4">Home</a>
            <a href="/about">About</a>
          </div>
        </div>
      </nav>
    );
  }
  