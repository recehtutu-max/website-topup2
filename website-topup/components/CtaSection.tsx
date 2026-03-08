import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl flex flex-col items-center justify-center text-center space-y-16">
        {/* Chat Kami */}
        <div className="flex flex-col items-center">
          <p className="text-muted-foreground mb-4">Masih punya pertanyaan?</p>
          <a
            href="https://wa.me/123456789" // Replace with actual WA link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary gap-2 shadow-lg shadow-primary/20"
          >
            <MessageCircle className="h-5 w-5" />
            Chat dengan Kami
          </a>
        </div>

        {/* Jual Voucher */}
        <div className="flex flex-col items-center space-y-4 max-w-xl">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary inline-flex">
            Jual Voucher Game
          </span>
          <p className="text-muted-foreground md:text-lg">
            Tukar voucher game yang tidak terpakai menjadi uang tunai. Proses
            cepat, aman, dan terpercaya.
          </p>
          <Link
            href="/login"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 mt-2 shadow-lg shadow-primary/20"
          >
            Login untuk Jual Voucher
          </Link>
        </div>
      </div>
    </section>
  );
}
