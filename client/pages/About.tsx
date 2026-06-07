import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Mission-Driven",
      description: "We're committed to delivering digital solutions that drive real business results and growth.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaborative",
      description: "Your success is our success. We work as an extension of your team, not just a vendor.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Innovation-First",
      description: "We embrace cutting-edge technology and AI to stay ahead of the curve and solve tomorrow's problems today.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Quality Excellence",
      description: "Every project is treated with meticulous attention to detail and delivered to the highest standards.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Team Members Globally" },
    { number: "15+", label: "Years Combined Experience" },
    { number: "95%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About <span className="text-primary">SolutionGrid</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're a digital transformation agency helping businesses worldwide leverage technology and AI to achieve their goals.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                SolutionGrid was founded with a simple vision: to make world-class digital solutions accessible to businesses of all sizes. 
                We saw talented developers scattered across the globe and clients struggling to find affordable, high-quality digital partners.
              </p>
              <p>
                By combining global talent with cutting-edge technology and AI-powered solutions, we've created an agency that delivers 
                exceptional results at a fraction of traditional agency costs. Today, we're proud to serve hundreds of clients worldwide, 
                from startups to established enterprises.
              </p>
              <p>
                Our headquarters in London serves as our hub for client relations and strategy, while our international offices in key 
                tech hubs ensure 24/7 support and diverse perspectives on every project.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="p-8 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose SolutionGrid?</h2>
            <div className="space-y-4">
              {[
                "50%+ cost savings compared to traditional agencies",
                "Free consultation with no obligation",
                "Global team of highly skilled developers",
                "AI-powered solutions for efficiency and innovation",
                "24/7 support ensuring business continuity",
                "Transparent pricing and no hidden fees",
                "Proven track record with 95% client satisfaction",
                "SEO-optimized and AI-compatible solutions",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how SolutionGrid can help transform your business.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
              Get Free Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
