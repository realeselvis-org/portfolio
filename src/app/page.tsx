export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:px-10">
      {/* MAIN */}
      <main className="w-full row-start-2">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          
          {/* Título */}
          <h1 className="text-2xl font-bold">
            Elvis Reales Portfolio + IA
          </h1>

          {/* Grid de cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="experienceCard p-4 bg-gray-200 rounded-lg shadow">
              {/* Section 1 */}
              <div className="section1 bg-blue-200 flex items-center justify-between p-2 rounded">
                <div className="bg-red-200 p-2 rounded">
                  <h2 className="font-semibold">Title</h2>
                </div>
                <div className="bg-green-200 p-2 rounded">
                  <h2 className="font-semibold">Buttons</h2>
                </div>
              </div>

              {/* Section 2 */}
              <div className="section3 bg-blue-200 p-2 rounded">
                <div className="bg-red-200 p-2 rounded">
                  <img src="https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_16zz7e4.png" alt="Test" />
                </div>
                <div className="bg-green-200 p-2 rounded">
                  <h2 className="font-semibold">Text</h2>
                </div>
              </div>

              {/* Section 3 */}
              <div className="section3 bg-blue-200 flex items-center justify-between p-2 rounded">
                <div className="bg-red-200 p-2 rounded">
                  <h2 className="font-semibold">Labels</h2>
                </div>
                <div className="bg-green-200 p-2 rounded">
                  <h2 className="font-semibold">toggle</h2>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 bg-gray-200 rounded-lg shadow">
              Card 2
            </div>

            {/* Card 3 */}
            <div className="p-4 bg-gray-200 rounded-lg shadow">
              Card 3
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm text-gray-500 row-start-3">
        © {new Date().getFullYear()} Elvis Reales
      </footer>
    </div>
  );
}
