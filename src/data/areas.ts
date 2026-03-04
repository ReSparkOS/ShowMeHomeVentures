export interface Area {
  slug: string;
  city: string;
  state: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  description: string;
  neighborhoods: string[];
  zipCodes: string[];
}

export const areas: Area[] = [
  {
    slug: "springfield-mo",
    city: "Springfield",
    state: "MO",
    county: "Greene County",
    metaTitle: "We Buy Houses in Springfield, MO | Greene County Cash Offers",
    metaDescription:
      "Show-Me Home Ventures buys houses in Springfield, MO and Greene County—as-is, any condition. Get an Open-Book Certainty Offer™ with a real closing date.",
    heroHeading: "We Buy Houses in Springfield, MO",
    heroSubheading:
      "Serving Greene County and the heart of the Ozarks with transparent offers and reliable closings.",
    description:
      "Springfield is the third-largest city in Missouri and the hub of the Ozarks region. From historic neighborhoods like Rountree and Phelps Grove to established areas like Westside and Doling, homeowners here face all the same real estate challenges—inherited properties, rental situations, deferred maintenance, and life transitions.\n\nWe've been buying houses in Springfield for years. We know the neighborhoods, the market, and the specific quirks of Greene County. Whether you're near Missouri State University, off Glenstone, or tucked into one of the older neighborhoods east of National, we provide the same Open-Book Certainty Offer™: a clear number, a real closing date, and no surprise fees.\n\nSpringfield's housing stock runs the gamut—from well-kept midcentury homes to properties that have seen better days. We buy them all. If you're selling an inherited house on the south side, a rental near downtown, or a vacant property in Phelps Grove, we're here to help. No pressure, no obligation—just an honest offer when you need one.",
    neighborhoods: [
      "Rountree",
      "Phelps Grove",
      "Midtown",
      "Grant Beach",
      "Doling",
      "Westside",
      "Woodland Heights",
      "Robberson",
      "Weller",
      "Bissett",
    ],
    zipCodes: ["65802", "65803", "65804", "65806", "65807", "65809", "65810"],
  },
  {
    slug: "ozark-mo",
    city: "Ozark",
    state: "MO",
    county: "Christian County",
    metaTitle: "We Buy Houses in Ozark, MO | Christian County Cash Offers",
    metaDescription:
      "Sell your house in Ozark, MO—as-is, any condition. Get an Open-Book Certainty Offer™ from Show-Me Home Ventures. We buy throughout Christian County.",
    heroHeading: "We Buy Houses in Ozark, MO",
    heroSubheading:
      "Christian County's largest city—and we're ready to make you an offer.",
    description:
      "Ozark sits in Christian County, just south of Springfield, and has grown into one of the fastest-growing communities in the Ozarks. The mix of older homes near the square and newer subdivisions along Highway 65 means we see all kinds of situations—families downsizing, inherited properties, rentals that have run their course, and homes that need more work than the owners want to tackle.\n\nWe buy houses throughout Ozark and Christian County. Whether you're near the historic downtown square, in a subdivision off Jackson Street, or on the edges toward Nixa or Sparta, we provide the same transparent process. Our Open-Book Certainty Offer™ breaks down the numbers so you understand exactly what you're getting—and when.\n\nOzark homeowners often tell us they appreciate not having to deal with the Springfield metro traffic to get to a buyer. We come to you. And because we know the area—from Highlandville to Rogersville to Ozark proper—we can move quickly and close on your timeline. If you're ready to sell as-is, we're ready to make an offer.",
    neighborhoods: [
      "Downtown Ozark",
      "Riverdale",
      "Ozark North",
      "Ozark South",
      "Highlands",
      "Mill Creek",
      "Finley Creek",
      "South Creek",
      "Ozark Trails",
    ],
    zipCodes: ["65721"],
  },
  {
    slug: "nixa-mo",
    city: "Nixa",
    state: "MO",
    county: "Christian County",
    metaTitle: "We Buy Houses in Nixa, MO | Christian County Cash Offers",
    metaDescription:
      "Sell your house in Nixa, MO—as-is. Get an Open-Book Certainty Offer™ from Show-Me Home Ventures. We buy throughout Christian County.",
    heroHeading: "We Buy Houses in Nixa, MO",
    heroSubheading:
      "We buy homes in Nixa and Christian County—transparent offers, real closing dates.",
    description:
      "Nixa has become one of the Ozarks' most desirable suburbs—great schools, family-friendly amenities, and a strong sense of community. But even in thriving Nixa, life happens. Inherited homes, divorces, job relocations, and properties that need more repairs than you have time or money for.\n\nWe buy houses across Nixa—from the established neighborhoods near City Center to newer areas in Nixa West and North. Whether you're on a quiet cul-de-sac or a busier corridor, we evaluate each property on its own merits and provide a clear, written offer.\n\nOur Open-Book Certainty Offer™ works the same in Nixa as it does everywhere else we serve: you see the numbers, you get a guaranteed closing date, and there are no surprise fees at the table. We know Nixa's market and the kinds of homes that come up for sale here. If you're ready to move on from your property—for any reason—we're here to help.",
    neighborhoods: [
      "Nixa West",
      "City Center",
      "Nixa North",
      "Nixa South",
      "Nixa Northwest",
      "Riverdale",
      "Eagle Creek",
      "McCauley Creek",
      "Silver Springs",
    ],
    zipCodes: ["65714"],
  },
  {
    slug: "republic-mo",
    city: "Republic",
    state: "MO",
    county: "Greene County",
    metaTitle: "We Buy Houses in Republic, MO | Greene County Cash Offers",
    metaDescription:
      "Sell your house in Republic, MO—as-is. Get an Open-Book Certainty Offer™ from Show-Me Home Ventures. We buy throughout Greene County.",
    heroHeading: "We Buy Houses in Republic, MO",
    heroSubheading:
      "Serving Republic and southwest Greene County with honest offers and reliable closings.",
    description:
      "Republic sits in southwest Greene County, with easy access to Springfield and a small-town feel that draws families and retirees alike. The housing mix—from older homes near Main Street to newer subdivisions—means we see a variety of situations. Inherited properties, rentals, homes that need work, and sellers who simply need to move on.\n\nWe buy houses throughout Republic and the surrounding Greene County area. We know the neighborhoods, the school district boundaries, and what typical buyers are looking for—and what they're not. When a property doesn't fit the traditional mold, we're often the right fit.\n\nOur Open-Book Certainty Offer™ gives Republic sellers the same deal we offer everywhere: transparent numbers, a real closing date, and no agent fees. Whether you're near the high school, off Highway 60, or in one of the newer developments, we can help. Reach out when you're ready—no obligation, no pressure.",
    neighborhoods: [
      "Downtown Republic",
      "Republic North",
      "Republic South",
      "Republic East",
      "Lynn Creek",
      "Farm Road",
      "West Republic",
      "Republic Commons",
    ],
    zipCodes: ["65738"],
  },
  {
    slug: "battlefield-mo",
    city: "Battlefield",
    state: "MO",
    county: "Greene County",
    metaTitle: "We Buy Houses in Battlefield, MO | Greene County Cash Offers",
    metaDescription:
      "Sell your house in Battlefield, MO—as-is. Get an Open-Book Certainty Offer™ from Show-Me Home Ventures. We buy throughout Greene County.",
    heroHeading: "We Buy Houses in Battlefield, MO",
    heroSubheading:
      "We buy homes in Battlefield and Greene County—clear offers, dependable closings.",
    description:
      "Battlefield sits just southwest of Springfield in Greene County, with a mix of rural and suburban character. The area has grown steadily, and we see everything from older farmhouses and ranches to newer subdivisions. Homeowners here face the same challenges as anywhere—inherited properties, deferred maintenance, life changes, and the need for a simple exit.\n\nWe buy houses in Battlefield and the surrounding Greene County area. We're familiar with the lay of the land, the typical property types, and what it takes to close a deal quickly. Our Open-Book Certainty Offer™ means you get a clear number and a guaranteed closing date—no waiting on a traditional buyer, no surprise deductions.\n\nBattlefield sellers often appreciate that we're local and responsive. We don't string you along or disappear. If we make an offer, we intend to close. Whether your property is on a few acres or in a subdivision, needs a few repairs or a lot of them—we're here to help. Reach out when you're ready.",
    neighborhoods: [
      "Downtown Battlefield",
      "Battlefield North",
      "Battlefield South",
      "Farm Road",
      "West Battlefield",
      "Highland Ridge",
    ],
    zipCodes: ["65619", "65807", "65810"],
  },
];
