export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Our Offer",
    href: "/our-offer",
    children: [
      {
        label: "Open-Book Certainty Offer™",
        href: "/open-book-certainty-offer",
      },
      {
        label: "No Surprise Pledge",
        href: "/no-surprise-pledge",
      },
    ],
  },
  {
    label: "Situations",
    href: "/situations",
  },
  {
    label: "Areas We Serve",
    href: "/areas",
  },
  {
    label: "Case Studies",
    href: "/case-studies",
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  {
    label: "Resources",
    href: "/resources",
  },
];

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export const footerNavigation: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Open-Book Certainty Offer™", href: "/open-book-certainty-offer" },
      { label: "No Surprise Pledge", href: "/no-surprise-pledge" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Situations",
    links: [
      { label: "Inherited House", href: "/situations/inherited-house" },
      { label: "House Needs Repairs", href: "/situations/house-needs-repairs" },
      { label: "Rental with Tenants", href: "/situations/tenants" },
      { label: "Foreclosure", href: "/situations/foreclosure-options" },
      { label: "Divorce", href: "/situations/divorce" },
      { label: "Hoarder House", href: "/situations/hoarder-house" },
      { label: "Code Violations", href: "/situations/code-violations" },
      { label: "Vacant Property", href: "/situations/vacant-property" },
    ],
  },
  {
    title: "Areas We Serve",
    links: [
      { label: "Springfield, MO", href: "/areas/springfield" },
      { label: "Ozark, MO", href: "/areas/ozark" },
      { label: "Nixa, MO", href: "/areas/nixa" },
      { label: "Republic, MO", href: "/areas/republic" },
      { label: "Battlefield, MO", href: "/areas/battlefield" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Guides", href: "/resources" },
      { label: "Sell Your House Fast", href: "/sell-your-house-fast" },
      { label: "Get an Offer", href: "/get-offer" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
