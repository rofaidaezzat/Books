
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

        {/* Core Values Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-lg mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center bg-white p-4 rounded-2xl shadow-md mb-4">
              <Sparkles className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Core Values
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to
              excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💡",
                title: "Clarity",
                desc: "Delivering knowledge in a precise and simple manner that ensures understanding without compromising scientific accuracy.",
              },
              {
                icon: "⭐",
                title: "Quality",
                desc: "Adhering to high scientific and academic standards in the development and delivery of content.",
              },
              {
                icon: "🛡️",
                title: "Credibility",
                desc: "Relying on trusted sources and research-based content verified through rigorous scholarly review.",
              },
              {
                icon: "⏱️",
                title: "Efficiency",
                desc: "Respecting learners’ time by providing focused, high-value content.",
              },
              {
                icon: "🌍",
                title: "Accessibility",
                desc: "Ensuring knowledge is available to all through flexible formats suitable for diverse audiences.",
              },
              {
                icon: "🚀",
                title: "Innovation",
                desc: "Adopting modern digital learning approaches and leveraging intelligent technologies to enhance knowledge delivery.",
              },
              {
                icon: "📚",
                title: "Lifelong Learning",
                desc: "Promoting a culture of continuous learning and sustainable professional development.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Objectives Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Strategic Objectives
            </h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Deliver High-Quality Knowledge",
                desc: "To develop and disseminate reliable, high-quality knowledge content aligned with academic and professional standards, ensuring accuracy, credibility, and consistency.",
              },
              {
                title: "Simplify Complex Content",
                desc: "To transform complex scientific and academic concepts into concise, structured, and accessible knowledge capsules without compromising intellectual rigor.",
              },
              {
                title: "Support Lifelong Learning",
                desc: "To empower individuals and professionals with flexible learning resources that promote continuous learning, up skilling, and knowledge renewal.",
              },
              {
                title: "Enhance Academic Excellence",
                desc: "To support researchers, educators, and institutions by providing innovative formats for presenting and disseminating research outputs and scholarly knowledge.",
              },
              {
                title: "Expand Global Reach",
                desc: "To ensure wide and inclusive access to knowledge through digital platforms, multilingual content, and scalable delivery models.",
              },
              {
                title: "Leverage Innovation",
                desc: "To integrate advanced educational technologies and responsible AI solutions to enhance content quality, learning effectiveness, and user experience.",
              },
              {
                title: "Build a Sustainable Ecosystem",
                desc: "To establish a collaborative and interactive knowledge community that fosters engagement, expertise exchange, and long-term value creation.",
              },
              {
                title: "Ensure Institutional Sustainability",
                desc: "To implement robust governance, quality assurance, and performance monitoring systems that ensure operational sustainability and continuous improvement.",
              },
            ].map((obj, index) => (
              <div
                key={index}
                className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-2 mr-4 mt-1">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {obj.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code of Ethics Section */}
        <div className="bg-gray-900 text-white rounded-3xl p-12 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-serif font-bold mb-4">
                Code of Ethics
              </h3>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                Our commitment to integrity, improved standards, and
                professional responsibility
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "1. Academic Integrity",
                  desc: "The platform upholds the highest standards of academic integrity and strictly prohibits plagiarism, misrepresentation of sources, or any form of unethical academic practice.",
                },
                {
                  title: "2. Credibility and Reliability",
                  desc: "All content is developed and delivered based on verified, authoritative, and credible sources, ensuring scientific accuracy and scholarly reliability.",
                },
                {
                  title: "3. Transparency",
                  desc: "The platform maintains transparency in content sourcing, review processes, authorship, and publication policies.",
                },
                {
                  title: "4. Intellectual Property Rights",
                  desc: "Knowledge in a Capsule respects intellectual property rights and ensures proper attribution of all content, ideas, and materials in compliance with copyright laws.",
                },
                {
                  title: "5. Objectivity and Independence",
                  desc: "Content is presented objectively, free from ideological, political, or commercial bias, preserving academic and professional independence.",
                },
                {
                  title: "6. Respect, Diversity, and Inclusion",
                  desc: "The platform promotes respect for cultural, intellectual, and social diversity and provides an inclusive, safe, and supportive learning environment for all users.",
                },
                {
                  title: "7. Data Privacy and Confidentiality",
                  desc: "The platform is committed to protecting users’ data and personal information in accordance with applicable data protection laws and ethical standards.",
                },
                {
                  title: "8. Responsible Use of AI",
                  desc: "Artificial intelligence technologies are used responsibly to support content development and learning processes without compromising human oversight, accuracy, or ethical standards.",
                },
                {
                  title: "9. Quality Assurance",
                  desc: "The platform applies systematic quality assurance processes and regularly reviews and updates content to maintain relevance, accuracy, and excellence.",
                },
                {
                  title: "10. Professional Accountability",
                  desc: "Knowledge in a Capsule assumes full responsibility for the content it publishes and is committed to addressing feedback, concerns, or complaints in a transparent and professional manner.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:bg-gray-800/80 transition-colors"
                >
                  <h4 className="text-xl font-bold text-blue-300 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
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
