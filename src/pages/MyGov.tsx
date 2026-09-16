import { Building2, ChevronRight, CheckCircle2, Circle, AlertCircle } from "lucide-react";
import { useState } from "react";

const services = [
  { name: "Adliya", desc: "Adliya xizmatlari, FHDYo, notariat" },
  { name: "Biznes", desc: "Tadbirkorlikni ro'yxatdan o'tkazish", isSimulator: true },
  { name: "Litsenziya", desc: "Ruxsatnomalar va litsenziyalar" },
  { name: "Soliqlar", desc: "Soliq deklaratsiyalari va to'lovlar" },
  { name: "Fuqarolik", desc: "Pasport, propiska va ma'lumotnomalar" },
  { name: "Ko'chmas mulk", desc: "Kadastr va mulk huquqi" },
  { name: "Transport", desc: "Avtotransport va jarimalar" },
  { name: "Oila", desc: "Nikoh, tug'ilish va aliment" },
  { name: "Mehnat", desc: "Bandlik va mehnat munosabatlari" },
  { name: "Ta'lim", desc: "Ta'lim va malaka oshirish" },
];

export function MyGov() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const renderSimulator = () => {
    const steps = [
      "Kerakli ma'lumotlarni tayyorlash",
      "Ta'sischilar ma'lumotlari",
      "Tashkilot nomi",
      "Faoliyat turi",
      "Hujjatlar",
      "Ariza",
      "Tekshirish",
      "Natija"
    ];

    return (
      <div className="max-w-4xl mx-auto pb-12">
        <button
          onClick={() => { setActiveService(null); setStep(1); }}
          className="mb-6 text-sm text-cyan-600 hover:underline flex items-center gap-1"
        >
          &larr; Kategoriyalarga qaytish
        </button>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
          <div className="p-6 border-b border-slate-200 bg-cyan-50 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">Yuridik shaxsni ro'yxatdan o'tkazish (MChJ)</h2>
              <p className="text-sm text-cyan-800">Tadbirkorlik subyektini davlat ro'yxatidan o'tkazish jarayoni o'quv simulyatori.</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800 uppercase tracking-wider border border-amber-200">
              <AlertCircle className="h-4 w-4" /> Simulyator / O'quv rejimi
            </span>
          </div>

          <div className="p-6 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-64 shrink-0">
              <nav aria-label="Progress">
                <ol role="list" className="overflow-hidden">
                  {steps.map((stepName, index) => {
                    const stepNumber = index + 1;
                    return (
                      <li key={stepName} className={`relative pb-6 ${index !== steps.length - 1 ? '' : 'pb-0'}`}>
                        {index !== steps.length - 1 ? (
                          <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-slate-200" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex items-center group cursor-pointer" onClick={() => stepNumber < step && setStep(stepNumber)}>
                          <span className="h-9 flex items-center">
                            <span className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full ${
                              stepNumber < step ? 'bg-cyan-600' : stepNumber === step ? 'border-2 border-cyan-600 bg-white' : 'border-2 border-slate-300 bg-white'
                            }`}>
                              {stepNumber < step ? (
                                <CheckCircle2 className="h-5 w-5 text-white" />
                              ) : stepNumber === step ? (
                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-600" />
                              ) : (
                                <span className="h-2.5 w-2.5 rounded-full bg-transparent" />
                              )}
                            </span>
                          </span>
                          <span className="ml-4 flex min-w-0 flex-col">
                            <span className={`text-sm font-medium ${stepNumber <= step ? 'text-cyan-600' : 'text-slate-500'}`}>{stepName}</span>
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>

            <div className="flex-1">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 h-full">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{steps[step - 1]}</h3>
                
                {step === 1 && (
                  <div className="space-y-4 text-sm text-slate-700">
                    <p>Ro'yxatdan o'tkazish uchun quyidagilar talab etiladi:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Ta'sischilarning pasport ma'lumotlari va JShShIR</li>
                      <li>Tasdiqlangan ustav fondi miqdori</li>
                      <li>Yuridik manzil (ijara shartnomasi yoki kadastr raqami)</li>
                      <li>Elektron raqamli imzo (ERI)</li>
                    </ul>
                  </div>
                )}
                
                {step > 1 && step < 8 && (
                  <div className="space-y-4 text-sm text-slate-700 flex items-center justify-center h-48 bg-white border border-dashed border-slate-300 rounded-lg">
                    Interaktiv shakl maydonlari (O'quv rejimida yashiringan)
                  </div>
                )}

                {step === 8 && (
                  <div className="text-center py-8">
                    <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-500 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Arizangiz muvaffaqiyatli topshirildi</h3>
                    <p className="text-slate-500">Davlat boji: 340,000 UZS (Misol uchun).</p>
                    <p className="text-slate-500">Natija 30 daqiqa ichida shaxsiy kabinetingizga yuboriladi.</p>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  {step < 8 && (
                    <button
                      onClick={() => setStep(step + 1)}
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500"
                    >
                      Keyingi qadam
                    </button>
                  )}
                  {step === 8 && (
                    <button
                      onClick={() => { setActiveService(null); setStep(1); }}
                      className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                    >
                      Tugatish
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-slate-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-cyan-600" />
              Davlat Xizmatlari Katalogi
            </h1>
            <p className="mt-1 text-sm text-slate-500">Ilova ichida interaktiv davlat xizmatlari simulyatori va qo'llanmalar</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-6 lg:p-8">
        {!activeService ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service) => (
              <div 
                key={service.name} 
                onClick={() => {
                  if (service.isSimulator) setActiveService(service.name);
                }}
                className={`bg-white rounded-xl border border-slate-200 p-6 shadow-sm transition-all group ${service.isSimulator ? 'cursor-pointer hover:border-cyan-300 hover:shadow-md' : 'opacity-75'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-lg font-bold ${service.isSimulator ? 'text-slate-900 group-hover:text-cyan-700' : 'text-slate-700'}`}>
                    {service.name}
                  </h3>
                  {service.isSimulator && (
                    <span className="inline-flex items-center rounded-full bg-cyan-100 px-2 py-0.5 text-xs font-semibold text-cyan-800">
                      Simulyator
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500 mb-4">{service.desc}</p>
                {service.isSimulator ? (
                  <div className="text-cyan-600 text-sm font-semibold flex items-center gap-1 group-hover:underline">
                    O'quv rejimini ochish <ChevronRight className="h-4 w-4" />
                  </div>
                ) : (
                  <div className="text-slate-400 text-sm italic">
                    Tez orada qo'shiladi...
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          renderSimulator()
        )}
      </div>
    </div>
  );
}
