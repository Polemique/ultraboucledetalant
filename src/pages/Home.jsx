import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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

  // Variantes d'animation pour les conteneurs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-[#5f0230] text-white min-h-screen overflow-x-hidden selection:bg-[#ffde59] selection:text-black">
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
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-3 font-bold text-xs">
              ULTRA TRAIL SOLIDAIRE 
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

            <div className="flex flex-col items-start gap-4">

                   {/* CTA principal */}
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#ffde59] text-black px-10 py-4 rounded-2xl font-black text-sm shadow-xl transition"
                  >
                    Je m'inscris
                  </motion.button>

                  {/* liens secondaires propres */}
                  <div className="flex gap-3 text-sm">

                    <Link
                      to="/faq"
                      className="px-5 py-2 rounded-xl border border-white/30 text-white/80 hover:text-[#ffde59] hover:border-[#ffde59] transition"
                    >
                      FAQ
                    </Link>

                    <Link
                      to="/reglement"
                      className="px-5 py-2 rounded-xl border border-white/30 text-white/80 hover:text-[#ffde59] hover:border-[#ffde59] transition"
                    >
                      Règlement
                    </Link>

</div>

                </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`${stat.special ? 'bg-[#ffde59] text-black hover:!bg-[#fff]' : 'bg-black/20'} rounded-xl p-4 cursor-default transition-colors`}
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
      <section className="py-16 bg-[#ffde59] text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-black/70 mb-3 font-bold text-xs">
            Une course solidaire
          </p>

          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
            Courir pour École Claire-Aime
          </h2>

          <motion.div 
             whileHover={{ scale: 1.01 }}
             className="bg-black/5 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-8 mb-6 transition-transform"
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
      </section>

      {/* SECTION FORMATS */}
      <section className="py-16 bg-[#fff4f9] text-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10 flex-wrap gap-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-[#d31b75] mb-2 font-bold text-xs">
                Les formats
              </p>
              <h2 className="text-4xl font-black uppercase">
                Choisissez votre défi
              </h2>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(211, 27, 117, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d31b75] text-white px-7 py-3 rounded-xl font-black text-sm transition shadow-lg"
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
                whileHover={{ 
                  y: -12, 
                  borderColor: "rgba(211, 27, 117, 0.4)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" 
                }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent transition-all duration-300 group"
              >
                <h3 className="text-3xl font-black text-[#d31b75] mb-5 group-hover:scale-105 transition-transform origin-left">
                  {format.title}
                </h3>

                <div className="space-y-3 text-base">
                  {[
                    { l: 'Durée', v: format.duration },
                    { l: 'Niveau', v: format.level },
                    { l: 'Départ', v: format.depart, color: 'text-[#d31b75]' },
                    { l: 'Arrivée', v: format.fin }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between border-b border-gray-100 last:border-0 pb-2">
                      <span className="text-gray-500">{row.l}</span>
                      <strong className={row.color || ''}>{row.v}</strong>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="mt-10 bg-gradient-to-br from-[#d31b75] to-[#7d0640] rounded-2xl p-8 text-white text-center shadow-xl cursor-default"
          >
            <p className="text-xl md:text-2xl font-black mb-2">
              « Ce n'est pas contre les autres. C'est contre toi. »
            </p>
            <p className="text-base text-white/90">
              Repousse tes limites. Une boucle à la fois. Aucune pression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION PARCOURS */}
      <section className="py-14 bg-gradient-to-br from-[#d31b75] to-[#7d0640]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-2 font-bold text-xs">Parcours</p>
            <h2 className="text-4xl font-black uppercase mb-5">Une boucle accessible à tous</h2>

            <div className="space-y-3 text-base text-white/90">
              {[
                '2.52 km au cœur de Talant',
                '113 m D+ par boucle',
                'Parcours sécurisé et balisé',
                'Ravitaillement à chaque passage'
              ].map((text, i) => (
                <motion.p 
                  key={i} 
                  whileHover={{ x: 5, color: "#ffde59" }}
                  className="flex gap-2 cursor-default transition-colors"
                >
                  <span className="text-[#ffde59]">•</span>
                  <span>{text}</span>
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div 
            whileHover={{ rotate: 1, scale: 1.02 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-4 flex items-center justify-center transition-transform"
          >
            <img src="https://i.ibb.co/tpXXW2sP/LOGO-4.png" alt="Parcours" className="w-full aspect-square max-w-[340px] object-contain" />
          </motion.div>
        </div>
      </section>

      {/* SECTION HORAIRES */}
      <section className="py-12 bg-[#fff4f9] text-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase mb-6">Horaires</h2>
          <div className="bg-white rounded-xl p-5 shadow-md max-w-4xl mx-auto">
            <div className="space-y-1">
              {horaires.map((h, i) => (
                <motion.div
                  key={i}
                  whileHover={{ backgroundColor: "rgba(211, 27, 117, 0.03)" }}
                  className={`flex gap-3 py-3 px-3 border-b last:border-0 rounded-lg transition-colors ${h.highlight ? 'bg-[#d31b75]/5' : ''}`}
                >
                  <div className={`min-w-[90px] font-bold ${h.highlight ? 'text-[#d31b75]' : 'text-black/60'}`}>{h.time}</div>
                  <div className={h.highlight ? 'font-black' : ''}>{h.activity}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION INFOS PRATIQUES */}
      <section className="py-12 bg-gradient-to-br from-[#d31b75] to-[#7d0640]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <motion.div whileHover={{ scale: 0.98 }} className="relative transition-transform cursor-zoom-in">
              <img src="https://i0.wp.com/ecolosport.fr/wp-content/uploads/2021/04/rubon355.png?fit=1397%2C771&ssl=1" alt="Dossards" className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[320px]" />
            </motion.div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex flex-col justify-center">
              <h3 className="text-xl font-black mb-4">Retrait des dossards</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[{ d: 'Samedi', h: '14h–18h' }, { d: 'Dimanche', h: 'Jusqu’à 14h' }].map((slot, i) => (
                  <motion.div key={i} whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.2)" }} className="bg-black/20 rounded-xl p-4 transition-colors">
                    <p className="text-[#ffde59] text-xs uppercase font-bold">{slot.d}</p>
                    <p className="text-xl font-black">{slot.h}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-white/60 text-xs italic">Pièce d’identité obligatoire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PARTENAIRES */}
      <section className="py-20 bg-[#fff4f9] text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black uppercase mb-12">Nos partenaires</h2>
          <motion.div 
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {['NovaRun', 'Altitude Sport', 'Pulse Nutrition', 'Urban Move', 'Monts & Trail', 'Kinetik Studio', 'HydraBoost', 'Peak Energy'].map((p, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-8 shadow-md flex items-center justify-center min-h-[130px] cursor-pointer transition-shadow"
              >
                <span className="text-xl font-black text-[#d31b75] uppercase tracking-wide">{p}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="mt-12 bg-[#d31b75] text-white px-8 py-4 rounded-2xl font-black"
          >
            Devenir partenaire
          </motion.button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#7d0640] py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black uppercase">Ultra Boucle de Talant</h3>
            <p className="text-white/70 text-sm">Solidarité École Claire-Aime</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.1, rotate: -1 }} whileTap={{ scale: 0.9 }}
            className="bg-[#ffde59] text-black px-7 py-3 rounded-xl font-black"
          >
            Je m'inscris
          </motion.button>
        </div>
      </footer>
    </div>
  );
}