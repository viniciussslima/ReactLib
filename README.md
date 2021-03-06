# viniciussslima-ui

ReactJs lib by viniciussslima

## Docs
https://viniciussslima-ui.vercel.app/

## Components

- Drawer

```JSX
import React, { useState } from "react";
import { Drawer } from "viniciussslima"

const DrawerExample = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div>
            <button onClick={() => setOpenDrawer(true)}>Open drawer</button>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </Drawer>
        </div>
    )
}
```

- Modal

```JSX
import React, { useState } from "react";
import { Modal } from "viniciussslima"

const ModalExample = () => {
    const [openModal, setOPenModal] = useState(false);

    return (
        <div>
            <button onClick={() => setOPenModal(true)}>Open modal</button>
            <Modal
                open={openModal}
                onClose={() => setOPenModal(false)}
                title="Modal example"
                setResponse={(value) => {
                    value ? console.log("ok") : console.log("cancel");
                }}
            >
                <div>
                    <span>Hello word!</span>
                </div>
            </Modal>
        </div>
    )
}
```

- Loading

```JSX
import React, { useState, useEffect } from "react";
import { Loading } from "viniciussslima"

const LoadingExample = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let timeout;
        if (isLoading) {
            timeout = setTimeout(() => setIsLoading(false), 3000);
        }

        return () => clearTimeout(timeout);
    }, [isLoading]);

    return (
        <div>
            <button onClick={() => setIsLoading(true)}>Open loading</button>
            <Loading isLoading={isLoading} />
        </div>
    )
}
```

- Switch

```JSX
import React, { useState } from "react";
import { Switch } from "viniciussslima"

const SwitchExample = () => {
    const [isCheck, setIsCheck] = useState(false);

    return (
        <Switch check={check} onChange={(value) => setIsCheck(value)} />
    )
}
```

- Toast

```JSX
import React, { useState } from "react";
import { Toast } from "viniciussslima"

const ToastExample = () => {
    const [showToast, setShowToast] = useState(false);

    return (
        <div>
            <button onClick={() => setShowToast(true)}>Show toast</button>
            <Toast
                show={showToast}
                onHide={() => setShowToast(false)}
                text="Something is wrong!"
                type="error"
            />
        </div>
    )
}
```

- Menu

```JSX
import React, { useRef, useState } from "react";
import { Menu, MenuItem } from "viniciussslima"

const MenuExample = () => {
    const menuButton = useRef<HTMLElement>(null);

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div>
            <button
                ref={menuButton as RefObject<HTMLButtonElement>}
                onClick={() => setShowMenu(true)}
            >
                Show menu
            </button>
            <Menu
                show={showMenu}
                onHide={() => setShowMenu(false)}
                anchor={menuButton.current}
            >
                <MenuItem onClick={() => console.log("Item 1 selected")}>
                    Item 1
                </MenuItem>
                <MenuItem onClick={() => console.log("Item 2 selected")}>
                    Item 2
                </MenuItem>
                <MenuItem onClick={() => console.log("Item 2 selected")}>
                    Item 3
                </MenuItem>
            </Menu>
        </div>
    )
}
```

- Carrossel

```JSX
import React from "react";
import { Carrossel, CarrosselItem } from "viniciussslima"

const CarrosselExample = () => {
    return (
        <Carrossel itemWidth={500} height={100} space={10} qty={2} timeout={3000}>
            <CarrosselItem
                style={{
                backgroundColor: "aqua",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                1
            </CarrosselItem>
            <CarrosselItem
                style={{
                backgroundColor: "aqua",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                2
            </CarrosselItem>
            <CarrosselItem
                style={{
                backgroundColor: "aqua",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                3
        </Carrossel>
    )
}
```

- List

```JSX
import React from "react";
import { List, ListItem } from "viniciussslima"

const ListExample = () => {
    return (
        <List>
          <ListItem onClick={() => console.log("item 1")}>Item 1</ListItem>
          <List collapsible title="Item 2">
            <ListItem onClick={() => console.log("item 2.1")}>
              Item 2.1
            </ListItem>
          </List>
          <List title="Item 3">
            <ListItem onClick={() => console.log("item 3.1")}>
              Item 3.1
            </ListItem>
          </List>
          <List collapsible initOpen title="Item 4">
            <ListItem onClick={() => console.log("item 4.1")}>
              Item 4.1
            </ListItem>
            <List title="Item 4.2">
              <ListItem onClick={() => console.log("item 4.2.1")}>
                Item 4.2.1
              </ListItem>
            </List>
          </List>
        </List>
    )
}
```

- Navbar

```JSX
import React, { useState } from "react";
import { Navbar, Drawer } from "viniciussslima"

const NavbarExample = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div>
            <Navbar>
                <button onClick={() => setOpenDrawer(true)}>Open drawer</button>
            </Navbar>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </Drawer>
        </div>
    )
}
```

- Paginator

```JSX
import React, { useState } from "react";
import { Paginator } from "viniciussslima"

const PaginatorExample = () => {
    const [paginatorItems, setPaginatorItems] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    const [currentPage, setCurrentPage] = useState(1);

    const changePage = (page: number) => {
        setPaginatorItems((paginatorItems) =>
            paginatorItems.map((_, index) => {
                return index + 1 + (page - 1) * 10;
            })
        );
        setCurrentPage(page);
    };

    return (
        <div>
            <ul
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "50px 0px",
                }}
            >
                {paginatorItems.map((item, i) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <Paginator
                pages={5}
                changePage={changePage}
                currentPage={currentPage}
            />
        </div>
    )
}
```
