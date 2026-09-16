import { MessageSquare, Send, Bot, User, AlertTriangle } from "lucide-react";
import { useState } from "react";

export function AIAssistant() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: "Assalomu alaykum! Men AI Legal Assistantman. O'zbekiston qonunchiligiga oid huquqiy savollaringizni berishingiz mumkin." }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = prompt;
    setPrompt("");
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Kechirasiz, xatolik yuz berdi. Iltimos qayta urinib ko'ring." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-4 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-blue-600" />
            AI Legal Assistant
          </h1>
          <p className="mt-1 text-sm text-slate-500">Huquqiy maslahat va tahlil</p>
        </div>
      </div>

      <div className="mb-4 rounded-lg bg-amber-50 p-4 border border-amber-200 shrink-0 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-amber-900 text-sm">Muhim eslatma</h4>
          <p className="text-sm text-amber-800 mt-1">
            Men sun'iy intellektman. Javoblarimni fakt sifatida qabul qilishdan oldin, albatta ko'rsatilgan rasmiy manbalar (Lex.uz) orqali tekshiring.
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white rounded-t-xl border border-b-0 border-slate-200 p-6 flex flex-col gap-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-4 ${msg.role === 'assistant' ? '' : 'flex-row-reverse'}`}>
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${msg.role === 'assistant' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
              {msg.role === 'assistant' ? <Bot className="h-6 w-6" /> : <User className="h-6 w-6" />}
            </div>
            <div className={`rounded-2xl px-5 py-4 max-w-[80%] ${msg.role === 'assistant' ? 'bg-blue-50 text-slate-800 rounded-tl-none border border-blue-100' : 'bg-slate-900 text-white rounded-tr-none'}`}>
              <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Bot className="h-6 w-6" />
            </div>
            <div className="rounded-2xl px-5 py-4 bg-blue-50 text-slate-800 rounded-tl-none border border-blue-100 flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white p-4 border border-slate-200 rounded-b-xl shrink-0">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isLoading}
            placeholder="Huquqiy savolingizni yozing..."
            className="block w-full rounded-lg border-0 py-3 px-4 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
