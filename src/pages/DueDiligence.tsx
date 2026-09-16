import { Briefcase, ExternalLink, Search } from "lucide-react";
import { useState } from "react";

export function DueDiligence() {
  const [stir, setStir] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stir.trim()) return;
    
    // In absence of an official API, redirect to official site.
    window.open(`https://my.gov.uz/uz/service/381`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-amber-600" />
            Due Diligence (Kompaniyalarni tekshirish)
          </h1>
          <p className="mt-1 text-sm text-slate-500">Kompaniyalar va tadbirkorlik subyektlari haqida ochiq ma'lumotlar</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 max-w-2xl">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={stir}
              onChange={(e) => setStir(e.target.value)}
              placeholder="Kompaniya STIRi yoki nomini kiriting..."
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500"
          >
            Tekshirish
          </button>
        </form>

        <div className="mt-6 rounded-lg bg-amber-50 p-4 border border-amber-100 flex items-start gap-3">
          <div className="flex-1">
            <h4 className="font-semibold text-amber-900 text-sm">Eslatma</h4>
            <p className="text-sm text-amber-800 mt-1">
              Noto'g'ri (fake) ma'lumotlarning oldini olish maqsadida, so'rov to'g'ridan-to'g'ri rasmiy ochiq ma'lumotlar portali (data.egov.uz yoki my.gov.uz) ga yo'naltiriladi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
