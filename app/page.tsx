import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-white px-6 py-10 text-[#212121]">
      <section className="w-full max-w-sm rounded-[28px] border border-black/10 bg-white p-6 text-center shadow-[0_16px_48px_rgba(33,33,33,0.08)]">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-[24px] bg-[#FFC107] shadow-[0_12px_32px_rgba(255,193,7,0.35)]">
          <Image
            src="/icon.svg"
            alt="Logo sementara Bandung Ride Radar"
            width={56}
            height={56}
            priority
          />
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#E53935]">
          Foundation Sprint
        </p>
        <h1 className="text-[22px] font-bold leading-tight">Bandung Ride Radar</h1>
        <p className="mt-4 text-[15px] leading-6 text-[#212121]/75">
          PWA berbasis GIS untuk membantu pengemudi menemukan area peluang permintaan relatif tinggi
          menggunakan data publik.
        </p>
        <p className="mt-6 rounded-2xl bg-[#FFC107]/20 px-4 py-3 text-sm font-medium text-[#212121]">
          Proyek sedang dalam tahap pengembangan fondasi.
        </p>
      </section>
    </main>
  );
}
