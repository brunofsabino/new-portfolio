import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionCode({ jsonData }: { jsonData: any }) {
    return (
        <Accordion type="single" collapsible className="w-[280px] md:w-full p-3">
            <AccordionItem value="item-1">
                <AccordionTrigger><strong>Visualize aqui o JSON retornado pela API do Sofascore</strong></AccordionTrigger>
                <AccordionContent>
                    <pre className="bg-[#333] text-white p-4 rounded-lg overflow-x-auto w-[280px] md:w-full">
                        <code>{JSON.stringify(jsonData, null, 2)}</code>
                    </pre>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
