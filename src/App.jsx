export default function App() {
  const eventDate = new Date('2027-03-14T08:00:00')
  const today = new Date()
  const diff = eventDate - today
  const daysRemaining = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))

  const formats = [
    { title: 'Boucle 1H', duration: '1 heure', level: 'Débutants & familles' },
    { title: 'Boucle 6H', duration: '6 heures', level: 'Sportifs réguliers' },
    { title: 'Boucle 12H', duration: '12 heures', level: 'Coureurs confirmés' },
  ]

  return (
    <div className="bg-[#5f0230] text-white min-h-screen">
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,6,64,0.7), rgba(211,27,117,0.7)), url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-4 font-bold">
              Challenge Mental • Dépassement de Soi
            </p>

            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
              Ultra Boucle
              <span className="block text-[#ffde59]">de Talant</span>
            </h1>

            <p className="text-2xl font-bold text-white mb-4 leading-tight">
              Combien de boucles vas-tu réaliser ?
            </p>

            <p className="text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
              Repousse tes limites. Une boucle après l'autre. Contre le chrono. Contre toi-même. 
              <strong className="text-[#ffde59]"> Pour une cause qui compte.</strong>
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ffde59] text-black px-8 py-4 rounded-2xl font-black">
                Je m'inscris
              </button>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[2rem] p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/20 rounded-2xl p-6">
                <p className="text-[#ffde59] text-sm uppercase mb-2">Date</p>
                <h3 className="text-3xl font-black">14 mars 2027</h3>
              </div>

              <div className="bg-[#ffde59] text-black rounded-2xl p-6">
                <p className="uppercase text-sm mb-2 font-black">Countdown</p>
                <h3 className="text-4xl font-black">{daysRemaining}</h3>
                <p>jours restants</p>
              </div>

              <div className="bg-black/20 rounded-2xl p-6">
                <p className="text-[#ffde59] text-sm uppercase mb-2">Boucle</p>
                <h3 className="text-3xl font-black">2 km</h3>
              </div>

              <div className="bg-black/20 rounded-2xl p-6">
                <p className="text-[#ffde59] text-sm uppercase mb-2">D+</p>
                <h3 className="text-3xl font-black">40 m</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#ffde59] text-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-black rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-black rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <p className="uppercase tracking-[0.3em] text-black/70 mb-4 font-bold text-sm">
            Une course solidaire
          </p>
          
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-tight">
            Courir pour
            <span className="block">École Claire-Aimé</span>
          </h2>

          <div className="bg-black/5 backdrop-blur-sm border-2 border-black/10 rounded-3xl p-10 mb-8">
            <p className="text-xl md:text-2xl leading-relaxed font-medium">
              L'association <strong className="font-black">École Claire-Aimé</strong> œuvre au quotidien 
              pour le développement d'un établissement scolaire adapté aux enfants et adolescents 
              à besoins éducatifs particuliers.
            </p>
          </div>

          <p className="text-lg font-bold text-black/80">
            Chaque kilomètre compte. Chaque boucle a du sens. 🏃‍♂️💛
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#fff4f9] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
            <div>
              <p className="uppercase tracking-[0.3em] text-[#d31b75] mb-3 font-bold">
                Les formats
              </p>
              <h2 className="text-5xl font-black uppercase">Choisissez votre défi</h2>
            </div>

            <button className="bg-[#d31b75] text-white px-8 py-4 rounded-2xl font-black">
              S'inscrire
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 shadow-2xl">
                <h3 className="text-4xl font-black text-[#d31b75] mb-6">{format.title}</h3>

                <div className="space-y-4 text-lg">
                  <div className="flex justify-between border-b pb-3">
                    <span>Durée</span>
                    <strong>{format.duration}</strong>
                  </div>

                  <div className="flex justify-between border-b pb-3">
                    <span>Niveau</span>
                    <strong>{format.level}</strong>
                  </div>

                  <div className="flex justify-between pb-3">
                    <span>Classement</span>
                    <strong>Tours complétés</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-[#d31b75] to-[#7d0640] rounded-[2rem] p-10 text-white text-center">
            <p className="text-2xl md:text-3xl font-black mb-3">
              « Ce n'est pas contre les autres. C'est contre toi. »
            </p>
            <p className="text-lg text-white/90">
              Repousse tes limites. Une boucle à la fois. Aucune pression. Juste toi et ton mental.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#d31b75] to-[#7d0640]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-4 font-bold">
              Parcours
            </p>

            <h2 className="text-5xl font-black uppercase mb-8">
              Une boucle accessible à tous
            </h2>

            <div className="space-y-4 text-lg text-white/90">
              <p className="flex items-start gap-3">
                <span className="text-[#ffde59] text-2xl">•</span>
                <span><strong className="text-white">2 km</strong> au cœur de Talant Village</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#ffde59] text-2xl">•</span>
                <span><strong className="text-white">40 m de D+</strong> par boucle</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#ffde59] text-2xl">•</span>
                <span>Parcours accessible et <strong className="text-white">100% sécurisé</strong></span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-[#ffde59] text-2xl">•</span>
                <span>Ravitaillement à chaque passage</span>
              </p>
            </div>

            <p className="mt-8 text-2xl font-black text-[#ffde59]">
              Combien de fois vas-tu boucler ? 🔄
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-[2rem] h-[400px] flex items-center justify-center text-white/50 text-2xl font-black">
            IMAGE DE LA BOUCLE
          </div>
        </div>
      </section>

      <footer className="bg-[#7d0640] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-black uppercase">
              Ultra Boucle de Talant
            </h3>
            <p className="text-white/70 mt-2">
              Challenge mental • Dépassement de soi • Solidarité
            </p>
          </div>

          <button className="bg-[#ffde59] text-black px-8 py-4 rounded-2xl font-black">
            Je m'inscris
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>
            Au profit de l'association <strong className="text-[#ffde59]">École Claire-Aimé</strong>
          </p>
        </div>
      </footer>
    </div>
  )
}
