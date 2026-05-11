export default function App() {
  const eventDate = new Date('2027-03-14T05:00:00')
  const today = new Date()
  const diff = eventDate - today
  const daysRemaining = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))

  const formats = [
    { title: 'Boucle 1H', duration: '1 heure', level: 'Débutants & familles', depart: '14h30', fin: '15h30' },
    { title: 'Boucle 3H', duration: '3 heures', level: 'Sportifs réguliers', depart: '10h00', fin: '13h30' },
    { title: 'Boucle 12H', duration: '12 heures', level: 'Coureurs confirmés', depart: '05h00', fin: '17h00' },
  ]

  const horaires = [
    { time: '04h30', activity: 'Ouverture de l\'accueil et remise des dossards' },
    { time: '05h00', activity: 'Départ de la Boucle 12h', highlight: true },
    { time: '10h00', activity: 'Départ de la Boucle 3h', highlight: true },
    { time: '13h30', activity: 'Fin de la Boucle 3h' },
    { time: '14h30', activity: 'Départ de la Boucle 1h', highlight: true },
    { time: '15h30', activity: 'Fin de la Boucle 1h' },
    { time: '17h00', activity: 'Fin de la Boucle 12h' },
    { time: '15h00–17h30', activity: 'Temps convivial : restauration, annonce des fonds collectés, discours et remerciements' },
  ]

  return (
    <div className="bg-[#5f0230] text-white min-h-screen">

      {/* HERO */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,6,64,0.7), rgba(211,27,117,0.7)), url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          
          <div>
            {/* 🔥 NOUVEAU SLOGAN */}
            <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-3 font-bold text-xs">
              “Une boucle. Une décision. Une version de toi plus forte.”
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
              Ultra Boucle
              <span className="block text-[#ffde59]">de Talant</span>
            </h1>

            <p className="text-xl font-bold text-white mb-3 leading-tight">
              Ici, tu ne cours pas contre les autres.
            </p>

            <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed">
              Tu cours contre l’envie d’arrêter. Contre le doute. Contre ce que tu crois être tes limites.  
              <strong className="text-[#ffde59]">
                {" "}Et parfois, tu gagnes.
              </strong>
            </p>

            <button className="bg-[#ffde59] text-black px-7 py-3 rounded-xl font-black text-sm hover:scale-105 transition">
              Je m'inscris
            </button>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6">
            <div className="grid grid-cols-2 gap-3">

              <div className="bg-black/20 rounded-xl p-4">
                <p className="text-[#ffde59] text-xs uppercase mb-1 font-bold">
                  Date
                </p>
                <h3 className="text-2xl font-black">14 mars 2027</h3>
              </div>

              <div className="bg-[#ffde59] text-black rounded-xl p-4">
                <p className="uppercase text-xs mb-1 font-black">
                  Countdown
                </p>
                <h3 className="text-3xl font-black">{daysRemaining}</h3>
                <p className="text-sm">jours restants</p>
              </div>

              <div className="bg-black/20 rounded-xl p-4">
                <p className="text-[#ffde59] text-xs uppercase mb-1 font-bold">
                  Boucle
                </p>
                <h3 className="text-2xl font-black">2.52 km</h3>
              </div>

              <div className="bg-black/20 rounded-xl p-4">
                <p className="text-[#ffde59] text-xs uppercase mb-1 font-bold">
                  D+
                </p>
                <h3 className="text-2xl font-black">113 m</h3>
              </div>

            </div>

            {/* petite phrase inutile mais stylée */}
            <p className="text-xs text-white/50 mt-5 text-center">
              “Ce n’est pas une course. C’est une conversation avec toi-même.”
            </p>
          </div>

        </div>
      </section>

      {/* SOLIDARITÉ */}
      <section className="py-16 bg-[#ffde59] text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-black/70 mb-3 font-bold text-xs">
            Une course solidaire
          </p>

          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
            Courir pour École Claire-Aime
          </h2>

          <div className="bg-black/5 rounded-2xl p-8 mb-6">
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              Une boucle après l’autre, on transforme l’effort en impact concret pour les enfants à besoins spécifiques.
            </p>
          </div>

          <p className="text-base font-bold text-black/80">
            Chaque départ est un engagement. Chaque arrivée, une promesse tenue.
          </p>

        </div>
      </section>

      {/* FORMATS */}
      <section className="py-16 bg-[#fff4f9] text-black">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex justify-between items-end mb-10 flex-wrap gap-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-[#d31b75] mb-2 font-bold text-xs">
                Les formats
              </p>
              <h2 className="text-4xl font-black uppercase">
                Choisis ton niveau de vérité
              </h2>
            </div>

            <button className="bg-[#d31b75] text-white px-7 py-3 rounded-xl font-black text-sm">
              S'inscrire
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">

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
                    <strong className="text-[#d31b75]">{format.depart}</strong>
                  </div>

                  <div className="flex justify-between pb-2">
                    <span>Arrivée</span>
                    <strong>{format.fin}</strong>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* phrase inutile ajoutée */}
          <p className="text-center mt-10 text-black/40 italic">
            “Personne ne te force. Mais tu vas quand même voir jusqu’où tu peux aller.”
          </p>

        </div>
      </section>

      {/* RETRAIT DOSSARDS (RÉDUIT + CLEAN) */}
      <section className="py-20 bg-gradient-to-br from-[#d31b75] to-[#7d0640]">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-3 font-bold text-xs">
            Infos pratiques
          </p>

          <h2 className="text-4xl font-black uppercase mb-6">
            Retrait des dossards
          </h2>

          <div className="bg-white/10 rounded-2xl p-8 text-left max-w-2xl mx-auto">

            <p className="font-black text-lg text-[#ffde59] mb-2">
              Complexe Sportif Marie-Thérèse Eyquem
            </p>

            <p className="text-white/80 mb-6">
              Talant — Chemin des Aiges
            </p>

            <div className="space-y-3 text-white">
              <p><strong>Samedi :</strong> 14h00 – 18h00</p>
              <p><strong>Dimanche :</strong> jusqu’à 14h00</p>
            </div>

          </div>

        </div>
      </section>

      {/* PARTENAIRES (inchangé si tu veux) */}
      <section className="py-20 bg-[#fff4f9] text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-black uppercase mb-6">
            Nos partenaires
          </h2>

          <p className="text-black/60">
            Ils existent peut-être. Peut-être pas. Mais ils rendent le projet plus crédible.
          </p>

        </div>
      </section>

    </div>
  )
}