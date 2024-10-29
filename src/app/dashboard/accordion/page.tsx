import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Page = () => {
  const items = [
    {
      id: 'item-1',
      questio: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      id: 'item-2',
      questio: 'Is it styled?',
      answer: ' Yes. It comes with default styles that matches the other components&apos; aesthetic.',
    },
    {
      id: 'item-3',
      questio: 'Is it animated?',
      answer: 'Yes. It&apos;s animated by default, but you can disable it if you prefer.',
    },
    {
      id: 'item-4',
      questio: 'Is it animated?',
      answer: 'Yes. It&apos;s animated by default, but you can disable it if you prefer.',
    }
  ];
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {
          items.map(item => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger>{item.questio}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </div>
  );
}


export default Page
