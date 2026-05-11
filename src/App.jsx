import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const eventDate = new Date('2027-03-14T05:00:00');
  const today = new Date();
  const diff = eventDate - today;
  const daysRemaining = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));

  const formats = [
    { title: 'Boucle 1H', duration: '1 heure', level: 'Débutants & familles', depart: '14h30', fin: '15h30' },
    { title: 'Boucle 3H', duration: '3 heures', level: 'Sportifs réguliers', depart: '10h00', fin: '13h30' },
    { title: 'Boucle 12H', duration: '12 heures', level: 'Coureurs confirmés', depart: '05h00', fin: '17h00' },
  ];

  const horaires = [
    { time: '04h30', activity: 'Ouverture de l\'accueil et remise des dossards' },
    { time: '05h00', activity: 'Départ de la Boucle 12h', highlight: true },
    { time: '10h00', activity: 'Départ de la Boucle 3h', highlight: true },
    { time: '13h30', activity: 'Fin de la Boucle 3h' },
    { time: '14h30', activity: 'Départ de la Boucle 1h', highlight: true },
    { time: '15h30', activity: 'Fin de la Boucle 1h' },
    { time: '17h00', activity: 'Fin de la Boucle 12h' },
    { time: '15h00–17h30', activity: 'Temps convivial : restauration, annonce des fonds collectés, discours et remerciements' },
  ];

  // Variantes pour les animations en cascade
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-[#5f0230] text-white min-h-screen overflow-x-hidden">
      {/* SECTION HERO */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,6,64,0.7), rgba(211,27,117,0.7)), url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center w-full">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-3 font-bold text-xs">
              Challenge Mental • Dépassement de Soi
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
              Ultra Boucle
              <span className="block text-[#ffde59]">de Talant</span>
            </h1>

            <p className="text-xl font-bold text-white mb-3 leading-tight">
              Combien de boucles vas-tu réaliser ?
            </p>

            <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed">
              Repousse tes limites. Une boucle après l'autre. Contre le chrono.
              Contre toi-même.
              <strong className="text-[#ffde59]">
                {' '}
                Pour une cause qui compte.
              </strong>
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ffde59] text-black px-7 py-3 rounded-xl font-black text-sm transition shadow-lg"
            >
              Je m'inscris
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6"
          >
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Date', value: '14 mars 2027', color: 'text-[#ffde59]' },
                { label: 'Countdown', value: daysRemaining, sub: 'jours restants', special: true },
                { label: 'Boucle', value: '2.52 km', color: 'text-[#ffde59]' },
                { label: 'D+', value: '113 m', color: 'text-[#ffde59]' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className={`${stat.special ? 'bg-[#ffde59] text-black' : 'bg-black/20'} rounded-xl p-4`}
                >
                  <p className={`uppercase text-xs mb-1 font-bold ${stat.color || ''}`}>
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-black">{stat.value}</h3>
                  {stat.sub && <p className="text-sm">{stat.sub}</p>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION SOLIDAIRE */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-[#ffde59] text-black"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-black/70 mb-3 font-bold text-xs">
            Une course solidaire
          </p>

          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight"
          >
            Courir pour École Claire-Aime
          </motion.h2>

          <motion.div 
             initial={{ scale: 0.95, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             className="bg-black/5 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-8 mb-6"
          >
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              L'association{' '}
              <strong className="font-black">École Claire-Aime</strong> œuvre au
              quotidien pour le développement d'un établissement scolaire adapté
              aux enfants et adolescents à besoins éducatifs particuliers.
            </p>
          </motion.div>

          <p className="text-base font-bold text-black/80">
            Chaque kilomètre compte. Chaque boucle a du sens.
          </p>
        </div>
      </motion.section>

      {/* SECTION FORMATS */}
      <section className="py-16 bg-[#fff4f9] text-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10 flex-wrap gap-6">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-[0.3em] text-[#d31b75] mb-2 font-bold text-xs">
                Les formats
              </p>
              <h2 className="text-4xl font-black uppercase">
                Choisissez votre défi
              </h2>
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d31b75] text-white px-7 py-3 rounded-xl font-black text-sm transition"
            >
              S'inscrire
            </motion.button>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {formats.map((format, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg transition border border-transparent hover:border-[#d31b75]/20"
              >
                <h3 className="text-3xl font-black text-[#d31b75] mb-5">
                  {format.title}
                </h3>

                <div className="space-y-3 text-base">
                  <div className="flex justify-between border-b pb-2">
                    <span>Durée</span>
                    <strong>{format.duration}</strong>
                  </div>

                  <div className="flex justify-between border-b pb-2">
                    <span>Niveau</span>
                    <strong>{format.level}</strong>
                  </div>

                  <div className="flex justify-between border-b pb-2">
                    <span>Départ</span>
                    <strong className="text-[#d31b75]">
                      {format.depart}
                    </strong>
                  </div>

                  <div className="flex justify-between pb-2">
                    <span>Arrivée</span>
                    <strong>{format.fin}</strong>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 bg-gradient-to-br from-[#d31b75] to-[#7d0640] rounded-2xl p-8 text-white text-center shadow-xl"
          >
            <p className="text-xl md:text-2xl font-black mb-2">
              « Ce n'est pas contre les autres. C'est contre toi. »
            </p>
            <p className="text-base text-white/90">
              Repousse tes limites. Une boucle à la fois. Aucune pression.
              Juste toi et ton mental.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION PARCOURS */}
      <section className="py-14 bg-gradient-to-br from-[#d31b75] to-[#7d0640]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-2 font-bold text-xs">
              Parcours
            </p>

            <h2 className="text-4xl font-black uppercase mb-5">
              Une boucle accessible à tous
            </h2>

            <div className="space-y-3 text-base text-white/90">
              {[
                { label: '2.52 km', detail: 'au cœur de Talant' },
                { label: '113 m D+', detail: 'par boucle' },
                { label: 'sécurisé', detail: 'et balisé' },
                { label: 'Ravitaillement', detail: 'à chaque passage' }
              ].map((item, i) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-2"
                >
                  <span className="text-[#ffde59]">•</span>
                  <span><strong className="text-white">{item.label}</strong> {item.detail}</span>
                </motion.p>
              ))}
            </div>

            <p className="mt-6 text-lg font-black text-[#ffde59]">
              Combien de boucles vas-tu enchaîner ?
            </p>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 rounded-2xl p-4 flex items-center justify-center"
          >
            <div className="w-full aspect-square max-w-[340px]">
              <img
                src="https://i.ibb.co/tpXXW2sP/LOGO-4.png"
                alt="Parcours de la boucle"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION HORAIRES */}
      <section className="py-12 bg-[#fff4f9] text-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <p className="uppercase tracking-[0.3em] text-[#d31b75] mb-1 font-bold text-xs">
              Planning
            </p>
            <h2 className="text-3xl font-black uppercase">
              Horaires
            </h2>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-5 shadow-md max-w-4xl mx-auto"
          >
            <div className="space-y-2 text-sm">
              {horaires.map((horaire, index) => (
                <div
                  key={index}
                  className={`flex gap-3 py-2 border-b last:border-b-0 ${
                    horaire.highlight ? 'bg-[#d31b75]/5 px-2 rounded-md' : ''
                  }`}
                >
                  <div className={`min-w-[90px] font-bold ${
                    horaire.highlight ? 'text-[#d31b75]' : 'text-black/60'
                  }`}>
                    {horaire.time}
                  </div>
                  <div className={horaire.highlight ? 'font-semibold' : ''}>
                    {horaire.activity}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION INFOS PRATIQUES */}
      <section className="py-12 bg-gradient-to-br from-[#d31b75] to-[#7d0640] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8 text-center">
            <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-2 font-bold text-xs">
              Informations pratiques
            </p>
            <h2 className="text-4xl font-black uppercase">
              Retrait des dossards
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="absolute inset-0 bg-[#ffde59]/20 blur-3xl rounded-full"></div>
              <img
                src="https://i0.wp.com/ecolosport.fr/wp-content/uploads/2021/04/rubon355.png?fit=1397%2C771&ssl=1"
                alt="Retrait des dossards"
                className="relative rounded-2xl shadow-xl object-cover w-full h-full max-h-[320px]"
              />
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-center"
            >
              <div className="border-b border-white/10 pb-4 mb-4">
                <p className="text-[#ffde59] uppercase tracking-[0.25em] text-xs font-bold mb-2">Lieu</p>
                <h3 className="text-xl font-black mb-1">Complexe Sportif Marie-Thérèse Eyquem</h3>
                <p className="text-white/80 text-sm">Chemin des Aiges — 21240 Talant</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/20 rounded-xl p-4">
                  <p className="text-[#ffde59] text-xs uppercase font-bold mb-1">Samedi</p>
                  <p className="text-xl font-black">14h–18h</p>
                </div>
                <div className="bg-black/20 rounded-xl p-4">
                  <p className="text-[#ffde59] text-xs uppercase font-bold mb-1">Dimanche</p>
                  <p className="text-xl font-black">Jusqu’à 14h</p>
                </div>
              </div>

              <p className="mt-4 text-white/70 text-xs leading-relaxed italic">
                Pièce d’identité + confirmation d’inscription obligatoires pour le retrait du dossard.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION PARTENAIRES */}
      <section className="py-20 bg-[#fff4f9] text-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-[#d31b75] mb-3 font-bold text-xs">Soutien</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">Nos partenaires</h2>
            <p className="text-black/60 max-w-2xl mx-auto">
              Ils soutiennent l’Ultra Boucle de Talant et participent au
              développement d’un événement sportif et solidaire accessible à tous.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {[
              'NovaRun', 'Altitude Sport', 'Pulse Nutrition', 'Urban Move',
              'Monts & Trail', 'Kinetik Studio', 'HydraBoost', 'Peak Energy',
            ].map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-2xl p-8 shadow-md flex items-center justify-center min-h-[130px] cursor-pointer border border-transparent hover:border-[#d31b75]/10"
              >
                <span className="text-xl md:text-2xl font-black text-[#d31b75] text-center uppercase tracking-wide">
                  {partner}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d31b75] hover:bg-[#b01561] transition text-white px-8 py-4 rounded-2xl font-black shadow-lg"
            >
              Devenir partenaire
            </motion.button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#7d0640] border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-black uppercase">Ultra Boucle de Talant</h3>
              <p className="text-white/70 mt-1 text-sm">
                Challenge mental • Dépassement de soi • Solidarité
              </p>
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ffde59] text-black px-7 py-3 rounded-xl font-black text-sm transition shadow-md"
            >
              Je m'inscris
            </motion.button>
          </div>

          <div className="border-t border-white/10 pt-6 text-center space-y-3">
            <p className="text-white/60 text-sm">
              Au profit de l'association{' '}
              <strong className="text-[#ffde59]">École Claire-Aime</strong>
            </p>

            <div className="flex flex-col items-center gap-1">
              <p className="text-white/70 font-bold text-sm">Contact</p>
              <a
                href="mailto:contact@ultraboucletalant.fr"
                className="text-[#ffde59] hover:text-[#ffde59]/80 transition font-bold"
              >
                contact@ultraboucletalant.fr
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}