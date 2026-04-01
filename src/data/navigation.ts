export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Our Offer",
    href: "/open-book-certainty-offer",
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
    label: "Service Areas",
    href: "/service-areas",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Contact",
    href: "/contact",
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
      { label: "About Us", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Open-Book Certainty Offer™", href: "/open-book-certainty-offer" },
      { label: "No Surprise Pledge", href: "/no-surprise-pledge" },
      { label: "FAQ", href: "/faq" },
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
    title: "Service Areas",
    links: [
      { label: "Springfield, MO", href: "/areas/springfield-mo" },
      { label: "Ozark, MO", href: "/areas/ozark-mo" },
      { label: "Nixa, MO", href: "/areas/nixa-mo" },
      { label: "Republic, MO", href: "/areas/republic-mo" },
      { label: "Battlefield, MO", href: "/areas/battlefield-mo" },
      { label: "All Service Areas", href: "/service-areas" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Guides", href: "/resources" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Reviews", href: "/reviews" },
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
