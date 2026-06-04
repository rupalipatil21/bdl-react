import { useDrawer } from "@/app/context/DrawerContext";
import { MainContentUI } from "@/styles/admin.styled";

type MainContentProps = {
  children: React.ReactNode;
};

export default function MainContent({ children}: MainContentProps) {
    const { drawerWidth, isMobile } = useDrawer();
    return(
        <MainContentUI drawerwidth={drawerWidth} ismobile={String(isMobile)} >
            {children}
        </MainContentUI>
    )
}