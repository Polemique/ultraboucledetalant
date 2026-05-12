import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Reglement() {
  const sections = [
    {
      title: 'La course',
      content:
        "L’Ultra Boucle de Talant est une course pédestre en boucle à allure libre. Les participants doivent réaliser un maximum de tours pendant la durée choisie : 1h, 3h ou 12h."
    },
    {
      title: 'Le parcours',
      content:
        "Le circuit mesure environ 2.52 km avec 113 mètres de dénivelé positif. Le parcours est balisé, sécurisé et accessible uniquement aux participants inscrits."
    },
    {
      title: 'Conditions de participation',
      content:
        "L’événement est ouvert aux coureurs majeurs licenciés ou non licenciés. Un PPS ou une licence valide devra être fourni avant le retrait du dossard."
    },
    {
      title: 'Inscriptions',
      content:
        "Toute inscription est personnelle, ferme et définitive. Aucun échange ou transfert de dossard ne pourra être effectué sans validation de l’organisation."
    },
    {
      title: 'Ravitaillement',
      content:
        "Un ravitaillement liquide et solide sera disponible à chaque passage de boucle pour les participants."
    },
    {
      title: 'Classement',
      content:
        "Le classement est établi selon le nombre de boucles effectuées puis selon le temps réalisé. Toute boucle commencée avant la fin du chrono pourra être terminée."
    },
    {
      title: 'Sécurité',
      content:
        "Les participants doivent respecter les consignes des bénévoles et signaleurs. Toute attitude dangereuse pourra entraîner une disqualification."
    },
    {
      title: 'Environnement',
      content:
        "Le respect du parcours et de l’environnement est obligatoire. Tout abandon de déchets sur le circuit entraînera une disqualification."
    },
    {
      title: 'Droit à l’image',
      content:
        "Les participants autorisent l’organisation à utiliser les images et vidéos réalisées durant l’événement à des fins de communication."
    },
    {
      title: 'Annulation',
      content:
        "L’organisation se réserve le droit d’annuler ou modifier l’épreuve en cas de conditions météorologiques ou sanitaires défavorables."
    }
  ];

  return (
    <div className="bg-[#5f0230] text-white min-h-screen overflow-x-hidden">

      <Helmet>
        <title>
          Règlement – Ultra Boucle de Talant
        </title>

        <meta
          name="description"
          content="Consultez le règlement officiel de l’Ultra Boucle de Talant : participation, sécurité, classement, inscriptions et déroulement de la course."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-[#7d0640] to-[#d31b75] overflow-hidden">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-4 font-bold text-xs">
            Informations officielles
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
            Règlement
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Retrouvez les règles officielles de l’Ultra Boucle de Talant :
            formats, sécurité, inscriptions, classement et déroulement de l’épreuve.
          </p>

        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-[#ffde59] text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-black/5 border border-black/10 rounded-3xl p-8"
          >
            <p className="text-xl md:text-2xl font-black leading-relaxed">
              « Une boucle après l’autre. Contre le chrono.
              Contre toi-même. »
            </p>

            <p className="mt-4 text-black/70">
              En participant à l’Ultra Boucle de Talant,
              chaque coureur accepte pleinement le règlement de l’épreuve.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-20 bg-[#fff4f9] text-black">

        <div className="max-w-5xl mx-auto px-6">

          <div className="space-y-8">

            {sections.map((section, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 30px rgba(0,0,0,0.08)"
                }}
                className="bg-white rounded-3xl p-8 shadow-md border border-black/5"
              >

                <div className="flex items-center gap-4 mb-5">

                  <div className="w-12 h-12 rounded-2xl bg-[#d31b75] text-white flex items-center justify-center font-black text-lg">
                    {index + 1}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black text-[#d31b75] uppercase">
                    {section.title}
                  </h2>

                </div>

                <p className="text-lg leading-relaxed text-black/80">
                  {section.content}
                </p>

              </motion.div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-20 text-center">

            <p className="text-lg font-bold mb-6">
              Vous avez encore des questions ?
            </p>

            <Link to="/faq">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#000"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d31b75] text-white px-8 py-4 rounded-2xl font-black shadow-xl transition-colors"
              >
                Lire la FAQ
              </motion.button>
            </Link>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#7d0640] py-10 border-t border-white/10">

        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black uppercase">
              Ultra Boucle de Talant
            </h3>

            <p className="text-white/70 text-sm">
              Trail en boucle solidaire près de Dijon
            </p>
          </div>

          <Link to="/">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ffde59] text-black px-8 py-4 rounded-2xl font-black"
            >
              Retour à l’accueil
            </motion.button>
          </Link>

        </div>
      </footer>
    </div>
  );
}