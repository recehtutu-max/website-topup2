"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  {
    id: 1,
    question: "Apakah Diamonds/Chips/Item Game dari VoucherAnakBangsa.com Legal?",
    answer: "Ya, semua produk kami 100% legal dan bersumber dari distributor resmi.",
  },
  {
    id: 2,
    question: "Bagaimana Cara Top-Up Diamonds atau Beli Voucher?",
    answer: "Pilih game, masukkan ID akun Anda, pilih nominal, dan selesaikan pembayaran. Item akan langsung dikirim ke akun Anda.",
  },
  {
    id: 3,
    question: "Apakah Bisa Bayar Menggunakan QRIS?",
    answer: "Tentu saja, kami mendukung berbagai metode pembayaran termasuk QRIS, e-wallet, dan transfer bank.",
  },
  {
    id: 4,
    question: "Pembayaran Berhasil, Tapi Item Belum Diterima?",
    answer: "Harap tunggu 1-5 menit. Jika masih belum masuk, silakan hubungi layanan pelanggan kami dengan menyertakan bukti pembayaran.",
  },
  {
    id: 5,
    question: "Mengapa Harus Beli di VoucherAnakBangsa.com?",
    answer: "Kami menawarkan harga kompetitif, proses instan, dan layanan pelanggan 24/7.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <span className="mb-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            Pertanyaan Umum
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto md:text-base">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan
            kami
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={faq.id}
              className={`rounded-xl border transition-all duration-200 ${
                openId === faq.id
                  ? "border-primary/50 bg-card/80"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left font-medium text-card-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-white sm:text-lg text-sm">{faq.question}</span>
                </div>
                {openId === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-primary shrink-0 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0 transition-transform" />
                )}
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-5 pt-0 text-muted-foreground border-t border-border/50 mt-2 p-4">
                  <p className="pl-12 text-sm md:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
