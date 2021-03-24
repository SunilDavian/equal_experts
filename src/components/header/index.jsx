import React from 'react';

function Headers({ handleSelectedMenu, menuList }) {

    return (
        <div style={{ height: '50px', alignItems: 'center', display: 'flex', border: '1px solid black' }}>

            <div style={{ width: '20%' }}>
                <div>
                    My Cart
                    </div>
            </div>

            <Menu handleSelectedMenu={handleSelectedMenu} menuList={menuList} />
        </div>
    )
}

function Menu({ handleSelectedMenu, menuList }) {
    const MenuComponent = menuList.map(menus => <div onClick={() => handleSelectedMenu(menus.id)}>{menus.name}</div>)

    return (
        <div style={{ width: '50%', display: 'flex', justifyContent: 'space-around' }}>
            {MenuComponent}
        </div>
    )
}

export default Headers