import { GraduationCap, Book, HelpCircle, CheckCircle } from "lucide-react";

const courses = [
  "Konstitutsiyaviy huquq",
  "Fuqarolik huquqi",
  "Jinoyat huquqi",
  "Mehnat huquqi",
  "Ma'muriy huquq",
  "Soliq huquqi",
  "Oila huquqi",
  "Yer huquqi",
  "Uy-joy huquqi",
  "Fuqarolik protsessi",
  "Jinoyat protsessi",
  "Iqtisodiy protsess"
];

export function YuristAcademy() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-purple-600" />
            Yurist Academy
          </h1>
          <p className="mt-1 text-sm text-slate-500">Huquq sohalari bo'yicha o'quv materiallari va testlar</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-purple-300 transition-colors cursor-pointer group">
            <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-purple-600">{course}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"><Book className="h-3 w-3" /> Nazariya</span>
              <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"><CheckCircle className="h-3 w-3" /> Norma</span>
              <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"><HelpCircle className="h-3 w-3" /> Test</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
