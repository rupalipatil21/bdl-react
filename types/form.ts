import { StaticImageData } from "next/image";
import { Settings } from "react-slick";

export type FieldValue =
  | string
  | string[]
  | File
  | boolean
  | null
  | undefined;

  
export type FileField = "image" | "bannerimg" | "pdf"

export interface ChipData {
    key: number;
    label: string;
    link: string;
}

export type FormValues = {
    _id: string;
    id: string;
    title: string;
    subtitles: [];
    image: string;
    bannerImage: string;
    bannerimg: string;
    date: string;
    currentExh: boolean;
    upcominglink: string;
    registerlink: string;
    descriptionHTML: string;
    category: string;
    program?: string;
    pageName?: string;
    status?: boolean;
    pdf: string;
}

export type ExhibitionItem = {
    _id: string;
    id: string;
    title: string;
    date: string;
    currentExh: "true" | "false" | null;
    image: string;
    subtitles: string[];
    descriptionHTML: string;
    descriptionJSON: string;
    descriptionText: string;
    registerlink: string;
    upcominglink: string;
    uploadpath?: string;
    uploadPdfpath?: string;
    createdAt: string;
    updatedAt?: string;
};

export type CalendarFormValues = {
    _id: string;
    id: string;
    title: string;
    subtitles: [];
    image: string;
    bannerImage: string;
    date: string;
    currentExh: boolean;
    upcominglink: string;
    registerlink: string;
    descriptionHTML: string;
    category: string;
}

export type UpcomingItem = {
    _id: string;
    createdAt: string;
    currentExh: string;
    date: string;
    descriptionHTML: string;
    descriptionJSON: string;
    descriptionText: string;
    program: string;
    registerlink: string;
    subtitles: string[];
    title: string;
};

export type FormErrors = Partial<Record<keyof FormValues, string | string[]>>;

export type FormErrorsProp = {
  title?: string;
  image?: string | string[]; 
  subtitles?: string[];
  upcominglink?: string;
  registerlink?: string;
  date?: string;
  category?: string;
  status?: string;
};

export type ErrorType = {
    subtitles?: (string | undefined)[];
};

export interface BaseFormData {
    _id?: string;
    title: string;
    subtitles: [];
    image: string;
    bannerImage: string;
    date: string;
    currentExh: boolean;
    upcominglink: string;
    registerlink: string;
    descriptionHTML: string;
    category: string;
    program?: string;
}

export interface FormProps<T extends BaseFormData> {
    initialData?: T | null;
    form?: string;
}

export type FormDataType = Record<string, FieldValue>;

export type ValidationRule = 
| {type: "required", message?: string}
| {type: "file", allowedTypes?: string[], maxSize?: number, message?: string }

export type ValidateSchema = {
    [field: string]: ValidationRule[]
}

export type BannerFormValues = {
    _id: string;
    id: string;
    pagename: string;
    pagelink: string;
    image: string;
}

export type ClauseType = {
    status: string
}

export type SpotifyPlayerProps = {
  embedlink?: string;
};

export type CloseReason = "backdropClick" | "escapeKeyDown" ;

export type BannerRow = {
  _id: string;
  id: string;
  [key: string]: unknown; // allow dynamic fields safely
};

export type ProgramItem = {
    program: string;
};

export type Index = {
    index: number
}

export type ItemTemplate = {
    itemImageSrc?: string;
    thumbnailImageSrc?: string;
    alt?: string;
    title?: string;
}

export type GalleryProp = {
    galleryimages: {
        getImages: () => Promise<ItemTemplate[]>;
    };
}

export type ColumnItem  = {
    name: string;
    img: StaticImageData;
    url: string;
};

export type SubMenu = {
    firstColumn?: ColumnItem[] | null;
    secondColumn?: ColumnItem[] | null;
};

export type MenuItem = {
    id: number | null;
    name: string;
    url: string;
    hasSubMenu: boolean;
    defaultImg: StaticImageData;
    subMenu: SubMenu;
};

export type ConfirmationDialogProps = {
    open: boolean;
    dialogMessage: string;
    dialogTitle: string;
    onConfirm: () => void;
    onClose: () => void;
};

export type HeaderProps = {
    headerRef: React.RefObject<HTMLElement>;
};

export type FilterItem = { 
    currentExh: string | null;
    _id: number; 
    category?: string;
}

type ObjectPositionType =
    | "top center"
    | "center right"
    | "center"
    | "top"
    | "bottom";

export type CarouselImage = {
    src: string;
    collection1?: string;
    learn1?: string;
    caption?: string;
    caption1?: string;
    caption2?: string;
    objectPosition?: ObjectPositionType;
    alt?: string
};

export type CarouselProps = {
    settings: Settings;
    images: CarouselImage[];
    homeslider?: boolean;
};


export type Bannerimage = {
    bannerImg: StaticImageData;
    alt: string
    mt?: number
}

export type CollectionPopupProps = {
    date: string;
    details: string;
    img: string;
    name: string;
    popupimg: string;
}

export type GalleryPopoverProps = {
    onChange: (data: ChipData[]) => void;
};

export type SubMenuItem = {
    link: string;
    name: string;
}

export type LeftSubMemu = {
    id: number;
    submenu: SubMenuItem[];
    text: string;
    link?: string;
}

export type SearchProps = {
    onChange: (value: string) => void;
}

export type SelectEditInputCellProps<T> = {
  id: string | number;
  value: string;
  field: string;
  setRows: React.Dispatch<React.SetStateAction<T[]>>;
  refresh?: (force?: boolean) => void;
};

export type LoginErrorProps = {
    email?: string;
    password?: string;
}

export type GalleryLink = {
  key: string;
  label: string;
  link: string;
};

export type AccordianDetailsProps = {
  category: string;
};