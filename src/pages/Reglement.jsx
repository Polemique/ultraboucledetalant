import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Reglement() {
  const sections = [
    {
      title: 'ARTICLE 1 – OBJET DE L’ÉPREUVE',
      content:
        "L’Ultra Boucle de Talant est une épreuve de course à pied d’endurance se déroulant sur circuit fermé et balisé, en boucle, sur un parcours défini par l’organisation. L’événement comprend plusieurs formats de course (solo et/ou relais), dont les caractéristiques sont définies sur le site officiel de l’épreuve. La participation implique l’acceptation pleine, entière et sans réserve du présent règlement."
    },
    {
      title: 'ARTICLE 2 – CONDITIONS DE PARTICIPATION',
      content:
        "L’épreuve est ouverte aux personnes âgées de 18 ans révolus le jour de la course. Chaque participant doit être médicalement apte à la pratique de la course à pied en compétition. Les licenciés doivent fournir une licence valide. Les non-licenciés doivent fournir un justificatif réglementaire valide (type PPS ou équivalent en vigueur). Aucun départ ne sera autorisé sans validation complète du dossier."
    },
    {
      title: 'ARTICLE 3 – INSCRIPTION',
      content:
        "Les inscriptions s’effectuent exclusivement en ligne via la plateforme officielle de l’événement. Toute inscription est personnelle, ferme et non transférable sans accord de l’organisation. Toute fraude ou transfert non autorisé entraîne une disqualification immédiate. Le nombre de places peut être limité pour des raisons de sécurité et d’organisation."
    },
    {
      title: 'ARTICLE 4 – RETRAIT DES DOSSARDS',
      content:
        "Le retrait des dossards s’effectue sur présentation d’une pièce d’identité, de la confirmation d’inscription et des justificatifs médicaux requis. Le port du dossard est obligatoire et doit rester visible pendant toute la durée de l’épreuve."
    },
    {
      title: 'ARTICLE 5 – PARCOURS ET CONDITIONS DE COURSE',
      content:
        "Le parcours est balisé et sécurisé dans la mesure des contraintes du site. Certaines portions peuvent rester ouvertes à la circulation ; les participants doivent respecter le Code de la route et les consignes des signaleurs. Il est strictement interdit de couper le parcours ou de quitter le tracé officiel sous peine de disqualification."
    },
    {
      title: 'ARTICLE 6 – CHRONOMÉTRAGE ET CLASSEMENT',
      content:
        "Les coureurs sont classés en fonction du nombre de tours effectués et du temps passé pour les réaliser. Le gagnant sera le coureur ayant effectué le plus grand nombre de tours dans le temps le plus court. Les tours commencés mais non terminés dans le temps imparti pour la course sont comptabilisés. Aucun tour ne devra être commencé après l’expiration du temps officiel de course sous peine de disqualification du coureur, et de son équipe dans le cadre des épreuves relais."
    },
    {
      title: 'ARTICLE 7 – ÉQUIPEMENT OBLIGATOIRE',
      content:
        "Chaque participant doit disposer d’un équipement adapté aux conditions météorologiques ainsi que du matériel obligatoire défini par l’organisation. Le dossard doit être porté de manière visible en permanence. Une lampe frontale pourra être rendue obligatoire selon les horaires ou les conditions de luminosité."
    },
    {
      title: 'ARTICLE 8 – RAVITAILLEMENT ET ÉPREUVES',
      content:
        "Un ravitaillement liquide et solide réservé exclusivement aux coureurs sera disponible sur le circuit pendant toute la durée de l’épreuve. Un petit repas sera offert aux participants engagés sur le format 12 heures."
    },
    {
      title: 'ARTICLE 9 – SÉCURITÉ ET ASSISTANCE MÉDICALE',
      content:
        "Une assistance médicale est assurée pendant toute la durée de l’épreuve. Chaque participant a l’obligation de porter assistance à toute personne en difficulté et de signaler immédiatement tout incident à l’organisation. Les participants doivent respecter les consignes des bénévoles, signaleurs et services de secours."
    },
    {
      title: 'ARTICLE 10 – COMPORTEMENT ET ÉTHIQUE',
      content:
        "Tout comportement antisportif pourra entraîner une disqualification immédiate. Cela inclut notamment le jet de déchets hors des zones prévues, les insultes, les actes dangereux, les tricheries ou le non-respect des bénévoles, des autres participants et du site."
    },
    {
      title: 'ARTICLE 11 – ABANDON',
      content:
        "Tout participant souhaitant abandonner doit obligatoirement prévenir l’organisation et restituer son dossard. Aucun abandon ne devra être effectué sans signalement préalable."
    },
    {
      title: 'ARTICLE 12 – ASSURANCE ET RESPONSABILITÉ',
      content:
        "Les organisateurs ont souscrit une assurance responsabilité civile auprès de la MAIF. Les licenciés FFA bénéficient des garanties accordées par les assurances liées à leur licence. Chaque participant est vivement encouragé à souscrire une assurance individuelle accident couvrant les dommages corporels pouvant survenir durant l’événement. Les participants sont invités à vérifier auprès de leur assurance personnelle ou fédérale qu’ils disposent d’une couverture adaptée. Une assurance individuelle accident peut notamment couvrir les frais médicaux, l’invalidité, le décès, les frais de secours ou de rapatriement. Les organisateurs ne pourront être tenus responsables en cas d’accident, de défaillance liée à un mauvais état de santé, d’une préparation insuffisante ou en cas de vol."
    },
    {
      title: 'ARTICLE 13 – DROIT À L’IMAGE',
      content:
        "Chaque participant autorise expressément les organisateurs, partenaires et médias à utiliser les images fixes ou audiovisuelles prises à l’occasion de sa participation à l’Ultra Boucle de Talant, sur tous supports de communication et de promotion, dans le monde entier et pour la durée maximale prévue par la législation en vigueur."
    },
    {
      title: 'ARTICLE 14 – ACCEPTATION DU RÈGLEMENT',
      content:
        "L’inscription à l’épreuve entraîne l’acceptation pleine et entière du présent règlement. Toute contestation relative à son interprétation ou à un point non prévu relève exclusivement du comité d’organisation, dont les décisions sont sans appel."
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
        <title>Règlement – Ultra Boucle de Talant</title>
        <meta
          name="description"
          content="Règlement officiel de l’Ultra Boucle de Talant : sécurité, classement, participation, ravitaillement et conditions de course."
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
            <p className="font-bold mb-4">
              Une question ?
            </p>

            <Link to="/faq">
              <button className="bg-[#d31b75] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
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
          <button className="mt-4 bg-[#ffde59] text-black px-5 py-2 rounded-xl font-bold hover:scale-105 transition">
            Accueil
          </button>
        </Link>
      </footer>

    </div>
  );
}