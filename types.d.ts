export interface Country {
  capital: string[];
  currencies: Object;
  flags: {
    png: string;
    svg: string;
  }
  languages: Object;
  name: {
    common: string;
    nativeName: {
      swe: {
        common: string;
        official: string;
      };
    };  
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
}