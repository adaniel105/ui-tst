export function BonsaiApp() {
  return (
    <div className="min-h-screen flex flex-col justify-start bg-gray-100">
      <header className="min-w-full flex p-4 justify-between">
        <h1>Bonsai</h1>
        <div className="flex gap-8">
          <span>Products</span>
          <span>Templates</span>
          <span>Pricing</span>
          <span>Reviews</span>
        </div>
        <div className="flex items-start gap-4">
          <button>LOG IN</button>
          <button>START HERE</button>
        </div>
      </header>

      <main className=" m-20 justify-center items-center">
        <div className="flex justify-between">
          <p className="absolute top-24 right-20">2 MONTHS FREE!</p>
          <p>Plans & Pricing</p>
          <div className="flex gap-4">
            <p>MONTHLY</p>
            <button>boob</button>
            <p>YEARLY</p>
          </div>
        </div>
      </main>
    </div>
  );
}
