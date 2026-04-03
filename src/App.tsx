import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { BagProvider, useBag } from './context/BagContext';
import { BagDrawer } from './components/BagDrawer';
import { MenuPage } from './pages/MenuPage';
import { WelcomePopup } from './components/WelcomePopup';
import {
  Facebook,
  Instagram,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Phone,
  Menu as MenuIcon,
  X,
  Plus,
  Star,
  Accessibility,
  Utensils,
  Coffee,
  CupSoda,
  Soup,
  MessageCircle,
  ShoppingBag,
  FileText
} from 'lucide-react';

// --- Components ---

const ParallaxCheckeredBackground = ({ opacity = 0.03 }: { opacity?: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // A subtle parallax translation
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden pointer-events-none mix-blend-overlay" style={{ opacity }}>
      <motion.div
        className="absolute inset-x-0 w-full h-[150%] -top-[25%]"
        style={{
          backgroundImage: 'url(/checkeredbackground.png)',
          backgroundSize: '1200px',
          backgroundPosition: 'center',
          y
        }}
      />
    </div>
  );
};

const NAV_ITEMS = [
  { name: 'Home', path: '/', isPage: true },
  { name: 'Menu', path: '/menu', isPage: true },
  { name: 'Delivery', path: 'https://order.toasttab.com/online/po-boy-express-alexandria-1305-windsor-pl', isExternal: true },
  { name: 'Catering', path: '/#catering' },
  { name: 'Reviews', path: '/#testimonials' },
  { name: 'Employment', path: '/#employment' },
  { name: 'Contact Us', path: '/#contact' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const shouldShowSolidBg = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-[background-color,padding,border-color] duration-300 ${shouldShowSolidBg ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent border-b border-transparent py-5'
        }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className={`relative flex items-center flex-shrink-0 transition-all duration-300 ${isScrolled ? 'h-10 md:h-12 w-auto' : 'h-12 md:h-14 w-28 md:w-40'}`}>
            <img
              src="/poboyexpresslogo.png"
              alt="Poboy Express Logo"
              className={`transition-all duration-500 object-contain max-w-none ${isScrolled
                  ? 'h-10 md:h-12 relative top-0 left-0'
                  : 'absolute left-0 top-[4px] md:top-[12px] h-16 md:h-24 w-auto drop-shadow-md'
                }`}
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => {
            const className = `font-semibold uppercase tracking-widest text-xs lg:text-sm hover:text-poboy-yellow transition-colors ${shouldShowSolidBg ? 'text-poboy-black/70' : 'text-white/80 drop-shadow-sm'} whitespace-nowrap`;
            if (item.isPage) {
              return <Link key={item.name} to={item.path} className={className}>{item.name}</Link>;
            }
            if (item.isExternal) {
              return <a key={item.name} href={item.path} target="_blank" rel="noreferrer" className={className}>{item.name}</a>;
            }
            return <a key={item.name} href={item.path} className={className}>{item.name}</a>;
          })}
        </nav>

        {/* CTA & Socials */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://www.facebook.com/Poboyexpress2" target="_blank" rel="noreferrer" title="Alexandria Facebook" className={`hover:text-poboy-yellow transition-colors ${shouldShowSolidBg ? 'text-poboy-black' : 'text-white'}`}>
              <Facebook size={20} />
            </a>
            <a href="https://www.facebook.com/pinevillepoboys" target="_blank" rel="noreferrer" title="Pineville Facebook" className={`hover:text-poboy-yellow transition-colors ${shouldShowSolidBg ? 'text-poboy-black' : 'text-white'}`}>
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/poboy_express_cenla/" target="_blank" rel="noreferrer" title="Instagram" className={`hover:text-poboy-yellow transition-colors ${shouldShowSolidBg ? 'text-poboy-black' : 'text-white'}`}>
              <Instagram size={20} />
            </a>
          </div>
          <a
            href="https://order.toasttab.com/online/po-boy-express-alexandria-1305-windsor-pl"
            target="_blank"
            rel="noreferrer"
            className="bg-poboy-red hover:bg-red-700 text-white font-display font-normal px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            ORDER ONLINE NOW
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-poboy-black bg-white/80 p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl flex flex-col p-4 md:hidden"
          >
            {NAV_ITEMS.map((item) => {
              const className = "py-3 border-b border-gray-100 font-medium text-poboy-black uppercase tracking-widest text-sm";
              if (item.isPage) {
                return (
                  <Link key={item.name} to={item.path} onClick={() => setMobileMenuOpen(false)} className={className}>
                    {item.name}
                  </Link>
                );
              }
              if (item.isExternal) {
                return (
                  <a key={item.name} href={item.path} target="_blank" rel="noreferrer" onClick={() => setMobileMenuOpen(false)} className={className}>
                    {item.name}
                  </a>
                );
              }
              return (
                <a key={item.name} href={item.path} onClick={() => setMobileMenuOpen(false)} className={className}>
                  {item.name}
                </a>
              );
            })}
            <Link
              to="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-poboy-red text-white font-display font-normal px-6 py-4 rounded-lg mt-4 text-center"
            >
              ORDER ONLINE NOW
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const slides = [
    {
      img: "/poboyexpresshero1.jpeg",
      subtitle: "Authentic Louisiana Flavor",
      title: "Poboy Express:",
      highlight: "Real Cajun Flavor,",
      suffix: "Fast!",
      desc: "Authentic recipes, fresh ingredients, and lightning-fast service. Your favorite po'boys, baskets, and more."
    },
    {
      img: "/poboyexpresshero2.jpeg",
      subtitle: "Fresh From The Gulf",
      title: "Fresh Seafood:",
      highlight: "Locally Sourced,",
      suffix: "Always.",
      desc: "We bring the Gulf straight to your plate. Taste the difference in every perfectly seasoned bite."
    },
    {
      img: "/poboyexpresshero3.jpeg",
      subtitle: "A Local Legacy",
      title: "Family Owned:",
      highlight: "Since 1999,",
      suffix: "With Love.",
      desc: "Serving up generations of authentic Louisiana recipes passed down to our family, for yours."
    }
  ];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [page]);

  const imageIndex = ((page % slides.length) + slides.length) % slides.length;

  const variants = {
    enter: (direction: number) => ({
      x: direction === 0 ? 0 : (direction > 0 ? '100%' : '-100%'),
    }),
    center: {
      zIndex: 1,
      x: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
    })
  };

  const textVariants = {
    enter: (direction: number) => ({
      opacity: direction === 0 ? 0 : 1,
      y: direction === 0 ? 30 : 0
    }),
    center: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      id="home" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[85vh] min-h-[600px] overflow-hidden bg-poboy-black"
    >
      <AnimatePresence custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", ease: "easeInOut", duration: 1.2 }
          }}
          className="absolute inset-0 w-full h-full flex items-end pb-24 pt-[16rem] md:pt-32 px-4 sm:px-8 lg:px-12"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={slides[imageIndex].img}
              alt={`Hero slide ${imageIndex + 1}`}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>

          {/* Slide Content */}
          <motion.div variants={textVariants} className="relative z-10 w-full h-full flex flex-col justify-end">
            {/* Desktop Subtitle */}
            <div className="hidden md:flex items-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-poboy-red"></div>
              <span className="text-poboy-red font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">{slides[imageIndex].subtitle}</span>
            </div>
            <h1 className="text-[2.5rem] md:text-7xl font-display font-normal text-white leading-[1] md:leading-[0.9] mb-6 uppercase tracking-tight">
              {slides[imageIndex].title} <br />
              <span className="text-poboy-yellow">{slides[imageIndex].highlight}</span> {slides[imageIndex].suffix}
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-xl font-medium">
              {slides[imageIndex].desc}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="bg-poboy-yellow hover:bg-yellow-400 text-poboy-black font-display font-normal px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
              >
                EXPLORE MENU
              </Link>
              <a
                href="#locations"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-display font-normal px-8 py-4 rounded-full transition-all text-lg"
              >
                FIND A LOCATION
              </a>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20 hidden md:flex">
        <button onClick={() => paginate(-1)} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-sm transition-colors cursor-pointer">
          <ChevronLeft />
        </button>
        <button onClick={() => paginate(1)} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 backdrop-blur-sm transition-colors cursor-pointer">
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const newDirection = idx > imageIndex ? 1 : -1;
              if (idx !== imageIndex) {
                setPage([page + (idx - imageIndex), newDirection]);
              }
            }}
            className={`h-[3px] transition-all duration-500 cursor-pointer ${idx === imageIndex ? 'w-24 bg-poboy-yellow' : 'w-16 bg-white/40 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
};

const FoodSpotlight = () => {
  const items = [
    {
      title: "TRY OUR SIGNATURE FRIED SHRIMP PO'BOY",
      price: "$13.99",
      btnText: "VIEW MENU",
      img: "/poboyexpressfriedshrimppoboy.jpeg",
      imgClass: "object-bottom scale-[1.7] group-hover:scale-[1.8]"
    },
    {
      title: "OUR SOUTHERN FRIED CATFISH",
      price: "$17.99",
      btnText: "VIEW MENU",
      img: "/poboyexpressfriedcatfish2.jpeg",
      imgClass: "object-bottom scale-105 md:scale-110 group-hover:scale-[1.15]"
    },
    {
      title: "CRISPY HAND-BREADED OKRA",
      price: "$5.99",
      btnText: "VIEW MENU",
      img: "/poboyexpressfriedokra.jpeg",
      imgClass: "object-bottom scale-110 md:scale-[1.3] group-hover:scale-[1.4]"
    },
    {
      title: "THE CLASSIC ROAST BEEF PO'BOY",
      price: "$12.99",
      btnText: "VIEW MENU",
      img: "/poboyexpresspoboysandwich.jpeg",
      imgClass: "object-bottom md:object-[center_30%] scale-105 md:scale-[1.3] group-hover:scale-[1.4]"
    }
  ];

  return (
    <section className="w-full bg-poboy-black" id="menu">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {items.map((item, idx) => (
          <div key={idx} className="relative h-[280px] md:h-[320px] lg:h-[380px] overflow-hidden group">
            <img
              src={item.img}
              alt={item.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${item.imgClass || 'group-hover:scale-105'}`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            <div className="absolute top-[10px] right-[10px] lg:top-auto lg:right-auto md:bottom-[10px] md:left-[10px] sm:bottom-[10px] sm:left-[10px] lg:bottom-[10px] lg:left-[10px] rounded-md overflow-hidden p-3 pr-14 md:pr-6 md:p-6 bg-poboy-black/90 backdrop-blur-md max-w-[240px] md:max-w-[320px] min-w-[160px] md:min-w-[180px] border-r-4 md:border-r-0 md:border-l-4 border-poboy-yellow">
              <div>
                <h3 className="text-sm md:text-lg font-sans font-bold text-white leading-tight uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-poboy-yellow font-bold text-xs md:text-base mt-0.5 mb-0 md:mb-3">
                  {item.price}
                </p>
              </div>
              
              {/* Mobile Absolute Button */}
              <Link to="/menu" className="md:hidden absolute bottom-[50%] translate-y-[50%] right-3 bg-poboy-yellow text-poboy-black p-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors">
                <FileText size={16} strokeWidth={2.5} />
              </Link>

              {/* Desktop Block Button */}
              <div className="hidden md:flex justify-start mt-1">
                <Link to="/menu" className="inline-block bg-poboy-yellow hover:bg-yellow-400 text-poboy-black font-sans font-bold px-5 py-2 rounded-full transition-colors shadow-lg uppercase tracking-wider text-sm">
                  {item.btnText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Checkered Flags Ghost Image */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('/2checkeredflags.png')",
          backgroundSize: "600px",
          backgroundPosition: "right 5% center",
          backgroundRepeat: "no-repeat"
        }}
      ></div>

      <div className="max-w-7xl mx-auto lg:px-8 relative z-10 px-0 sm:px-0">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 relative w-full px-4 sm:px-6 lg:px-0 -mt-4 lg:mt-0">
            <div className="relative z-10 shadow-2xl border-b-8 border-l-8 border-poboy-yellow overflow-hidden bg-poboy-red w-full">
              <img
                src="/poboyexpressownerandson.jpg"
                alt="Poboy Express Family"
                className="w-full h-[300px] lg:h-[400px] object-cover object-[center_25%] hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Farm Raised Stamp overlaid on the corner */}
            <div className="absolute -bottom-8 right-2 lg:-right-8 z-20 hidden sm:block -rotate-6 hover:-rotate-12 transition-transform duration-500">
              <img src="/poboyexpressfarmraisedstamp.png" alt="Locally Sourced" className="w-24 h-24 lg:w-28 lg:h-28 object-contain drop-shadow-xl" />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center py-4 lg:py-8 px-4 sm:px-6 lg:px-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-poboy-red"></div>
              <span className="text-poboy-red font-bold tracking-widest uppercase text-sm">Our Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-normal text-poboy-black mb-6 leading-none">
              27 YEARS OF <br />
              <span className="text-poboy-red inline-block mt-2">FAMILY TRADITION.</span>
            </h2>

            <p className="text-xl text-gray-800 mb-6 font-medium border-l-4 border-poboy-yellow pl-4">
              Proudly serving the Central Louisiana community since 1999.
            </p>

            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              What started as a small neighborhood sandwich shop has grown into a local institution. We believe in doing things the right way: fresh bread baked daily, meats slow-roasted in-house, and seafood sourced directly from the Gulf. When you eat with us, you're not just a customer—you're eating with family.
            </p>

            <div>
              <button className="bg-poboy-red hover:bg-red-700 text-white font-display font-normal px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 tracking-widest uppercase">
                Read Our History
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Locations = () => {
  return (
    <section id="locations" className="py-12 bg-gradient-to-r from-red-900 via-poboy-red to-red-900 relative overflow-hidden shadow-inner">
      <ParallaxCheckeredBackground opacity={0.05} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-normal text-white mb-4 drop-shadow-md">
          WE DELIVER LOCALLY!
        </h2>
        <p className="text-gray-100 text-lg md:text-xl mb-8 drop-shadow-sm font-medium">
          Craving authentic flavor at home? We've got you covered with fresh, fast delivery. Tap your nearest location below to call us and start your order today!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="tel:+13185550123"
            className="group relative overflow-hidden bg-white hover:bg-poboy-yellow border-4 border-white hover:border-poboy-yellow text-poboy-black font-display font-normal text-xl md:text-2xl px-10 py-3 sm:py-6 rounded-xl transition-all shadow-xl hover:shadow-2xl w-full sm:w-1/2 flex flex-col items-center justify-center gap-2 transform hover:-translate-y-1"
          >
            <MapPin size={32} className="text-poboy-red group-hover:text-poboy-black transition-colors mb-1" />
            <span>ALEXANDRIA, LA</span>
          </a>
          <a
            href="tel:+13185550124"
            className="group relative overflow-hidden bg-white hover:bg-poboy-yellow border-4 border-white hover:border-poboy-yellow text-poboy-black font-display font-normal text-xl md:text-2xl px-10 py-3 sm:py-6 rounded-xl transition-all shadow-xl hover:shadow-2xl w-full sm:w-1/2 flex flex-col items-center justify-center gap-2 transform hover:-translate-y-1"
          >
            <MapPin size={32} className="text-poboy-red group-hover:text-poboy-black transition-colors mb-1" />
            <span>PINEVILLE, LA</span>
          </a>
        </div>
      </div>
    </section>
  );
};



const Gallery = () => {
  const photos = [
    "/poboyexpressrestaurant.jpeg",
    "/poboyexpresspeople.jpg",
    "/poboyexpressfriedcatfish3.jpeg",
    "/poboyexpressfoodpic2.jpeg",
    "/poboyexpresspeople2.jpg",
    "/poboyexpresssandwich.jpeg",
    "/poboyexpresspeople3.jpg",
    "/poboyexpresssalad2.jpeg",
    "/poboyexpresspeople4.jpg",
    "/poboyexpresspoyboysandwich2.jpeg",
  ];

  return (
    <section className="bg-black w-full">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-1">
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 3) * 0.1 }}
            className={`relative overflow-hidden group ${idx === 0 || idx === 4 ? 'row-span-2' : ''
              }`}
          >
            <img
              src={photo}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const MenuCategories = () => {
  const categories = [
    { name: "Po'Boys", img: "/sandwich.png", hash: "hotpoboys" },
    { name: "Baskets", img: "/basket.png", hash: "seafoodbaskets" },
    { name: "Burgers", img: "/burger.png", hash: "burgers" },
    { name: "Salads", img: "/salad.png", hash: "salads" },
    { name: "Sides", img: "/sides.png", hash: "sides" },
    { name: "Desserts", img: "/dessert.png", hash: "desserts" }
  ];

  return (
    <section className="py-6 md:py-8 bg-gray-50 border-y border-gray-100 shadow-inner overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-poboy-black uppercase tracking-widest">Explore Menu</h2>
            <div className="w-16 h-[2px] bg-poboy-red mt-3 mb-3"></div>
            <p className="text-gray-500 text-sm uppercase tracking-widest">Quick Categories</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 w-full max-w-6xl mx-auto">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to={`/menu#${cat.hash}`}
                className="group flex flex-1 min-w-[150px] max-w-[240px] lg:max-w-[280px] xl:max-w-none items-center gap-3 bg-white pr-6 pl-2 py-2 rounded-full shadow-sm hover:shadow-md border border-gray-100 hover:border-poboy-yellow transition-all transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-gray-50 flex items-center justify-center p-2.5 group-hover:bg-yellow-50 transition-colors pointer-events-none">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-bold text-xs uppercase tracking-widest text-poboy-black group-hover:text-poboy-red transition-colors whitespace-nowrap pointer-events-none">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Sarah Jenkins",
      avatar: "https://i.pravatar.cc/150?img=47",
      text: "Best roast beef po'boy in Central Louisiana, hands down. The gravy is incredible and the bread is always perfectly crispy on the outside.",
      rating: 5,
      role: "Local Foodie"
    },
    {
      name: "Marcus T.",
      avatar: "https://i.pravatar.cc/150?img=11",
      text: "Fast service even when they're packed for lunch. The shrimp basket is my go-to. Huge portions and always fresh out the fryer.",
      rating: 5,
      role: "Regular Customer"
    },
    {
      name: "Elena Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=32",
      text: "We cater from Poboy Express for all our office meetings. The muffulettas are a huge hit and the team is always so accommodating.",
      rating: 5,
      role: "Office Manager"
    },
    {
      name: "David Chen",
      avatar: "https://i.pravatar.cc/150?img=68",
      text: "I've been coming here since I was a kid. The gumbo tastes exactly like my grandmother used to make. Authentic, rich, and full of flavor.",
      rating: 5,
      role: "Lifelong Fan"
    },
    {
      name: "Jessica L.",
      avatar: "https://i.pravatar.cc/150?img=44",
      text: "The crawfish étouffée is out of this world! It's got the perfect amount of kick. I always recommend this spot to friends visiting town.",
      rating: 5,
      role: "Travel Blogger"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const childWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
      const scrollAmount = direction === 'left' ? -childWidth - 24 : childWidth + 24;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-red-900 via-poboy-red to-red-900 relative overflow-hidden">
      <ParallaxCheckeredBackground opacity={0.03} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-normal text-white mb-2">WHAT LOCALS SAY</h2>
            <div className="w-16 h-1 bg-poboy-yellow"></div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-poboy-red flex items-center justify-center transition-colors border border-white/30 hover:border-white"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-poboy-red flex items-center justify-center transition-colors border border-white/30 hover:border-white"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl p-6 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-poboy-yellow text-poboy-yellow" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-100 object-cover"
                />
                <div>
                  <h4 className="font-display font-normal text-poboy-black text-lg leading-none mb-1">{review.name}</h4>
                  <p className="text-poboy-red text-xs font-bold tracking-wider uppercase">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-poboy-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/poboyexpresslogo.png" alt="Poboy Express Logo" className="h-16 md:h-20 w-auto object-contain" />
            </div>
            <p className="text-gray-400 mb-6">
              Proudly serving Central Louisiana and the local parishes with authentic Cajun flavor since 1999.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Poboyexpress2" target="_blank" rel="noreferrer" title="Alexandria Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-poboy-yellow hover:text-poboy-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.facebook.com/pinevillepoboys" target="_blank" rel="noreferrer" title="Pineville Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-poboy-yellow hover:text-poboy-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/poboy_express_cenla/" target="_blank" rel="noreferrer" title="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-poboy-yellow hover:text-poboy-black transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display font-normal text-lg mb-6 text-poboy-yellow">LOCATIONS</h4>
            <div className="mb-6">
              <h5 className="font-bold mb-2">Alexandria</h5>
              <p className="text-gray-400 text-sm flex items-start gap-2 mb-1">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                123 MacArthur Drive<br />Alexandria, LA 71301
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <Phone size={16} /> (318) 555-0123
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-2">Pineville</h5>
              <p className="text-gray-400 text-sm flex items-start gap-2 mb-1">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                456 Military Hwy<br />Pineville, LA 71360
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <Phone size={16} /> (318) 555-0456
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-normal text-lg mb-6 text-poboy-yellow">HOURS</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Thursday</span>
                <span className="text-white">10:30 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Friday - Saturday</span>
                <span className="text-white">10:30 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sunday</span>
                <span className="text-poboy-red font-bold">CLOSED</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-normal text-lg mb-6 text-poboy-yellow">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Order Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Full Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catering Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Big Brand Watermark */}
        <div className="flex justify-center py-12 border-t border-white/10 overflow-hidden">
          <h2 className="text-[14vw] md:text-[9vw] font-display font-normal tracking-tighter text-transparent whitespace-nowrap opacity-20" style={{ WebkitTextStroke: '2px #ffce04', color: '#111111' }}>
            POBOY EXPRESS
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Poboy Express. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#menu" className="flex items-center gap-2 hover:text-white transition-colors">
              <Utensils size={18} /> View Full Menu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const QuickActionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 via-poboy-red to-red-900 w-full py-5 px-4 sm:px-6 lg:px-8 relative z-20 shadow-2xl overflow-hidden">
      <ParallaxCheckeredBackground opacity={0.03} />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 relative z-10">
        <a href="tel:+13185550123" className="flex-1 group bg-black/20 hover:bg-poboy-yellow backdrop-blur-sm border border-black text-white hover:text-poboy-black font-display font-normal py-4 px-6 rounded-md transition-all duration-300 text-lg md:text-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:-translate-y-1">
          <Phone size={24} className="text-poboy-yellow group-hover:text-poboy-black group-hover:scale-110 transition-all" />
          Call Now
        </a>
        <a
          href="https://order.toasttab.com/online/po-boy-express-alexandria-1305-windsor-pl"
          target="_blank"
          rel="noreferrer"
          className="flex-1 group bg-poboy-red hover:bg-poboy-yellow text-white hover:text-poboy-black border border-black font-display font-normal py-4 px-6 rounded-md transition-all duration-300 text-lg md:text-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:-translate-y-1"
        >
          <ShoppingBag size={24} className="text-poboy-yellow group-hover:text-poboy-black group-hover:scale-110 transition-all" />
          Order Online
        </a>
        <Link to="/menu" className="flex-1 group bg-black/20 hover:bg-poboy-yellow backdrop-blur-sm border border-black text-white hover:text-poboy-black font-display font-normal py-4 px-6 rounded-md transition-all duration-300 text-lg md:text-xl uppercase tracking-widest flex items-center justify-center gap-3 hover:-translate-y-1">
          <Plus size={24} className="text-poboy-yellow group-hover:text-poboy-black group-hover:scale-110 transition-all" />
          Plan Your Order
        </Link>
      </div>
    </div>
  );
};

const FloatingOrderButton = () => {
  const { state, dispatch } = useBag();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <button
      onClick={() => dispatch({ type: 'TOGGLE_DRAWER' })}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-poboy-yellow hover:bg-yellow-400 min-w-[4rem] h-16 px-4 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 group gap-2"
      aria-label="View Order Bag"
    >
      <img src="/orderbag.png" alt="Order Bag" className="w-8 h-8 object-contain group-hover:-translate-y-1 transition-transform" />
      {itemCount > 0 && (
        <div className="bg-poboy-red text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center font-sans -ml-1 mt-0.5">
          {itemCount}
        </div>
      )}
    </button>
  );
};

const HomePage = () => {
  return (
    <main>
      <Hero />
      <QuickActionBanner />
      <FoodSpotlight />
      <About />
      <Locations />
      <Gallery />
      <MenuCategories />
      <Testimonials />
    </main>
  );
};

export default function App() {
  return (
    <BagProvider>
      <BrowserRouter>
        <div className="min-h-screen font-sans selection:bg-poboy-yellow selection:text-poboy-black relative overflow-hidden">
          <Header />
          <FloatingOrderButton />
          <BagDrawer />
          <WelcomePopup />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </BagProvider>
  );
}
