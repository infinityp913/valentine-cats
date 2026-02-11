'use client';

import { useEffect, useState } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function Home() {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate floating hearts
    const heartArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
    }));
    setHearts(heartArray);
  }, []);

  return (
    <div className="menu-background relative min-h-screen overflow-hidden">
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff69b4" opacity="0.8">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      ))}

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Header */}
        <div className={`text-center mb-10 animate-fadeIn ${playfair.className}`}>
          <p className="header-label">Maison Radha</p>
          <p className="header-sub">Redwood City ↔ Toronto</p>
          <h1 className="header-title">
            Happy Valentine&apos;s Day, Radha
          </h1>
        </div>

        {/* Hero GIF */}
        <div className="hero-gif-frame animate-fadeIn">
          <div className="hero-gif-inner">
            <img 
              src="https://c.tenor.com/ulvpUN0f3MwAAAAd/tenor.gif"
              alt="Fancy feast cats dining together"
            />
          </div>
          <p className="hero-caption">Fancy Feast Interlude</p>
        </div>

        {/* Main Card */}
        <div className={`max-w-4xl w-full bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-rose-200/30 ${playfair.className}`}>
          <div className="text-center mb-10">
            <div className="purrson-title-row">
              <h3 className="text-5xl text-rose-50 tracking-wide">
                You&apos;re My Purrson
              </h3>
              <img 
                src="https://media.tenor.com/gdnRDtPCBd0AAAAM/cats-cat.gif" 
                alt="Cat offering a rose"
                className="purrson-rose-gif"
              />
            </div>
            <p className="text-xl text-rose-200 uppercase tracking-[0.3em]">
              Service pour Deux
            </p>
          </div>

          {/* Date Itinerary as Menu */}
          <div className="menu-shell">
          <section className="menu-card">
            <p className="menu-label">Chef&apos;s Pairing · February 14</p>

            <div className="menu-item">
              <div>
                <p className="menu-course">Premier Service · Twilight Supper</p>
                <p className="menu-desc">
                  I sit down at 4:00 PM in Redwood City, you at 7:00 PM in Toronto, yet the table feels the same. <br/> And then we watch Saifu in Love Aaj Kal.
                </p>
              </div>
              <div className="menu-times">
                <span>4:00 PM PT</span>
                <span>7:00 PM ET</span>
              </div>
            </div>
          </section>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <p className={`${playfair.className} footer-title`}>Until We Share the Same Couch</p>
            <p className="footer-copy">
              Thank you for being my favorite catto, Radha. Bapping you until I bap you irl again.
            </p>
          </div>
          <img 
            src="https://media1.tenor.com/m/tHNO9lvp7FcAAAAd/cat-fight-cats.gif" 
            alt="Cats pawing at each other"
            className="footer-gif"
          />
        </div>
      </footer>

      <style jsx>{`
        .menu-background {
          background:
            radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), transparent 45%),
            radial-gradient(circle at 20% 80%, rgba(252, 231, 243, 0.12), transparent 35%),
            linear-gradient(135deg, #1b0f14, #2c0f1f 45%, #13070c 90%);
          color: #fde8f4;
        }

        .menu-background::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0, rgba(255, 255, 255, 0.02) 2px, transparent 2px, transparent 6px);
          opacity: 0.4;
        }

        .header-label {
          text-transform: uppercase;
          letter-spacing: 0.6em;
          font-size: 0.85rem;
          color: #f8c3d5;
          margin-bottom: 0.75rem;
        }

        .header-sub {
          letter-spacing: 0.35em;
          font-size: 0.95rem;
          color: #f5b3d0;
          margin-bottom: 1.5rem;
        }

        .header-title {
          font-size: clamp(3rem, 6vw, 5.5rem);
          color: #ffeef7;
          text-shadow: 0 15px 35px rgba(0, 0, 0, 0.55);
        }

        .hero-gif-frame {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .hero-gif-inner {
          padding: 0.4rem;
          width: min(720px, 94vw);
          height: min(360px, 56vw);
          box-sizing: border-box;
          border-radius: 1.75rem;
          background: linear-gradient(135deg, rgba(255, 228, 233, 0.25), rgba(255, 255, 255, 0.05));
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
        }

        .hero-gif-inner img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.4);
        }

        .hero-caption {
          letter-spacing: 0.4em;
          text-transform: uppercase;
          font-size: 0.75rem;
          color: #f9c5d2;
        }


        .heart {
          position: absolute;
          font-size: 2rem;
          animation: float-up linear infinite;
          opacity: 0.8;
          pointer-events: none;
          z-index: 5;
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .purrson-title-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }

        .purrson-rose-gif {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 1.5rem;
          border: 4px solid #fb7185;
          box-shadow: 0 20px 60px rgba(251, 113, 133, 0.35);
        }

        .menu-shell {
          padding: 0.2rem;
          border-radius: 1.9rem;
          background: linear-gradient(145deg, rgba(255, 223, 235, 0.85), rgba(250, 168, 182, 0.25));
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
        }

        .menu-card {
          background: linear-gradient(145deg, rgba(255, 250, 247, 0.95), rgba(255, 228, 233, 0.9));
          border: 1px solid rgba(244, 114, 182, 0.4);
          border-radius: 1.75rem;
          padding: 2.5rem;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4);
        }

        .menu-label {
          text-transform: uppercase;
          letter-spacing: 0.4em;
          font-size: 0.95rem;
          color: #a21caf;
          margin-bottom: 2rem;
        }

        .menu-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
          align-items: flex-start;
        }

        .menu-course {
          font-size: 1.75rem;
          color: #43302b;
          margin-bottom: 0.75rem;
          text-transform: capitalize;
          letter-spacing: 0.05em;
        }

        .menu-desc {
          font-size: 1.1rem;
          color: #6b4a3f;
          line-height: 1.8;
        }

        .menu-times {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          font-size: 1.1rem;
          color: #c2410c;
          text-align: left;
        }

        .menu-divider {
          margin: 2rem 0;
          border-top: 1px dashed rgba(107, 74, 63, 0.4);
        }

        .menu-note {
          font-size: 1rem;
          letter-spacing: 0.2em;
          color: #7c2d12;
          text-transform: uppercase;
        }

        .footer {
          background: linear-gradient(120deg, rgba(24, 24, 27, 0.9), rgba(58, 12, 47, 0.9));
          padding: 3rem 1.5rem;
          margin-top: 3rem;
          color: #fce7f3;
        }

        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .footer-inner > div,
        .footer-inner img {
          flex: 1 1 280px;
        }

        .footer-gif {
          width: 260px;
          height: 320px;
          object-fit: cover;
          border-radius: 1.5rem;
          border: 3px solid rgba(249, 168, 212, 0.6);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .footer-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #f9a8d4;
        }

        .footer-copy {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #fde2ff;
        }

        @media (max-width: 768px) {
          .menu-item {
            flex-direction: column;
          }

          .menu-times {
            flex-direction: row;
            gap: 1rem;
            text-align: left;
          }

          .footer-inner {
            flex-direction: column;
            text-align: center;
          }

          .purrson-rose-gif {
            width: 100px;
            height: 100px;
          }


          .footer-gif {
            width: 200px;
            height: 250px;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
