import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Star, Utensils, ShoppingBag, Bike, Quote } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";
import patatasAlioli from "@/assets/patatas-alioli.jpg";
import thaiBurger from "@/assets/thai-burger.jpg";
import bocata from "@/assets/bocata.jpg";
import taberna from "@/assets/taberna.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bar Aldapa — Taberna & Hanburgesak | Urretxu" },
      { name: "description", content: "Bar Aldapa, taberna en Urretxu (Gipuzkoa) especializada en hamburguesas, bocatas y pintxos. Hamburguesa Wagyu, patatas alioli y mucho más." },
      { property: "og:title", content: "Bar Aldapa — Taberna & Hanburgesak" },
      { property: "og:description", content: "Hamburguesas gourmet, bocatas y pintxos en el corazón de Urretxu." },
    ],
  }),
  component: Home,
});

const featured = [
  { name: "Hamburguesa Wagyu", desc: "Carne wagyu, queso fundido, lechuga fresca, brioche artesano.", price: "14,50 €", img: heroBurger, tag: "Ezaguna" },
  { name: "Hamburguesa Diabla", desc: "Carne de vacuno, jalapeños, salsa diabla picante, cheddar fundido.", price: "13,50 €", img: thaiBurger, tag: "Ezaguna" },
  { name: "Patatas Alioli", desc: "Patatas crujientes con salsa alioli casera.", price: "6,50 €", img: patatasAlioli, tag: "Ezaguna" },
  { name: "Bocata Ibérico", desc: "Jamón ibérico, pan crujiente, aceite de oliva virgen extra.", price: "9,80 €", img: bocata },
];

const menuSections = [
  {
    title: "Hanburgesak",
    subtitle: "Hamburguesas",
    items: [
      { name: "Hamburguesa Wagyu", desc: "Wagyu, queso fundido, lechuga, brioche artesano.", price: "14,50 €", tag: "Ezaguna" },
      { name: "Hamburguesa Diabla", desc: "Vacuno, jalapeños, salsa diabla, cheddar.", price: "13,50 €", tag: "Ezaguna" },
      { name: "Thai Burger", desc: "Salsa thai, verdura crujiente, pan de sésamo.", price: "13,00 €" },
      { name: "Hamburguesa Aldapa", desc: "La especial de la casa: bacon, cebolla caramelizada, queso azul.", price: "12,50 €" },
      { name: "Hamburguesa BBQ", desc: "Salsa barbacoa, bacon crujiente, cheddar y cebolla frita.", price: "12,00 €" },
      { name: "Hamburguesa Clásica", desc: "Vacuno, tomate, lechuga, cebolla y queso.", price: "10,50 €" },
      { name: "Hamburguesa Vegetal", desc: "Hamburguesa vegetal, pimientos asados, rúcula y alioli.", price: "10,00 €" },
      { name: "Hamburguesa Pollo Crispy", desc: "Pollo crujiente, lechuga, tomate y salsa césar.", price: "11,00 €" },
    ],
  },
  {
    title: "Bokatak",
    subtitle: "Bocadillos",
    items: [
      { name: "ALDAPA B1", desc: "Pulled pork, cebolla crujiente, bacon crujiente, queso cheddar.", price: "8,50 €" },
      { name: "ALDAPA B2", desc: "Calamares y alioli.", price: "8,00 €" },
      { name: "ALDAPA B3", desc: "Lomo ibérico a la plancha, queso brie, cebolla caramelizada.", price: "8,00 €" },
      { name: "ALDAPA B4", desc: "Pechuga, salsa roquefort, cebolla caramelizada.", price: "7,50 €" },
      { name: "ALDAPA B5", desc: "Vegetal: lechuga, tomate, pavo braseado, huevo duro, aguacate y mayonesa.", price: "7,50 €" },
      { name: "ALDAPA B6", desc: "Pechuga empanada, pimiento verde, queso trufado, cebolla.", price: "7,50 €" },
      { name: "ALDAPA B7", desc: "Lomo, queso Idiazábal, pimiento rojo caramelizado.", price: "8,50 €" },
    ],
  },
  {
    title: "Raziuak",
    subtitle: "Raciones",
    items: [
      { name: "Patatas caseras", desc: "Bravas o alioli.", price: "7,50 €" },
      { name: "Calamares", desc: "Calamares con alioli.", price: "10,00 €" },
      { name: "Alitas de pollo", desc: "Alitas de pollo con salsa barbacoa.", price: "7,50 €" },
      { name: "Croquetas ibéricas", desc: "", price: "7,50 €" },
      { name: "Tequeños", desc: "Tequeños con salsa.", price: "8,50 €" },
      { name: "Pollo Kentucky", desc: "Pollo Kentucky con dos salsas.", price: "8,50 €" },
      { name: "Jamón ibérico", desc: "", price: "18,00 €" },
      { name: "Pulpo", desc: "Solo fines de semana.", price: "18,00 €" },
    ],
  },
  {
    title: "Postreak",
    subtitle: "Postres",
    items: [
      { name: "Tarta de queso", desc: "", price: "6,50 €" },
      { name: "Coulant", desc: "", price: "5,50 €" },
    ],
  },
];

const reviews = [
  { name: "Igor", text: "Gomendatzeko modukoa hanburgesak espezialitate bezela daukaten taberna hau. Zerbitzu bikaina eta hanburgesa bereziak aukeran.", rating: 5 },
  { name: "Angel Villanueva", text: "Kafea hartzeko toki ederra. Zerbitzu bikaina.", rating: 5 },
  { name: "666", text: "Pintxo ederrak. Gomendatzen dut.", rating: 4 },
];

const schedule = [
  ["Astelehena", "Itxita"],
  ["Asteartea", "17:00 — 23:00"],
  ["Asteazkena", "17:00 — 23:00"],
  ["Osteguna", "17:00 — 23:00"],
  ["Ostirala", "17:00 — 00:00"],
  ["Larunbata", "12:00 — 00:00"],
  ["Igandea", "12:00 — 22:00"],
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-charcoal/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-[image:var(--gradient-warm)] grid place-items-center text-cream font-display font-bold">A</span>
            <span className="font-display text-xl text-cream tracking-tight">Bar Aldapa</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-cream/80">
            <a href="#menua" className="hover:text-gold transition">Menua</a>
            <a href="#honi-buruz" className="hover:text-gold transition">Honi buruz</a>
            <a href="#iritziak" className="hover:text-gold transition">Iritziak</a>
            <a href="#kontaktua" className="hover:text-gold transition">Kontaktua</a>
          </nav>
          <a href="tel:+34943252592" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ember text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-warm)]">
            <Phone className="w-4 h-4" /> Erreserbatu
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center bg-charcoal overflow-hidden pt-20">
        <img src={heroBurger} alt="" width={1600} height={1200} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-cream space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-gold/30 text-gold text-xs uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> Urretxu · Gipuzkoa
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95]">
              Hanburgesak,<br />
              <span className="italic text-gold">pintxoak</span> &<br />
              giro ona.
            </h1>
            <p className="text-lg text-cream/70 max-w-md leading-relaxed">
              Bar Aldapa. Urretxuko bihotzean dagoen taberna, hanburgesa bereziak, bokata epelak eta pintxo gozoekin.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 5 ? "fill-gold text-gold" : "fill-gold/40 text-gold/40"}`} />
                  ))}
                </div>
                <span className="font-display text-2xl">5,0</span>
                <span className="text-cream/60 text-sm">· 178 iritzi</span>
              </div>
              <div className="h-6 w-px bg-cream/20" />
              <span className="text-cream/70 text-sm">10 — 20 € pertsonako</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a href="#menua" className="px-7 py-3.5 rounded-full bg-ember text-primary-foreground font-medium hover:scale-105 transition shadow-[var(--shadow-warm)]">
                Ikusi menua
              </a>
              <a href="tel:+34943252592" className="px-7 py-3.5 rounded-full border border-cream/30 text-cream font-medium hover:bg-cream/10 transition inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> 943 25 25 92
              </a>
            </div>
          </div>

          {/* floating info card */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-6 bg-[image:var(--gradient-warm)] opacity-20 blur-3xl rounded-full" />
            <div className="relative bg-cream/5 backdrop-blur-xl border border-cream/10 rounded-3xl p-8 text-cream shadow-[var(--shadow-glow)]">
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Gaurko egoera</p>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="font-display text-2xl">Itxita dago</span>
              </div>
              <p className="text-sm text-cream/70 mb-6">Irekitze-ordua gaur · <span className="text-cream">17:00</span></p>
              <div className="h-px bg-cream/10 my-6" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <ServiceBadge icon={Utensils} label="Bertan jan" />
                <ServiceBadge icon={ShoppingBag} label="Eramateko" />
                <ServiceBadge icon={Bike} label="Etxez etxe" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section id="menua" className="py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-ember mb-3">Aipagarriak</p>
              <h2 className="text-5xl md:text-6xl font-bold text-charcoal">Plater izarrak</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Bezeroek gehien eskatzen dituztenak. Egunero osagai freskoekin prestatuak.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {featured.map((item) => (
              <article key={item.name} className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-[var(--shadow-warm)] hover:-translate-y-1 transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                  <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {item.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-cream/95 backdrop-blur text-charcoal text-[10px] font-bold tracking-widest uppercase rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold text-charcoal">{item.name}</h3>
                    <span className="font-display text-lg text-ember whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-ember mb-3">Karta osoa</p>
            <h2 className="text-5xl md:text-6xl font-bold text-charcoal">Menu osoa</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Hanburgesak, bokatak, raziak, pintxoak eta postreak. Aukera zabala denentzat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            {menuSections.map((section) => (
              <div key={section.title}>
                <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-ember/30">
                  <h3 className="font-display text-3xl text-charcoal font-bold">{section.title}</h3>
                  <span className="text-sm text-muted-foreground italic">{section.subtitle}</span>
                </div>
                <ul className="space-y-5">
                  {section.items.map((item) => (
                    <li key={item.name} className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <h4 className="font-semibold text-charcoal">{item.name}</h4>
                          {item.tag && (
                            <span className="px-2 py-0.5 bg-gold/20 text-ember text-[9px] font-bold tracking-widest uppercase rounded-full">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="font-display text-ember whitespace-nowrap font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-16 italic">
            * Prezioak orientagarriak dira. Karta sasoiaren arabera alda daiteke.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="honi-buruz" className="py-28 px-6 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ember/20 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="relative">
            <img src={taberna} alt="Bar Aldapa interior" loading="lazy" width={1600} height={1000} className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-ember text-primary-foreground rounded-2xl p-6 shadow-[var(--shadow-warm)]">
              <p className="font-display text-4xl font-bold">45+</p>
              <p className="text-xs uppercase tracking-wider opacity-80">pertsonek gomendatzen dute</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Honi buruz</p>
            <h2 className="text-5xl font-bold leading-tight">Auzoko taberna, eskuz eginiko sukaldea.</h2>
            <p className="text-cream/70 leading-relaxed text-lg">
              Areizaga kalean, Urretxuko erdigunean. Hanburgesa berezietan, bokata epeletan eta pintxo gozoetan espezializatuta gauden taberna familiarra gara. Karta laburra, kalitatezko osagaiak eta tratu hurbila.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <Stat value="4,4★" label="178 iritzi" />
              <Stat value="10-20€" label="Pertsonako" />
              <Stat value="3 zerb." label="Eskuragarri" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="iritziak" className="py-28 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-ember mb-3">Iritziak</p>
            <h2 className="text-5xl md:text-6xl font-bold text-charcoal">Bezeroek diotena</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card rounded-2xl p-8 border border-border relative">
                <Quote className="w-10 h-10 text-ember/20 absolute top-6 right-6" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < r.rating ? "fill-gold text-gold" : "fill-muted text-muted"}`} />
                  ))}
                </div>
                <p className="text-charcoal leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-[image:var(--gradient-warm)] grid place-items-center text-cream font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">Google Local Guide</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontaktua" className="py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ember mb-3">Kontaktua</p>
            <h2 className="text-5xl font-bold text-charcoal mb-8">Etorri, gose izan zaitez.</h2>

            <div className="space-y-6">
              <InfoRow icon={MapPin} title="Helbidea" lines={["Areizaga Kalea, 3", "20700 Urretxu, Gipuzkoa"]} />
              <InfoRow icon={Phone} title="Telefonoa" lines={["943 25 25 92"]} href="tel:+34943252592" />
              <InfoRow icon={Clock} title="Ordutegia" lines={["Ast: itxita", "Ar-Ig: 17:00 — 23:00"]} />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Bar+Aldapa+Urretxu&query_place_id=ChIJLwBAtdMt1QIR53nyPBeHXlw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full bg-charcoal text-cream hover:bg-ember transition"
            >
              <MapPin className="w-4 h-4" /> Ikusi Google Maps-en
            </a>
          </div>

          <div className="bg-charcoal text-cream rounded-3xl p-8 md:p-10">
            <h3 className="font-display text-2xl mb-6 text-gold">Ordutegi osoa</h3>
            <ul className="divide-y divide-cream/10">
              {schedule.map(([day, time]) => (
                <li key={day} className="flex justify-between py-3.5">
                  <span className="text-cream/90">{day}</span>
                  <span className={time === "Itxita" ? "text-destructive" : "text-cream"}>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-charcoal text-cream/60 py-10 px-6 border-t border-cream/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Bar Aldapa · Urretxu, Gipuzkoa</p>
          <p>Areizaga Kalea, 3 · 943 25 25 92</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceBadge({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="w-10 h-10 rounded-full bg-gold/10 grid place-items-center text-gold">
        <Icon className="w-5 h-5" />
      </span>
      <span className="text-xs text-cream/70">{label}</span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-gold font-bold">{value}</p>
      <p className="text-xs text-cream/60 uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}

function InfoRow({ icon: Icon, title, lines, href }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[]; href?: string }) {
  const content = (
    <div className="flex gap-4">
      <span className="w-11 h-11 rounded-full bg-ember/10 text-ember grid place-items-center shrink-0">
        <Icon className="w-5 h-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{title}</p>
        {lines.map((l) => <p key={l} className="text-charcoal">{l}</p>)}
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-70 transition">{content}</a> : content;
}
