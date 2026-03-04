export interface Testimonial {
  id: string;
  name: string;
  location: string;
  situation: string;
  quote: string;
  rating: number;
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jennifer M.",
    location: "Springfield, MO",
    situation: "Inherited House",
    quote:
      "After my mom passed, my brother and I had no idea what to do with her house. It needed a new roof and the foundation had cracks. Show-Me Home Ventures gave us the Open-Book Certainty Offer and we could see exactly how they got to the number. No pressure, no surprises. We closed in two weeks and could finally focus on grieving instead of worrying about the house.",
    rating: 5,
    featured: true,
  },
  {
    id: "t2",
    name: "Robert T.",
    location: "Ozark, MO",
    situation: "House Needs Repairs",
    quote:
      "I'd been holding onto a rental that was falling apart—bad tenants, deferred maintenance, the works. I thought I'd have to fix everything before selling. They bought it as-is and the closing date was in the offer. No 'we'll see' or 'maybe next month.' They said 18 days and they meant it. Finally off my hands.",
    rating: 5,
    featured: true,
  },
  {
    id: "t3",
    name: "Sarah K.",
    location: "Nixa, MO",
    situation: "Divorce",
    quote:
      "Selling during a divorce was already stressful. We didn't need the added hassle of listing, showings, and waiting for a buyer. The Open-Book Certainty Offer gave us one number we could both agree on. Closed in three weeks. One less thing to fight about.",
    rating: 5,
    featured: true,
  },
  {
    id: "t4",
    name: "David L.",
    location: "Republic, MO",
    situation: "Foreclosure",
    quote:
      "I was months behind and the bank was moving toward foreclosure. I didn't know who would buy a house that needed work in that timeline. They made an offer, gave me a closing date, and we closed before the sale. No foreclosure on my record. I can't thank them enough.",
    rating: 5,
    featured: true,
  },
  {
    id: "t5",
    name: "Michelle P.",
    location: "Springfield, MO",
    situation: "Hoarder House",
    quote:
      "My dad's house was full of stuff—decades of it. I live in Kansas City and couldn't deal with the cleanout. They bought it as-is. I didn't have to hire anyone or fly down to empty it. They handled everything. The No Surprise Pledge meant I knew what I was getting from the start.",
    rating: 5,
    featured: false,
  },
  {
    id: "t6",
    name: "James H.",
    location: "Battlefield, MO",
    situation: "Vacant Property",
    quote:
      "Had a vacant house for two years—insurance, taxes, worry about vandalism. They made an offer, showed me the breakdown, and closed in 16 days. Finally stopped bleeding money on a property I didn't want. Honest process start to finish.",
    rating: 5,
    featured: false,
  },
];
