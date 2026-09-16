import { BrainCircuit, Play, Send } from "lucide-react";
import { useState } from "react";

export function CaseSimulator() {
  const [activeCase, setActiveCase] = useState<string | null>(null);
  const [answers, setAnswers] = useState({
    problem: "",
    field: "",
    norm: "",
    document: "",
    action: ""
  });
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sampleCase = "Mijoz bilan qurilish bo'yicha pudrat shartnomasi tuzildi. Mijoz 30% avans to'ladi. Ammo pudratchi ishni kelishilgan muddatda boshlamadi va aloqaga chiqmayapti.";

  const startCase = () => {
    setActiveCase(sampleCase);
    setAnalysis(null);
    setAnswers({ problem: "", field: "", norm: "", document: "", action: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/simulator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caseText: activeCase, userAnswers: answers })
      });
      const data = await res.json();
      setAnalysis(data.response);
    } catch (error) {
      console.error(error);
      setAnalysis("Tahlil qilishda xatolik yuz berdi. Iltimos qayta urinib ko'ring.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-pink-600" />
            Huquqiy Case Simulator
          </h1>
          <p className="mt-1 text-sm text-slate-500">Real hayotga o'xshash vaziyatlarni huquqiy jihatdan yechishni mashq qiling</p>
        </div>
      </div>

      {!activeCase ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-sm">
          <BrainCircuit className="mx-auto h-12 w-12 text-pink-500 mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Simulyatorni boshlash</h2>
          <p className="text-slate-500 mb-6 max-w-lg mx-auto">Sizga huquqiy vaziyat (case) beriladi. Ushbu vaziyatni to'g'ri tahlil qilib, kerakli javoblarni kiritishingiz kerak bo'ladi.</p>
          <button
            onClick={startCase}
            className="inline-flex items-center gap-2 rounded-lg bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-500"
          >
            <Play className="h-4 w-4" /> Boshlash
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-xl p-6 text-white shadow-md">
              <h3 className="text-sm font-semibold text-pink-400 uppercase tracking-wider mb-2">Vaziyat</h3>
              <p className="text-lg leading-relaxed">{activeCase}</p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">1. Muammoni aniqlash</label>
                <textarea
                  required
                  rows={2}
                  value={answers.problem}
                  onChange={(e) => setAnswers({...answers, problem: e.target.value})}
                  className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  placeholder="Asosiy huquqiy muammo nimada?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">2. Qaysi huquq sohasi?</label>
                <input
                  type="text"
                  required
                  value={answers.field}
                  onChange={(e) => setAnswers({...answers, field: e.target.value})}
                  className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  placeholder="Masalan: Fuqarolik huquqi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">3. Qaysi norma / modda?</label>
                <input
                  type="text"
                  required
                  value={answers.norm}
                  onChange={(e) => setAnswers({...answers, norm: e.target.value})}
                  className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  placeholder="Qaysi qonun yoki kodeks moddasi?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">4. Qanday hujjat kerak?</label>
                <input
                  type="text"
                  required
                  value={answers.document}
                  onChange={(e) => setAnswers({...answers, document: e.target.value})}
                  className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  placeholder="Talabnoma, da'vo arizasi..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">5. Qanday harakat qilish kerak?</label>
                <textarea
                  required
                  rows={2}
                  value={answers.action}
                  onChange={(e) => setAnswers({...answers, action: e.target.value})}
                  className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  placeholder="Keyingi qadamlar..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex justify-center items-center gap-2 rounded-lg bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 disabled:opacity-70"
              >
                {isSubmitting ? "Tahlil qilinmoqda..." : "Javoblarni yuborish"}
                {!isSubmitting && <Send className="h-4 w-4" />}
              </button>
            </form>
          </div>
          
          <div>
            {analysis && (
              <div className="bg-white rounded-xl border border-pink-200 p-6 shadow-sm sticky top-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5 text-pink-600" />
                  AI Tahlili
                </h3>
                <div className="prose prose-sm prose-pink max-w-none text-slate-700 whitespace-pre-wrap">
                  {analysis}
                </div>
                <button
                  onClick={startCase}
                  className="mt-6 w-full inline-flex justify-center items-center rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-200"
                >
                  Yangi Case
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
