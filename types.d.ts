export interface Country {
  name: Name;
  tld?: (string)[] | null;
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital?: (string)[] | null;
  altSpellings?: (string)[] | null;
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng?: (number)[] | null;
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones?: (string)[] | null;
  continents?: (string)[] | null;
  flags: FlagsOrCoatOfArms;
  coatOfArms: FlagsOrCoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}
export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}
export interface NativeName {
  swe: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
}
export interface SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho {
  official: string;
  common: string;
}
export interface Currencies {
  EUR: EUR;
}
export interface EUR {
  name: string;
  symbol: string;
}
export interface Idd {
  root: string;
  suffixes?: (string)[] | null;
}
export interface Languages {
  swe: string;
}
export interface Translations {
  ara: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  ces: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  cym: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  deu: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  est: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  fin: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  fra: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  hrv: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  hun: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  ita: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  jpn: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  kor: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  nld: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  per: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  pol: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  por: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  rus: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  slk: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  spa: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  swe: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  urd: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
  zho: SweOrAraOrCesOrCymOrDeuOrEstOrFinOrFraOrHrvOrHunOrItaOrJpnOrKorOrNldOrPerOrPolOrPorOrRusOrSlkOrSpaOrUrdOrZho;
}
export interface Demonyms {
  eng: EngOrFra;
  fra: EngOrFra;
}
export interface EngOrFra {
  f: string;
  m: string;
}
export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}
export interface Car {
  signs?: (string)[] | null;
  side: string;
}
export interface FlagsOrCoatOfArms {
  png: string;
  svg: string;
}
export interface CapitalInfo {
  latlng?: (number)[] | null;
}
