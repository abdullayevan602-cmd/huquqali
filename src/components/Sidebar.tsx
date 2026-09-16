import { NavLink } from "react-router-dom";
import { 
  Home, 
  Scale, 
  Search, 
  BookOpen, 
  Building2, 
  Briefcase, 
  GraduationCap, 
  BrainCircuit, 
  MessageSquare
} from "lucide-react";
import { clsx } from "clsx";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "LexUZ Bazasi", href: "/lexuz", icon: Scale },
  { name: "Huquqiy Qidiruv", href: "/search", icon: Search },
  { name: "Sud Amaliyoti", href: "/court", icon: BookOpen },
  { name: "Davlat Xizmatlari", href: "/mygov", icon: Building2 },
  { name: "Due Diligence", href: "/due-diligence", icon: Briefcase },
  { name: "Yurist Academy", href: "/academy", icon: GraduationCap },
  { name: "Case Simulator", href: "/simulator", icon: BrainCircuit },
  { name: "AI Legal Assistant", href: "/assistant", icon: MessageSquare },
];

export function Sidebar() {
  return (
    <div className="flex h-full w-64 flex-col bg-slate-900 text-slate-300">
      <div className="flex h-16 shrink-0 items-center px-6">
        <span className="text-xl font-bold text-white flex items-center gap-2">
          <Scale className="h-6 w-6 text-blue-500" />
          AI Lawyer Pro Uz
        </span>
      </div>
      <nav className="flex flex-1 flex-col overflow-y-auto px-4 py-4">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Huquqiy Resurslar
        </div>
        <ul className="flex flex-1 flex-col gap-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  clsx(
                    isActive
                      ? "bg-slate-800 text-white"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white",
                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors"
                  )
                }
              >
                <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
