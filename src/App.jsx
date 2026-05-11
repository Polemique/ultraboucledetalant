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
    { time: '04h30', activity: "Ouverture de l'accueil et remise des dossards" },
    { time: '05h00', activity: 'Départ de la Boucle 12h', highlight: true },
    { time: '10h00', activity: 'Départ de la Boucle 3h', highlight: true },
    { time: '13h30', activity: 'Fin de la Boucle 3h' },
    { time: '14h30', activity: 'Départ de la Boucle 1h', highlight: true },
    { time: '15h30', activity: 'Fin de la Boucle 1h' },
    { time: '17h00', activity: 'Fin de la Boucle 12h' },
    { time: '15h00–17h30', activity: 'Temps convivial : restauration, annonce des fonds collectés, discours et remerciements' },
  ]

  return (
    <div className="bg-[#5f0230] text-white min-h-screen relative overflow-x-hidden">

      {/* 🌫️ BACKGROUND ANIMATION */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[#ffde59] via-transparent to-[#d31b75] animate-pulse pointer-events-none" />

      {/* HERO */}
      <section className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,6,64,0.7), rgba(211,27,117,0.7)), url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1974&auto=format&fit=crop')",
        }}>

        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">

          <div className="animate-[fadeIn_1s_ease-out]">
            <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-3 font-bold text-xs">
              Challenge Mental • Dépassement de Soi
            </p>

            <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6">
              Ultra Boucle
              <span className="block text-[#ffde59] animate-pulse">de Talant</span>
            </h1>

            <p className="text-xl font-bold mb-3">
              Combien de boucles vas-tu réaliser ?
            </p>

            <p className="text-lg text-white/90 max-w-xl mb-8">
              Repousse tes limites. Une boucle après l'autre.
              <strong className="text-[#ffde59]"> Pour une cause qui compte.</strong>
            </p>

            <button className="bg-[#ffde59] text-black px-7 py-3 rounded-xl font-black text-sm
              hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg">
              Je m'inscris
            </button>
          </div>

          {/* CARDS */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6
            hover:scale-[1.02] transition">

            <div className="grid grid-cols-2 gap-3">

              {[
                { label: "Date", value: "14 mars 2027" },
                { label: "Countdown", value: daysRemaining + " jours" },
                { label: "Boucle", value: "2.52 km" },
                { label: "D+", value: "113 m" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-black/20 rounded-xl p-4 hover:bg-black/30 transition"
                >
                  <p className="text-[#ffde59] text-xs uppercase mb-1 font-bold">
                    {item.label}
                  </p>
                  <h3 className="text-2xl font-black">
                    {item.value}
                  </h3>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* FORMATS */}
      <section className="py-16 bg-[#fff4f9] text-black">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-10">
            <p className="uppercase tracking-[0.3em] text-[#d31b75] text-xs font-bold">
              Les formats
            </p>

            <h2 className="text-4xl font-black uppercase">
              Choisissez votre défi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {formats.map((f, i) => (
              <div key={i}
                className="bg-white rounded-2xl p-5 shadow-lg
                hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                <h3 className="text-3xl font-black text-[#d31b75] mb-4">
                  {f.title}
                </h3>

                <div className="space-y-2">
                  <p><strong>Durée:</strong> {f.duration}</p>
                  <p><strong>Niveau:</strong> {f.level}</p>
                  <p><strong className="text-[#d31b75]">Départ:</strong> {f.depart}</p>
                  <p><strong>Arrivée:</strong> {f.fin}</p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="py-14 bg-gradient-to-br from-[#d31b75] to-[#7d0640]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-4xl font-black uppercase mb-5 animate-pulse">
              Parcours
            </h2>

            <p className="mb-6 text-white/90">
              Une boucle simple mais exigeante.
            </p>

            <p className="text-[#ffde59] font-black text-lg">
              Combien de boucles ?
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-4 flex justify-center">
            <div className="w-full max-w-[380px] aspect-square">
              <img
                src="https://i.ibb.co/tpXXW2sP/LOGO-4.png"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* PLANNING */}
      <section className="py-12 bg-[#fff4f9] text-black">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-black uppercase mb-6">
            Planning
          </h2>

          <div className="bg-white rounded-xl p-5 shadow-md">

            {horaires.map((h, i) => (
              <div key={i}
                className={`flex gap-3 py-2 border-b last:border-b-0 ${
                  h.highlight ? "bg-[#d31b75]/5 px-2 rounded" : ""
                }`}>

                <span className="min-w-[90px] font-bold text-[#d31b75]">
                  {h.time}
                </span>

                <span>{h.activity}</span>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* RETRAIT */}
      <section className="py-14 bg-gradient-to-br from-[#d31b75] to-[#7d0640]">

        <div className="max-w-6xl mx-auto px-6 text-center mb-8">
          <h2 className="text-4xl font-black uppercase animate-pulse">
            Retrait des dossards
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-6 items-center">

          <img
            src="https://i0.wp.com/ecolosport.fr/wp-content/uploads/2021/04/rubon355.png"
            className="rounded-2xl max-h-[320px] w-full object-cover shadow-xl"
          />

          <div className="bg-white/10 p-6 rounded-2xl">

            <p className="text-[#ffde59] font-bold mb-2">Lieu</p>
            <p className="mb-4">Complexe Sportif Marie-Thérèse Eyquem</p>

            <p className="text-[#ffde59] font-bold mb-2">Horaires</p>
            <p>Samedi 14h–18h</p>
            <p>Dimanche jusqu’à 14h</p>

          </div>

        </div>

      </section>

    </div>
  )
}