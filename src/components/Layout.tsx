import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { WifiOff } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        {!isOnline && (
          <div className="bg-amber-500 px-4 py-2 text-center text-sm font-medium text-white flex items-center justify-center gap-2">
            <WifiOff className="h-4 w-4" />
            Offline rejim. Ba'zi funksiyalar cheklangan bo'lishi mumkin.
          </div>
        )}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
