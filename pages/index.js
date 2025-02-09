import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Testing Automatic Deployments 🚀</h1>
        <p className="text-lg text-gray-500">Product Manager | UX Designer</p>
      </main>
    </div>
  );
}
