export default function EmptyWatched() {
    return (
      <>
        <div className="border-2 border-dashed text-gray-600 w-full flex flex-col">
          <div className="flex flex-col gap-5 p-6">
            <div className="flex w-full flex-col gap-4">
              <div className="h-32 w-full border-2 border-dashed"></div>
              <div className="h-4 w-28 border-2 border-dashed"></div>
              <div className="h-4 w-full border-2 border-dashed"></div>
              <div className="h-4 w-full border-2 border-dashed"></div>
            </div>
            <p className="text-xs font-bold text-center">
              Click + Add To Watched <br /><br />
              To add movie to your <br /> watched lists
            </p>
          </div>
        </div>
      </>
    );
}