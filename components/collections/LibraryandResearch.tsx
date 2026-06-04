"use client"

import { ContentWrapper, LinkUI } from "@/styles/common.styled"
import { Typography } from "@mui/material"

export default function LibraryandResearch(){
    
    return(
        <ContentWrapper>
            <Typography variant="title1" color="custom.black" >Library & Research</Typography>
            <Typography variant="subtitle3" color="custom.black">The Museum Library has a unique rare books collection, the oldest of which dates back to the 17th century. Focused on the culture, industrial arts and crafts of the time as well as the early history of Mumbai – its development, natural environment and geography, this collection is in the process of being catalogued, digitized and restored. The archive of books on 19th century Mumbai supplements the Museum’s history and collections. The Library also has an unrivalled collection of more recent publications on the city, and on modern and contemporary art subjects. Researchers and scholars are welcome to access the Museum Library on request.</Typography><br />
            
            <Typography variant="title1" color="custom.black" >Library and Research Guidelines</Typography><br />

            <Typography variant="title1" color="custom.black" >General Rules</Typography>
            <ol type="1">
                <li><Typography variant="subtitle3" color="custom.black">The Library is open from 10:30 am – 5:30 pm for reference purposes, except on Wednesdays and Sundays.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">The Library will be accessible to research scholars, students from the Museum’s MCIACS course and Friends of the Museum.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">Requests for referencing the Library should be made at least 4 weeks in advance via <LinkUI href="mailto:enquiry@bdlmuseum.org">enquiry@bdlmuseum.org</LinkUI>. We request researchers to write us a brief note about their research and how they intend to use the materials or collection accessed at the Dr. Bhau Daji Lad Museum in their proposal.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">Mobile phones should be turned off or kept on silent mode in the Library.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">Foods & drinks are not permitted in the Library.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">No baggage, cases, parcels etc., are permitted in the Library.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">All instructions and decisions by the Library staff must be accepted.</Typography></li>
            </ol>

            <Typography variant="title1" color="custom.black" mb="5px !important">Library Access Rules</Typography>
            <ol type="1">
                <li><Typography variant="subtitle3" color="custom.black">Library materials including books, newspapers, magazines or journals can neither be issued nor be taken out of the Library.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">The list of books acquired every month will be displayed on the Notice Board of the Library.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">Access to all books will be limited to those that are in good condition. Those deemed too fragile or damaged will not be accessible.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">The reference collection published prior to 1970 is part of the Museum’s permanent collection. It will be made available subject to permission of the Honorary Director.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">The Library catalogue can be accessed with the help of the Library staff.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">All books and material referred should be handed back to the Library staff.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">Kindly note, access to the library may be charged in case of commercial publications. These charges are discussed upon request.</Typography></li>
            </ol>

            <Typography variant="title1" color="custom.black" mb="5px !important">Reference and Handling Rules</Typography>
            <ol type="1">
                <li><Typography variant="subtitle3" color="custom.black">The Museum should be duly acknowledged in any research published by the researcher/ student referring the Dr. Bhau Daji Lad Museum library.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">Members are requested to handle Library books with care. Dog-earring pages, highlighting, writing on books, defacing pages or any physical damage to books will result in monetary penalties, while repeated violation will result in cancellation of membership.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">Members are requested to handle Library books with care. Dog-earring pages, highlighting, writing on books, defacing pages or any physical damage to books will result in monetary penalties, while repeated violation will result in cancellation of membership.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">To mark a page paper flags must be used. Please ask the Library staff for assistance. Post-it notes may not be used on the rare collection. No marking or writing in ink or pencil should be made on books or reference materials.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">Tablets and laptop computers are permitted.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">No CDs, pen drives or other portable data devices may be used on the Library computers.</Typography></li>
            </ol>

            <Typography variant="title1" color="custom.black" mb="5px !important">Photocopying Rules</Typography>
            <ol type="1">
                <li><Typography variant="subtitle3" color="custom.black">Photocopying is only permitted on books that can be safely photocopied or are in good condition.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">The reference collection published prior to 1970 cannot be photocopied.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">Photocopy charges for the students will be Rs. 1 per page for b/w copy and Rs. 10 per page for colored photocopy. Payment must be made in advance in cash only.</Typography></li>
                <li><Typography variant="subtitle3" color="custom.black">Cameras or mobile phones with cameras and other photo duplication devices are not permitted for use in the Library.</Typography></li>
            </ol>

            <Typography variant="subtitle3" color="custom.black">For more information on our Library access guidelines and to make an appointment, please contact <br /> <LinkUI href="mailto:enquiry@bdlmuseum.org">enquiry@bdlmuseum.org</LinkUI> / +91 22 23731234</Typography>
        </ContentWrapper>
    )
}