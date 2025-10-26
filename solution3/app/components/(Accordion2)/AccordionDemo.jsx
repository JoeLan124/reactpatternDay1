import Accordion, { AccordionItem } from "./Accordion";

export default function AccordionDemo() {

  const AccordionItemArray = [
    { "title": "titel1", "ItemText": "text1", "className":"bg-green-200" },
    { "title": "title2", "ItemText": "text2", "className":"bg-yellow-500" },
    { "title": "title3", "ItemText": "text3", "className":"bg-blue-500" }
]

  return (
    <Accordion className="flex flex-col bg-white text-black gap-2">
      {AccordionItemArray.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          className={item.className}>
          {item.ItemText}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
