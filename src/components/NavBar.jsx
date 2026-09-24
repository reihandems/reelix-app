export default function NavBar() {
    return (
      <>
        <div className="navbar bg-base-100 shadow-sm font-jakarta">
          <div className="flex-1">
            <div className="flex items-center">    
                <a className="btn btn-ghost text-xl">Reelix</a>
                <p className="text-sm font-semibold text-gray-500">CINEMA ENGINE</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div className="avatar avatar-online avatar-placeholder">
                <div className="bg-accent text-neutral w-10 rounded-full">
                  <span className="text-base">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}