import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">MedAI Doctor</h1>
        <p className="text-gray-500 mb-8">
          An AI-powered clinical voice assistant that conducts medical intake
          interviews and patient onboarding — no sign-in required.
        </p>
        <Link
          href="/consultation"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-black/80 transition-colors font-medium"
        >
          Start AI Consultation →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-xl w-full">
        <div className="border rounded-xl p-5 bg-secondary/10">
          <h2 className="font-semibold mb-1">🎙️ Voice-First</h2>
          <p className="text-sm text-gray-500">
            Speak naturally — the AI doctor listens and responds in real time.
          </p>
        </div>
        <div className="border rounded-xl p-5 bg-secondary/10">
          <h2 className="font-semibold mb-1">🏥 Clinical Interview</h2>
          <p className="text-sm text-gray-500">
            Conducts structured intake interviews to prepare reports for your
            doctor.
          </p>
        </div>
        <div className="border rounded-xl p-5 bg-secondary/10">
          <h2 className="font-semibold mb-1">🔒 Privacy-First</h2>
          <p className="text-sm text-gray-500">
            No account or sign-in required. Your session stays local.
          </p>
        </div>
        <div className="border rounded-xl p-5 bg-secondary/10">
          <h2 className="font-semibold mb-1">🤖 GPT-4 Powered</h2>
          <p className="text-sm text-gray-500">
            Backed by OpenAI GPT-4 for accurate, contextual medical questioning.
          </p>
        </div>
      </div>
    </main>
  );
}
