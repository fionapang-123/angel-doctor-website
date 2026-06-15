import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FaqItem } from "@/types/page";

/** Handle both {question, answer} and {q, a} key patterns */
function getFaq(faq: FaqItem | { q: string; a: string }) {
  const q = (faq as FaqItem).question ?? (faq as { q: string }).q ?? "";
  const a = (faq as FaqItem).answer ?? (faq as { a: string }).a ?? "";
  return { question: q, answer: a };
}

export function FAQBlock({ faqs }: { faqs: (FaqItem | { q: string; a: string })[] }) {
  if (!faqs?.length) return null;

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Common Questions
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion>
        {faqs.map((raw, i) => {
          const faq = getFaq(raw);
          return (
            <AccordionItem key={faq.question || i}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
