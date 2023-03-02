import { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SideBarPropsInterface } from '../../interfaces';

export const SidebarComponent = (props: SideBarPropsInterface) => {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const SIDEBAR_WIDTH = '270px';
  
    const itemClickHandler = (item: string) => {
      setSelectedItem(item);
      props.onItemClick(item);
    };
  
    useEffect(() => {
      if (props.items.length > 0) {
        setSelectedItem(props.items[0]);
      }
    }, [props.items]);
  
    return (
      <Sidebar className='sidebar' width={SIDEBAR_WIDTH}>
        <Menu>
          <SubMenu label="Potpore" defaultOpen={true}>
            {props.items.map((item, index) => {
              return (
                <MenuItem
                  key={index}
                  className={selectedItem === item ? 'active' : ''}
                  onClick={() => itemClickHandler(item)} >
                  {item[0].toUpperCase() + item.slice(1, item.length)}
                </MenuItem>
              );
            })}
          </SubMenu>
        </Menu>
      </Sidebar>
    );
};
  
export default SidebarComponent;