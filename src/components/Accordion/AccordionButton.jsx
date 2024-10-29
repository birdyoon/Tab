const AccordionButton = (props) => {
    const {title, index, onClickAccordionButton } = props;  // 자신의 index를 state로 넘겨준다
    const handleClickButton = () => {
        //
        onClickAccordionButton(index);
    }

    return (
        <div>
            <h3>{title}</h3>
            <button onClick={handleClickButton}>expand</button>
        </div> 
    )
}

export default AccordionButton;