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
} from "lucide-react";

// --- DATA ---
const menuCategories = [
  {
    id: "petiscos",
    name: "Petiscos de Boteco",
    icon: <Utensils className="w-5 h-5" />,
  },
  { id: "porcoes", name: "Porções", icon: <Utensils className="w-5 h-5" /> },
  {
    id: "chapa",
    name: "Pratos na Chapa",
    icon: <Utensils className="w-5 h-5" />,
  },
  { id: "cervejas", name: "Cervejas", icon: <Beer className="w-5 h-5" /> },
  { id: "drinks", name: "Drinks", icon: <GlassWater className="w-5 h-5" /> },
  {
    id: "refrigerantes",
    name: "Refrigerantes",
    icon: <Coffee className="w-5 h-5" />,
  },
];

const menuItems = [
  {
    id: 1,
    category: "petiscos",
    name: "Torresmo",
    description: "Panceta suína frita, crocante por fora e macia por dentro.",
    price: "R$ 28,00",
    image: "https://picsum.photos/seed/torresmo/400/300",
  },
  {
    id: 2,
    category: "petiscos",
    name: "Pastel de Boteco",
    description: "Porção com 6 unidades. Sabores: carne, queijo ou palmito.",
    price: "R$ 32,00",
    image: "https://picsum.photos/seed/pastel/400/300",
  },
  {
    id: 3,
    category: "chapa",
    name: "Picanha na Chapa",
    description: "Picanha fatiada acebolada, servida com pão de alho e farofa.",
    price: "R$ 89,00",
    image: "https://picsum.photos/seed/picanha/400/300",
  },
  {
    id: 4,
    category: "porcoes",
    name: "Batata Frita",
    description: "Porção generosa de batata frita com queijo e bacon.",
    price: "R$ 35,00",
    image: "https://picsum.photos/seed/batata/400/300",
  },
  {
    id: 5,
    category: "porcoes",
    name: "Linguiça Acebolada",
    description: "Linguiça toscana fatiada e acebolada, acompanha pão francês.",
    price: "R$ 42,00",
    image: "https://picsum.photos/seed/linguica/400/300",
  },
  {
    id: 6,
    category: "drinks",
    name: "Caipirinha",
    description: "A clássica brasileira. Cachaça, limão, açúcar e gelo.",
    price: "R$ 22,00",
    image: "https://picsum.photos/seed/caipirinha/400/300",
  },
  {
    id: 7,
    category: "cervejas",
    name: "Cerveja 600ml",
    description: "Original, Brahma, Skol ou Heineken. Bem gelada!",
    price: "R$ 16,00",
    image: "https://picsum.photos/seed/cerveja/400/300",
  },
  {
    id: 8,
    category: "refrigerantes",
    name: "Refrigerante Lata",
    description: "Coca-Cola, Guaraná, Fanta ou Sprite.",
    price: "R$ 7,00",
    image: "https://picsum.photos/seed/refri/400/300",
  },
];

const galleryImages = [
  "https://i.ibb.co/dsRnk7KK/Save-Clip-App-487149959-17891842887198206-169694244121968843-n.jpg",
  "https://i.ibb.co/Mk9wXH3M/Save-Clip-App-631895018-17928708414198206-3717131425619726543-n.jpg",
  "https://i.ibb.co/R4BWH9MQ/Save-Clip-App-643531827-17930226828198206-6579603215994543764-n.jpg",
  "https://i.ibb.co/21JKMrXD/Save-Clip-App-643528853-17930073879198206-1284768129369289210-n.jpg",
  "https://i.ibb.co/nM1fcMrW/Save-Clip-App-643567154-17930504226198206-1646426984778458567-n.jpg",
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("petiscos");
  const [scrolled, setScrolled] = useState(false);

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
                src="https://picsum.photos/seed/boteco-historia/800/600"
                alt="Ambiente do Boteco"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {menuItems
              .filter((item) => item.category === activeCategory)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-gray-900 p-4 rounded-xl border border-gray-800 hover:border-boteco-red transition-colors group"
                >
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-display text-xl text-white">
                          {item.name}
                        </h3>
                        <span className="font-bold text-boteco-yellow whitespace-nowrap ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-snug">
                        {item.description}
                      </p>
                    </div>
                    <div className="border-b border-dashed border-gray-700 mt-3"></div>
                  </div>
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
              <a href="#" className="text-boteco-red font-bold hover:underline">
                @botecosombrinha
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="aspect-square overflow-hidden relative group cursor-pointer"
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
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-boteco-red transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-3 rounded-full hover:bg-boteco-red transition-colors"
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
