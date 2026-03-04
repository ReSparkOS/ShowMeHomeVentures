export interface CaseStudy {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  location: string;
  propertyType: string;
  situation: string;
  challenge: string;
  solution: string;
  outcome: string;
  timeline: string;
  beforeValue: string;
  afterValue: string;
  renovationCost: string;
  offerPrice: string;
  images: string[];
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "phelps-grove-inherited-home",
    title: "Inherited Phelps Grove Home—Three Siblings, One Clear Path",
    metaTitle: "Case Study: Inherited Home in Phelps Grove, Springfield MO",
    metaDescription:
      "How Show-Me Home Ventures helped three siblings sell their inherited Phelps Grove home with the Open-Book Certainty Offer™—no repairs, no agent fees, closed in 14 days.",
    location: "Phelps Grove, Springfield, MO",
    propertyType: "Single-family",
    situation: "Inherited House",
    challenge:
      "Three out-of-town siblings inherited a 1950s bungalow in Phelps Grove. The house had been their parents' home for 40 years—lots of memories, but also decades of deferred maintenance. The roof leaked, the HVAC was shot, and the foundation had visible cracks. Two siblings wanted to sell quickly; one wanted to hold out for a 'better' offer. The traditional route would mean hiring agents, coordinating repairs, and waiting months—all while paying insurance and utilities.",
    solution:
      "We provided an Open-Book Certainty Offer™ that broke down our estimated repair costs, holding costs, and final offer. Every sibling saw the same numbers. We offered a 14-day close, which gave the family a clear timeline to make a decision. No pressure, no agent fees—just one transparent offer. All three agreed it was the right path.",
    outcome:
      "We closed in 14 days. The siblings split the proceeds and walked away with no lingering responsibilities. No open houses, no strangers walking through their childhood home. One sibling later said, 'We didn't have to agree on repairs or agents—we just had to agree on your number. That made everything easier.'",
    timeline: "14 days",
    beforeValue: "$85,000–95,000 (as-is estimate)",
    afterValue: "$165,000–175,000 (after renovation)",
    renovationCost: "$35,000–45,000",
    offerPrice: "$72,000–78,000",
    images: [
      "/images/case-studies/phelps-grove-before.jpg",
      "/images/case-studies/phelps-grove-after.jpg",
    ],
    featured: true,
  },
  {
    slug: "westside-rental-tenants",
    title: "Westside Duplex with Tenants—Landlord Ready to Retire",
    metaTitle: "Case Study: Rental Duplex with Tenants in Westside, Springfield MO",
    metaDescription:
      "How we bought a tenant-occupied duplex in Westside, Springfield—no evictions, no showings. Closed in 21 days with our Open-Book Certainty Offer™.",
    location: "Westside, Springfield, MO",
    propertyType: "Multi-family",
    situation: "Rental with Tenants",
    challenge:
      "A retiree owned a duplex in Westside for 25 years. Both units were rented, but one tenant was behind on rent and the building needed a new roof and updated electrical. The owner was tired of being a landlord and didn't want to deal with evictions, showings, or repair negotiations. Traditional buyers and lenders balked at the tenant situation and deferred maintenance.",
    solution:
      "We bought the property with tenants in place. No evictions required. Our Open-Book Certainty Offer™ included our estimated cost to assume the leases and address the roof and electrical work. The owner accepted, and we closed in 21 days. We took over landlord duties at closing.",
    outcome:
      "The seller walked away with a clean break and no more landlord headaches. We closed on schedule, assumed the leases, and completed the repairs after taking ownership. The owner said, 'I thought I'd have to evict someone and fix everything. You just took it. Best decision I made.'",
    timeline: "21 days",
    beforeValue: "$90,000–100,000 (as-is, tenant-occupied)",
    afterValue: "$145,000–155,000 (after repairs)",
    renovationCost: "$28,000–35,000",
    offerPrice: "$68,000–74,000",
    images: [
      "/images/case-studies/westside-duplex-exterior.jpg",
      "/images/case-studies/westside-duplex-interior.jpg",
    ],
    featured: true,
  },
  {
    slug: "grant-beach-foreclosure-rescue",
    title: "Grant Beach Home—Foreclosure Avoided, Credit Protected",
    metaTitle: "Case Study: Avoiding Foreclosure in Grant Beach, Springfield MO",
    metaDescription:
      "How we helped a Springfield family avoid foreclosure with a fast close in Grant Beach. Our Open-Book Certainty Offer™ closed in 19 days.",
    location: "Grant Beach, Springfield, MO",
    propertyType: "Single-family",
    situation: "Foreclosure",
    challenge:
      "A family had fallen behind on payments after a job loss. The lender had filed a notice of default, and a foreclosure sale date was looming. The house needed minor repairs and had some deferred maintenance. They wanted to sell fast, avoid foreclosure on their record, and move in with family. A traditional sale would take too long.",
    solution:
      "We provided an Open-Book Certainty Offer™ with a 19-day closing date—before the foreclosure sale. We coordinated with the lender on the pay-off amount and closed on time. The sellers netted enough to cover moving costs and walked away with a sale on their credit report, not a foreclosure.",
    outcome:
      "We closed in 19 days. The foreclosure was canceled. The family moved in with relatives and later said they were grateful to have avoided the long-term credit hit. 'You gave us a real date and you hit it. That's what we needed.'",
    timeline: "19 days",
    beforeValue: "$75,000–85,000 (as-is)",
    afterValue: "$130,000–140,000 (after repairs)",
    renovationCost: "$22,000–28,000",
    offerPrice: "$62,000–68,000",
    images: [
      "/images/case-studies/grant-beach-before.jpg",
    ],
    featured: false,
  },
  {
    slug: "roundtree-code-violations",
    title: "Rountree Home with Code Violations—City Deadlines Met",
    metaTitle: "Case Study: Selling a House with Code Violations in Rountree, Springfield MO",
    metaDescription:
      "How we bought a Rountree home with code violations and helped the owner avoid fines. Closed in 17 days with our Open-Book Certainty Offer™.",
    location: "Rountree, Springfield, MO",
    propertyType: "Single-family",
    situation: "Code Violations",
    challenge:
      "An out-of-state heir inherited a Rountree bungalow with multiple code violations—overgrown yard, broken windows, structural concerns flagged by the city. Fines were accumulating, and the heir couldn't afford to travel to Springfield to fix the issues. Traditional buyers and their lenders wouldn't touch a property with open violations.",
    solution:
      "We provided an Open-Book Certainty Offer™ that factored in the cost of bringing the property into compliance. We closed in 17 days and assumed responsibility for resolving the violations. The heir walked away with a check and zero ongoing liability.",
    outcome:
      "We closed in 17 days. The heir used the proceeds to cover estate expenses and never had to set foot in Springfield. We brought the property into compliance and later sold it to a young family. The heir said, 'I didn't know what to do. You took it off my plate completely.'",
    timeline: "17 days",
    beforeValue: "$70,000–80,000 (as-is, violations)",
    afterValue: "$155,000–165,000 (after full rehab)",
    renovationCost: "$45,000–55,000",
    offerPrice: "$58,000–64,000",
    images: [
      "/images/case-studies/roundtree-before.jpg",
      "/images/case-studies/roundtree-after.jpg",
    ],
    featured: true,
  },
];
