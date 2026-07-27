export interface StudyDestination {
  name: string;
  flag: string;
  code: string;
  slug: string;
  region: "Europe" | "Americas" | "Asia-Pacific" | "Middle East";
  popularDegrees?: string[];
}

export const studyAbroadDestinations: StudyDestination[] = [
  { name: "Australia", flag: "🇦🇺", code: "au", slug: "australia", region: "Asia-Pacific", popularDegrees: ["Engineering", "Business", "Healthcare"] },
  { name: "Austria", flag: "🇦🇹", code: "at", slug: "austria", region: "Europe", popularDegrees: ["Arts & Music", "Business", "Computer Science"] },
  { name: "Bahrain", flag: "🇧🇭", code: "bh", slug: "bahrain", region: "Middle East", popularDegrees: ["Banking & Finance", "Engineering"] },
  { name: "Belgium", flag: "🇧🇪", code: "be", slug: "belgium", region: "Europe", popularDegrees: ["International Relations", "Biotechnology"] },
  { name: "Canada", flag: "🇨🇦", code: "ca", slug: "canada", region: "Americas", popularDegrees: ["Data Science", "Business Admin", "Engineering"] },
  { name: "China", flag: "🇨🇳", code: "cn", slug: "china", region: "Asia-Pacific", popularDegrees: ["Medicine (MBBS)", "International Trade", "Tech"] },
  { name: "Croatia", flag: "🇭🇷", code: "hr", slug: "croatia", region: "Europe", popularDegrees: ["Tourism", "Medicine", "Maritime Studies"] },
  { name: "Denmark", flag: "🇩🇰", code: "dk", slug: "denmark", region: "Europe", popularDegrees: ["Green Energy", "Design", "Life Sciences"] },
  { name: "Finland", flag: "🇫🇮", code: "fi", slug: "finland", region: "Europe", popularDegrees: ["Software Engineering", "AI & Robotics", "Education"] },
  { name: "France", flag: "🇫🇷", code: "fr", slug: "france", region: "Europe", popularDegrees: ["Fashion & Luxury", "Business & MBA", "Culinary"] },
  { name: "Georgia", flag: "🇬🇪", code: "ge", slug: "georgia", region: "Europe", popularDegrees: ["Medicine (MBBS)", "Dentistry", "Business"] },
  { name: "Germany", flag: "🇩🇪", code: "de", slug: "germany", region: "Europe", popularDegrees: ["Automotive Engineering", "IT", "Public Policy"] },
  { name: "Greece", flag: "🇬🇷", code: "gr", slug: "greece", region: "Europe", popularDegrees: ["Archaeology", "Maritime Management", "Tourism"] },
  { name: "Hungary", flag: "🇭🇺", code: "hu", slug: "hungary", region: "Europe", popularDegrees: ["Medicine & Health", "Engineering", "Arts"] },
  { name: "Indonesia", flag: "🇮🇩", code: "id", slug: "indonesia", region: "Asia-Pacific", popularDegrees: ["Environmental Studies", "Tropical Medicine"] },
  { name: "Ireland", flag: "🇮🇪", code: "ie", slug: "ireland", region: "Europe", popularDegrees: ["Pharmaceuticals", "Computer Science", "Finance"] },
  { name: "Italy", flag: "🇮🇹", code: "it", slug: "italy", region: "Europe", popularDegrees: ["Architecture", "Fashion Design", "Engineering"] },
  { name: "Japan", flag: "🇯🇵", code: "jp", slug: "japan", region: "Asia-Pacific", popularDegrees: ["Robotics", "Animation", "Electronics"] },
  { name: "Kazakhstan", flag: "🇰🇿", code: "kz", slug: "kazakhstan", region: "Asia-Pacific", popularDegrees: ["Petroleum Engineering", "Medicine"] },
  { name: "Lithuania", flag: "🇱🇹", code: "lt", slug: "lithuania", region: "Europe", popularDegrees: ["Fintech", "Laser Technology", "Biomedical"] },
  { name: "Luxembourg", flag: "🇱🇺", code: "lu", slug: "luxembourg", region: "Europe", popularDegrees: ["International Law", "Banking", "Logistics"] },
  { name: "Malaysia", flag: "🇲🇾", code: "my", slug: "malaysia", region: "Asia-Pacific", popularDegrees: ["Engineering", "Hospitality", "Business"] },
  { name: "Malta", flag: "🇲🇹", code: "mt", slug: "malta", region: "Europe", popularDegrees: ["iGaming", "Hospitality", "English Language Studies"] },
  { name: "Mauritius", flag: "🇲🇺", code: "mu", slug: "mauritius", region: "Asia-Pacific", popularDegrees: ["Hotel Management", "Marine Biology"] },
  { name: "Monaco", flag: "🇲🇨", code: "mc", slug: "monaco", region: "Europe", popularDegrees: ["Luxury Brand Management", "Finance"] },
  { name: "Netherlands", flag: "🇳🇱", code: "nl", slug: "netherlands", region: "Europe", popularDegrees: ["Logistics", "Water Management", "Computer Science"] },
  { name: "New Zealand", flag: "🇳🇿", code: "nz", slug: "new-zealand", region: "Asia-Pacific", popularDegrees: ["Agriculture", "Environmental Science", "IT"] },
  { name: "Poland", flag: "🇵🇱", code: "pl", slug: "poland", region: "Europe", popularDegrees: ["IT & Software", "Logistics", "Medicine"] },
  { name: "Russia", flag: "🇷🇺", code: "ru", slug: "russia", region: "Europe", popularDegrees: ["Aeronautics", "General Medicine", "Nuclear Physics"] },
  { name: "Saudi Arabia", flag: "🇸🇦", code: "sa", slug: "saudi-arabia", region: "Middle East", popularDegrees: ["Chemical Engineering", "Petroleum Geosciences"] },
  { name: "Singapore", flag: "🇸🇬", code: "sg", slug: "singapore", region: "Asia-Pacific", popularDegrees: ["Global Finance", "AI & Analytics", "Biomedical"] },
  { name: "South Korea", flag: "🇰🇷", code: "kr", slug: "south-korea", region: "Asia-Pacific", popularDegrees: ["K-Culture & Media", "Semiconductors", "Engineering"] },
  { name: "Spain", flag: "🇪🇸", code: "es", slug: "spain", region: "Europe", popularDegrees: ["Business & MBA", "Tourism", "Renewable Energy"] },
  { name: "Sri Lanka", flag: "🇱🇰", code: "lk", slug: "sri-lanka", region: "Asia-Pacific", popularDegrees: ["Apparel Design", "Tropical Agriculture"] },
  { name: "Sweden", flag: "🇸🇪", code: "se", slug: "sweden", region: "Europe", popularDegrees: ["Sustainability", "Industrial Design", "IT"] },
  { name: "Switzerland", flag: "🇨🇭", code: "ch", slug: "switzerland", region: "Europe", popularDegrees: ["Hospitality Management", "Private Banking", "Biotech"] },
  { name: "Thailand", flag: "🇹🇭", code: "th", slug: "thailand", region: "Asia-Pacific", popularDegrees: ["Culinary Arts", "International Business", "Tourism"] },
  { name: "Turkey", flag: "🇹🇷", code: "tr", slug: "turkey", region: "Europe", popularDegrees: ["Medicine", "International Relations", "Civil Engineering"] },
  { name: "UAE", flag: "🇦🇪", code: "ae", slug: "uae", region: "Middle East", popularDegrees: ["Aviation Management", "Global Business", "Architecture"] },
  { name: "United Kingdom (UK)", flag: "🇬🇧", code: "gb", slug: "united-kingdom", region: "Europe", popularDegrees: ["Law", "Business & Finance", "Artificial Intelligence"] },
  { name: "United States (USA)", flag: "🇺🇸", code: "us", slug: "usa", region: "Americas", popularDegrees: ["STEM Degrees", "Business & MBA", "Computer Science"] },
  { name: "Vietnam", flag: "🇻🇳", code: "vn", slug: "vietnam", region: "Asia-Pacific", popularDegrees: ["Supply Chain", "Asian Business Studies"] }
];
