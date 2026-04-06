import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export const ReviewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reviews = [
    {
      name: "Marcus Thibodeaux",
      text: "The Rajun Cajun po'boy is arguably the best sandwich I've ever had. Fast service from Jimmy and the team, always super friendly. Highly recommend!",
      rating: 5,
      role: "Local Guide",
      source: "Google"
    },
    {
      name: "Lauren S.",
      text: "We cater from Poboy Express all the time. Over 50 varieties but the shrimp basket and roast beef with gravy are to die for. Great portions and always fresh.",
      rating: 5,
      role: "Reviewer",
      source: "Google"
    },
    {
      name: "Darius Washington",
      text: "Best po'boys in Alexandria, hands down. The Swamp po'boy is incredibly rich. Been coming here for years and they never miss.",
      rating: 5,
      role: "Local Guide",
      source: "Google"
    },
    {
      name: "Amanda Chen",
      text: "I love that they have a drive-thru for when I'm on a quick lunch break. Their homemade potato chips are perfectly crispy, and the fried catfish is always hot out the fryer.",
      rating: 4,
      role: "Reviewer",
      source: "Google"
    },
    {
      name: "Gregory L.",
      text: "Jimmy runs a fantastic establishment. The BBQ beef po'boy is my go-to order. The bread is soft on the inside with that perfect Louisiana crust on the outside.",
      rating: 5,
      role: "Local Guide",
      source: "Google"
    },
    {
      name: "Sarah Jenkins",
      text: "You cannot beat the prices for exactly how much food you get. The staff is always smiling and accommodating. Free parking and easy access, truly a local gem.",
      rating: 5,
      role: "Reviewer",
      source: "Google"
    },
    {
      name: "Tyler B.",
      text: "My family loves this place. Sometimes they go heavy on the condiments so ask for mayo on the side, but otherwise the quality of the seafood is unbelievable for the price.",
      rating: 4,
      role: "Local Guide",
      source: "Google"
    },
    {
      name: "Michael R.",
      text: "Everything they make from the gumbo to the boudin balls is 10/10 authentic Cajun. Reminds me of my grandmother's cooking. Awesome atmosphere.",
      rating: 5,
      role: "Local Guide",
      source: "Google"
    },
    {
      name: "Jennifer W.",
      text: "The grilled shrimp po'boy is seasoned to perfection. Don't forget to grab a fresh-baked cookie on your way out! Easily 5 stars.",
      rating: 5,
      role: "Reviewer",
      source: "Google"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans mb-0">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/poboyexpresspoyboysandwich2.jpeg" 
            alt="Poboy Express Reviews" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 pt-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-1 bg-poboy-yellow"></div>
            <span className="text-poboy-yellow font-bold tracking-[0.2em] uppercase text-sm drop-shadow-md">What Locals Say</span>
            <div className="w-12 h-1 bg-poboy-yellow"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-normal text-white uppercase tracking-tight drop-shadow-lg mb-6">
            Customer <span className="text-poboy-red">Reviews</span>
          </h1>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="text-poboy-yellow fill-poboy-yellow w-6 h-6 md:w-8 md:h-8" />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative z-20 py-16 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < review.rating ? "fill-poboy-yellow text-poboy-yellow" : "fill-gray-200 text-gray-200"} 
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded tracking-wider uppercase">
                    {review.source}
                  </span>
                </div>
                <p className="text-gray-700 mb-8 text-base leading-relaxed font-medium">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div>
                  <h4 className="font-display font-normal text-poboy-black text-lg leading-none mb-1">{review.name}</h4>
                  <p className="text-poboy-red text-xs font-bold tracking-wider uppercase">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
