import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LeftMenuAdmin, ListUi, SubMenuLink } from '@/styles/admin.styled';
import { Box, ClickAwayListener, Collapse, Tooltip } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { mainListItems } from '@/lib/adminSideMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { theme } from '@/styles/theme';
import { useDrawer } from '@/app/context/DrawerContext';
import { StyledPopover } from '@/styles/common.styled';

type MenuItem = {
  id?: number
  link?: string;
  submenu?: {
    link: string;
  }[];
};

export default function MenuContent() {
  const [open, setOpen] = useState<number | null>(null);
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null)
  const pathname = usePathname()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (index: number) => {
    setOpen(prev => (prev === index ? null : index));
    setSelectedMenu(index)
  };

  const isParentActive = (item: MenuItem) => {
    if (item.link && pathname === item.link) return true

    return item.submenu?.some(
      (sub: MenuItem) => pathname === sub.link
    )
  }

  const isSubmenuActive = (link: string) => pathname === link

  useEffect(() => {
    mainListItems.forEach((item, index) => {
      if (item.submenu?.some((sub: MenuItem) => pathname === sub.link)) {
        setOpen(index)
      }
    })
  }, [pathname])

  const {isDrawerOpen, drawerWidth } = useDrawer();

  const isCollapsed = drawerWidth === 72;

  const handleOpen = (event: React.MouseEvent<HTMLElement>, menu: MenuItem) => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    if (isCollapsed) {
      setAnchorEl(event.currentTarget);
      if (menu.id !== undefined) {
        setSelectedMenu(menu.id);
      }
    }
  };

  const handleClose = () => {
    timeoutId.current = setTimeout(() => {
      setAnchorEl(null);
      setSelectedMenu(null);
    }, 10)
  }
  const openMenu = Boolean(anchorEl);

  const handleMenuEnter = () => {
      if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      }
  };

  return (
    <LeftMenuAdmin >
      <Box>
        <ListUi dense>
          {mainListItems.map((item, index) => {            
            const parentActive = isParentActive(item)
            return (
              <Tooltip title={isDrawerOpen ? item.text : ""} placement="right" key={item.text} arrow>
                <ListItem key={index} disablePadding >
                  <ListItemButton 
                    selected={parentActive} 
                    onMouseEnter={(e) => handleOpen(e, item)}
                    onMouseLeave={handleClose}
                    onClick={() => handleClick(index)} 
                    disableRipple
                    aria-haspopup="true"
                  >
                    <ListItemIcon><item.icon /></ListItemIcon>
                    { !isDrawerOpen ? 
                         item.link ? (
                        <ListItemText>
                          <Link href={item?.link} >{item.text}</Link>
                        </ListItemText>
                      ): (
                        <ListItemText primary={item.text} />
                      )
                      : ""
                    }
                    
                    { !isDrawerOpen ? 
                        item.submenu.length > 0 &&  (
                        open === index ? <ExpandLess /> : <ExpandMore />
                      ) : ""}
                  </ListItemButton>
                  
                  { item.submenu.length > 0 &&
                      <StyledPopover
                        id="mouse-over-admin"
                        open={openMenu && selectedMenu === item.id}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'left',
                        }}
                        onClose={handleClose}
                        onMouseEnter={handleMenuEnter}
                        onMouseLeave={handleClose}
                        disableRestoreFocus
                        transitionDuration={0}
                        disableScrollLock
                      >
                        <ClickAwayListener onClickAway={handleClose}>
                            <List dense>
                              {item.submenu.map((child) => (
                                <SubMenuLink key={child.name} href={child.link} drawerwidth={drawerWidth}>{child.name}</SubMenuLink>
                              ))}
                            </List>
                        </ClickAwayListener>
                      </StyledPopover>
                  }
                  { !isCollapsed && 
                    <Collapse in={open === index}  timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.submenu?.map((subItem, index) => 
                        !(subItem.visible === false) && ( 
                           <SubMenuLink 
                              key={index} 
                              href={subItem.link}
                              color={ isSubmenuActive(subItem.link) ? theme.palette.custom?.green : "inherit"}
                              fontWeight={isSubmenuActive(subItem.link) ? 600 : 400}
                            >{subItem.name}</SubMenuLink>
                          )
                        )}
                      </List>
                    </Collapse>
                  }
                </ListItem>
              </Tooltip>
            )
          })}
        </ListUi>
      </Box>
    </LeftMenuAdmin>
  );
}