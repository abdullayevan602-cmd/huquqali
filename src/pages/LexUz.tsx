import { Search, Scale, FileText, Landmark, Building, Gavel, Globe, BookOpen, ChevronRight, BookmarkPlus, Volume2, Edit3, CornerDownRight } from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Konstitutsiya", icon: Landmark },
  { name: "Fuqarolik kodeksi", icon: Scale },
  { name: "Jinoyat kodeksi", icon: Scale },
  { name: "Jinoyat-protsessual kodeks", icon: Scale },
  { name: "Fuqarolik protsessual kodeks", icon: Scale },
  { name: "Mehnat kodeksi", icon: Scale },
  { name: "Soliq kodeksi", icon: Scale },
  { name: "Ma'muriy javobgarlik", icon: Scale },
  { name: "Oila kodeksi", icon: Scale },
  { name: "Yer kodeksi", icon: Scale },
  { name: "Uy-joy qonunchiligi", icon: Building },
  { name: "Iqtisodiy protsess", icon: Scale },
  { name: "Bojxona", icon: Globe },
  { name: "Bank va moliya", icon: Landmark },
  { name: "Tadbirkorlik", icon: Briefcase },
  { name: "Intellektual mulk", icon: FileText },
  { name: "Ekologiya", icon: Globe },
  { name: "Ta'lim", icon: BookOpen },
  { name: "Sog'liqni saqlash", icon: FileText },
  { name: "Transport", icon: Building },
  { name: "Axborot texnologiyalari", icon: Globe }
];

import { Briefcase } from "lucide-react"; // Import Briefcase here to avoid error

export function LexUz() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  // Fake database check
  const handleArticleClick = (title: string) => {
    // We mock the DB logic. If it's a known article, we show it, else "Not found in DB".
    if (title === "Modda 1") {
      setSelectedArticle({
        title: "Modda 1. Asosiy qoidalar",
        text: "Bu yerda qonunning rasmiy matni bo'lishi kerak. Hozirgi vaqtda lokal bazamizda to'liq matn mavjud emas.",
        explanation: "Ushbu modda qonunning maqsad va vazifalarini belgilaydi.",
        example: "Masalan, fuqaro o'z huquqini himoya qilganda ushbu tamoyilga tayanadi.",
        related: ["Modda 2", "Modda 15"]
      });
    } else {
      setSelectedArticle({
        title,
        text: "Ma'lumot bazaga hali yuklanmagan.",
        explanation: null,
        example: null,
        related: []
      });
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-slate-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <Scale className="h-6 w-6 text-blue-600" />
              LexUZ — Qonunchilik bazasi
            </h1>
            <p className="mt-1 text-sm text-slate-500">Ilova ichida to'liq huquqiy kutubxona</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Lokal Baza
          </span>
        </div>

        <div className="relative max-w-3xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Qonun yoki modda qidiring (Modda raqami, nomi, kalit so'z...)"
            className="block w-full rounded-lg border-0 py-3 pl-10 pr-4 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-blue-600 sm:text-sm"
          />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Categories Sidebar */}
        <div className="w-72 border-r border-slate-200 bg-slate-50 overflow-y-auto p-4">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Kategoriyalar</h3>
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat.name}>
                <button
                  onClick={() => { setActiveCategory(cat.name); setSelectedArticle(null); }}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeCategory === cat.name
                      ? "bg-blue-100 text-blue-700"
                      : "text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <cat.icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{cat.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white overflow-y-auto p-6">
          {!activeCategory ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <Scale className="h-12 w-12 text-slate-200 mb-4" />
              <h3 className="text-lg font-medium text-slate-900">Kategoriyani tanlang</h3>
              <p className="mt-1 text-sm text-slate-500">Chap tomondagi ro'yxatdan kerakli huquq sohasini tanlang.</p>
            </div>
          ) : !selectedArticle ? (
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-6">{activeCategory}</h2>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleArticleClick(`Modda ${num}`)}
                    className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-left group"
                  >
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-blue-700">Modda {num}</h4>
                      <p className="text-sm text-slate-500 mt-1">Ushbu modda bo'yicha qisqacha ma'lumot...</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto pb-12">
              <button
                onClick={() => setSelectedArticle(null)}
                className="mb-6 text-sm text-blue-600 hover:underline flex items-center gap-1"
              >
                &larr; Ro'yxatga qaytish
              </button>

              <h2 className="text-2xl font-bold text-slate-900 mb-6">{selectedArticle.title}</h2>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <button className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200">
                  <BookmarkPlus className="h-4 w-4" /> Sevimliga qo'shish
                </button>
                <button className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200">
                  <Volume2 className="h-4 w-4" /> Ovozli o'qish
                </button>
                <button className="inline-flex items-center gap-2 rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200">
                  <Edit3 className="h-4 w-4" /> Eslatma qo'shish
                </button>
              </div>

              <div className="prose prose-blue max-w-none mb-10">
                <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{selectedArticle.text}</p>
              </div>

              {selectedArticle.explanation && (
                <div className="mb-6 rounded-xl bg-blue-50 p-5 border border-blue-100">
                  <h4 className="font-semibold text-blue-900 flex items-center gap-2 mb-2">
                    📌 Oddiy tilda tushuntirish
                  </h4>
                  <p className="text-sm text-blue-800">{selectedArticle.explanation}</p>
                </div>
              )}

              {selectedArticle.example && (
                <div className="mb-6 rounded-xl bg-emerald-50 p-5 border border-emerald-100">
                  <h4 className="font-semibold text-emerald-900 flex items-center gap-2 mb-2">
                    ⚖️ Amaliy misol
                  </h4>
                  <p className="text-sm text-emerald-800">{selectedArticle.example}</p>
                </div>
              )}

              {selectedArticle.related && selectedArticle.related.length > 0 && (
                <div className="rounded-xl border border-slate-200 p-5">
                  <h4 className="font-semibold text-slate-900 flex items-center gap-2 mb-3">
                    🔗 Bog'liq moddalar
                  </h4>
                  <div className="flex flex-col gap-2">
                    {selectedArticle.related.map((rel: string) => (
                      <button key={rel} onClick={() => handleArticleClick(rel)} className="text-left text-sm text-blue-600 hover:underline flex items-center gap-2">
                        <CornerDownRight className="h-4 w-4 text-slate-400" />
                        {rel}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
