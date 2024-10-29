
const TabMenu = (props) => {
    const {title = "TabMenu1", index, onClickTabMenu} = props; // 기본값: TabMenu1
    
    const handleClickTabMenu = () => {
        // 현재 TabMenu를 클릭해서, 해당 TabMenu가 활성화 상태인지 아닌지 표시
        onClickTabMenu(index);

    }

    return(
        <>
            <button onClick={handleClickTabMenu}>{title}</button>
        </>
    )
}

export default TabMenu;


//////////////////////

// const HomePage = () => {
//     return (
//         <>
//             <TabMenu title={''} />
//         </>
//     )
// }