export default function HeroTop() {
    return (
      <>
        <div className="flex justify-between opacity-50">
          <div className="flex flex-col">
            <p className="text-xs font-semibold">PROJECTION 35MM</p>
            <p className="text-xs font-semibold text-primary">LATENCY 0.04ms</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold">
            <div className="inline-grid *:[grid-area:1/1]">
              <div className="status status-primary animate-ping"></div>
              <div className="status status-primary"></div>
            </div>{" "}
            LIVE CATALOGUE
          </div>
        </div>
      </>
    );
}