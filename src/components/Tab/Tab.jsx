import { useState } from "react";
import TabMenu from "./TabMenu";
import TabContent from "./TabContent";

// const _data = [
//     {title: 'TabMenu1', content: ''},
//     {title: 'TabMenu2', content: ''},
//     {title: 'TabMenu3', content: ''},
//     {title: 'TabMenu4', content: ''},
// ]

const Tab = (props) => {
    const {data} = props;
    const [activeIndex, setActiveIndex] = useState(0); // 현재 활성화 된 TabMenu indx

    const onClickTabMenu = (tabIndex) => {
        setActiveIndex(tabIndex);
        console.log(tabIndex);


    }
    
    return(
        <div>
            {
                data?.map((value, index) =>
                    <TabMenu 
                        key={`tab-menu-index-${index}`}
                        title={value.title}
                        index={index}
                        onClickTabMenu={onClickTabMenu}
                    />             
            )}

            { 
                data?.map((value, index) => (
                    <TabContent 
                        key={`tab-content-index-${index}`}
                        isActive={index === activeIndex}
                    >
                        {value.content}
                    </TabContent>
                    
                ))
            }



            {/* <TabMenu index={0} onClickTabMenu={onClickTabMenu} title={'Tab0'} />
            <TabMenu index={1} onClickTabMenu={onClickTabMenu} title={'Tab1'} />
            <TabMenu index={2} onClickTabMenu={onClickTabMenu} title={'Tab2'} />
            <TabMenu index={3} onClickTabMenu={onClickTabMenu} title={'Tab3'} />

            <TabContent isActive={0 === activeIndex ? true : false} ><h2>Content-0</h2></TabContent>
            <TabContent isActive={1 === activeIndex ? true : false} ><h2>Content-1</h2></TabContent>
            <TabContent isActive={2 === activeIndex ? true : false} ><h2>Content-2</h2></TabContent>
            <TabContent isActive={3 === activeIndex ? true : false} ><h2>Content-3</h2></TabContent> */}
        </div>
    )
}

export default Tab;