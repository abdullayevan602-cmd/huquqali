import { BookOpen, ExternalLink, Search } from "lucide-react";

export function CourtPractice() {
  const openCourtSite = () => {
    window.open("https://public.sud.uz/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-emerald-600" />
            Sud Amaliyoti
          </h1>
          <p className="mt-1 text-sm text-slate-500">Oliy sud qarorlari va sud amaliyoti bazasi</p>
        </div>
      </div>

      <div className="mb-8 rounded-xl bg-emerald-50 p-6 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-emerald-900">Rasmiy Sud Portaliga O'tish</h3>
          <p className="text-sm text-emerald-700 mt-1">Sud qarorlarini qidirish uchun rasmiy public.sud.uz saytidan foydalaning.</p>
        </div>
        <button
          onClick={openCourtSite}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 whitespace-nowrap"
        >
          Sud qarorlarini qidirish
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Tezkor Yo'naltirish</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-slate-100 rounded-lg hover:border-emerald-200 transition-colors">
            <h4 className="font-medium text-slate-800 flex items-center gap-2 mb-2">
              <Search className="h-4 w-4 text-emerald-500" /> Ish raqami bo'yicha qidirish
            </h4>
            <p className="text-sm text-slate-500 mb-3">Muayyan ish raqamini kiritib, sud ajrimlari va qarorlarini toping.</p>
            <button onClick={openCourtSite} className="text-emerald-600 text-sm font-medium hover:underline">Qidirish &rarr;</button>
          </div>
          <div className="p-4 border border-slate-100 rounded-lg hover:border-emerald-200 transition-colors">
            <h4 className="font-medium text-slate-800 flex items-center gap-2 mb-2">
              <BookOpen className="h-4 w-4 text-emerald-500" /> Case Study
            </h4>
            <p className="text-sm text-slate-500 mb-3">Tahliliy sud ishlari va ularning yechimlari bilan tanishish.</p>
            <button className="text-emerald-600 text-sm font-medium hover:underline">Tanishish &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
