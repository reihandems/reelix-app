export default function Hero({children}) {
    return (
      <>
        <div className="font-jakarta flex flex-col min-h-screen p-6">
          {children}
        </div>
      </>
    );
}