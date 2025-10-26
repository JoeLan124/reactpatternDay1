import Accordion, { AccordionItem } from "./Accordion";

export default function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem title="What is Compound Component Pattern?">
        It’s a React pattern that allows parent and child
        components to work together seamlessly while giving
        developers flexible composition.
      </AccordionItem>

      <AccordionItem title="Why use it?">
        It makes UI libraries like modals, tabs, accordions,
        menus, etc. easier to build and use.
      </AccordionItem>

      <AccordionItem title="Pitfalls?">
        Overusing it can lead to deeply nested structures or
        make things harder to debug if not documented well.
      </AccordionItem>
    </Accordion>
  );
}
