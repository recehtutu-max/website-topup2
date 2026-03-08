"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BANKS = [
  "BCA",
  "Mandiri",
  "BNI",
  "BRI",
  "CIMB Niaga",
  "Bank Syariah Indonesia (BSI)",
  "OVO",
  "GoPay",
  "Dana",
  "ShopeePay",
  "Lainnya"
];

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const bank = formData.get("bank") as string;
    const accountNumber = formData.get("accountNumber") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Mock DB logic
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = existingUsers.some((u: any) => u.email === email);
    
    if (userExists) {
      setError("User with this email already exists");
      return;
    }

    const newUser = { name, email, phone, bank, accountNumber, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Auto login
    localStorage.setItem("currentUser", JSON.stringify({ name, email }));
    
    // Redirect to home
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-[450px] rounded-2xl bg-card border border-border p-8 shadow-2xl">
          <h1 className="text-2xl font-bold text-center text-primary mb-8">
            Register
          </h1>
          
          {error && (
            <div className="mb-4 rounded bg-red-500/10 p-3 text-sm text-red-500 border border-red-500/20 text-center text-balance">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-medium text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-medium text-muted-foreground">
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

            {/* Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs font-medium text-muted-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="e.g., 08123456789"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* Bank Name */}
            <div className="space-y-2">
              <label htmlFor="bank" className="block text-xs font-medium text-muted-foreground">
                Bank Name
              </label>
              <div className="relative">
                <select
                  id="bank"
                  name="bank"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="" disabled hidden>
                    Select your bank
                  </option>
                  {BANKS.map((bank) => (
                    <option key={bank} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bank Account Number */}
            <div className="space-y-2">
              <label htmlFor="accountNumber" className="block text-xs font-medium text-muted-foreground">
                Bank Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                placeholder="Enter your bank account number"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-xs font-medium text-muted-foreground">
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

            {/* Confirm Password */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-xs font-medium text-muted-foreground">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg shadow-primary/20"
            >
              Register
            </button>
          </form>

          <p className="mt-6 flex justify-center text-xs text-muted-foreground">
            {"Already have an account?"}&nbsp;
            <Link href="/login" className="font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded">
              Login
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
