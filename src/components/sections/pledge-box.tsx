import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const exceptions = [
  {
    title: "Previously unknown structural or environmental hazards",
    content:
      "If a professional inspection reveals a serious hidden issue—such as a cracked foundation, mold behind walls, or contaminated soil—that couldn't reasonably have been identified during our initial walkthrough, we'll discuss the findings with you transparently and adjust only if necessary.",
  },
  {
    title: "Undisclosed title issues or liens",
    content:
      "If a title search reveals liens, unpaid taxes, or legal claims on the property that weren't disclosed upfront, we may need to work together on a resolution. We'll explain exactly what we found and explore solutions.",
  },
  {
    title: "Material misrepresentation of property condition",
    content:
      "If the property's condition was significantly different from what was described—for example, major systems like HVAC or plumbing that were said to be functional but aren't—we'll address it openly.",
  },
];

export function PledgeBox() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden border-emerald-200 bg-white shadow-lg">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600" />
          <CardHeader>
            <Badge variant="default" className="w-fit bg-emerald-700 hover:bg-emerald-800">
              Our Pledge
            </Badge>
            <CardTitle className="mt-3 text-2xl sm:text-3xl">
              The No Surprise Re-Trade Pledge
            </CardTitle>
            <CardDescription className="text-base text-slate-600">
              When we make you an offer, that&apos;s the number. We don&apos;t
              come back at closing with a lower price, invented fees, or new
              conditions. The offer we agree on is the offer you get.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <h3 className="font-semibold text-slate-900">
              Clear, Honest Exceptions
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {exceptions.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="text-sm text-slate-600">
              Even in these rare cases, we explain what changed and give you the
              option to walk away with no penalty.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="link" className="p-0 h-auto font-semibold">
              <Link href="/no-surprise-pledge">Read the full pledge →</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
