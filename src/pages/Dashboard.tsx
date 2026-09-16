import { Link } from "react-router-dom";
import { 
  Scale, 
  BookOpen, 
  Building2, 
  Briefcase,
  GraduationCap,
  BrainCircuit,
  Search,
  MessageSquare
} from "lucide-react";

const cards = [
  { name: "LexUZ — Qonunchilik bazasi", href: "/lexuz", icon: Scale, color: "text-blue-600", bg: "bg-blue-100" },
  { name: "Huquqiy qidiruv", href: "/search", icon: Search, color: "text-indigo-600", bg: "bg-indigo-100" },
  { name: "Sud amaliyoti", href: "/court", icon: BookOpen, color: "text-emerald-600", bg: "bg-emerald-100" },
  { name: "Davlat xizmatlari", href: "/mygov", icon: Building2, color: "text-cyan-600", bg: "bg-cyan-100" },
  { name: "Due Diligence", href: "/due-diligence", icon: Briefcase, color: "text-amber-600", bg: "bg-amber-100" },
  { name: "Yurist Academy", href: "/academy", icon: GraduationCap, color: "text-purple-600", bg: "bg-purple-100" },
];

export function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">Xush kelibsiz! Kerakli huquqiy resursni tanlang.</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-800 flex items-center gap-2">
          <Scale className="h-5 w-5 text-slate-500" />
          ⚖️ Huquqiy resurslar
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.name}
              to={card.href}
              className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-blue-300"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${card.bg}`}>
                  <card.icon className={`h-6 w-6 ${card.color}`} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {card.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
