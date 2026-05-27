import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const questions = [
    {
      q: 'Comment fonctionne l’Ultra Boucle de Talant ?',
      a: 'Le principe est simple : réaliser un maximum de boucles pendant la durée choisie (1h, 3h ou 12h). Chaque participant avance à son rythme.'
    },
    {
      q: 'Quelle est la distance d’une boucle ?',
      a: 'Chaque boucle mesure environ 2.52 km avec 113 mètres de dénivelé positif.'
    },
    {
      q: 'Peut-on marcher ?',
      a: 'Oui. L’événement est ouvert à tous les niveaux. Vous pouvez courir, alterner course et marche ou simplement profiter de l’ambiance.'
    },
    {
      q: 'Y a-t-il des ravitaillements ?',
      a: 'Oui, un ravitaillement est accessible à chaque passage de boucle.'
    },
    {
      q: 'Faut-il un certificat médical ?',
      a: 'Oui, conformément à la réglementation en vigueur pour les courses pédestres.'
    },
    {
      q: 'Où se déroule la course ?',
      a: 'L’événement se déroule à Talant, près de Dijon, en Bourgogne-Franche-Comté.'
    },
    {
      q: 'Comment sont comptabilisés les tours ?',
      a: 'Chaque boucle validée est enregistrée afin d’établir le classement final.'
    },
    {
      q: 'À quoi servent les fonds récoltés ?',
      a: 'Une partie des fonds soutient l’association École Claire-Aime.'
    }
  ];

  return (
    <div className="bg-[#5f0230] text-white min-h-screen">
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src="logo.png" alt="Logo UTB" className="h-16 w-16 object-contain" />

        {/* Liens */}
        <div className="flex items-center gap-3">
          <Link to="/" className="px-4 py-2 rounded-xl text-black bg-[#ffde59] hover:bg-white text-sm font-black transition">
            Home
          </Link>
          <Link to="/faq" className="px-4 py-2 rounded-xl text-white/80 hover:text-[#ffde59] hover:border-[#ffde59] border border-white/30 text-sm font-bold transition">
            FAQ
          </Link>
          <Link to="/reglement" className="px-4 py-2 rounded-xl text-white/80 hover:text-[#ffde59] hover:border-[#ffde59] border border-white/30 text-sm font-bold transition">
            Règlement
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ffde59] text-black px-5 py-2 rounded-xl font-black text-sm shadow-lg"
          >
            Je m'inscris
          </motion.button>
        </div>
      </nav>

      <Helmet>
        <title>
          FAQ – Ultra Boucle de Talant
        </title>

        <meta
          name="description"
          content="Toutes les réponses concernant l’Ultra Boucle de Talant : règlement, parcours, ravitaillement, horaires et formats."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#7d0640] to-[#d31b75]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-4 font-bold text-xs">
            Questions fréquentes
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
            FAQ
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Toutes les informations utiles pour préparer votre Ultra Boucle de Talant.
          </p>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="py-20 bg-[#fff4f9] text-black">
        <div className="max-w-4xl mx-auto px-6">

          <div className="space-y-6">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.08)"
                }}
                className="bg-white rounded-2xl p-8 shadow-md border border-black/5"
              >
                <h2 className="text-2xl font-black text-[#d31b75] mb-4">
                  {item.q}
                </h2>

                <p className="text-lg leading-relaxed text-black/80">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">

            <p className="text-lg font-bold mb-6">
              Besoin de plus d’informations ?
            </p>

            <Link to="/reglement">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#000"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d31b75] text-white px-8 py-4 rounded-2xl font-black text-sm shadow-xl transition-colors"
              >
                Lire le règlement
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#7d0640] py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-black uppercase">
            Ultra Boucle de Talant
          </h3>

          <p className="text-white/70 text-sm mt-2">
            Trail en boucle solidaire près de Dijon
          </p>
        </div>
      </footer>
    </div>
  );
}