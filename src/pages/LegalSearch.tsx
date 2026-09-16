import { useState } from "react";
import { Search, ExternalLink, Filter, FileText } from "lucide-react";

export function LegalSearch() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Mock results for demo, but always indicating external official source
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setResults([
        {
          id: 1,
          title: "O'zbekiston Respublikasining Mehnat Kodeksi",
          type: "Kodeks",
          date: "2022-10-28",
          status: "Amalda",
          summary: "Xodimlarning mehnat huquqlari va majburiyatlarini belgilovchi asosiy qonun hujjat.",
          source: "LexUZ",
          url: "https://lex.uz/uz/"
        },
        {
          id: 2,
          title: "Mehnat shartnomasi tuzish tartibi to'g'risida",
          type: "Tushuntirish",
          date: "2023-01-15",
          status: "Amalda",
          summary: "Adliya vazirligi tomonidan mehnat shartnomasini rasmiylashtirish bo'yicha tushuntirish.",
          source: "Adliya vazirligi",
          url: "https://www.minjustice.uz/uz/"
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
            Huquqiy Qidiruv
          </h1>
          <p className="mt-1 text-sm text-slate-500">Modda raqami, kalit so'z yoki hujjat nomi bo'yicha qidiring</p>
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
              placeholder="Masalan: aliment, mehnat shartnomasi, firibgarlik..."
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
          <div key={result.id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-semibold text-slate-900">{result.title}</h3>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {result.status}
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                  {result.source === 'LexUZ' ? '🟢 Rasmiy manba' : '🟡 Tahliliy manba'}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                <span className="flex items-center gap-1"><FileText className="h-4 w-4" /> {result.type}</span>
                <span>Sana: {result.date}</span>
              </div>
              <p className="text-sm text-slate-600 mb-4">{result.summary}</p>
            </div>
            <div className="flex sm:flex-col justify-end gap-3 sm:border-l sm:border-slate-100 sm:pl-6">
              <a 
                href={result.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-50 text-blue-700 px-4 py-2 text-sm font-semibold hover:bg-blue-100 transition-colors whitespace-nowrap"
              >
                {result.source}da ochish
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
