import { motion } from "framer-motion";
import { Search, Filter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const TalentPage = () => {
  const talents = [
    {
      id: 1,
      name: "Chioma Okafor",
      location: "Lagos, Nigeria",
      specialty: "Software Development",
      languages: ["English", "Yoruba", "Japanese (Basic)"],
      experience: "5 years",
      bio: "Full-stack developer with experience in fintech and e-commerce, seeking opportunities to collaborate with Japanese tech companies.",
      img: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 2,
      name: "Takashi Yamamoto",
      location: "Osaka, Japan",
      specialty: "Marketing & Business Development",
      languages: ["Japanese", "English", "Swahili (Basic)"],
      experience: "8 years",
      bio: "Marketing expert with focus on Africa-Japan trade relations. Previously worked with major corporations expanding into African markets.",
      img: "https://i.pravatar.cc/150?img=68",
    },
    {
      id: 3,
      name: "Amara Diallo",
      location: "Dakar, Senegal",
      specialty: "Agricultural Technology",
      languages: ["French", "Wolof", "English", "Japanese (Intermediate)"],
      experience: "6 years",
      bio: "Agricultural engineer specializing in sustainable farming technologies. JICA alumni with extensive experience in Japanese farming techniques.",
      img: "https://i.pravatar.cc/150?img=26",
    },
    {
      id: 4,
      name: "Kenji Nakamura",
      location: "Tokyo, Japan",
      specialty: "International Education",
      languages: ["Japanese", "English", "French"],
      experience: "12 years",
      bio: "Education consultant specializing in international student exchange programs between Japanese and African educational institutions.",
      img: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 5,
      name: "Nala Mensah",
      location: "Accra, Ghana",
      specialty: "Fashion Design",
      languages: ["English", "Twi", "Japanese (Basic)"],
      experience: "7 years",
      bio: "Fashion designer blending traditional African textiles with Japanese minimalist aesthetics. Exhibited at Tokyo Fashion Week.",
      img: "https://i.pravatar.cc/150?img=23",
    },
    {
      id: 6,
      name: "Hiroshi Tanaka",
      location: "Nairobi, Kenya",
      specialty: "Renewable Energy",
      languages: ["Japanese", "English", "Swahili"],
      experience: "10 years",
      bio: "Renewable energy specialist implementing Japanese solar technologies across East African communities.",
      img: "https://i.pravatar.cc/150?img=60",
    },
  ];

  const categories = [
    "All Specialties",
    "Technology",
    "Business",
    "Education",
    "Arts & Culture",
    "Science & Research",
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-jp-indigo to-jp-slate py-16 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Talent Directory</h1>
            <p className="text-lg text-gray-200 mb-8">
              Connect with skilled professionals from Africa and Japan looking to collaborate and build bridges across continents.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by name, skill, or location..."
                className="pl-10 text-white bg-white/20 border-none focus:bg-white focus:text-gray-900 placeholder:text-gray-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-paper py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Filter className="h-5 w-5 text-jp-indigo" />
              <span className="font-medium text-jp-indigo">Filters:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  className={
                    category === "All Specialties"
                      ? "bg-jp-indigo text-white"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-paper">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talents.map((talent) => (
              <motion.div
                key={talent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-afri-red via-afri-yellow to-jp-red"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={talent.img}
                      alt={talent.name}
                      className="w-16 h-16 rounded-full border-2 border-gray-200 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{talent.name}</h3>
                      <p className="text-gray-600">{talent.location}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge className="bg-jp-indigo/10 text-jp-indigo">{talent.specialty}</Badge>
                    <p className="mt-3 text-sm text-gray-500">
                      <span className="font-medium">Experience:</span> {talent.experience}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{talent.bio}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-2">
                      {talent.languages.map((language, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-2">
                    View Profile
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline">View More Talent</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TalentPage;
