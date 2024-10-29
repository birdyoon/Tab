import { useState } from "react";
import AccordionButton from "./AccordionButton";
import AccordionContent from "./AccordionContent";

const Accordion = () => {
    // 처음 []
    // 누른 index -> [index]
    // 다시 누르면 index 제거 -> [1, 2]
    const [activeIndexList, setActiveIndexList] = useState([]);

    const onClickAccordionButton = (index) => {
        console.log(index);
        // 기존 배열에 index가 있는 경우
        if(activeIndexList.includes(index)){
            setActiveIndexList( (prev) => 
                prev.filter((prevIndex) => prevIndex !== index) );
        }
        
        // ~~ 없는 경우
        else{
            setActiveIndexList((prev) => [...prev, index]);
        }
    }
    return(
        <>
            <AccordionButton
                title={'ACC-1'}
                index={0}
                onClickAccordionButton={onClickAccordionButton}
            />
            <AccordionContent isActive={activeIndexList.includes(0)}>
                <div>
                    <h3>Accordion-Content-1</h3>
                </div>
            </AccordionContent>

            <AccordionButton
                title={'ACC-2'}
                index={1}
                onClickAccordionButton={onClickAccordionButton}
            />
            <AccordionContent isActive={activeIndexList.includes(1)}>
                <div>
                    <h3>Accordion-Content-2</h3>
                </div>
            </AccordionContent>

            <AccordionButton
                title={'ACC-3'}
                index={2}
                onClickAccordionButton={onClickAccordionButton}
            />
            <AccordionContent isActive={activeIndexList.includes(2)}>
                <div>
                    <h3>Accordion-Content-3</h3>
                </div>
            </AccordionContent>
        </>
    )
}

export default Accordion;