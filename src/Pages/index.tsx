import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Mail, CheckCircle, ArrowRight, Lightbulb } from "lucide-react";
import { fetchBooks, type IBook } from "../Services/apiBooks";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Psychology Student",
    content:
      "Dr. Nelly's books have completely transformed my understanding of cognitive science. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Entrepreneur",
    content:
      "The insights on growth and intelligence are applicable not just in theory but in my daily business decisions.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Educator",
    content:
      "A perfect blend of academic rigor and accessible writing. My students love these resources.",
    rating: 5,
  },
];

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  const featuredBooks = (data?.data || []).slice(0, 4).map((book: IBook) => ({
    id: book._id,
    title: book.title,
    description: book.description,
    price: `${book.price} EGP`,
    image: book.image,
  }));

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 z-0"></div>
        <div className="container mx-auto px-6 pt-32 pb-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6">
              Leading Global Knowledge Platform
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Big Knowledge. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Small Dose.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Knowledge in a Capsule Academy delivers clear, concise, and accessible knowledge through focused capsules designed for the digital era.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/products">
              <button className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                Explore Knowledge <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/about-us">
              <button className="px-8 py-4 rounded-full bg-white text-gray-700 font-semibold border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hand-picked selections that have transformed thousands of lives.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBooks.map((book) => (
                <motion.div
                  key={book.id}
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-2xl p-3 transition-all duration-300 hover:shadow-xl border border-gray-100 flex flex-col h-full"
                >
                  <div className="mb-3 rounded-xl overflow-hidden bg-gray-100 relative h-56 flex-shrink-0">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/300x400?text=No+Image";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                  <div className="px-1 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-gray-600 mb-3 line-clamp-2 text-xs">
                      {book.description}
                    </p>
                    <div className="flex items-center justify-end pt-2 border-t border-gray-100 mt-auto">
                      <Link
                        to="/products"
                        className="text-xs font-semibold text-gray-900 hover:text-indigo-600 flex items-center gap-1 transition-colors"
                      >
                        View Details <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-indigo-50/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-50 blur-2xl"></div>
                <div className="relative w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-indigo-100 to-white rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Knowledge in a Capsule Academy Library"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Replaced image with a placeholder since we don't have a real one yet */}
              </div>
            </div>
            <div className="md:w-1/2">
              <span className="text-indigo-600 font-semibold mb-2 block">
                About the Academy
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Knowledge in a Capsule
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A leading global platform for delivering clear, concise, and accessible knowledge. We are striving for excellence and leadership in developing individuals’ knowledge and skills through high-quality capsules.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Clear, Concise, Accessible",
                  "Academic Excellence",
                  "Digital Innovation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about-us">
                <button className="px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Ethics Summary */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-semibold mb-2 block">
              Our Core Principles
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Values That Drive Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Guided by a commitment to academic excellence, integrity, and innovation in every knowledge capsule we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Quality",
                desc: "Adhering to high scientific and academic standards in content development.",
                icon: <Star className="w-8 h-8 text-yellow-500" fill="currentColor" />,
              },
              {
                title: "Credibility",
                desc: "Relying on trusted sources and research-based content verified through review.",
                icon: <CheckCircle className="w-8 h-8 text-green-500" />,
              },
              {
                title: "Innovation",
                desc: "Adopting modern digital learning approaches to enhance knowledge delivery.",
                icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
              },
            ].map((value, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-white p-4 rounded-xl inline-flex mb-6 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors group"
            >
              Read Full Code of Ethics 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Reader Stories
            </h2>
            <p className="text-gray-600">
              See how our books are making an impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-indigo-100 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393798-2f77f3741586?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Mail className="w-16 h-16 mx-auto mb-6 text-indigo-300" />
            <h2 className="text-4xl font-bold mb-6">Stay Inspired</h2>
            <p className="text-indigo-100 text-lg mb-10">
              Join our community of over 50,000 readers. Get exclusive insights,
              early access to new releases, and weekly inspiration delivered to
              your inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:bg-white/20 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
            <p className="text-indigo-300 text-sm mt-6">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
