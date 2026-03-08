"use client";

import { useState, use } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Diamond, Zap, ShieldCheck } from "lucide-react";

// Mock Database
const GAME_DB: Record<string, any> = {
  ff: {
    title: "Free Fire Diamonds",
    publisher: "Mobile Gaming",
    banner: "https://images.unsplash.com/photo-1614030638541-61f2238cfaea?q=80&w=2000&auto=format&fit=crop",
    icon: "https://images.unsplash.com/photo-1614030638541-61f2238cfaea?q=80&w=400&auto=format&fit=crop",
    color: "from-orange-900/70 to-background",
    hasServerId: false,
    playerIdLabel: "Masukkan Player ID",
    playerIdHint: "Simpan ID dengan Run Save ID",
    nominals: [
      { id: "ff100", amount: "100 Diamond", price: 15000 },
      { id: "ff120", amount: "120 Diamond", price: 18000 },
      { id: "ff140", amount: "140 Diamond", price: 20000 },
      { id: "ff150", amount: "150 Diamond", price: 22000 },
      { id: "ff160", amount: "160 Diamond", price: 23000 },
      { id: "ff200", amount: "200 Diamond", price: 28000 },
      { id: "ff355", amount: "355 Diamond", price: 50000 },
      { id: "ff720", amount: "720 Diamond", price: 100000 },
      { id: "ff1450", amount: "1450 Diamond", price: 200000 },
    ],
  },
  ml: {
    title: "Mobile Legends Diamonds",
    publisher: "Mobile Gaming",
    banner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400&auto=format&fit=crop",
    color: "from-purple-900/70 to-background",
    hasServerId: true,
    playerIdLabel: "Masukkan Player ID",
    playerIdHint: "Simpan ID dengan Run Save ID",
    serverIdLabel: "Masukkan Server ID",
    serverIdHint: "Server ID dapat dilihat di profil game",
    nominals: [
      { id: "ml59", amount: "59 Diamond", price: 15000 },
      { id: "ml86", amount: "86 Diamond", price: 20000 },
      { id: "ml172", amount: "172 Diamond", price: 40000 },
      { id: "ml257", amount: "257 Diamond", price: 60000 },
      { id: "ml344", amount: "344 Diamond", price: 80000 },
      { id: "ml429", amount: "429 Diamond", price: 100000 },
      { id: "ml514", amount: "514 Diamond", price: 120000 },
      { id: "ml706", amount: "706 Diamond", price: 160000 },
      { id: "ml1050", amount: "1050 Diamond", price: 240000 },
    ],
  },
  pubg: {
    title: "PUBG Mobile UC",
    publisher: "Mobile Gaming",
    banner: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2000&auto=format&fit=crop",
    icon: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=400&auto=format&fit=crop",
    color: "from-amber-900/70 to-background",
    hasServerId: false,
    playerIdLabel: "Masukkan Player ID",
    playerIdHint: "Simpan ID dengan Run Save ID",
    nominals: [
      { id: "pubg60", amount: "60 UC", price: 15000 },
      { id: "pubg70", amount: "70 UC", price: 18000 },
      { id: "pubg105", amount: "105 UC", price: 30000 },
      { id: "pubg120", amount: "120 UC", price: 30000 },
      { id: "pubg62", amount: "62 UC", price: 30000 },
      { id: "pubg73", amount: "73 UC", price: 30000 },
      { id: "pubg122", amount: "122 UC", price: 40000 },
      { id: "pubg125", amount: "125 UC", price: 40000 },
      { id: "pubg131", amount: "131 UC", price: 50000 },
      { id: "pubg325", amount: "325 UC", price: 75000 },
      { id: "pubg660", amount: "660 UC", price: 150000 },
      { id: "royale", amount: "Pubg Royale Pass", price: 100000 },
    ],
  },
  hok: {
    title: "Honor of Kings",
    publisher: "Mobile Gaming",
    banner: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2000&auto=format&fit=crop",
    icon: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=400&auto=format&fit=crop",
    color: "from-blue-900/70 to-background",
    hasServerId: false,
    playerIdLabel: "Masukkan Player ID",
    playerIdHint: "ID dapat dilihat di profil game",
    nominals: [
      { id: "hok60", amount: "60 Tokens", price: 15000 },
      { id: "hok120", amount: "120 Tokens", price: 28000 },
      { id: "hok600", amount: "600 Tokens", price: 130000 },
    ],
  },
  gi: {
    title: "Genshin Impact",
    publisher: "Mobile Gaming",
    banner: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop",
    icon: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop",
    color: "from-sky-900/70 to-background",
    hasServerId: true,
    playerIdLabel: "Masukkan UID",
    playerIdHint: "UID dapat dilihat di profil game",
    serverIdLabel: "Masukkan Server",
    serverIdHint: "Pilih server sesuai akun Anda (Asia, America, dll)",
    nominals: [
      { id: "gi60", amount: "60 Primogems", price: 15000 },
      { id: "gi300", amount: "300 Primogems", price: 73000 },
      { id: "gi980", amount: "980 Primogems", price: 230000 },
      { id: "gi1980", amount: "1980 Primogems", price: 450000 },
      { id: "gi3280", amount: "3280 Primogems", price: 720000 },
      { id: "gi6480", amount: "6480 Primogems", price: 1400000 },
    ],
  },
  mc: {
    title: "Magic Chess Vouchers",
    publisher: "Mobile Gaming",
    banner: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2000&auto=format&fit=crop",
    icon: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=400&auto=format&fit=crop",
    color: "from-emerald-900/70 to-background",
    hasServerId: true,
    playerIdLabel: "Masukkan Player ID",
    playerIdHint: "Player ID ML Kamu",
    serverIdLabel: "Masukkan Server ID",
    serverIdHint: "Server ID dapat dilihat di profil game",
    nominals: [
      { id: "mc7", amount: "7 Magic Chest", price: 15000 },
      { id: "mc21", amount: "21 Magic Chest", price: 40000 },
      { id: "mc77", amount: "77 Magic Chest", price: 130000 },
    ],
  },
};

function formatRupiah(amount: number) {
  return `Rp ${amount.toLocaleString("id-ID")},-`;
}

export default function GamePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const game = GAME_DB[id];

  const [selectedNominal, setSelectedNominal] = useState<any>(null);
  const [playerId, setPlayerId] = useState("");
  const [serverId, setServerId] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (!game) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Game tidak ditemukan</h1>
            <p className="text-muted-foreground">Coba kembali ke halaman utama.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleConfirm = () => {
    if (!selectedNominal) { alert("Pilih nominal top up terlebih dahulu!"); return; }
    if (!playerId) { alert("Masukkan Player ID!"); return; }
    if (game.hasServerId && !serverId) { alert("Masukkan Server ID!"); return; }
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="flex flex-col items-center gap-6 text-center max-w-md">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 border-2 border-primary">
              <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-white">Top Up Berhasil!</h1>
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">{selectedNominal.amount}</span> untuk{" "}
              <span className="text-white font-semibold">{game.title}</span> akan segera diproses ke akun{" "}
              <span className="text-white font-semibold">{playerId}</span>.
            </p>
            <div className="rounded-xl bg-card border border-border p-4 text-sm text-muted-foreground w-full text-left">
              <div className="flex justify-between py-1"><span>Nominal</span><span className="text-white">{selectedNominal.amount}</span></div>
              <div className="flex justify-between py-1"><span>Harga</span><span className="text-primary font-bold">{formatRupiah(selectedNominal.price)}</span></div>
              <div className="flex justify-between py-1"><span>Pembayaran</span><span className="text-white">QRIS</span></div>
            </div>
            <button
              onClick={() => { setConfirmed(false); setSelectedNominal(null); setPlayerId(""); setServerId(""); }}
              className="w-full rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Top Up Lagi
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1 pb-20">
        {/* Banner Section */}
        <div className="relative w-full overflow-hidden bg-background">
          <div className="relative h-[200px] sm:h-[260px] md:h-[300px] w-full">
            <Image
              src={game.banner}
              alt={game.title}
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${game.color}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            <div className="absolute inset-0 container mx-auto px-4 md:px-8 flex flex-row items-end pb-8 gap-5 z-10">
              <div className="relative h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shrink-0">
                <Image src={game.icon} alt={game.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-2 pb-1">
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-md">
                  {game.title}
                </h1>
                <p className="text-xs md:text-sm text-zinc-300">{game.publisher}</p>
                <div className="flex flex-row gap-2 mt-1 flex-wrap">
                  <span className="rounded-full bg-primary/20 border border-primary/50 px-3 py-1 text-xs font-semibold text-primary flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    Customer Service 24/7
                  </span>
                  <span className="rounded-full bg-card border border-border px-3 py-1 text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                    <Zap className="h-3 w-3 text-green-400" />
                    Instant Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 mt-8">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Left: Nominal Grid */}
            <div className="flex-1 min-w-0 rounded-2xl bg-card border border-border p-6">
              <h2 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                <Diamond className="h-4 w-4 text-primary fill-primary" />
                Pilih Nominal Top Up
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {game.nominals.map((n: any) => {
                  const isSelected = selectedNominal?.id === n.id;
                  return (
                    <button
                      key={n.id}
                      onClick={() => setSelectedNominal(n)}
                      className={`flex flex-col items-start gap-1 rounded-xl border p-3.5 text-left transition-all ${
                        isSelected
                          ? "border-primary bg-primary/10 ring-1 ring-primary"
                          : "border-border bg-background hover:border-primary/40 hover:bg-card"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Diamond className={`h-3.5 w-3.5 shrink-0 ${isSelected ? "text-primary fill-primary" : "text-muted-foreground"}`} />
                        <span className={`text-sm font-semibold ${isSelected ? "text-primary" : "text-white"}`}>
                          {n.amount}
                        </span>
                      </div>
                      <span className={`text-xs pl-5 ${isSelected ? "text-primary/80" : "text-muted-foreground"}`}>
                        {formatRupiah(n.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Order Info */}
            <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-4">
              {/* Order Info */}
              <div className="rounded-2xl bg-card border border-border p-6 flex flex-col gap-4">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Informasi Pesanan
                </h2>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-muted-foreground">{game.playerIdLabel}</label>
                  <input
                    type="text"
                    value={playerId}
                    onChange={(e) => setPlayerId(e.target.value)}
                    placeholder="Enter your Player ID"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                  {game.playerIdHint && (
                    <p className="text-xs text-muted-foreground">{game.playerIdHint}</p>
                  )}
                </div>
                {game.hasServerId && (
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-medium text-muted-foreground">{game.serverIdLabel}</label>
                    <input
                      type="text"
                      value={serverId}
                      onChange={(e) => setServerId(e.target.value)}
                      placeholder="Enter your Server ID"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    />
                    {game.serverIdHint && (
                      <p className="text-xs text-muted-foreground">{game.serverIdHint}</p>
                    )}
                  </div>
                )}

                {/* Payment Method */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-muted-foreground">Pilih Pembayaran</label>
                  <div className="flex items-center justify-between rounded-xl border border-primary bg-primary/5 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded bg-white px-2 py-1 text-xs font-bold text-black">QRIS</div>
                      <span className="text-sm font-medium text-white">QRIS</span>
                    </div>
                    <span className="text-sm font-bold text-primary">
                      {selectedNominal ? formatRupiah(selectedNominal.price) : "Rp 0,-"}
                    </span>
                  </div>
                </div>

                {/* Payment Instructions */}
                <div className="rounded-xl bg-background border border-border p-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Cara Pembayaran:</p>
                  <ol className="list-decimal list-inside space-y-1 text-xs text-muted-foreground">
                    <li>Scan QR Code yang muncul setelah konfirmasi</li>
                    <li>Pilih aplikasi e-wallet atau mobile banking</li>
                    <li>Masukkan nominal pembayaran</li>
                    <li>Konfirmasi pembayaran</li>
                  </ol>
                </div>

                {/* Confirm Button */}
                <button
                  onClick={handleConfirm}
                  className="w-full mt-1 rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg shadow-primary/20 disabled:opacity-50"
                  disabled={!selectedNominal}
                >
                  Konfirmasi Top Up
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
