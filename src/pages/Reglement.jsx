import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Reglement() {
  const sections = [
    {
      title: 'Principe',
      content:
        "Course en boucle fermée. Objectif : réaliser un maximum de boucles sur une durée donnée. Chaque boucle est validée au passage chronométré."
    },
    {
      title: 'Formats',
      content:
        "Solo : 6h / 12h / 24h. Relais : 6h (2-4), 12h (2-4), 24h (2-6). Passage de relais uniquement en zone dédiée."
    },
    {
      title: 'Circuit',
      content:
        "Boucle balisée et sécurisée (1 à 5 km). Départ/arrivée identiques. Ravitaillement à chaque tour. Hors parcours = disqualification."
    },
    {
      title: 'Participation',
      content:
        "Ouvert aux majeurs licenciés ou non. Âge minimum 18 ans (20 ans possible sur 24h)."
    },
    {
      title: 'Inscription',
      content:
        "Inscription nominative et non transférable sans accord. Nombre de places limité."
    },
    {
      title: 'Matériel',
      content:
        "Dossard visible obligatoire, hydratation, frontale si nuit, équipement adapté aux conditions météo."
    },
    {
      title: 'Ravitaillement',
      content:
        "Disponible à chaque boucle (eau, solide, boisson). Assistance extérieure interdite hors zone."
    },
    {
      title: 'Classement',
      content:
        "Classement au nombre de boucles, puis au temps de dernière boucle. Boucle validée si terminée dans les délais."
    },
    {
      title: 'Sécurité',
      content:
        "Secours sur place et parcours balisé. Respect des signaleurs obligatoire. Signalement des coureurs en difficulté."
    },
    {
      title: 'Abandon',
      content:
        "Abandon possible à tout moment. Le coureur doit prévenir l’organisation et rendre son dossard."
    },
    {
      title: 'Assurance',
      content:
        "Organisation couverte en responsabilité civile. Non-licenciés doivent avoir une assurance personnelle."
    },
    {
      title: 'Annulation',
      content:
        "Organisation peut modifier, réduire ou annuler selon météo, sécurité ou force majeure."
    },
    {
      title: 'Esprit',
      content:
        "Respect, entraide, dépassement de soi et respect du site. Tout comportement antisportif = disqualification."
    },
    {
      title: 'Acceptation',
      content:
        "Toute inscription vaut acceptation complète du règlement."
    }
  ];

  return (
    <div className="bg-[#5f0230] text-white min-h-screen">

      <Helmet>
        <title>Règlement – Ultra Boucle de Talant</title>
        <meta
          name="description"
          content="Règlement officiel de l’Ultra Boucle de Talant : formats, parcours, sécurité, classement et conditions de participation."
        />
      </Helmet>

      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[#7d0640] to-[#d31b75] text-center">
        <p className="uppercase tracking-[0.3em] text-[#ffde59] text-xs font-bold mb-3">
          Règlement officiel
        </p>

        <h1 className="text-5xl md:text-6xl font-black uppercase">
          Règlement
        </h1>

        <p className="mt-4 text-white/90 max-w-2xl mx-auto">
          Toutes les règles de l’Ultra Boucle de Talant.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-14 bg-[#ffde59] text-black text-center">
        <p className="text-xl md:text-2xl font-black">
          “Une boucle après l’autre. Jusqu’au bout.”
        </p>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-[#fff4f9] text-black">
        <div className="max-w-4xl mx-auto px-6 space-y-5">

          {sections.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl p-6 shadow border border-black/5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#d31b75] text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <h2 className="text-xl font-black text-[#d31b75] uppercase">
                  {s.title}
                </h2>
              </div>

              <p className="text-black/80 leading-relaxed">
                {s.content}
              </p>
            </motion.div>
          ))}

          {/* CTA */}
          <div className="text-center pt-10">
            <p className="font-bold mb-4">Une question ?</p>

            <Link to="/faq">
              <button className="bg-[#d31b75] text-white px-6 py-3 rounded-xl font-bold">
                FAQ
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#7d0640] py-8 text-center border-t border-white/10">
        <h3 className="text-xl font-black uppercase">
          Ultra Boucle de Talant
        </h3>
        <p className="text-white/70 text-sm mt-1">
          Course en boucle – endurance & esprit trail
        </p>

        <Link to="/">
          <button className="mt-4 bg-[#ffde59] text-black px-5 py-2 rounded-xl font-bold">
            Accueil
          </button>
        </Link>
      </footer>

    </div>
  );
}