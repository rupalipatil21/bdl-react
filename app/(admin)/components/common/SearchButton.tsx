"use client"

import { Search, SearchIconWrapper, StyledInputBase } from "@/styles/admin.styled"
import { SearchProps } from "@/types/form";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchButton({ onChange }: SearchProps) {
    return(
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => onChange(e.target.value)}
            />
        </Search>
    )
}