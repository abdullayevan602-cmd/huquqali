import { Building2, ExternalLink } from "lucide-react";

const services = [
  { name: "Adliya", desc: "Adliya xizmatlari, FHDYo, notariat", url: "https://my.gov.uz/uz/all-services?id=1" },
  { name: "Biznes", desc: "Tadbirkorlikni ro'yxatdan o'tkazish", url: "https://my.gov.uz/uz/all-services?id=2" },
  { name: "Litsenziya", desc: "Ruxsatnomalar va litsenziyalar", url: "https://my.gov.uz/uz/all-services?id=3" },
  { name: "Soliqlar", desc: "Soliq deklaratsiyalari va to'lovlar", url: "https://my.gov.uz/uz/all-services?id=4" },
  { name: "Fuqarolik", desc: "Pasport, propiska va ma'lumotnomalar", url: "https://my.gov.uz/uz/all-services?id=5" },
  { name: "Ko'chmas mulk", desc: "Kadastr va mulk huquqi", url: "https://my.gov.uz/uz/all-services?id=6" },
];

export function MyGov() {
  const openGovSite = (url = "https://my.gov.uz/uz") => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Building2 className="h-6 w-6 text-cyan-600" />
            Davlat Xizmatlari
          </h1>
          <p className="mt-1 text-sm text-slate-500">My.gov.uz - Yagona interaktiv davlat xizmatlari portali</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.name} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-slate-900 mb-1">{service.name}</h3>
            <p className="text-sm text-slate-500 mb-4 h-10">{service.desc}</p>
            <button
              onClick={() => openGovSite(service.url)}
              className="inline-flex w-full justify-center items-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-sm font-semibold text-cyan-700 ring-1 ring-inset ring-slate-300 hover:bg-cyan-50 transition-colors"
            >
              Xizmatni ochish
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
