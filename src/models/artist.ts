import { ExternalUrls } from "./commontype";

export interface Artist {
    external_urls?:ExternalUrls
    href?:string;
    id?  :string;
    name?:string;
    type?:string;
    uri? :string;
}