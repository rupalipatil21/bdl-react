"use client"
import { StyledGridContainer } from "@/styles/common.styled";
import { Grid, Box } from "@mui/material";
import StickyLeftSidebar from "../about/StickyLeftSidebar";
import { useHeaderHeight } from "@/app/context/HeaderContext";
import { useSticky } from "@/lib/useSticky";
import AboutContent from "../about/AboutContent";
import { usePathname } from "next/navigation";
import MissionStatement from "../about/MissionStatement";
import MuseumStory from "../about/MuseumStory";
import MuseumTrust from "../about/MuseumTrust";
import DirectorsNote from "../about/DirectorsNote";
import Restoration from "../about/Restoration";
import MuseumExpansion from "../about/MuseumExpansion";
import Newsletter from "../about/Newsletter";
import FilmProgrammes from "../explore/FilmProgrammes";
import Performances from "../explore/Performances";
import PublicLectures from "../explore/PublicLectures";
import MuseumKatta from "../explore/MuseumKatta";
import CraftsMela from "../explore/CraftsMela";
import MuseumPlaza from "../explore/MuseumPlaza";
import ConLab from "../explore/ConLab";
import GoogleArt from "../explore/GoogleArt";
import PGDiploma from "../course/PGDiploma";
import LecturebyRichardPena from "../course/LecturebyRichardPena";
import LecturebyJethuMundul from "../course/LecturebyJethuMundul";
import BombayHistory from "../collections/BombayHistory";
import TradeCulturalExchange from "../collections/TradeCulturalExchange";
import EarlyModernPeriod from "../collections/EarlyModernPeriod";
import ModernContemporary from "../collections/ModernContemporary";
import Galleries from "../collections/Galleries";
import LibraryandResearch from "../collections/LibraryandResearch";
import SchoolNGOs from "../learn/SchoolNGOs";
import CollegesYoungAdults from "../learn/CollegesYoungAdults";
import AdultLearners from "../learn/AdultLearners";
import Families from "../learn/Families";
import FriendsofMuseum from "../FriendsofMuseum";

export default function CommonContent(){
    const headerHeight = useHeaderHeight()
    const pathname = usePathname()
    const { ref, spacerRef } = useSticky({
        offsetTop: headerHeight.headerHeight,
        bottoming: true,
        spacer: true,
    });
    return(
        <StyledGridContainer container >
            <Grid size={{xs: 12, md: 3}} offset={{xs:0, md:1}} alignItems="start" position="relative">
                <Box ref={spacerRef}></Box>
                <Box
                    ref={ref}
                    className="sidebar"
                >
                    <StickyLeftSidebar />
                </Box>
            </Grid>
            <Grid size={{xs: 12, md: 7}}>
                {
                    pathname === "/about" ? 
                    <AboutContent />
                    : pathname === "/visit" ? 
                    <AboutContent />
                    : pathname === "/about/mission-statement"
                    ? <MissionStatement />
                    : pathname === "/about/museum-story"
                    ? <MuseumStory />
                    : pathname === "/about/museum-trust"
                    ? <MuseumTrust />
                    : pathname === "/about/directors-note"
                    ? <DirectorsNote />
                    : pathname === "/about/restoration"
                    ? <Restoration />
                    : pathname === "/about/museum-expansion"
                    ? <MuseumExpansion />
                    : pathname === "/about/newsletter"
                    ? <Newsletter />
                    : pathname === "/explore/film-programmes"
                    ? <FilmProgrammes />
                    : pathname === "/explore/performances"
                    ? <Performances />
                    : pathname === "/explore/public-lectures"
                    ? <PublicLectures />
                    : pathname === "/explore/museum-katta"
                    ? <MuseumKatta />
                    : pathname === "/explore/crafts-mela"
                    ? <CraftsMela />
                    : pathname === "/explore/museum-plaza-and-garden"
                    ? <MuseumPlaza />
                    : pathname === "/explore/conlab"
                    ? <ConLab />
                    : pathname === "/explore/google-arts-project"
                    ? <GoogleArt />
                    : pathname === "/course"
                    ? <PGDiploma />
                    : pathname === "/course/film-lecture-by-richard-pena"
                    ? <LecturebyRichardPena />
                    : pathname === "/course/film-lecture-by-jethu-mundul"
                    ? <LecturebyJethuMundul />
                    : pathname === "/collections/bombay-history"
                    ? <BombayHistory />
                    : pathname === "/collections/trade-n-cultural-exchange"
                    ? <TradeCulturalExchange />
                    : pathname === "/collections/early-modern-period"
                    ? <EarlyModernPeriod />
                    : pathname === "/collections/modern-contemporary"
                    ? <ModernContemporary />
                    : pathname === "/collections/galleries"
                    ? <Galleries />
                    : pathname === "/collections/library-n-research"
                    ? <LibraryandResearch />
                    : pathname === "/learn/school-and-ngos"
                    ? <SchoolNGOs />
                    : pathname === "/learn/colleges-and-young-adults"
                    ? <CollegesYoungAdults />
                    : pathname === "/learn/adult-learning"
                    ? <AdultLearners />
                    : pathname === "/learn/families"
                    ? <Families />
                    : pathname === "/learn/school-and-ngos"
                    ? <SchoolNGOs />
                    : pathname === "/friends-of-museum"
                    ? <FriendsofMuseum />
                    : undefined
                }
            </Grid>
        </StyledGridContainer>
    )
}