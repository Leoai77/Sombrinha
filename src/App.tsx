import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  Menu,
  X,
  Beer,
  Utensils,
  Coffee,
  GlassWater,
  ChevronRight,
  MessageCircle,
  Star,
} from "lucide-react";

// --- DATA ---
const menuCategories = [
  { id: "classicos", name: "Clássicos Repaginados", icon: <GlassWater className="w-5 h-5" /> },
  { id: "autorais", name: "Drinks Autorais", icon: <GlassWater className="w-5 h-5" /> },
  { id: "batidas", name: "Batidas", icon: <GlassWater className="w-5 h-5" /> },
  { id: "caipirinhas", name: "Caipirinhas", icon: <GlassWater className="w-5 h-5" /> },
  { id: "chopp", name: "Chopp Brahma", icon: <Beer className="w-5 h-5" /> },
  { id: "cervejas600", name: "Cervejas 600ml", icon: <Beer className="w-5 h-5" /> },
  { id: "cervejasln", name: "Cervejas Long Neck", icon: <Beer className="w-5 h-5" /> },
  { id: "softdrinks", name: "Soft Drinks", icon: <Coffee className="w-5 h-5" /> },
];

const menuItems = [
  // Clássicos Repaginados
  { id: 1, category: "classicos", name: "Bombeirinho", description: "Cachaça branca, grenadine, pimenta da jamaica, amburana, anis estrelado e cardamomo", price: "R$ 34,00", image: "https://picsum.photos/seed/bombeirinho/400/300" },
  { id: 2, category: "classicos", name: "Rabo de galo", description: "Cachaça branca, blend de vermutes e laranja bahia", price: "R$ 34,00", image: "https://picsum.photos/seed/rabodegalo/400/300" },
  { id: 3, category: "classicos", name: "Maria mole", description: "Conhaque Dreher, martini bianco, laranja bahia e casa de pitanga", price: "R$ 33,00", image: "https://picsum.photos/seed/mariamole/400/300" },
  { id: 4, category: "classicos", name: "Jorge amado", description: "Cachaça Gabriela, maracujá, limão tahiti, açúcar demerara", price: "R$ 35,00", image: "https://picsum.photos/seed/jorgeamado/400/300" },
  { id: 5, category: "classicos", name: "Negroni", description: "Gin, Campari, blend de vermutes e laranja bahia", price: "R$ 36,00", image: "https://picsum.photos/seed/negroni/400/300" },
  { id: 6, category: "classicos", name: "Spritz Clássicos", description: "Gin Tônica / Aperol Spritz / Cynar Tônica", price: "R$ 36,00", image: "https://picsum.photos/seed/spritz/400/300" },

  // Drinks Autorais
  { id: 7, category: "autorais", name: "Sombrinha", description: "Rum ouro, cachaça Gabriela, Campari com cumaru e xarope de banana", price: "R$ 36,00", image: "https://picsum.photos/seed/sombrinha/400/300" },
  { id: 8, category: "autorais", name: "Marambaia", description: "Cachaça branca com baunilha, jambu, hortelã e água de coco", price: "R$ 36,00", image: "https://picsum.photos/seed/marambaia/400/300" },
  { id: 9, category: "autorais", name: "Decinho", description: "Blend de runs, Licor 43, Vodka Citron, morango e maracujá", price: "R$ 36,00", image: "https://picsum.photos/seed/decinho/400/300" },
  { id: 10, category: "autorais", name: "Pixinguinha", description: "Cachaça de jambu, whisky com infusão de tangerina", price: "R$ 36,00", image: "https://picsum.photos/seed/pixinguinha/400/300" },
  { id: 11, category: "autorais", name: "Radiola", description: "Rum, gin, spray de whisky, pêssego e xarope de amburana", price: "R$ 37,00", image: "https://picsum.photos/seed/radiola/400/300" },
  { id: 12, category: "autorais", name: "Gin Tropicália", description: "Gin rosé, maracujá, sálvia e água tônica", price: "R$ 37,00", image: "https://picsum.photos/seed/gintropicalia/400/300" },
  { id: 13, category: "autorais", name: "Melãozada", description: "Gin, maracujá, limão siciliano e Red Bull Melon", price: "R$ 40,00", image: "https://picsum.photos/seed/melaozada/400/300" },
  { id: 14, category: "autorais", name: "Zero Culpa", description: "Gin, pera, limão e Red Bull Pomelo Sugarfree", price: "R$ 40,00", image: "https://picsum.photos/seed/zeroculpa/400/300" },

  // Batidas
  { id: 15, category: "batidas", name: "Sabores", description: "Coco / Maracujá / Pistache / Paçoca / Espanhola", price: "R$ 22,00", image: "https://picsum.photos/seed/batidas/400/300" },

  // Caipirinhas
  { id: 16, category: "caipirinhas", name: "Sabores", description: "Kiwi e Maracujá / Caju amigo / Graviola e Pêra / Uva verde / Seriguela / Morango", price: "R$ 34,00", image: "https://picsum.photos/seed/caipirinhas/400/300" },

  // Chopp Brahma
  { id: 17, category: "chopp", name: "Chopp Claro – Caldereta 300ml", description: "", price: "R$ 11,90", image: "https://picsum.photos/seed/choppclaro300/400/300" },
  { id: 18, category: "chopp", name: "Chopp Claro – Garotinho 220ml", description: "", price: "R$ 9,90", image: "https://picsum.photos/seed/choppclaro220/400/300" },
  { id: 19, category: "chopp", name: "Chopp Black – Caldereta 300ml", description: "", price: "R$ 12,90", image: "https://picsum.photos/seed/choppblack300/400/300" },
  { id: 20, category: "chopp", name: "Paulista ou Carioca – Caldereta 300ml", description: "", price: "R$ 12,90", image: "https://picsum.photos/seed/paulista300/400/300" },
  { id: 21, category: "chopp", name: "Paulista ou Carioca – Garotinho 220ml", description: "", price: "R$ 10,90", image: "https://picsum.photos/seed/paulista220/400/300" },

  // Cervejas 600ml
  { id: 22, category: "cervejas600", name: "Original", description: "", price: "R$ 19,00", image: "https://picsum.photos/seed/original/400/300" },
  { id: 23, category: "cervejas600", name: "Spaten", description: "", price: "R$ 19,00", image: "https://picsum.photos/seed/spaten/400/300" },
  { id: 24, category: "cervejas600", name: "Stella Artois", description: "", price: "R$ 20,00", image: "https://picsum.photos/seed/stella/400/300" },
  { id: 25, category: "cervejas600", name: "Beck's", description: "", price: "R$ 21,00", image: "https://picsum.photos/seed/becks/400/300" },
  { id: 26, category: "cervejas600", name: "Corona", description: "", price: "R$ 22,00", image: "https://picsum.photos/seed/corona/400/300" },

  // Cervejas Long Neck
  { id: 27, category: "cervejasln", name: "Corona", description: "", price: "R$ 16,00", image: "https://picsum.photos/seed/coronaln/400/300" },
  { id: 28, category: "cervejasln", name: "Beck's", description: "", price: "R$ 16,00", image: "https://picsum.photos/seed/becksln/400/300" },
  { id: 29, category: "cervejasln", name: "Stella Artois Pure Gold", description: "", price: "R$ 15,00", image: "https://picsum.photos/seed/stellaln/400/300" },
  { id: 30, category: "cervejasln", name: "Goose Island IPA", description: "", price: "R$ 22,00", image: "https://picsum.photos/seed/gooseipa/400/300" },
  { id: 31, category: "cervejasln", name: "Goose Island Midway", description: "", price: "R$ 21,00", image: "https://picsum.photos/seed/goosemidway/400/300" },
  { id: 32, category: "cervejasln", name: "Corona Zero", description: "", price: "R$ 16,00", image: "https://picsum.photos/seed/coronazero/400/300" },

  // Soft Drinks
  { id: 33, category: "softdrinks", name: "Água", description: "", price: "R$ 7,00", image: "https://picsum.photos/seed/agua/400/300" },
  { id: 34, category: "softdrinks", name: "Coca-Cola / Guaraná Lata", description: "", price: "R$ 8,00", image: "https://picsum.photos/seed/refrilata/400/300" },
  { id: 35, category: "softdrinks", name: "Coca-Cola / Guaraná KS", description: "", price: "R$ 7,00", image: "https://picsum.photos/seed/refriks/400/300" },
  { id: 36, category: "softdrinks", name: "Suco Del Valle", description: "", price: "R$ 8,00", image: "https://picsum.photos/seed/sucodelvalle/400/300" },
  { id: 37, category: "softdrinks", name: "Tônica Antártica", description: "", price: "R$ 8,00", image: "https://picsum.photos/seed/tonica/400/300" },
  { id: 38, category: "softdrinks", name: "Red Bull", description: "Energy Drink", price: "R$ 17,00", image: "https://picsum.photos/seed/redbull/400/300" },
];

const galleryImages = [
  "https://i.ibb.co/dsRnk7KK/Save-Clip-App-487149959-17891842887198206-169694244121968843-n.jpg",
  "https://i.ibb.co/Mk9wXH3M/Save-Clip-App-631895018-17928708414198206-3717131425619726543-n.jpg",
  "https://i.ibb.co/R4BWH9MQ/Save-Clip-App-643531827-17930226828198206-6579603215994543764-n.jpg",
  "https://i.ibb.co/21JKMrXD/Save-Clip-App-643528853-17930073879198206-1284768129369289210-n.jpg",
  "https://i.ibb.co/nM1fcMrW/Save-Clip-App-643567154-17930504226198206-1646426984778458567-n.jpg",
  "https://i.ibb.co/fYWcBkfz/Save-Clip-App-628737152-17928202518198206-2106937667159170947-n.jpg",
  "https://i.ibb.co/8g3Z6rcQ/Save-Clip-App-602823940-17921702973198206-6018739691602534047-n.jpg",
];

const reviews = [
  {
    name: "Kevin Franco",
    meta: "Local Guide · 14 avaliações · 6 fotos",
    time: "3 meses atrás",
    text: "O espaço é lindo, a comida é maravilhosa, e muito bem servida, até demais eu diria - É bem temperada e as bebidas são excelentes! O atendimento é muito bom também. … Mais",
  },
  {
    name: "Giovana Martins",
    meta: "Local Guide · 127 avaliações · 417 fotos",
    time: "2 semanas atrás",
    text: "Gostei bastante do bar!\nOs garçons são rápidos e atenciosos.\nA cerveja que pedimos estava bem gelada e a porção de linguiça acebolada na … Mais",
  },
  {
    name: "Laila Elmajdob",
    meta: "Local Guide · 11 avaliações · 20 fotos",
    time: "2 meses atrás",
    text: "Um dos melhores da cidade de São Paulo! Cardápio recheado de opções, desde porções a almoço, super bem servidos! Bons drinks, ambiente bem familiar e um atendimento impecável! Um agradecimento especial ao Murilo que atendeu o grupo sempre muito simpático e com ótimas recomendações! Voltaremos com certeza!! Mais",
  },
  {
    name: "FAIÇAL TAKIEDDINE",
    meta: "Local Guide · 566 avaliações · 485 fotos",
    time: "3 meses atrás",
    text: "Excelente infraestrutura para o mais tradicional Bar/Boteco à beira de calçada na rua, numa das esquinas da Zona Norte. … Mais",
  },
  {
    name: "Amanda Yumi Kochi",
    meta: "1 avaliação · 2 fotos",
    time: "3 semanas atrás",
    text: "Sempre frequento o bar Sombrinha, o atendimento é excelente, sempre atentos, principalmente o garçom Bruno!! Recomendo!! A feijoada é deliciosa e super bem servida! Ahh e o Bolovo, peçam!! Mais",
  },
  {
    name: "Andrea",
    meta: "Local Guide · 19 avaliações · 34 fotos",
    time: "2 semanas atrás",
    text: "Tudo muito incrível!\nBoteco de alma , atendimento excelente em todos os momentos, atenciosos , hospitaleiros , chopp gelado , petiscos de boteco, Gabriel fez a experiência ser muito … Mais",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("classicos");
  const [scrolled, setScrolled] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxGalleryIndex = Math.max(0, galleryImages.length - itemsPerView);

  useEffect(() => {
    if (galleryIndex > maxGalleryIndex) {
      setGalleryIndex(maxGalleryIndex);
    }
  }, [maxGalleryIndex, galleryIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-boteco-white relative">
      {/* --- NAVBAR --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-boteco-black text-boteco-white shadow-lg py-3" : "bg-transparent text-boteco-white py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => scrollTo("home")}
            >
              <span className="font-display text-2xl tracking-wider text-boteco-yellow">
                SOMBRINHA
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button
                onClick={() => scrollTo("sobre")}
                className="hover:text-boteco-yellow transition-colors font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollTo("pratos-do-dia")}
                className="hover:text-boteco-yellow transition-colors font-medium"
              >
                Pratos do Dia
              </button>
              <button
                onClick={() => scrollTo("cardapio")}
                className="hover:text-boteco-yellow transition-colors font-medium"
              >
                Cardápio
              </button>
              <button
                onClick={() => scrollTo("galeria")}
                className="hover:text-boteco-yellow transition-colors font-medium"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollTo("experiencia")}
                className="hover:text-boteco-yellow transition-colors font-medium"
              >
                Experiência
              </button>
              <button
                onClick={() => scrollTo("avaliacoes")}
                className="hover:text-boteco-yellow transition-colors font-medium"
              >
                Avaliações
              </button>
              <button
                onClick={() => scrollTo("localizacao")}
                className="hover:text-boteco-yellow transition-colors font-medium"
              >
                Localização
              </button>
              <button
                onClick={() => scrollTo("cardapio")}
                className="bg-boteco-red hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold transition-colors"
              >
                Fazer Pedido
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-boteco-yellow focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-8 w-8" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-boteco-black absolute w-full border-t border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
              <button
                onClick={() => scrollTo("sobre")}
                className="text-white hover:text-boteco-yellow block px-3 py-2 text-lg font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollTo("pratos-do-dia")}
                className="text-white hover:text-boteco-yellow block px-3 py-2 text-lg font-medium"
              >
                Pratos do Dia
              </button>
              <button
                onClick={() => scrollTo("cardapio")}
                className="text-white hover:text-boteco-yellow block px-3 py-2 text-lg font-medium"
              >
                Cardápio
              </button>
              <button
                onClick={() => scrollTo("galeria")}
                className="text-white hover:text-boteco-yellow block px-3 py-2 text-lg font-medium"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollTo("experiencia")}
                className="text-white hover:text-boteco-yellow block px-3 py-2 text-lg font-medium"
              >
                Experiência
              </button>
              <button
                onClick={() => scrollTo("avaliacoes")}
                className="text-white hover:text-boteco-yellow block px-3 py-2 text-lg font-medium"
              >
                Avaliações
              </button>
              <button
                onClick={() => scrollTo("localizacao")}
                className="text-white hover:text-boteco-yellow block px-3 py-2 text-lg font-medium"
              >
                Localização
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/p6cQWwXn/Save-Clip-App-649230149-17931075750198206-3585182890425470164-n.jpg"
            alt="Interior do Boteco"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-boteco-yellow font-display text-xl md:text-3xl mb-2 tracking-widest uppercase">
              Boteco
            </h2>
            <h1 className="text-white font-display text-6xl md:text-8xl lg:text-9xl mb-6 drop-shadow-lg">
              SOMBRINHA
            </h1>
            <p className="text-gray-200 text-xl md:text-2xl mb-10 font-medium italic">
              "Choppinho e Lorota no seu boteco de calçada favorito."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo("cardapio")}
                className="bg-boteco-yellow hover:bg-yellow-500 text-boteco-black px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center"
              >
                Ver Cardápio <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTo("localizacao")}
                className="bg-boteco-red hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center"
              >
                Como Chegar <MapPin className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-boteco-white to-transparent z-10"></div>
      </section>

      {/* --- SOBRE O BOTECO --- */}
      <section id="sobre" className="py-20 bg-boteco-white relative">
        <div className="absolute inset-0 bg-mosaic pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-boteco-red font-display text-4xl md:text-5xl mb-6">
                Nossa História
              </h2>
              <div className="w-20 h-2 bg-boteco-yellow mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O{" "}
                <strong className="text-boteco-black">Boteco Sombrinha</strong>{" "}
                nasceu da paixão pela cultura de bar raiz. Um ambiente simples,
                autêntico e cheio de personalidade, inspirado nos clássicos
                botecos de São Paulo.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Aqui, as paredes de azulejo amarelo e os barris de chope contam
                histórias. É o lugar ideal para reunir os amigos, beber aquela
                cerveja trincando de gelada e comer os petiscos mais clássicos e
                saborosos da nossa culinária.
              </p>
              <p className="text-lg text-gray-700 font-medium italic border-l-4 border-boteco-red pl-4">
                "Não é só um bar, é uma extensão da casa de cada cliente."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-boteco-yellow rounded-lg transform rotate-3"></div>
              <img
                src="https://i.ibb.co/R4BWH9MQ/Save-Clip-App-643531827-17930226828198206-6579603215994543764-n.jpg"
                alt="Nossa História"
                className="relative rounded-lg shadow-xl w-full object-cover h-96 grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRATOS DO DIA --- */}
      <section id="pratos-do-dia" className="py-20 bg-boteco-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-boteco-red font-display text-4xl md:text-5xl mb-4">
              Pratos do Dia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nossos especiais para cada dia da semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-xl overflow-hidden shadow-xl border-4 border-boteco-yellow"
            >
              <img
                src="https://i.ibb.co/ds4gfFtx/Save-Clip-App-645737045-17930500155198206-3810100584811949159-n.jpg"
                alt="Cardápio de Quinta"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-xl border-4 border-boteco-yellow"
            >
              <img
                src="https://i.ibb.co/MxQ7dsW7/Save-Clip-App-645764497-17930500164198206-602777835055121111-n.jpg"
                alt="Cardápio de Sexta"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="rounded-xl overflow-hidden shadow-xl border-4 border-boteco-yellow"
            >
              <img
                src="https://i.ibb.co/LdfTtMh1/Save-Clip-App-645989249-17930500173198206-3285409712618540619-n.jpg"
                alt="Cardápio de Sábado"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-xl border-4 border-boteco-yellow"
            >
              <img
                src="https://i.ibb.co/tPhVhB7y/Save-Clip-App-643585219-17930500182198206-9110730842348520562-n.jpg"
                alt="Cardápio de Domingo"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CARDÁPIO --- */}
      <section
        id="cardapio"
        className="py-20 bg-boteco-black text-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-boteco-yellow font-display text-4xl md:text-5xl mb-4">
              Nosso Cardápio
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Os clássicos que não podem faltar na sua mesa.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-boteco-yellow text-boteco-black scale-105 shadow-lg shadow-boteco-yellow/20"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-2"
          >
            {menuItems
              .filter((item) => item.category === activeCategory)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center py-4 border-b border-dashed border-gray-700 hover:bg-gray-800/50 transition-colors px-4 rounded-lg group"
                >
                  <div className="flex justify-between items-end mb-1 gap-4">
                    <h3 className="font-display text-2xl text-white tracking-wide group-hover:text-boteco-yellow transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex-grow border-b-2 border-dotted border-gray-600 mb-2 opacity-50"></div>
                    <span className="font-bold text-boteco-yellow text-xl whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-gray-400 text-sm leading-snug italic mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
          </motion.div>

          {menuItems.filter((item) => item.category === activeCategory)
            .length === 0 && (
            <div className="text-center text-gray-500 py-10">
              <p>Itens desta categoria em breve.</p>
            </div>
          )}
        </div>
      </section>

      {/* --- EXPERIÊNCIA DO BOTECO --- */}
      <section
        id="experiencia"
        className="py-20 bg-tiles relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border-4 border-boteco-red max-w-4xl mx-auto transform -rotate-1">
            <div className="text-center mb-10">
              <h2 className="text-boteco-black font-display text-4xl md:text-5xl mb-4">
                A Experiência Sombrinha
              </h2>
              <p className="text-gray-600 text-lg">
                Muito mais que um bar, um estilo de vida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-boteco-yellow p-3 rounded-full text-boteco-black">
                  <Beer className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-boteco-black mb-2">
                    Cerveja Gelada
                  </h3>
                  <p className="text-gray-700">
                    Canela de pedreiro! Nossa cerveja sai trincando, do jeito
                    que o brasileiro gosta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-boteco-red p-3 rounded-full text-white">
                  <Utensils className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-boteco-black mb-2">
                    Petiscos Clássicos
                  </h3>
                  <p className="text-gray-700">
                    Do torresmo pururuca ao pastelzinho frito na hora. Sabor de
                    comida de verdade.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-boteco-black p-3 rounded-full text-white">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-boteco-black mb-2">
                    Ambiente Descontraído
                  </h3>
                  <p className="text-gray-700">
                    Sem frescura. Aqui você senta na cadeira de plástico, joga
                    conversa fora e faz amigos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-boteco-metal p-3 rounded-full text-white">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-boteco-black mb-2">
                    Decoração Vintage
                  </h3>
                  <p className="text-gray-700">
                    Azulejos amarelos, caixas de cerveja e quadros antigos que
                    te levam de volta no tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALERIA --- */}
      <section id="galeria" className="py-20 bg-boteco-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-boteco-black font-display text-4xl md:text-5xl mb-4">
              Nosso Clima
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Siga a gente no Instagram{" "}
              <a
                href="https://www.instagram.com/botecosombrinha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-boteco-red font-bold hover:underline"
              >
                @botecosombrinha
              </a>
            </p>
          </div>

          <div className="relative overflow-hidden px-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${galleryIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-2"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <a
                      href="https://www.instagram.com/botecosombrinha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-square overflow-hidden relative group cursor-pointer rounded-xl block"
                    >
                      <img
                        src={img}
                        alt={`Galeria ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Instagram className="text-white w-10 h-10" />
                      </div>
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxGalleryIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setGalleryIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  galleryIndex === i
                    ? "bg-boteco-red"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- AVALIAÇÕES --- */}
      <section id="avaliacoes" className="py-20 bg-boteco-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-boteco-black font-display text-4xl md:text-5xl mb-4">
              O que dizem da gente
            </h2>
            <p className="text-boteco-black/80 max-w-2xl mx-auto text-lg">
              Avaliações reais de quem já veio tomar uma com a gente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg flex flex-col h-full"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500 shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-boteco-black">{review.name}</h3>
                    <p className="text-xs text-gray-500">{review.meta}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs text-gray-400 ml-2">{review.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm flex-grow whitespace-pre-line">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- LOCALIZAÇÃO --- */}
      <section id="localizacao" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-boteco-black font-display text-4xl md:text-5xl mb-8">
                Vem pro Sombrinha!
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-boteco-yellow p-3 rounded-full mt-1">
                    <MapPin className="w-6 h-6 text-boteco-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Anita Malfatti, 559 - Vila Baruel
                      <br />
                      São Paulo - SP, 02513-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-boteco-yellow p-3 rounded-full mt-1">
                    <Clock className="w-6 h-6 text-boteco-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-gray-600">
                      Terça a Quinta: 17h às 00h
                      <br />
                      Sexta: 17h às 02h
                      <br />
                      Sábado: 12h às 02h
                      <br />
                      Domingo: 12h às 20h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-boteco-yellow p-3 rounded-full mt-1">
                    <Phone className="w-6 h-6 text-boteco-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Contato</h4>
                    <p className="text-gray-600">
                      (11) 99999-9999
                      <br />
                      contato@botecosombrinha.com.br
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" /> Chamar no WhatsApp
                </a>
              </div>
            </div>

            <div className="h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <iframe
                src="https://maps.google.com/maps?q=Rua%20Anita%20Malfatti,%20559%20-%20Vila%20Baruel,%20S%C3%A3o%20Paulo%20-%20SP,%2002513-000&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa do Boteco Sombrinha"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-boteco-black text-white pt-16 pb-8 border-t-8 border-boteco-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-display text-3xl text-boteco-yellow mb-6">
                SOMBRINHA
              </h3>
              <p className="text-gray-400 mb-6">
                Choppinho e Lorota no seu boteco de calçada favorito. Cerveja gelada, petiscos
                clássicos e aquele ambiente que você respeita.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/botecosombrinha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-boteco-red transition-colors flex items-center justify-center"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-boteco-red transition-colors flex items-center justify-center"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6 border-b border-gray-800 pb-2">
                Links Rápidos
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollTo("sobre")}
                    className="text-gray-400 hover:text-boteco-yellow transition-colors"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("cardapio")}
                    className="text-gray-400 hover:text-boteco-yellow transition-colors"
                  >
                    Cardápio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("galeria")}
                    className="text-gray-400 hover:text-boteco-yellow transition-colors"
                  >
                    Galeria
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("avaliacoes")}
                    className="text-gray-400 hover:text-boteco-yellow transition-colors"
                  >
                    Avaliações
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("localizacao")}
                    className="text-gray-400 hover:text-boteco-yellow transition-colors"
                  >
                    Localização
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6 border-b border-gray-800 pb-2">
                Contato
              </h4>
              <ul className="space-y-3 text-gray-400">
                <li>Rua Anita Malfatti, 559 - Vila Baruel</li>
                <li>São Paulo - SP, 02513-000</li>
                <li className="text-boteco-yellow font-bold mt-4">
                  (11) 99999-9999
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Boteco Sombrinha. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
