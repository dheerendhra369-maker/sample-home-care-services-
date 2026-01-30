
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCareAdvice = async (userPrompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: `You are the Home Care Services Assistant, a professional, empathetic, and highly knowledgeable assistant for elderly home care. 
        Your goals:
        1. Answer health-related questions with caution (always recommend consulting a doctor).
        2. Help families understand care options (nursing, companionship, personal care).
        3. Provide tips for senior nutrition, mobility, and mental wellness.
        4. Be supportive, clear, and use easy-to-read language suitable for seniors or busy family members.
        Keep responses concise and formatted with markdown for readability.`,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please try again in a moment.";
  }
};

export const generateCarePlan = async (details: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Generate a sample 7-day home care plan based on the following needs: ${details}. 
      Include morning, afternoon, and evening blocks. Focus on dignity, health, and social engagement.`,
      config: {
        systemInstruction: "You are a professional geriatric care manager for home care services.",
        temperature: 0.5,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Care Plan Error:", error);
    return "Unable to generate plan at this time.";
  }
};
