import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-4 md:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
                V
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                VoucherAnakBangsa
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Platform terpercaya untuk top up game dan produk digital. Cepat,
              aman, dan siap 24/7.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white">Navigasi</h4>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary w-fit">
                About us
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary w-fit">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary w-fit">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white">Hubungi Kami</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:admin@VoucherAnakBangsa.com" className="flex items-center gap-2 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary w-fit">
                <Mail className="h-4 w-4" />
                admin@VoucherAnakBangsa.com
              </a>
              <a href="tel:085811959392" className="flex items-center gap-2 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary w-fit">
                <Phone className="h-4 w-4" />
                085811959392
              </a>
            </div>
          </div>

          {/* Small CTA embedded in Footer */}
          <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
            <h4 className="font-semibold text-white">Siap top up sekarang?</h4>
            <p className="text-sm text-muted-foreground">
              Nikmati pengalaman checkout baru yang lebih cepat dan lebih jelas.
            </p>
            <Link
              href="/"
              className="inline-flex h-9 items-center justify-center rounded-full bg-primary/20 hover:bg-primary/30 text-primary w-fit px-4 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Jelajahi Produk
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-center border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>© 2025 VoucherAnakBangsa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
