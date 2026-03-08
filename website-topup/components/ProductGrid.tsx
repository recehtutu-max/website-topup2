import Image from "next/image";
import Link from "next/link";

// Using Unsplash source URLs with keywords that somewhat match the games
const GAMES = [
  { id: "ml", name: "Mobile Legends...", publisher: "Top up Mobile Legends Diamonds for purchasing...", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop", soon: false }, // Generic gaming for MLBB
  { id: "mc", name: "Magic Chess Vouchers", publisher: "Purchase Magic Chess Passes for...", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop", soon: true }, // Chess/Strategy
  { id: "ff", name: "Free Fire Diamonds", publisher: "Get Free Fire Diamonds to buy exclusive skins, characters, an...", image: "https://images.unsplash.com/photo-1614030638541-61f2238cfaea?q=80&w=800&auto=format&fit=crop", soon: false }, // Fire/Action for FF
  { id: "ffm", name: "Free Fire MAX...", publisher: "Top up Free Fire MAX Diamonds for enhanced gaming experien...", image: "https://images.unsplash.com/photo-1563544955-460959fc4313?q=80&w=800&auto=format&fit=crop", soon: true }, // Orange/Fire theme
  { id: "pubg", name: "PUBG Mobile UC", publisher: "Purchase PUBG Mobile Unknown Cash (UC) for...", image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop", soon: false }, // Soldier/Military theme
  { id: "hok", name: "Honor of Kings", publisher: "Top up", image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=800&auto=format&fit=crop", soon: true }, // Moba theme
  { id: "gi", name: "Genshin Impact", publisher: "Top up", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop", soon: true }, // Anime/Fantasy theme
  { id: "hsr", name: "Honkai: Star Rail", publisher: "Top up", image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop", soon: true }, // Sci-fi/Space theme
  { id: "zzz", name: "Zenless Zone Zero", publisher: "Top up", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop", soon: true }, // Cyberpunk theme
  { id: "aov", name: "Arena of Valor", publisher: "Top up", image: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=800&auto=format&fit=crop", soon: true }, // MOBA theme
];
export default function ProductGrid() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <span className="mb-3 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Produk Unggulan
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Voucher Game Terpopuler
          </h2>
          <p className="mt-2 text-muted-foreground">
            Pilih dari berbagai macam voucher digital dan kredit game yang kami sediakan
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {GAMES.map((game) => (
            <Link
              key={game.id}
              href={`/game/${game.id}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-card transition-all hover:ring-2 hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted group-hover:opacity-90 transition-opacity">
                {/* Fallback color/icon if image fails */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-muted-foreground text-xs">
                  {game.name}
                </div>
                
                {/* Actual image */}
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />

                {game.soon && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-[2px] transition-opacity">
                    <span className="rounded-full bg-black/80 px-4 py-1.5 text-xs font-bold text-white shadow-xl shadow-black/50 border border-white/10">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4 bg-card z-20 relative">
                <h3 className="line-clamp-1 font-bold text-card-foreground group-hover:text-primary transition-colors">
                  {game.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                  {game.publisher}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
