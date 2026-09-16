import { Briefcase, Search, ShieldAlert, CheckCircle, FileText, Activity, AlertTriangle } from "lucide-react";
import { useState } from "react";

export function DueDiligence() {
  const [stir, setStir] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stir.trim()) return;
    
    setIsSearching(true);
    setResult(null);

    // Mock response for internal dashboard
    setTimeout(() => {
      setResult({
        name: "MCHJ 'MEGA QURILISH INVEST'",
        stir: stir,
        director: "Abdullayev K. T.",
        status: "Faol",
        registeredDate: "2018-05-12",
        address: "Toshkent shahar, Yunusobod tumani, 12-daha",
        activity: "Turar-joy binolarini qurish",
        risks: [
          { type: "high", text: "Sud ishlarida javobgar sifatida ishtirok etmoqda (2 ta joriy ish)." },
          { type: "medium", text: "Soliq qarzdorligi: 12,500,000 UZS." }
        ],
        positives: [
          { text: "Ustav fondi to'liq shakllantirilgan (500 mln UZS)." },
          { text: "Davlat xaridlarida ishonchli ishtirokchi reytingiga ega." }
        ]
      });
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-slate-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-amber-600" />
              Due Diligence
            </h1>
            <p className="mt-1 text-sm text-slate-500">Kompaniyalar bo'yicha huquqiy va moliyaviy tekshiruv</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-bold text-amber-800 border border-amber-200">
            Demo Rejim
          </span>
        </div>

        <form onSubmit={handleSearch} className="flex gap-4 max-w-3xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={stir}
              onChange={(e) => setStir(e.target.value)}
              placeholder="STIR yoki Kompaniya nomini kiriting..."
              className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-amber-600 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching || !stir.trim()}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 disabled:opacity-70"
          >
            {isSearching ? "Tekshirilmoqda..." : "Tekshirish"}
          </button>
        </form>
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
        {result ? (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">{result.name}</h2>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>STIR: {result.stir}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                      <CheckCircle className="h-4 w-4" /> {result.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Asosiy ma'lumotlar</h3>
                  <div className="space-y-3">
                    <p className="text-sm flex justify-between"><span className="text-slate-500">Rahbar:</span> <span className="font-medium text-slate-900">{result.director}</span></p>
                    <p className="text-sm flex justify-between"><span className="text-slate-500">Ro'yxatdan o'tgan sana:</span> <span className="font-medium text-slate-900">{result.registeredDate}</span></p>
                    <p className="text-sm flex justify-between"><span className="text-slate-500">Faoliyat turi:</span> <span className="font-medium text-slate-900">{result.activity}</span></p>
                    <p className="text-sm flex justify-between border-t border-slate-100 pt-2 mt-2"><span className="text-slate-500">Manzil:</span> <span className="font-medium text-slate-900 text-right max-w-[200px]">{result.address}</span></p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                    <h3 className="text-sm font-semibold text-red-900 flex items-center gap-2 mb-2">
                      <ShieldAlert className="h-4 w-4" /> Aniqlangan xavflar (Risk Factors)
                    </h3>
                    <ul className="space-y-2">
                      {result.risks.map((risk: any, i: number) => (
                        <li key={i} className="text-sm text-red-800 flex items-start gap-2">
                          <span className="mt-0.5"><AlertTriangle className="h-4 w-4" /></span>
                          {risk.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                    <h3 className="text-sm font-semibold text-emerald-900 flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4" /> Ijobiy omillar
                    </h3>
                    <ul className="space-y-2">
                      {result.positives.map((pos: any, i: number) => (
                        <li key={i} className="text-sm text-emerald-800 flex items-start gap-2">
                          <span className="mt-0.5">•</span>
                          {pos.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-amber-300 cursor-pointer transition-colors">
                <FileText className="h-8 w-8 text-amber-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">Sud ishlari</h3>
                <p className="text-sm text-slate-500">Kompaniya ishtirokidagi barcha sud ishlari tarixini ko'rish.</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-amber-300 cursor-pointer transition-colors">
                <Activity className="h-8 w-8 text-amber-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">Moliya va Soliq</h3>
                <p className="text-sm text-slate-500">Soliq qarzdorligi, moliyaviy hisobotlar va aylanmalar.</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-amber-300 cursor-pointer transition-colors">
                <Briefcase className="h-8 w-8 text-amber-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-1">Litsenziyalar</h3>
                <p className="text-sm text-slate-500">Mavjud ruxsatnomalar, sertifikatlar va litsenziyalar ro'yxati.</p>
              </div>
            </div>
          </div>
        ) : !isSearching ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <Search className="h-12 w-12 text-slate-200 mb-4" />
            <h3 className="text-lg font-medium text-slate-900">Kompaniyani tekshirish</h3>
            <p className="mt-1 text-sm text-slate-500 max-w-sm">Qidiruv maydoniga STIR (INN) yoki kompaniya nomini kiriting va to'liq huquqiy tahlilni oling.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
