"use client"

import { ContentBox, HorizontalDivider, LinkUI, MemberBox, MembershipList, ToggleLink } from "@/styles/common.styled"
import { Box, ListItem, Stack, Typography } from "@mui/material"
import Image from "next/image"
import heart from "@/public/icons/friends-heart-icon.png"
import pdf from "@/public/icons/pdf-2.jpg"
import { useToggleState } from "@/hooks/useToggleState"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function FriendsofMuseum() {
    const { isExpanded, handleClickToggle } = useToggleState();
    return(
        <>
            <ContentBox>
                <Stack direction="row" alignItems="center" gap={1.5}>
                    <Typography variant="title1" color="custom.black">Friends of the Museum</Typography>
                    <Image src={heart.src} height={58} width={58} alt="" />
                </Stack>
                <Stack direction="row" alignItems="center" gap={1} mb="10px">
                    <Image src={pdf.src} height={23} width={22} alt="" />
                    <Typography>Membership Form: <LinkUI href="/Friends-of-the-museum-form_2025.pdf">Download as PDF</LinkUI></Typography>
                </Stack>
                <Typography variant="subtitle3" color="custom.black">
                    We invite you to become a part of an institution that is integral to Mumbai city by joining or gifting the Dr. Bhau Daji Lad’s Friends of the Museum programme. This programme supports the Museum’s vital activities in the fields of education, outreach, conservation, publication and research. <br /><br />
                    Friends of the Museum have the opportunity to experience the Museum in a unique and special way with exclusive member benefits that include unlimited free admission, private tours, discounts at the Museum shop, and much more. Enjoy the privileges, enhance your experience and promote the future development of the Dr. Bhau Daji Lad Museum by signing up for a membership category that is suitable for you.
                </Typography>

                <HorizontalDivider />
                <Typography variant="subtitle3" color="custom.black">Individual Membership – Silver Category</Typography>               
                <MemberBox>
                    <b>1 Year = Rs. 1,000/- </b> <b>3 Years = Rs. 2,500/-</b>
                    <ToggleLink variant="body_h4" onClick={()=>handleClickToggle("readmore")} className="readmore">
                        Read {isExpanded["readmore"] ? "Less" : "More" }
                        {isExpanded["readmore"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>
                </MemberBox>
                {
                    isExpanded["readmore"] ?
                    <Box >
                        <MembershipList>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Unlimited free admission to the Museum.</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Introductory gift</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Introductory guided tour of the Museum OR one behind the scenes tour of the Museum’s Conservation facilities and an interaction with the conservators.*</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Access to priority seating to our workshops and public lectures with prior intimation.</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Invitation to our exhibition openings and special events.</Typography></ListItem>
                        </MembershipList>
                        <Typography variant="subtitle3" color="custom.black">*for the cardholder plus three guests with prior booking.</Typography>
                    </Box>
                    : ""
                }

                <HorizontalDivider />
                <Typography variant="subtitle3" color="custom.black">Individual Membership – Gold Category</Typography>               
                <MemberBox>
                    <b>1 Year = Rs. 3,000/- </b> <b>3 Years = Rs. 8,000/-</b>
                    <ToggleLink variant="body_h4" onClick={()=>handleClickToggle("readmore2")} className="readmore">
                        Read {isExpanded["readmore2"] ? "Less" : "More" }
                        {isExpanded["readmore2"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>
                </MemberBox>
                {
                    isExpanded["readmore2"] ?
                    <Box >
                        <MembershipList>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Unlimited free admission to the Museum for the card holder. Free admission to the Museum for a plus one guest twice during each year.</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Introductory gift</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">10% discount on all charged workshops at the Museum twice a year.</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Introductory guided tour of the Museum.*</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">One behind the scenes tour of the Museum’s Conservation facilities and an interaction with the conservators.*</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Invites to exclusive events such as exhibition openings, interactions with the artist and curator, seminars, workshops, etc</Typography></ListItem>
                        </MembershipList>
                        <Typography variant="subtitle3" color="custom.black">*for the cardholder plus three guests with prior booking.</Typography>
                    </Box>
                    : ""
                }

                <HorizontalDivider />
                <Typography variant="subtitle3" color="custom.black">Family Membership – Silver Category</Typography>               
                <MemberBox>
                    <b>1 Year = Rs. 2,500/- </b> <b>3 Years = Rs. 6,500/-</b>
                    <ToggleLink variant="body_h4" onClick={()=>handleClickToggle("readmore3")} className="readmore">
                        Read {isExpanded["readmore3"] ? "Less" : "More" }
                        {isExpanded["readmore3"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>
                </MemberBox>
                {
                    isExpanded["readmore3"] ?
                    <Box >
                        <Typography variant="subtitle3" color="custom.black">Family membership can be taken for up to four members in a family. Benefits listed here are available only to the card holders within the family.</Typography>
                        <MembershipList>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Unlimited free admission to the Museum for the family members.</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Introductory guided tour of the Museum OR one free behind the scenes tour of the Museum’s Conservation facilities and an interaction with the conservators.</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">One summer workshop free for the entire family</Typography></ListItem>
                        </MembershipList>
                    </Box>
                    : ""
                }

                <HorizontalDivider />
                <Typography variant="subtitle3" color="custom.black">Family Membership – Gold Category</Typography>               
                <MemberBox>
                    <b>1 Year = Rs. 7,500/- </b> <b>3 Years = Rs. 20,000/-</b>
                    <ToggleLink variant="body_h4" onClick={()=>handleClickToggle("readmore4")} className="readmore">
                        Read {isExpanded["readmore4"] ? "Less" : "More" }
                        {isExpanded["readmore4"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>
                </MemberBox>
                {
                    isExpanded["readmore4"] ?
                    <Box >
                        <Typography variant="subtitle3" color="custom.black">Family membership can be taken for up to four members in a family. Benefits listed here are available only to the card holders within the family.</Typography>
                        <MembershipList>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Unlimited free admission to the Museum for the family members.</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Introductory guided tour of the Museum.</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">One behind the scenes tour of the Museum’s Conservation facilities and an interaction with our conservators.</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Any two workshops available for free for the family each year.</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">10% discount on charged workshops at the Museum twice a year.</Typography></ListItem>
                        </MembershipList>
                    </Box>
                    : ""
                }

                <HorizontalDivider />
                <Typography variant="subtitle3" color="custom.black">Concessionary Membership</Typography>               
                <MemberBox>
                    <b>1 Year = Rs. 500/- </b> <b>3 Years = Rs. 1,000/-</b>
                    <ToggleLink variant="body_h4" onClick={()=>handleClickToggle("readmore5")} className="readmore">
                        Read {isExpanded["readmore5"] ? "Less" : "More" }
                        {isExpanded["readmore5"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>
                </MemberBox>
                {
                    isExpanded["readmore5"] ?
                    <Box >
                        <MembershipList>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Senior citizens (for persons aged 60 and above)</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">MCGM employees (with valid ID card)</Typography></ListItem>
                            <ListItem><Typography variant="subtitle3" color="custom.black">Students between 18 years to 21 years on production of valid institutional ID card</Typography></ListItem>
                        </MembershipList>
                        <Typography variant="subtitle3" color="custom.black">Same benefits as Individual Silver category membership but at a discounted rate</Typography>
                    </Box>
                    : ""
                }

                <HorizontalDivider />
                <Typography variant="subtitle3" color="custom.black">Gift Membership</Typography>               
                <MemberBox>
                    <ToggleLink variant="body_h4" onClick={()=>handleClickToggle("readmore6")} className="readmore">
                        Read {isExpanded["readmore6"] ? "Less" : "More" }
                        {isExpanded["readmore6"] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ToggleLink>
                </MemberBox>
                {
                    isExpanded["readmore6"] ?
                    <Box >
                        <Typography variant="subtitle3" color="custom.black">All categories except the Family Membership are available for gifting.</Typography>
                    </Box>
                    : ""
                }

                <HorizontalDivider />
                <Typography variant="subtitle3" color="custom.black">Donor Membership</Typography> 
                <Typography variant="subtitle3" color="custom.black">SILVER CATEGORY: Rs. 5,00,000 – 10,00,000</Typography> 
                <Typography variant="subtitle3" color="custom.black">GOLD CATEGORY: Rs. 10,00,001 – 25,00,000</Typography> 
                <Typography variant="subtitle3" color="custom.black">PLATINUM CATEGORY: Rs. 25,00,001 +</Typography> 
                <Typography variant="subtitle3" color="custom.black">For more details about Donor Memberships, email at <LinkUI href="mailto:managingtrustee@bdlmuseum.org">managingtrustee@bdlmuseum.org</LinkUI></Typography> 

                <HorizontalDivider />
                <Typography variant="subtitle3" color="custom.black">How To Sign up For Membership</Typography> 
                <Typography variant="subtitle3" color="custom.black">In person: Visit the Museum and fill out the form in person</Typography> 
                <Typography variant="subtitle3" color="custom.black">Website: <LinkUI href="/pdf/Friends-of-the-museum-form_2025.pdf" target="_blank">Download the form</LinkUI> from our website and email a soft copy with all required documents to <LinkUI href="mailto:enquiry@bdlmuseum.org">enquiry@bdlmuseum.org</LinkUI></Typography> 
            </ContentBox>
        </>
    )
}