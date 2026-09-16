import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Legal Assistant API
  app.post("/api/assistant", async (req, res) => {
    try {
      const { prompt } = req.body;
      const systemInstruction = `You are an AI Legal Assistant for "AI Lawyer Pro Uz".
Your purpose is to help users with legal questions regarding the laws of Uzbekistan.

IMPORTANT RULES:
1. NEVER invent laws or articles.
2. If you don't know the exact law, say: "Bu ma'lumotni rasmiy manbadan tekshirish kerak."
3. At the end of every response, provide a "📚 Manbalar" section citing official sources like Lex.uz, advice from Ministry of Justice, etc.
4. Do not provide subjective opinions like "Menimcha" or "ehtimol". Answer factually based on law.
5. Format the output with clear sections.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-pro",
        contents: prompt,
        config: {
          systemInstruction,
        },
      });

      res.json({ response: response.text });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Case Simulator API
  app.post("/api/simulator", async (req, res) => {
    try {
      const { caseText, userAnswers } = req.body;
      const prompt = `Case Simulator Analysis.
      
      Case: ${caseText}
      
      User's Answers:
      1. Muammoni aniqlash: ${userAnswers.problem}
      2. Qaysi huquq sohasi?: ${userAnswers.field}
      3. Qaysi norma?: ${userAnswers.norm}
      4. Qanday hujjat kerak?: ${userAnswers.document}
      5. Qanday harakat qilish kerak?: ${userAnswers.action}
      
      Analyze the user's answers. For each point, state if it is To'g'ri, Qisman to'g'ri, or Noto'g'ri, and provide a brief explanation according to Uzbekistan law. Keep it educational. NEVER invent laws.`;
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      res.json({ response: response.text });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });


  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
