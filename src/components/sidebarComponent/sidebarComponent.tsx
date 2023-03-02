import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


export const SidebarComponent = () => {

    return (
        <Sidebar className='sidebar'>
            <Menu>
                <SubMenu label="Potpore" style={{fontWeight: 'bold'}}>
                    <MenuItem> Lorem ipsum dolor </MenuItem>
                    <MenuItem> Lorem ipsum dolor </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    );
}

export default SidebarComponent;