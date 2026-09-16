import { Search, Scale, FileText, Landmark, Building, Gavel, Globe, BookOpen, ExternalLink } from "lucide-react";

const categories = [
  { name: "Qonun qidirish", icon: Search, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Kodekslar", icon: Scale, color: "text-indigo-500", bg: "bg-indigo-50" },
  { name: "Qonunlar", icon: FileText, color: "text-emerald-500", bg: "bg-emerald-50" },
  { name: "Prezident hujjatlari", icon: Landmark, color: "text-amber-500", bg: "bg-amber-50" },
  { name: "Hukumat hujjatlari", icon: Building, color: "text-cyan-500", bg: "bg-cyan-50" },
  { name: "Sud hujjatlari", icon: Gavel, color: "text-red-500", bg: "bg-red-50" },
  { name: "Xalqaro hujjatlar", icon: Globe, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Sud amaliyoti", icon: BookOpen, color: "text-teal-500", bg: "bg-teal-50" },
];

export function LexUz() {
  const openLexUz = () => {
    window.open("https://lex.uz/uz/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Scale className="h-6 w-6 text-blue-600" />
            LexUZ — Qonunchilik bazasi
          </h1>
          <p className="mt-1 text-sm text-slate-500">Asosiy rasmiy huquqiy manba</p>
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            🟢 Rasmiy manba
          </span>
        </div>
      </div>

      <div className="mb-8 rounded-xl bg-blue-50 p-6 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-blue-900">Rasmiy manbaga o'tish</h3>
          <p className="text-sm text-blue-700 mt-1">Lex.uz ochiq API ga ega emasligi sababli, ma'lumotlarni rasmiy saytdan tekshirish tavsiya etiladi.</p>
        </div>
        <button
          onClick={openLexUz}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 whitespace-nowrap"
        >
          LexUZ'ni ochish
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={openLexUz}
            className="group relative flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${category.bg}`}>
              <category.icon className={`h-6 w-6 ${category.color}`} />
            </div>
            <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 text-center">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
