"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const user = existingUsers.find((u: any) => u.email === email && u.password === password);

    if (!user) {
      setError("Invalid email or password");
      return;
    }

    // Set currentUser to simulate login session
    localStorage.setItem("currentUser", JSON.stringify({ name: user.name, email: user.email }));
    
    // Redirect to home
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[400px] rounded-2xl bg-card border border-border p-8 shadow-2xl">
          <h1 className="text-2xl font-bold text-center text-primary mb-8">
            Login
          </h1>
          
          {error && (
            <div className="mb-4 rounded bg-red-500/10 p-3 text-sm text-red-500 border border-red-500/20 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-muted-foreground"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-muted-foreground"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg shadow-primary/20"
            >
              Login
            </button>
          </form>

          <p className="mt-6 flex justify-center text-sm text-muted-foreground">
            {"Don't have an account?"}&nbsp;
            <Link href="/daftar" className="font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded">
              Register
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
