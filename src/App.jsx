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
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,6,64,0.7), rgba(211,27,117,0.7)), url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
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
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#ffde59] text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-black/70 mb-3 font-bold text-xs">
            Une course solidaire
          </p>

          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
            Courir pour École Claire-Aime
          </h2>

          <div className="bg-black/5 backdrop-blur-sm border-2 border-black/10 rounded-2xl p-8 mb-6">
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              L'association{' '}
              <strong className="font-black">École Claire-Aime</strong> œuvre au
              quotidien pour le développement d'un établissement scolaire adapté
              aux enfants et adolescents à besoins éducatifs particuliers.
            </p>
          </div>

          <p className="text-base font-bold text-black/80">
            Chaque kilomètre compte. Chaque boucle a du sens.
          </p>
        </div>
      </section>

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

            <button className="bg-[#d31b75] text-white px-7 py-3 rounded-xl font-black text-sm hover:scale-105 transition">
              S'inscrire
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition"
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
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-br from-[#d31b75] to-[#7d0640] rounded-2xl p-8 text-white text-center">
            <p className="text-xl md:text-2xl font-black mb-2">
              « Ce n'est pas contre les autres. C'est contre toi. »
            </p>
            <p className="text-base text-white/90">
              Repousse tes limites. Une boucle à la fois. Aucune pression.
              Juste toi et ton mental.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#d31b75] to-[#7d0640]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-3 font-bold text-xs">
              Parcours
            </p>

            <h2 className="text-4xl font-black uppercase mb-6">
              Une boucle accessible à tous
            </h2>

            <div className="space-y-3 text-base text-white/90">
              <p className="flex items-start gap-3">
                <span className="text-[#ffde59] text-xl">•</span>
                <span>
                  <strong className="text-white">2.52 km</strong> au cœur de
                  Talant
                </span>
              </p>

              <p className="flex items-start gap-3">
                <span className="text-[#ffde59] text-xl">•</span>
                <span>
                  <strong className="text-white">113 m de D+</strong> par boucle
                </span>
              </p>

              <p className="flex items-start gap-3">
                <span className="text-[#ffde59] text-xl">•</span>
                <span>
                  Parcours accessible et{' '}
                  <strong className="text-white">
                    100% sécurisé
                  </strong>
                </span>
              </p>

              <p className="flex items-start gap-3">
                <span className="text-[#ffde59] text-xl">•</span>
                <span>Ravitaillement à chaque passage</span>
              </p>
            </div>

            <p className="mt-6 text-xl font-black text-[#ffde59]">
              Combien de fois vas-tu boucler ?
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-4 flex items-center justify-center">
            <img
              src="https://i.ibb.co/tpXXW2sP/LOGO-4.png"
              alt="Parcours de la boucle"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#fff4f9] text-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="uppercase tracking-[0.3em] text-[#d31b75] mb-2 font-bold text-xs">
              Planning
            </p>

            <h2 className="text-4xl font-black uppercase">
              Horaires de la journée
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-4xl mx-auto">
            <div className="space-y-3">
              {horaires.map((horaire, index) => (
                <div
                  key={index}
                  className={`flex gap-4 pb-3 border-b last:border-b-0 text-sm ${
                    horaire.highlight
                      ? 'bg-[#d31b75]/5 -mx-3 px-3 py-2 rounded-lg'
                      : ''
                  }`}
                >
                  <div
                    className={`font-black min-w-[110px] ${
                      horaire.highlight
                        ? 'text-[#d31b75]'
                        : 'text-black/60'
                    }`}
                  >
                    {horaire.time}
                  </div>

                  <div className={horaire.highlight ? 'font-bold' : ''}>
                    {horaire.activity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#d31b75] to-[#7d0640] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="uppercase tracking-[0.3em] text-[#ffde59] mb-3 font-bold text-xs">
              Informations pratiques
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase">
              Retrait des dossards
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ffde59]/20 blur-3xl rounded-full"></div>

              <img
                src="https://i0.wp.com/ecolosport.fr/wp-content/uploads/2021/04/rubon355.png?fit=1397%2C771&ssl=1"
                alt="Retrait des dossards"
                className="relative rounded-3xl shadow-2xl object-cover h-[420px] w-full border border-white/10"
              />
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10">
              <div className="border-b border-white/10 pb-6 mb-6">
                <p className="text-[#ffde59] uppercase tracking-[0.25em] text-xs font-bold mb-3">
                  Lieu de retrait
                </p>

                <h3 className="text-2xl font-black mb-3">
                  Complexe Sportif Marie-Thérèse Eyquem
                </h3>

                <p className="text-white/80 leading-relaxed">
                  Chemin des Aiges
                  <br />
                  21240 Talant
                </p>
              </div>

              <div className="space-y-5">
                <div className="bg-black/20 rounded-2xl p-5">
                  <p className="text-[#ffde59] text-xs uppercase tracking-[0.2em] font-bold mb-2">
                    Samedi
                  </p>

                  <p className="text-2xl font-black">
                    14h00 — 18h00
                  </p>
                </div>

                <div className="bg-black/20 rounded-2xl p-5">
                  <p className="text-[#ffde59] text-xs uppercase tracking-[0.2em] font-bold mb-2">
                    Dimanche
                  </p>

                  <p className="text-2xl font-black">
                    Jusqu’à 14h00
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/70 text-sm leading-relaxed">
                  Merci de prévoir une pièce d’identité ainsi que votre
                  confirmation d’inscription afin de fluidifier le retrait des
                  dossards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fff4f9] text-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-[#d31b75] mb-3 font-bold text-xs">
              Soutien
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
              Nos partenaires
            </h2>

            <p className="text-black/60 max-w-2xl mx-auto">
              Ils soutiennent l’Ultra Boucle de Talant et participent au
              développement d’un événement sportif et solidaire accessible à
              tous.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              'NovaRun',
              'Altitude Sport',
              'Pulse Nutrition',
              'Urban Move',
              'Monts & Trail',
              'Kinetik Studio',
              'HydraBoost',
              'Peak Energy',
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 flex items-center justify-center min-h-[130px]"
              >
                <span className="text-xl md:text-2xl font-black text-[#d31b75] text-center uppercase tracking-wide">
                  {partner}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-[#d31b75] hover:bg-[#b01561] transition text-white px-8 py-4 rounded-2xl font-black">
              Devenir partenaire
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#7d0640] border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <h3 className="text-2xl font-black uppercase">
                Ultra Boucle de Talant
              </h3>

              <p className="text-white/70 mt-1 text-sm">
                Challenge mental • Dépassement de soi • Solidarité
              </p>
            </div>

            <button className="bg-[#ffde59] text-black px-7 py-3 rounded-xl font-black text-sm hover:scale-105 transition">
              Je m'inscris
            </button>
          </div>

          <div className="border-t border-white/10 pt-6 text-center space-y-3">
            <p className="text-white/60 text-sm">
              Au profit de l'association{' '}
              <strong className="text-[#ffde59]">
                École Claire-Aime
              </strong>
            </p>

            <div className="flex flex-col items-center gap-1">
              <p className="text-white/70 font-bold text-sm">
                Contact
              </p>

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
  )
}