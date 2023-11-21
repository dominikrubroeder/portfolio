export default function Header() {
  return (
    <header className="flex items-center justify-between bg-apple-gray-6 p-4">
        <div className="h-10 w-32 rounded-full bg-apple-gray-4"></div>

        <nav>
            <ul className="flex items-center justify-center gap-2">
                <li className="h-2 w-8 rounded-full bg-apple-gray-4"></li>
                <li className="h-2 w-8 rounded-full bg-apple-gray-4"></li>
                <li className="h-2 w-8 rounded-full bg-apple-gray-4"></li>
            </ul>
        </nav>
    </header>
  );
}