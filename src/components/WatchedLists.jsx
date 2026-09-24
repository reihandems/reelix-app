import WatchedCard from "./WatchedCard";

export default function WatchedLists({watched}) {
    return (
      <>
        <div className="col-span-6 md:col-span-2 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <h3 className="text-2xl font-semibold">Watched</h3>
              <span className="badge bg-primary/5 text-accent font-bold text-xs">
                {watched.length} Logged
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            {watched?.map((watch) => (
              <WatchedCard key={watch.imdbID} watch={watch} />
            ))}
          </div>
        </div>
      </>
    );
}