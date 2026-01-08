
import { Heart, Target, Sparkles } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            About Doctor Nelly
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light">
            Empowering lives through holistic wellness and compassionate care
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Biography Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
                alt="Doctor Nelly"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>

          {/* Biography Text */}
          <div className="order-1 md:order-2">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Meet the Author
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              A Journey of Healing & Discovery
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                For over two decades,{" "}
                <span className="font-semibold text-gray-900">
                  Doctor Nelly
                </span>{" "}
                has dedicated her life to understanding the intricate
                connections between mind, body, and spirit. Her journey began in
                traditional medicine but evolved into a profound exploration of
                holistic wellness practices.
              </p>
              <p>
                With certifications in nutrition science, integrative medicine,
                and mindfulness therapy, she brings a unique perspective that
                bridges ancient wisdom with modern scientific understanding. Her
                approach is rooted in compassion, evidence-based research, and a
                deep respect for each individual's healing journey.
              </p>
              <p>
                Through her books, workshops, and clinical practice, Doctor
                Nelly has helped thousands of individuals reclaim their health,
                discover inner peace, and unlock their full potential for
                wellbeing.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl shadow-xl p-10 border-t-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-2xl">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-800 ml-4">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To empower individuals with the knowledge, tools, and inspiration
              needed to take control of their health and wellbeing. We believe
              that true healing comes from addressing the whole person—body,
              mind, and spirit—through accessible, evidence-based, and
              compassionate guidance.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl shadow-xl p-10 border-t-4 border-indigo-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-4 rounded-2xl">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-800 ml-4">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              A world where holistic wellness is accessible to everyone, where
              preventive care is prioritized over reactive treatment, and where
              individuals feel empowered to make informed decisions about their
              health with confidence and clarity.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-white p-4 rounded-2xl shadow-md mb-4">
              <Sparkles className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Core Values
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to
              your wellness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 h-full shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">🌱</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Holistic Approach
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We address the interconnected aspects of health, recognizing
                  that true wellness encompasses physical, mental, and emotional
                  balance.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 h-full shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">🔬</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Evidence-Based
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Our recommendations are grounded in scientific research while
                  respecting time-tested traditional healing practices.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 h-full shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">💙</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Compassionate Care
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Every individual's journey is unique. We provide guidance with
                  empathy, understanding, and respect for your personal path.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <p className="text-2xl text-gray-700 leading-relaxed font-light italic">
            "Healing is not a destination, but a lifelong journey of
            self-discovery, growth, and transformation. I am honored to walk
            this path alongside you."
          </p>
          <p className="text-xl text-gray-600 mt-6 font-serif">
            — Doctor Nelly
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
