import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ProductAccordion({ product }: { product: any }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full text-pink-600"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="font-bold">
          Descrição do produto
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-gray-600">
          <p>{product?.description}</p>
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-2">
        <AccordionTrigger className="font-bold">
          Shipping Details
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-gray-600">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days. All orders are carefully
            packaged and fully insured. Track your shipment in real-time through
            our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem> */}
      <AccordionItem value="item-3">
        <AccordionTrigger className="font-bold">
          Política de devolução
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance text-gray-600">
          <p>
            Trocas e devoluções são aceitas apenas para produtos não utilizados
            em caso de defeitos, danos durante o transporte, itens faltantes ou
            produtos enviados de forma incorreta. As solicitações devem ser
            feitas na seção 'Trocar ou Devolver' em até 5 dias após a entrega.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
