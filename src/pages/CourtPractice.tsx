import { BookOpen, Search, Filter, Gavel, Scale, BrainCircuit, Bot } from "lucide-react";
import { useState } from "react";

export function CourtPractice() {
  const [selectedCase, setSelectedCase] = useState<any | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  const cases = [
    {
      id: "2-1001-2301/123",
      court: "Farg'ona viloyati fuqarolik ishlari bo'yicha sudi",
      date: "2023-05-12",
      type: "Aliment undirish",
      parties: { plaintiff: "Abdullayeva N.", defendant: "Abdullayev K." },
      claim: "Voyaga yetmagan 2 nafar farzand ta'minoti uchun aliment undirish.",
      legalIssue: "Javobgarning rasmiy daromadi yo'qligi sababli aliment miqdorini belgilash tartibi.",
      appliedNorms: ["Oila kodeksi 99-modda", "Oila kodeksi 105-modda"],
      conclusion: "Da'vo qanoatlantirildi. O'rtacha oylik ish haqi miqdoridan kelib chiqib aliment belgilandi.",
      analysisText: "Mazkur holatda javobgar ishsiz bo'lgani sababli, aliment miqdori O'zbekiston Respublikasidagi o'rtacha oylik ish haqi miqdoriga nisbatan hisoblandi. Bu Oila kodeksining 99-moddasiga to'la mos keladi."
    },
    {
      id: "3-1502-2302/45",
      court: "Toshkent shahar jinoyat ishlari bo'yicha sudi",
      date: "2023-08-21",
      type: "Firibgarlik (168-modda)",
      parties: { plaintiff: "Davlat ayblovchisi", defendant: "Karimov J." },
      claim: "O'zganing mulkini ishonchni suiiste'mol qilish yo'li bilan qo'lga kiritish.",
      legalIssue: "Qilmishda firibgarlik jinoyati tarkibi mavjud yoki fuqarolik-huquqiy munosabat ekanligi.",
      appliedNorms: ["Jinoyat kodeksi 168-modda 1-qismi"],
      conclusion: "Javobgar aybdor deb topildi. Zarar to'liq qoplanganligi inobatga olinib, jarima jazosi tayinlandi.",
      analysisText: "Zarar to'liq qoplanganligi jinoyat ishi doirasida jazoni yengillashtiruvchi holat sifatida e'tirof etildi."
    }
  ];

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setAnalysisResult(null);
    try {
      const caseText = `
        Ish raqami: ${selectedCase.id}
        Sud: ${selectedCase.court}
        Ish turi: ${selectedCase.type}
        Da'vo: ${selectedCase.claim}
        Sud xulosasi: ${selectedCase.conclusion}
      `;
      const res = await fetch("/api/analyze-case", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caseText })
      });
      const data = await res.json();
      setAnalysisResult(data.response);
    } catch (error) {
      console.error(error);
      setAnalysisResult("AI tahlil qilishda xatolik yuz berdi.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-slate-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-emerald-600" />
              Sud Amaliyoti
            </h1>
            <p className="mt-1 text-sm text-slate-500">Ichki sud ishlari bazasi va AI tahlili</p>
          </div>
        </div>

        {!selectedCase && (
          <div className="flex gap-4">
            <div className="relative flex-1 max-w-3xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Ish raqami, sud nomi, kalit so'z bo'yicha qidiring..."
                className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-emerald-600 sm:text-sm"
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 hover:bg-slate-100">
              <Filter className="h-4 w-4" /> Filter
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
        {!selectedCase ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {cases.map((c) => (
              <div 
                key={c.id} 
                onClick={() => setSelectedCase(c)}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
                    <Gavel className="h-3 w-3" /> {c.id}
                  </span>
                  <span className="text-sm text-slate-500">{c.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 mb-2">{c.type}</h3>
                <p className="text-sm text-slate-600 line-clamp-2 mb-4">{c.claim}</p>
                <div className="flex gap-2 flex-wrap">
                  {c.appliedNorms.map(norm => (
                    <span key={norm} className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                      <Scale className="h-3 w-3" /> {norm}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => { setSelectedCase(null); setAnalysisResult(null); }}
              className="mb-6 text-sm text-emerald-600 hover:underline flex items-center gap-1"
            >
              &larr; Ro'yxatga qaytish
            </button>
            
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{selectedCase.type}</h2>
                  <p className="text-slate-500 flex items-center gap-2">
                    <Gavel className="h-4 w-4" /> {selectedCase.court} | {selectedCase.date}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
                  Ish №: {selectedCase.id}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Tomonlar</h4>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium text-slate-900">Da'vogar:</span> {selectedCase.parties.plaintiff}</p>
                    <p className="text-sm"><span className="font-medium text-slate-900">Javobgar:</span> {selectedCase.parties.defendant}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Qo'llangan moddalar</h4>
                  <div className="flex flex-col gap-1">
                    {selectedCase.appliedNorms.map((norm: string) => (
                      <span key={norm} className="text-sm text-emerald-700 font-medium flex items-center gap-2">
                        <Scale className="h-4 w-4" /> {norm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Da'vo talabi</h4>
                  <p className="text-slate-800 bg-slate-50 p-4 rounded-lg">{selectedCase.claim}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Huquqiy masala</h4>
                  <p className="text-slate-800 bg-slate-50 p-4 rounded-lg">{selectedCase.legalIssue}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Sud xulosasi</h4>
                  <p className="text-emerald-900 bg-emerald-50 p-4 rounded-lg font-medium">{selectedCase.conclusion}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Amaliy tahlil</h4>
                  <p className="text-slate-800">{selectedCase.analysisText}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-8 text-white shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <BrainCircuit className="h-6 w-6 text-emerald-400" />
                  AI Case Analyzer
                </h3>
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 disabled:opacity-50"
                >
                  {isAnalyzing ? "Tahlil qilinmoqda..." : "AI orqali tahlil qilish"}
                </button>
              </div>

              {isAnalyzing && (
                <div className="flex items-center gap-3 text-emerald-400">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-emerald-400 border-t-transparent"></div>
                  <span className="text-sm">Hujjatlar o'rganilmoqda va mantiq tahlil qilinmoqda...</span>
                </div>
              )}

              {analysisResult && (
                <div className="mt-6 border-t border-slate-700 pt-6">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-4">
                    <Bot className="h-5 w-5" /> AI Xulosasi
                  </div>
                  <div className="prose prose-invert prose-emerald max-w-none text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">
                    {analysisResult}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
