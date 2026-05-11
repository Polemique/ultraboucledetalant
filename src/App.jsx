export default function App() {
  const eventDate = new Date('2027-03-14T08:00:00')
  const today = new Date()
  const diff = eventDate - today
  const daysRemaining = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))

  const formats = [
    { title: '1 heure', duration: '1h', loops: '~3 boucles', profile: 'Première expérience' },
    { title: '6 heures', duration: '6h', loops: '~18 boucles', profile: 'Endurance solide' },
    { title: '12 heures', duration: '12h', loops: '~36 boucles', profile: 'Ultra mental' },
  ]

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,20,20,0.75), rgba(40,40,40,0.75)), url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-[#ffde59] mb-4 font-extrabold text-sm">
              Challenge Mental • Dépassement de Soi
            </p>

            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-6">
              Ultra
              <span className="block text-[#ffde59] mt-2">Boucle</span>
              <span className="block text-5xl md:text-6xl mt-2">Talant</span>
            </h1>

            <p className="text-2xl font-bold text-white mb-4 leading-tight">
              Combien de boucles vas-tu réaliser ?
            </p>

            <p className="text-lg text-white/80 max-w-xl mb-10 leading-relaxed">
              Repousse tes limites. Une boucle après l'autre. Contre le chrono. Contre toi-même. 
              <strong className="text-[#ffde59]"> Pour une cause qui compte.</strong>
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ffde59] text-black px-10 py-5 rounded-xl font-black uppercase text-lg hover:scale-105 transition-transform">
                Je m'inscris
              </button>

              <button className="bg-white/5 backdrop-blur-md border-2 border-white/30 px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition">
                Découvrir le parcours
              </button>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/20 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <p className="text-[#ffde59] text-xs uppercase mb-2 font-bold tracking-wider">Date</p>
                <h3 className="text-3xl font-black">14 Mars</h3>
                <p className="text-white/60 text-sm">2027</p>
              </div>

              <div className="bg-[#ffde59] text-black rounded-2xl p-6">
                <p className="uppercase text-xs mb-2 font-black tracking-wider">J-</p>
                <h3 className="text-5xl font-black leading-none">{daysRemaining}</h3>
                <p className="text-sm font-bold">jours</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <p className="text-[#ffde59] text-xs uppercase mb-2 font-bold tracking-wider">Boucle</p>
                <h3 className="text-3xl font-black">2 km</h3>
                <p className="text-white/60 text-sm">par tour</p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <p className="text-[#ffde59] text-xs uppercase mb-2 font-bold tracking-wider">Dénivelé</p>
                <h3 className="text-3xl font-black">40 m</h3>
                <p className="text-white/60 text-sm">D+ / tour</p>
              </div>
            </div>

            <div className="mt-6 bg-[#ffde59]/10 border border-[#ffde59]/30 rounded-2xl p-5 text-center">
              <p className="text-[#ffde59] font-black text-sm uppercase tracking-wider mb-1">Start</p>
              <p className="text-2xl font-black">8h00</p>
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
          <p className="uppercase tracking-[0.4em] text-black/70 mb-4 font-extrabold text-sm">
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

      <section className="py-20 bg-[#0a0a0a] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
            <div>
              <p className="uppercase tracking-[0.4em] text-[#ffde59] mb-3 font-extrabold text-sm">
                Ton challenge
              </p>
              <h2 className="text-5xl md:text-6xl font-black uppercase leading-tight">
                Choisis ton<br />format
              </h2>
            </div>

            <button className="bg-[#ffde59] text-black px-10 py-5 rounded-xl font-black uppercase hover:scale-105 transition-transform">
              S'inscrire
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-2 border-white/10 rounded-3xl p-8 hover:border-[#ffde59]/50 transition-all group">
                <div className="text-[#ffde59] text-6xl font-black mb-4 group-hover:scale-110 transition-transform">
                  {format.title}
                </div>

                <div className="h-1 w-20 bg-[#ffde59] mb-6 group-hover:w-full transition-all"></div>

                <div className="space-y-5 text-base">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/60">Durée</span>
                    <strong className="text-xl font-black">{format.duration}</strong>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/60">Estimation</span>
                    <strong className="text-lg font-bold text-[#ffde59]">{format.loops}</strong>
                  </div>

                  <div className="flex justify-between items-center pb-4">
                    <span className="text-white/60">Profil</span>
                    <strong className="text-sm font-bold">{format.profile}</strong>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-white/50 text-sm font-bold uppercase tracking-wider">
                    Classement par tours
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#ffde59]/10 border-2 border-[#ffde59]/30 rounded-3xl p-8 text-center">
            <p className="text-2xl font-black text-[#ffde59] mb-3">
              « Ce n'est pas contre les autres. C'est contre toi. »
            </p>
            <p className="text-white/70 text-lg">
              Repousse tes limites. Une boucle à la fois. Aucune pression. Juste toi et ton mental.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a1a1a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-[#ffde59] mb-4 font-extrabold text-sm">
              Le parcours
            </p>

            <h2 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-tight">
              Une boucle.<br />
              Ton rythme.
            </h2>

            <div className="space-y-4 text-lg text-white/80">
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

            <p className="mt-8 text-xl font-bold text-[#ffde59]">
              Combien de fois vas-tu boucler ? 🔄
            </p>
          </div>

          <div className="bg-white/5 border-2 border-white/20 rounded-3xl h-[400px] flex items-center justify-center text-white/30 text-xl font-black uppercase tracking-wider">
            Carte du parcours
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
            <div>
              <p className="uppercase tracking-[0.4em] text-[#ffde59] mb-3 font-extrabold text-sm">
                Souvenirs
              </p>

              <h2 className="text-5xl md:text-6xl font-black uppercase">
                L'édition<br />précédente
              </h2>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="min-w-[320px] h-[260px] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-2 border-white/10 rounded-3xl flex items-center justify-center text-white/20 font-black uppercase tracking-wider"
              >
                Photo {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black border-t-2 border-[#ffde59] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-4xl font-black uppercase mb-2">
              Ultra Boucle
              <span className="text-[#ffde59]"> Talant</span>
            </h3>
            <p className="text-white/60 font-bold">
              Challenge mental • Dépassement de soi • Solidarité
            </p>
          </div>

          <button className="bg-[#ffde59] text-black px-10 py-5 rounded-xl font-black uppercase hover:scale-105 transition-transform">
            Je m'inscris
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>
            Au profit de l'association <strong className="text-[#ffde59]">École Claire-Aimé</strong>
          </p>
        </div>
      </footer>
    </div>
  )
}