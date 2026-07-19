export default function Footer() {
  return (
    <div className="w-full bg-yellow-500 border-t-2 border-slate-950 mt-auto">
      {/* 5. FOOTER */}
      <footer className="w-full bg-yellow-500 border-t-2 border-slate-950 mt-auto">
        <div className="w-full max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold text-slate-950">
            © {new Date().getFullYear()} GPA.sim. Build your academic roadmap.
          </p>
          <span className="text-black/100 text-xs font-bold">
            Ohene Emmanuel Kwakye
          </span>
          <div className="flex gap-4">
            <a
              href="/GPA"
              className="text-xs font-bold text-slate-950 hover:underline decoration-white decoration-2 underline-offset-4"
            >
              Launch App
            </a>
            <span className="text-slate-950/40">|</span>
            <p className="text-xs font-bold text-slate-950/80">
              Made for Students
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}