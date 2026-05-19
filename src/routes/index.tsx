import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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

type Lang = "eu" | "es";

const translations = {
  eu: {
    nav: { menu: "Menua", about: "Honi buruz", reviews: "Iritziak", contact: "Kontaktua", reserve: "Erreserbatu" },
    hero: {
      badge: "Urretxu · Gipuzkoa",
      title1: "Hanburgesak,",
      title2: "pintxoak",
      title3: "& giro ona.",
      desc: "Bar Aldapa. Urretxuko bihotzean dagoen taberna, hanburgesa bereziak, bokata epelak eta pintxo gozoekin.",
      reviews: "iritzi",
      perPerson: "10 — 20 € pertsonako",
      seeMenu: "Ikusi menua",
      status: "Gaurko egoera",
      closed: "Itxita dago",
      opening: "Irekitze-ordua gaur",
      eatIn: "Bertan jan",
      takeAway: "Eramateko",
      delivery: "Etxez etxe",
    },
    featured: { kicker: "Aipagarriak", title: "Plater izarrak", desc: "Bezeroek gehien eskatzen dituztenak. Egunero osagai freskoekin prestatuak.", tag: "Ezaguna" },
    menu: { kicker: "Karta osoa", title: "Menu osoa", desc: "Hanburgesak, bokatak, raziak eta postreak. Aukera zabala denentzat.", disclaimer: "* Prezioak orientagarriak dira. Karta sasoiaren arabera alda daiteke." },
    about: { kicker: "Honi buruz", title: "Auzoko taberna, eskuz eginiko sukaldea.", desc: "Areizaga kalean, Urretxuko erdigunean. Hanburgesa berezietan, bokata epeletan eta pintxo gozoetan espezializatuta gauden taberna familiarra gara. Karta laburra, kalitatezko osagaiak eta tratu hurbila.", stat1: "178 iritzi", stat2: "Pertsonako", stat3: "Eskuragarri", recommend: "pertsonek gomendatzen dute" },
    reviewsSec: { kicker: "Iritziak", title: "Bezeroek diotena" },
    contact: { kicker: "Kontaktua", title: "Etorri, gose izan zaitez.", address: "Helbidea", phone: "Telefonoa", schedule: "Ordutegia", schedShort: ["Ast: itxita", "Ar-Ig: 17:00 — 23:00"], maps: "Ikusi Google Maps-en", fullSchedule: "Ordutegi osoa" },
    menuSections: [
      { title: "Hanburgesak", subtitle: "Hamburguesas" },
      { title: "Bokatak", subtitle: "Bocadillos" },
      { title: "Raziuak", subtitle: "Raciones" },
      { title: "Postreak", subtitle: "Postres" },
    ],
    schedule: [
      ["Astelehena", "Itxita"],
      ["Asteartea", "17:00 — 23:00"],
      ["Asteazkena", "17:00 — 23:00"],
      ["Osteguna", "17:00 — 23:00"],
      ["Ostirala", "17:00 — 00:00"],
      ["Larunbata", "12:00 — 00:00"],
      ["Igandea", "12:00 — 22:00"],
    ],
    closedLabel: "Itxita",
  },
  es: {
    nav: { menu: "Menú", about: "Sobre nosotros", reviews: "Opiniones", contact: "Contacto", reserve: "Reservar" },
    hero: {
      badge: "Urretxu · Gipuzkoa",
      title1: "Hamburguesas,",
      title2: "pintxos",
      title3: "y buen ambiente.",
      desc: "Bar Aldapa. Taberna en el corazón de Urretxu, con hamburguesas especiales, bocatas calientes y pintxos deliciosos.",
      reviews: "opiniones",
      perPerson: "10 — 20 € por persona",
      seeMenu: "Ver menú",
      status: "Estado de hoy",
      closed: "Cerrado",
      opening: "Apertura hoy",
      eatIn: "Comer aquí",
      takeAway: "Para llevar",
      delivery: "A domicilio",
    },
    featured: { kicker: "Destacados", title: "Platos estrella", desc: "Los más pedidos por nuestros clientes. Preparados a diario con ingredientes frescos.", tag: "Popular" },
    menu: { kicker: "Carta completa", title: "Menú completo", desc: "Hamburguesas, bocadillos, raciones y postres. Amplia variedad para todos.", disclaimer: "* Precios orientativos. La carta puede variar según la temporada." },
    about: { kicker: "Sobre nosotros", title: "Taberna de barrio, cocina artesana.", desc: "En la calle Areizaga, en el centro de Urretxu. Somos una taberna familiar especializada en hamburguesas especiales, bocatas calientes y pintxos deliciosos. Carta corta, ingredientes de calidad y trato cercano.", stat1: "178 opiniones", stat2: "Por persona", stat3: "Disponibles", recommend: "personas lo recomiendan" },
    reviewsSec: { kicker: "Opiniones", title: "Lo que dicen los clientes" },
    contact: { kicker: "Contacto", title: "Ven, ten hambre.", address: "Dirección", phone: "Teléfono", schedule: "Horario", schedShort: ["Lun: cerrado", "Mar-Dom: 17:00 — 23:00"], maps: "Ver en Google Maps", fullSchedule: "Horario completo" },
    menuSections: [
      { title: "Hamburguesas", subtitle: "Hanburgesak" },
      { title: "Bocadillos", subtitle: "Bokatak" },
      { title: "Raciones", subtitle: "Raziuak" },
      { title: "Postres", subtitle: "Postreak" },
    ],
    schedule: [
      ["Lunes", "Cerrado"],
      ["Martes", "17:00 — 23:00"],
      ["Miércoles", "17:00 — 23:00"],
      ["Jueves", "17:00 — 23:00"],
      ["Viernes", "17:00 — 00:00"],
      ["Sábado", "12:00 — 00:00"],
      ["Domingo", "12:00 — 22:00"],
    ],
    closedLabel: "Cerrado",
  },
} as const;

const featuredData = {
  eu: [
    { name: "Wagyu Hanburgesa", desc: "Wagyu haragia, gazta urtua, letxuga freskoa, brioche artisaua.", price: "14,50 €", img: heroBurger, tagged: true },
    { name: "Hanburgesa Diabla", desc: "Behi haragia, jalapeñoak, diabla saltsa min-mina, cheddar urtua.", price: "13,50 €", img: thaiBurger, tagged: true },
    { name: "Patata Alioliak", desc: "Patata krakatsuak etxeko alioli saltsarekin.", price: "6,50 €", img: patatasAlioli, tagged: true },
    { name: "Bokata Iberikoa", desc: "Urdaiazpiko iberikoa, ogi krakatsua, oliba olio birjina estra.", price: "9,80 €", img: bocata },
  ],
  es: [
    { name: "Hamburguesa Wagyu", desc: "Carne wagyu, queso fundido, lechuga fresca, brioche artesano.", price: "14,50 €", img: heroBurger, tagged: true },
    { name: "Hamburguesa Diabla", desc: "Carne de vacuno, jalapeños, salsa diabla picante, cheddar fundido.", price: "13,50 €", img: thaiBurger, tagged: true },
    { name: "Patatas Alioli", desc: "Patatas crujientes con salsa alioli casera.", price: "6,50 €", img: patatasAlioli, tagged: true },
    { name: "Bocata Ibérico", desc: "Jamón ibérico, pan crujiente, aceite de oliva virgen extra.", price: "9,80 €", img: bocata },
  ],
};

const menuItemsData = {
  eu: [
    [
      { name: "Wagyu Hanburgesa", desc: "Wagyu, gazta urtua, letxuga, brioche artisaua.", price: "14,50 €", tagged: true },
      { name: "Hanburgesa Diabla", desc: "Behikia, jalapeñoak, diabla saltsa, cheddar.", price: "13,50 €", tagged: true },
      { name: "Thai Hanburgesa", desc: "Thai saltsa, barazki krakatsuak, sesamo ogia.", price: "13,00 €" },
      { name: "Aldapa Hanburgesa", desc: "Etxeko berezia: hirugihar, tipula karamelatua, gazta urdina.", price: "12,50 €" },
      { name: "BBQ Hanburgesa", desc: "Barbakoa saltsa, hirugihar krakatsua, cheddar eta tipula frijitua.", price: "12,00 €" },
      { name: "Hanburgesa Klasikoa", desc: "Behikia, tomatea, letxuga, tipula eta gazta.", price: "10,50 €" },
      { name: "Hanburgesa Begetala", desc: "Hanburgesa begetala, piper erreak, errukula eta aliolia.", price: "10,00 €" },
      { name: "Oilasko Krispy Hanburgesa", desc: "Oilasko krakatsua, letxuga, tomatea eta cesar saltsa.", price: "11,00 €" },
    ],
    [
      { name: "ALDAPA B1", desc: "Pulled pork, tipula krakatsua, hirugihar krakatsua, cheddar gazta.", price: "8,50 €" },
      { name: "ALDAPA B2", desc: "Txipiroiak eta aliolia.", price: "8,00 €" },
      { name: "ALDAPA B3", desc: "Solomo iberikoa plantxan, brie gazta, tipula karamelatua.", price: "8,00 €" },
      { name: "ALDAPA B4", desc: "Bularkia, roquefort saltsa, tipula karamelatua.", price: "7,50 €" },
      { name: "ALDAPA B5", desc: "Begetala: letxuga, tomatea, indioilar erregosia, arrautza gogorra, ahuakatea eta maionesa.", price: "7,50 €" },
      { name: "ALDAPA B6", desc: "Bularki enpanatua, piper berdea, boilur gazta, tipula.", price: "7,50 €" },
      { name: "ALDAPA B7", desc: "Solomoa, Idiazabal gazta, piper gorri karamelatua.", price: "8,50 €" },
    ],
    [
      { name: "Etxeko patatak", desc: "Bravas edo alioli.", price: "7,50 €" },
      { name: "Txipiroiak", desc: "Txipiroiak alioliarekin.", price: "10,00 €" },
      { name: "Oilasko hegoak", desc: "Oilasko hegoak barbakoa saltsarekin.", price: "7,50 €" },
      { name: "Kroketa iberikoak", desc: "", price: "7,50 €" },
      { name: "Tequeñoak", desc: "Tequeñoak saltsarekin.", price: "8,50 €" },
      { name: "Kentucky oilaskoa", desc: "Kentucky oilaskoa bi saltsekin.", price: "8,50 €" },
      { name: "Urdaiazpiko iberikoa", desc: "", price: "18,00 €" },
      { name: "Olagarroa", desc: "Asteburuetan soilik.", price: "18,00 €" },
    ],
    [
      { name: "Gazta tarta", desc: "", price: "6,50 €" },
      { name: "Coulanta", desc: "", price: "5,50 €" },
    ],
  ],
  es: [
    [
      { name: "Hamburguesa Wagyu", desc: "Wagyu, queso fundido, lechuga, brioche artesano.", price: "14,50 €", tagged: true },
      { name: "Hamburguesa Diabla", desc: "Vacuno, jalapeños, salsa diabla, cheddar.", price: "13,50 €", tagged: true },
      { name: "Thai Burger", desc: "Salsa thai, verdura crujiente, pan de sésamo.", price: "13,00 €" },
      { name: "Hamburguesa Aldapa", desc: "La especial de la casa: bacon, cebolla caramelizada, queso azul.", price: "12,50 €" },
      { name: "Hamburguesa BBQ", desc: "Salsa barbacoa, bacon crujiente, cheddar y cebolla frita.", price: "12,00 €" },
      { name: "Hamburguesa Clásica", desc: "Vacuno, tomate, lechuga, cebolla y queso.", price: "10,50 €" },
      { name: "Hamburguesa Vegetal", desc: "Hamburguesa vegetal, pimientos asados, rúcula y alioli.", price: "10,00 €" },
      { name: "Hamburguesa Pollo Crispy", desc: "Pollo crujiente, lechuga, tomate y salsa césar.", price: "11,00 €" },
    ],
    [
      { name: "ALDAPA B1", desc: "Pulled pork, cebolla crujiente, bacon crujiente, queso cheddar.", price: "8,50 €" },
      { name: "ALDAPA B2", desc: "Calamares y alioli.", price: "8,00 €" },
      { name: "ALDAPA B3", desc: "Lomo ibérico a la plancha, queso brie, cebolla caramelizada.", price: "8,00 €" },
      { name: "ALDAPA B4", desc: "Pechuga, salsa roquefort, cebolla caramelizada.", price: "7,50 €" },
      { name: "ALDAPA B5", desc: "Vegetal: lechuga, tomate, pavo braseado, huevo duro, aguacate y mayonesa.", price: "7,50 €" },
      { name: "ALDAPA B6", desc: "Pechuga empanada, pimiento verde, queso trufado, cebolla.", price: "7,50 €" },
      { name: "ALDAPA B7", desc: "Lomo, queso Idiazábal, pimiento rojo caramelizado.", price: "8,50 €" },
    ],
    [
      { name: "Patatas caseras", desc: "Bravas o alioli.", price: "7,50 €" },
      { name: "Calamares", desc: "Calamares con alioli.", price: "10,00 €" },
      { name: "Alitas de pollo", desc: "Alitas de pollo con salsa barbacoa.", price: "7,50 €" },
      { name: "Croquetas ibéricas", desc: "", price: "7,50 €" },
      { name: "Tequeños", desc: "Tequeños con salsa.", price: "8,50 €" },
      { name: "Pollo Kentucky", desc: "Pollo Kentucky con dos salsas.", price: "8,50 €" },
      { name: "Jamón ibérico", desc: "", price: "18,00 €" },
      { name: "Pulpo", desc: "Solo fines de semana.", price: "18,00 €" },
    ],
    [
      { name: "Tarta de queso", desc: "", price: "6,50 €" },
      { name: "Coulant", desc: "", price: "5,50 €" },
    ],
  ],
};

const reviewsData = {
  eu: [
    { name: "Igor", text: "Gomendatzeko modukoa hanburgesak espezialitate bezela daukaten taberna hau. Zerbitzu bikaina eta hanburgesa bereziak aukeran.", rating: 5 },
    { name: "Angel Villanueva", text: "Kafea hartzeko toki ederra. Zerbitzu bikaina.", rating: 5 },
    { name: "666", text: "Pintxo ederrak. Gomendatzen dut.", rating: 4 },
  ],
  es: [
    { name: "Igor", text: "Una taberna muy recomendable que tiene las hamburguesas como especialidad. Servicio excelente y hamburguesas especiales a elegir.", rating: 5 },
    { name: "Angel Villanueva", text: "Un lugar bonito para tomar café. Servicio excelente.", rating: 5 },
    { name: "666", text: "Pintxos buenísimos. Lo recomiendo.", rating: 4 },
  ],
};

function Home() {
  const [lang, setLang] = useState<Lang>("eu");
  const t = translations[lang];
  const reviews = reviewsData[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-charcoal/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <span className="w-9 h-9 rounded-full bg-[image:var(--gradient-warm)] grid place-items-center text-cream font-display font-bold">A</span>
            <span className="font-display text-xl text-cream tracking-tight">Bar Aldapa</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-cream/80">
            <a href="#menua" className="hover:text-gold transition">{t.nav.menu}</a>
            <a href="#honi-buruz" className="hover:text-gold transition">{t.nav.about}</a>
            <a href="#iritziak" className="hover:text-gold transition">{t.nav.reviews}</a>
            <a href="#kontaktua" className="hover:text-gold transition">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <LangToggle lang={lang} setLang={setLang} />
            <a href="tel:+34943252592" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ember text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-warm)]">
              <Phone className="w-4 h-4" /> {t.nav.reserve}
            </a>
          </div>
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
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95]">
              {t.hero.title1}<br />
              <span className="italic text-gold">{t.hero.title2}</span><br />
              {t.hero.title3}
            </h1>
            <p className="text-lg text-cream/70 max-w-md leading-relaxed">{t.hero.desc}</p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="font-display text-2xl">5,0</span>
                <span className="text-cream/60 text-sm">· 178 {t.hero.reviews}</span>
              </div>
              <div className="h-6 w-px bg-cream/20" />
              <span className="text-cream/70 text-sm">{t.hero.perPerson}</span>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a href="#menua" className="px-7 py-3.5 rounded-full bg-ember text-primary-foreground font-medium hover:scale-105 transition shadow-[var(--shadow-warm)]">
                {t.hero.seeMenu}
              </a>
              <a href="tel:+34943252592" className="px-7 py-3.5 rounded-full border border-cream/30 text-cream font-medium hover:bg-cream/10 transition inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> 943 25 25 92
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute -inset-6 bg-[image:var(--gradient-warm)] opacity-20 blur-3xl rounded-full" />
            <div className="relative bg-cream/5 backdrop-blur-xl border border-cream/10 rounded-3xl p-8 text-cream shadow-[var(--shadow-glow)]">
              <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{t.hero.status}</p>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="font-display text-2xl">{t.hero.closed}</span>
              </div>
              <p className="text-sm text-cream/70 mb-6">{t.hero.opening} · <span className="text-cream">17:00</span></p>
              <div className="h-px bg-cream/10 my-6" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <ServiceBadge icon={Utensils} label={t.hero.eatIn} />
                <ServiceBadge icon={ShoppingBag} label={t.hero.takeAway} />
                <ServiceBadge icon={Bike} label={t.hero.delivery} />
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
              <p className="text-xs uppercase tracking-[0.25em] text-ember mb-3">{t.featured.kicker}</p>
              <h2 className="text-5xl md:text-6xl font-bold text-charcoal">{t.featured.title}</h2>
            </div>
            <p className="max-w-md text-muted-foreground">{t.featured.desc}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {featured.map((item) => (
              <article key={item.name} className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-[var(--shadow-warm)] hover:-translate-y-1 transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                  <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  {item.tagged && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-cream/95 backdrop-blur text-charcoal text-[10px] font-bold tracking-widest uppercase rounded-full">
                      {t.featured.tag}
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
            <p className="text-xs uppercase tracking-[0.25em] text-ember mb-3">{t.menu.kicker}</p>
            <h2 className="text-5xl md:text-6xl font-bold text-charcoal">{t.menu.title}</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t.menu.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
            {t.menuSections.map((section, idx) => (
              <div key={section.title}>
                <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-ember/30">
                  <h3 className="font-display text-3xl text-charcoal font-bold">{section.title}</h3>
                  <span className="text-sm text-muted-foreground italic">{section.subtitle}</span>
                </div>
                <ul className="space-y-5">
                  {menuItems[idx].map((item) => (
                    <li key={item.name} className="flex gap-4">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <h4 className="font-semibold text-charcoal">{item.name}</h4>
                          {item.tagged && (
                            <span className="px-2 py-0.5 bg-gold/20 text-ember text-[9px] font-bold tracking-widest uppercase rounded-full">
                              {t.featured.tag}
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

          <p className="text-center text-xs text-muted-foreground mt-16 italic">{t.menu.disclaimer}</p>
        </div>
      </section>

      {/* About */}
      <section id="honi-buruz" className="py-28 px-6 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ember/20 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
          <div className="relative">
            <img src={taberna} alt="Bar Aldapa" loading="lazy" width={1600} height={1000} className="rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-ember text-primary-foreground rounded-2xl p-6 shadow-[var(--shadow-warm)]">
              <p className="font-display text-4xl font-bold">45+</p>
              <p className="text-xs uppercase tracking-wider opacity-80">{t.about.recommend}</p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">{t.about.kicker}</p>
            <h2 className="text-5xl font-bold leading-tight">{t.about.title}</h2>
            <p className="text-cream/70 leading-relaxed text-lg">{t.about.desc}</p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <Stat value="5,0★" label={t.about.stat1} />
              <Stat value="10-20€" label={t.about.stat2} />
              <Stat value="3 zerb." label={t.about.stat3} />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="iritziak" className="py-28 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-ember mb-3">{t.reviewsSec.kicker}</p>
            <h2 className="text-5xl md:text-6xl font-bold text-charcoal">{t.reviewsSec.title}</h2>
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
            <p className="text-xs uppercase tracking-[0.25em] text-ember mb-3">{t.contact.kicker}</p>
            <h2 className="text-5xl font-bold text-charcoal mb-8">{t.contact.title}</h2>

            <div className="space-y-6">
              <InfoRow icon={MapPin} title={t.contact.address} lines={["Areizaga Kalea, 3", "20700 Urretxu, Gipuzkoa"]} />
              <InfoRow icon={Phone} title={t.contact.phone} lines={["943 25 25 92"]} href="tel:+34943252592" />
              <InfoRow icon={Clock} title={t.contact.schedule} lines={[...t.contact.schedShort]} />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Bar+Aldapa+Urretxu&query_place_id=ChIJLwBAtdMt1QIR53nyPBeHXlw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full bg-charcoal text-cream hover:bg-ember transition"
            >
              <MapPin className="w-4 h-4" /> {t.contact.maps}
            </a>
          </div>

          <div className="bg-charcoal text-cream rounded-3xl p-8 md:p-10">
            <h3 className="font-display text-2xl mb-6 text-gold">{t.contact.fullSchedule}</h3>
            <ul className="divide-y divide-cream/10">
              {t.schedule.map(([day, time]) => (
                <li key={day} className="flex justify-between py-3.5">
                  <span className="text-cream/90">{day}</span>
                  <span className={time === t.closedLabel ? "text-destructive" : "text-cream"}>{time}</span>
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

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div role="group" aria-label="Language" className="inline-flex items-center p-1 rounded-full bg-cream/10 border border-cream/15 text-xs font-semibold">
      {(["eu", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-1.5 rounded-full transition ${
            lang === l ? "bg-ember text-primary-foreground shadow-[var(--shadow-warm)]" : "text-cream/70 hover:text-cream"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
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
