import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  className?: string;
}

export function FaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  className,
}: FaqAccordionProps) {
  return (
    <Section className={className}>
      {title && <SectionHeading title={title} />}
      <div className={cn("max-w-3xl", title && "mt-10")}>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="!border-navy-100"
            >
              <AccordionTrigger className="text-left font-medium text-navy-950">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-navy-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
