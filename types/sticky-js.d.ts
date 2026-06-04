// src/types/sticky-js.d.ts
declare module 'sticky-js' {
  interface StickyOptions {
    marginTop?: number;
    stickyFor?: number;
    stickyClass?: string;
    wrapperClass?: string;
    observe?: boolean;
  }

  export default class Sticky {
    constructor(elements?: string | HTMLElement | NodeList | HTMLElement[], options?: StickyOptions);
    update(): void;
    destroy(): void;
  }
}
