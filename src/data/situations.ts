export interface SituationFaq {
  question: string;
  answer: string;
}

export interface Situation {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  icon: string;
  faqs: SituationFaq[];
}

export const situations: Situation[] = [
  {
    slug: "inherited-house",
    title: "Selling an Inherited House in Springfield, MO",
    shortTitle: "Inherited House",
    description:
      "When you inherit a home in Springfield or the Ozarks, the last thing you need is pressure or confusion. You're already managing grief, probate, and family dynamics. Our Open-Book Certainty Offer™ gives you a clear, transparent number and a timeline you can count on—so you can focus on what matters.",
    metaTitle: "Sell an Inherited House in Springfield, MO | No Pressure, Clear Numbers",
    metaDescription:
      "Selling an inherited house in Springfield, MO? Get an honest offer with our Open-Book Certainty Offer™—transparent numbers, real closing dates, no agent fees. We buy as-is.",
    heroHeading: "Selling an Inherited House in Springfield, MO",
    heroSubheading:
      "No pressure. No agent fees. Just a clear offer and a closing date you can trust—so you can focus on what matters.",
    icon: "Home",
    faqs: [
      {
        question: "Do I need to clean or repair the inherited house before selling?",
        answer:
          "No. We buy inherited homes in any condition—including those that need significant repairs, have been vacant, or contain personal belongings. Our Open-Book Certainty Offer™ is based on the property as-is, so you don't have to spend time or money getting it ready.",
      },
      {
        question: "What if the house is still in probate?",
        answer:
          "We work with executors and heirs throughout the probate process. Depending on where you are in the timeline, we can structure an offer that works with the court schedule. We're happy to discuss your specific situation with no obligation.",
      },
      {
        question: "How do you handle multiple heirs with different opinions?",
        answer:
          "We've helped many families in this situation. We provide one clear offer and timeline, which can simplify decision-making when heirs disagree on repairs, listing, or timing. Our No Surprise Pledge means everyone sees the same numbers—no hidden fees or last-minute changes.",
      },
      {
        question: "Will you buy a house with back taxes or liens?",
        answer:
          "Often, yes. Inherited properties sometimes come with tax liens, HOA dues, or other encumbrances. We evaluate each situation and can often work these into the offer. Our Open-Book Certainty Offer™ breaks down the numbers so you understand exactly what you'll net.",
      },
      {
        question: "How quickly can we close on an inherited house?",
        answer:
          "Depending on probate status and your timeline, we can typically close in as few as two weeks—or we can wait if you need more time. The closing date is part of our offer, so you always know when it will happen.",
      },
      {
        question: "What if the house is in another state and I can't visit?",
        answer:
          "We buy properties across the Springfield, MO metro and Ozarks region. For out-of-town heirs, we can work from photos, video walk-throughs, and available records. You don't need to be present at closing—we can handle everything remotely.",
      },
      {
        question: "Do you pay fair prices for inherited homes?",
        answer:
          "Our offers reflect the cost of repairs, holding, and our risk—but we show you how we got there. The Open-Book Certainty Offer™ means you see the math. No lowball tactics, no pressure. If it's not right for you, you walk away with no obligation.",
      },
      {
        question: "Can I keep certain items from the house before closing?",
        answer:
          "In most cases, yes. We'll work with you on a timeline to remove personal items, keepsakes, or furniture you want to keep. We just need the structure and fixtures to remain. Let's discuss what you need.",
      },
    ],
  },
  {
    slug: "house-needs-repairs",
    title: "Sell a House That Needs Repairs in Springfield, MO",
    shortTitle: "House Needs Repairs",
    description:
      "Roof leaks, foundation issues, outdated systems—selling a house that needs work on the traditional market can be stressful and expensive. We buy homes as-is and show you exactly how we arrive at our offer. No repair loans, no staging, no waiting months for the right buyer.",
    metaTitle: "Sell a House That Needs Repairs in Springfield, MO | As-Is Cash Offer",
    metaDescription:
      "Sell your house that needs repairs in Springfield, MO—as-is, no repairs required. Get a transparent Open-Book Certainty Offer™ with a real closing date. No agent commissions.",
    heroHeading: "Sell a House That Needs Repairs in Springfield, MO",
    heroSubheading:
      "Skip the repairs, skip the waiting. Get a clear offer and a closing date—no surprises.",
    icon: "Wrench",
    faqs: [
      {
        question: "What kinds of repairs do you buy houses with?",
        answer:
          "We buy homes with roof damage, foundation issues, faulty HVAC, plumbing or electrical problems, water damage, mold, fire damage, and more. If a conventional buyer or lender would shy away, we're used to it. Our Open-Book Certainty Offer™ accounts for the cost of repairs upfront.",
      },
      {
        question: "Do I need to get inspections or estimates before you make an offer?",
        answer:
          "No. We'll evaluate the property and provide an offer based on our assessment. You don't need to pay for inspections, appraisals, or contractor bids. We handle that part.",
      },
      {
        question: "How does the Open-Book Certainty Offer work for repair-heavy homes?",
        answer:
          "We show you our estimated repair costs, holding costs, and our offer—all in one place. You see exactly how we got to the number. No hidden deductions or surprise fees at closing. What we offer is what you get.",
      },
      {
        question: "What if the house needs major structural work?",
        answer:
          "We routinely buy homes with foundation cracks, sagging floors, and structural concerns in the Springfield area. These often scare off traditional buyers, but we factor them into our offer. You'll see the numbers before you decide.",
      },
      {
        question: "Can I sell if I'm behind on maintenance and haven't updated anything?",
        answer:
          "Yes. Outdated kitchens, bathrooms, flooring, and systems are common. We buy homes that need cosmetic updates and deferred maintenance. You don't need to spend a dime getting it market-ready.",
      },
      {
        question: "How long does it take to get an offer?",
        answer:
          "Typically within 24–48 hours after we review your property info. We'll schedule a walk-through if needed, then provide a written offer with our Open-Book Certainty breakdown.",
      },
      {
        question: "Will you buy a house that failed inspection?",
        answer:
          "Yes. Failed inspections often kill traditional sales. We buy properties that have failed septic, well, or general home inspections. We're used to taking on those issues.",
      },
      {
        question: "What if I've already started repairs but can't finish?",
        answer:
          "We buy mid-renovation homes too. Whether the project was halted by budget, health, or other reasons, we can pick up where you left off. We'll factor the current state into our offer.",
      },
    ],
  },
  {
    slug: "tenants",
    title: "Sell a Rental Property with Tenants in Springfield, MO",
    shortTitle: "Rental with Tenants",
    description:
      "Selling a rental with tenants in Springfield or the Ozarks can be complicated—lease terms, showings, and Missouri landlord-tenant law all add stress. We buy rental properties with tenants in place. You get a clear offer and closing date; we handle the transition.",
    metaTitle: "Sell a Rental Property with Tenants in Springfield, MO | Tenant-Occupied",
    metaDescription:
      "Sell your rental property with tenants in Springfield, MO—no evictions required. Get an Open-Book Certainty Offer™ and a closing date that works. We buy tenant-occupied homes as-is.",
    heroHeading: "Sell a Rental Property with Tenants in Springfield, MO",
    heroSubheading:
      "We buy tenant-occupied rentals. No evictions, no showings—just a clear offer and a closing date.",
    icon: "Users",
    faqs: [
      {
        question: "Do I need to evict my tenants before selling?",
        answer:
          "No. We buy rental properties with tenants in place. You don't have to evict, wait for leases to expire, or coordinate showings. We take over the landlord role at closing and handle tenant communication.",
      },
      {
        question: "What if my tenants are behind on rent?",
        answer:
          "We factor tenant situations into our offer. Whether they're current, behind, or in dispute, we've dealt with it. Our Open-Book Certainty Offer™ reflects the property and occupancy status.",
      },
      {
        question: "How does closing work with an active lease?",
        answer:
          "We close on the property and assume the lease. Tenants stay under the existing terms until their lease ends (or we negotiate an early exit with them). You're free of landlord duties at closing.",
      },
      {
        question: "Will you buy a multi-family property with tenants?",
        answer:
          "Yes. We buy duplexes, triplexes, and small multi-family properties in the Springfield area with tenants in place. Same process—clear offer, clear closing date, no evictions required.",
      },
      {
        question: "What if the tenants have caused damage?",
        answer:
          "We buy properties in any condition, including tenant damage. We'll assess the condition and factor it into our offer. You don't need to pursue the tenant for repairs before selling.",
      },
      {
        question: "Do I need to give my tenants notice before selling?",
        answer:
          "Missouri law has specific notice requirements for selling rented property. We'll work within the legal framework and your timeline. Our goal is a smooth closing that respects both you and the tenants.",
      },
      {
        question: "Can we close quickly if I need to get out of being a landlord?",
        answer:
          "Yes. We can often close in as few as two weeks. The closing date is part of our Open-Book Certainty Offer™—you'll know exactly when you're done being a landlord.",
      },
      {
        question: "What if the property needs repairs and has tenants?",
        answer:
          "We buy as-is, tenant-occupied or not. Deferred maintenance, code issues, and repair needs are factored into our offer. You don't need to fix anything before we buy.",
      },
    ],
  },
  {
    slug: "foreclosure-options",
    title: "Facing Foreclosure? Options in Springfield, MO",
    shortTitle: "Foreclosure Options",
    description:
      "Foreclosure is stressful and time-sensitive. If you're behind on payments in Springfield or the Ozarks, you have options—and we're one of them. We can often close quickly and help you avoid foreclosure on your record. Our Open-Book Certainty Offer™ gives you a real number and date so you can make an informed choice.",
    metaTitle: "Facing Foreclosure in Springfield, MO? Sell Fast | Avoid Foreclosure",
    metaDescription:
      "Facing foreclosure in Springfield, MO? Sell your home fast with our Open-Book Certainty Offer™. Avoid foreclosure, get a clear offer and closing date. No judgment—just options.",
    heroHeading: "Facing Foreclosure? Options in Springfield, MO",
    heroSubheading:
      "You have options. Get a clear offer and a closing date—before time runs out.",
    icon: "AlertTriangle",
    faqs: [
      {
        question: "How quickly can you close if I'm facing foreclosure?",
        answer:
          "We understand the urgency. Depending on your lender and timeline, we can often close in two to four weeks. The closing date is guaranteed in our offer—no last-minute delays that could push you past a foreclosure sale date.",
      },
      {
        question: "Will selling to you stop the foreclosure process?",
        answer:
          "Yes. Once we close, the sale pays off (or satisfies) the mortgage, which stops foreclosure. It's important to act before a sale date is set. We'll work with your timeline and coordinate with your lender when needed.",
      },
      {
        question: "What if I owe more than the house is worth?",
        answer:
          "In some cases we can still help through a short sale structure, working with your lender. Every situation is different. We'll discuss your numbers honestly—no pressure, no empty promises.",
      },
      {
        question: "Do you work with my mortgage company?",
        answer:
          "We can coordinate with your lender on pay-off amounts and closing logistics. You may need to provide authorization. We've closed many deals with banks and servicers in the Springfield area.",
      },
      {
        question: "Will this show up as a foreclosure on my credit?",
        answer:
          "No. A sale to us is a sale—not a foreclosure. Your credit report will show a paid mortgage, not a foreclosure. That distinction matters for future home purchases and financial stability.",
      },
      {
        question: "What if I've already received a notice of default?",
        answer:
          "Time is critical. The sooner you reach out, the more options we have. We can often still close before a sale date—reach out as soon as you're ready to explore.",
      },
      {
        question: "Can I stay in the house until we close?",
        answer:
          "Yes. You remain in the property until closing. We'll agree on a closing date upfront so you know exactly when the transition happens.",
      },
      {
        question: "Is there any obligation if I just want to see my options?",
        answer:
          "None. We'll provide an Open-Book Certainty Offer™ so you can see your options. You're never obligated to accept. We believe you deserve clarity—especially when you're under pressure.",
      },
    ],
  },
  {
    slug: "divorce",
    title: "Selling a House During Divorce in Springfield, MO",
    shortTitle: "Divorce",
    description:
      "Selling a home during divorce in Springfield or the Ozarks adds complexity to an already difficult time. You need a buyer who can close on schedule and a process that doesn't drag on. Our Open-Book Certainty Offer™ gives both parties a clear number and a guaranteed closing date—so you can move forward.",
    metaTitle: "Sell a House During Divorce in Springfield, MO | Fast, Clear Closing",
    metaDescription:
      "Selling a house during divorce in Springfield, MO? Get an Open-Book Certainty Offer™ with a real closing date. No waiting for buyers—close on your timeline and move on.",
    heroHeading: "Selling a House During Divorce in Springfield, MO",
    heroSubheading:
      "A clear offer. A real closing date. One less thing to argue about.",
    icon: "HeartCrack",
    faqs: [
      {
        question: "Do both spouses need to agree to sell to you?",
        answer:
          "Yes. Since both names are typically on the deed, we need both parties to agree to the sale. Our Open-Book Certainty Offer™ can actually simplify things—one clear number, one closing date, no negotiation back-and-forth between spouses.",
      },
      {
        question: "What if we're still in the middle of divorce proceedings?",
        answer:
          "We often work with couples who are separated or in the divorce process. Depending on your attorney's advice, we can structure the sale to align with your settlement. We're happy to work with your legal team.",
      },
      {
        question: "How fast can we close?",
        answer:
          "We can typically close in two to four weeks. The closing date is part of our offer—no waiting months for a traditional buyer. That can help you finalize assets and move on faster.",
      },
      {
        question: "Does the house need to be in perfect condition?",
        answer:
          "No. We buy as-is—deferred maintenance, needed repairs, or even conflict-related neglect. You don't need to agree on (or pay for) updates before selling.",
      },
      {
        question: "What if one spouse is still living in the house?",
        answer:
          "We can close with occupants in place and work out a move-out timeline. We're used to coordinating with people in transition. The closing date gives everyone a clear target.",
      },
      {
        question: "How do you handle the proceeds split?",
        answer:
          "Proceeds are disbursed at closing according to your divorce agreement or court order. We don't decide who gets what—that's between you, your ex, and your attorneys. We just provide a clear sale amount.",
      },
      {
        question: "Can we avoid listing and showings during an already stressful time?",
        answer:
          "Yes. No open houses, no strangers walking through, no staging. You share property details with us, we make an offer, and you decide. Privacy and simplicity when you need it most.",
      },
      {
        question: "What if we're not sure we want to sell yet?",
        answer:
          "No obligation. Get an Open-Book Certainty Offer™ so you know your option. You can use it in settlement discussions or decide later. We're here when you're ready.",
      },
    ],
  },
  {
    slug: "hoarder-house",
    title: "Sell a Hoarder House in Springfield, MO",
    shortTitle: "Hoarder House",
    description:
      "Selling a hoarder house in Springfield or the Ozarks can feel overwhelming—cleanout costs, judgment, and uncertainty about who will even buy it. We buy hoarder homes as-is. No cleanout required, no shame. Our Open-Book Certainty Offer™ shows you exactly what we're offering and when we'll close.",
    metaTitle: "Sell a Hoarder House in Springfield, MO | No Cleanout Required",
    metaDescription:
      "Sell a hoarder house in Springfield, MO—as-is, no cleanout required. Get an honest Open-Book Certainty Offer™ with a closing date. We've helped many families move forward with dignity.",
    heroHeading: "Sell a Hoarder House in Springfield, MO",
    heroSubheading:
      "No cleanout. No judgment. Just a clear offer and a path forward.",
    icon: "Package",
    faqs: [
      {
        question: "Do I need to clean out the house before selling?",
        answer:
          "No. We buy hoarder homes as-is. We handle the cleanout, trash removal, and any necessary remediation. You don't need to hire anyone or do the work yourself.",
      },
      {
        question: "What if there are hazardous materials or biohazards?",
        answer:
          "We work with licensed contractors for hazmat, mold, and biohazard cleanup. We factor those costs into our Open-Book Certainty Offer™ so you see the full picture. You're not responsible for the cleanup.",
      },
      {
        question: "Will you buy if the house has structural damage from the hoard?",
        answer:
          "Yes. Weight from accumulated items can cause floor damage, and years of deferred maintenance can lead to other issues. We buy properties in this condition and factor repairs into our offer.",
      },
      {
        question: "How do you determine the offer amount?",
        answer:
          "We assess the property condition, estimated cleanout and repair costs, and market value. Our Open-Book Certainty Offer™ breaks this down so you understand the number. No surprises at closing.",
      },
      {
        question: "Can I keep any items before closing?",
        answer:
          "In many cases, yes. If you or a family member want to remove specific items, we can arrange a window to do that before we take possession. We'll work with you on timing.",
      },
      {
        question: "What if this is an inherited hoarder house?",
        answer:
          "We buy inherited hoarder homes often. Families don't have to manage cleanout from afar or hire multiple contractors. One offer, one closing—you're done.",
      },
      {
        question: "How long does the process take?",
        answer:
          "We can typically close in two to four weeks after you accept. The closing date is in our offer. You'll know exactly when the property is no longer your responsibility.",
      },
      {
        question: "Do you work with estates or family members making decisions?",
        answer:
          "Yes. We work with executors, heirs, and family members. We provide one clear offer so everyone can make a decision without arguing over repairs or cleanout logistics.",
      },
    ],
  },
  {
    slug: "code-violations",
    title: "Sell a House with Code Violations in Springfield, MO",
    shortTitle: "Code Violations",
    description:
      "Code violations in Springfield or Greene County can make traditional sales difficult—or impossible. Buyers and lenders often walk away. We buy houses with code violations as-is. Our Open-Book Certainty Offer™ shows you the numbers so you can close and move on instead of fighting city hall.",
    metaTitle: "Sell a House with Code Violations in Springfield, MO | As-Is Cash Offer",
    metaDescription:
      "Sell a house with code violations in Springfield, MO—as-is. Get an Open-Book Certainty Offer™ and close without fixing citations. We buy properties with code issues.",
    heroHeading: "Sell a House with Code Violations in Springfield, MO",
    heroSubheading:
      "We buy homes with code violations. No fixes required—just a clear offer and a closing date.",
    icon: "FileWarning",
    faqs: [
      {
        question: "What kinds of code violations do you buy?",
        answer:
          "We buy properties with zoning violations, building code issues, fire safety citations, condemnation risk, and more. Whether it's Springfield, Greene County, or other Ozarks municipalities, we've dealt with a range of code situations.",
      },
      {
        question: "Do I need to fix the violations before selling?",
        answer:
          "No. We buy as-is. You don't need to bring the property into compliance before closing. We take on the responsibility of resolving violations after we own it.",
      },
      {
        question: "What if the city is threatening condemnation?",
        answer:
          "Time-sensitive situations need a buyer who can close quickly. We can often close in two to four weeks. Our Open-Book Certainty Offer™ includes a guaranteed closing date so you have a real timeline.",
      },
      {
        question: "Will code violations affect your offer amount?",
        answer:
          "Yes—we factor the cost of bringing the property into compliance into our offer. But we show you how we got there. The Open-Book Certainty Offer™ means no hidden deductions. You see the full breakdown.",
      },
      {
        question: "Do you buy houses with multiple violations?",
        answer:
          "Yes. Accumulated code issues—especially on vacant or inherited properties—are common. We assess the full scope and provide an offer that reflects the work required.",
      },
      {
        question: "What if I've received fines or liens for code violations?",
        answer:
          "We can often work fines and liens into the transaction. We'll need to understand the full picture to structure the offer. Reach out and we'll discuss your specific situation.",
      },
      {
        question: "Can you close before a court date or deadline?",
        answer:
          "We'll do our best. The sooner you reach out, the more flexibility we have. Our process is designed to close quickly when time matters.",
      },
      {
        question: "What areas do you serve for code violation properties?",
        answer:
          "Springfield, Greene County, Christian County, and surrounding Ozarks communities. We're familiar with local codes and enforcement in the region.",
      },
    ],
  },
  {
    slug: "vacant-property",
    title: "Sell a Vacant Property in Springfield, MO",
    shortTitle: "Vacant Property",
    description:
      "Vacant houses in Springfield and the Ozarks can drain your wallet—insurance, utilities, taxes, and worry about vandalism or decay. We buy vacant properties as-is. Get a clear offer and a closing date with our Open-Book Certainty Offer™, and stop paying to hold a property you don't want.",
    metaTitle: "Sell a Vacant Property in Springfield, MO | Stop Paying, Close Fast",
    metaDescription:
      "Sell your vacant property in Springfield, MO—as-is, fast. Get an Open-Book Certainty Offer™ and stop paying insurance, taxes, and utilities. We buy vacant homes.",
    heroHeading: "Sell a Vacant Property in Springfield, MO",
    heroSubheading:
      "Stop paying to hold a vacant house. Get a clear offer and a closing date.",
    icon: "Building2",
    faqs: [
      {
        question: "Why do buyers often avoid vacant properties?",
        answer:
          "Vacant homes can develop issues—vandalism, squatters, utility problems, deferred maintenance—that worry traditional buyers and lenders. We buy vacant properties routinely and factor these risks into our offer.",
      },
      {
        question: "Do I need to maintain the property until we close?",
        answer:
          "You're responsible until closing, but we can often close quickly—in two to four weeks. Our Open-Book Certainty Offer™ locks in a closing date so you know exactly when the burden ends.",
      },
      {
        question: "What if the vacant house has been vandalized or damaged?",
        answer:
          "We buy vacant properties in any condition. Broken windows, damage, or deterioration are factored into our offer. You don't need to repair anything before selling.",
      },
      {
        question: "Can I sell a vacant lot or land?",
        answer:
          "Our focus is on houses and residential buildings in the Springfield metro. For land-only, reach out and we can discuss—we may be able to help or refer you to someone who can.",
      },
      {
        question: "What if the property is in another city (Ozark, Nixa, Republic)?",
        answer:
          "We buy vacant properties across the Springfield metro and Ozarks region—including Ozark, Nixa, Republic, Battlefield, and surrounding areas. Same process, same Open-Book Certainty Offer™.",
      },
      {
        question: "Will you buy a vacant house with liens or back taxes?",
        answer:
          "Often, yes. We evaluate each situation. Liens and back taxes can sometimes be worked into the transaction. We'll need details to give you an accurate offer.",
      },
      {
        question: "How does the Open-Book Certainty Offer work for vacant homes?",
        answer:
          "We show you our estimated repair or holding costs and our offer—all in one breakdown. You see exactly what we're offering and when we'll close. No surprises.",
      },
      {
        question: "What if the property has been vacant for years?",
        answer:
          "Long-term vacancy often means more wear, possible pest issues, and utility concerns. We buy these properties and factor the condition into our offer. The longer it sits, the more it costs you—we can help you offload it.",
      },
    ],
  },
];
