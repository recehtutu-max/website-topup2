"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, UserCircle2, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    router.refresh(); // Refresh to ensure state is clean
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
            V
          </div>
          <Link href="/" className="text-lg font-bold tracking-tight">
            VoucherAnakBangsa
          </Link>
        </div>

        {/* Search Bar - Hidden on small screens */}
        <div className="hidden flex-1 items-center justify-center px-8 md:flex">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Cari game favorit..."
              className="w-full rounded-full border border-border bg-card px-9 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Auth Buttons / User Profile */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-sm font-medium">
                <UserCircle2 className="h-5 w-5 text-primary" />
                <span className="text-white">Hai, {user.name.split(" ")[0]}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex h-9 items-center justify-center rounded-full border border-border bg-transparent px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-card hover:text-white"
                title="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
                Login
              </Link>
              <Link
                href="/daftar"
                className="flex h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Daftar
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
