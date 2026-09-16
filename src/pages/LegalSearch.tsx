import { useState } from "react";
import { Search, Filter, FileText, Scale, BookOpen, GraduationCap, Newspaper } from "lucide-react";

export function LegalSearch() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    // Simulate global search across internal modules
    setTimeout(() => {
      setResults([
        {
          id: 1,
          title: "O'zbekiston Respublikasining Mehnat Kodeksi",
          type: "Qonunlar",
          date: "2022-10-28",
          summary: "Xodimlarning mehnat huquqlari va majburiyatlarini belgilovchi asosiy qonun hujjat.",
          source: "LexUZ",
          icon: Scale,
          color: "text-blue-600",
          bg: "bg-blue-50"
        },
        {
          id: 2,
          title: "Sud ishi: Aliment undirish",
          type: "Sud amaliyoti",
          date: "2023-05-12",
          summary: "Fuqarolik ishlari bo'yicha sudning aliment miqdorini belgilash haqidagi qarori.",
          source: "Court Practice",
          icon: BookOpen,
          color: "text-emerald-600",
          bg: "bg-emerald-50"
        },
        {
          id: 3,
          title: "Mehnat shartnomasini bekor qilish asoslari",
          type: "Darslar",
          date: "2023-01-15",
          summary: "Yurist Academy doirasida mehnat huquqi bo'yicha o'quv materiali.",
          source: "Yurist Academy",
          icon: GraduationCap,
          color: "text-purple-600",
          bg: "bg-purple-50"
        }
      ]);
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Search className="h-6 w-6 text-indigo-600" />
            Global Huquqiy Qidiruv
          </h1>
          <p className="mt-1 text-sm text-slate-500">Barcha bo'limlar: Qonunlar, Sud amaliyoti, Darslar, Yangiliklar</p>
        </div>
      </div>

      <div className="mb-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Masalan: aliment, mehnat shartnomasi, meros..."
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 hover:bg-slate-100"
          >
            <Filter className="h-4 w-4" />
            Filter
          </button>
          <button
            type="submit"
            disabled={isSearching}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 disabled:opacity-70"
          >
            {isSearching ? "Qidirilmoqda..." : "Qidirish"}
          </button>
        </form>
      </div>

      <div className="space-y-4">
        {results.map((result) => (
          <div key={result.id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-6 hover:border-indigo-300 transition-colors cursor-pointer group">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${result.bg}`}>
              <result.icon className={`h-6 w-6 ${result.color}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600">{result.title}</h3>
                <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">
                  {result.type}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                <span>Manba: {result.source}</span>
                <span>•</span>
                <span>Sana: {result.date}</span>
              </div>
              <p className="text-sm text-slate-600">{result.summary}</p>
            </div>
            <div className="flex items-center sm:border-l sm:border-slate-100 sm:pl-6">
              <button className="text-indigo-600 text-sm font-semibold hover:underline">
                Batafsil ko'rish &rarr;
              </button>
            </div>
          </div>
        ))}
        {results.length === 0 && !isSearching && query && (
          <div className="text-center py-12 text-slate-500">
            Natija topilmadi. Boshqa so'z bilan qidirib ko'ring.
          </div>
        )}
      </div>
    </div>
  );
}
