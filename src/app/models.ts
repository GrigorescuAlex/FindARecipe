  export interface recipeData {
    recipe: Recipes
  }

  export interface Results {
    count: number;
    hits: [];
  }

  export interface Recipes {
    calories: number;
    cautions: [];
    cuisineType: [];
    dietLabels: [];
    // digest: Array<Digest>;
    dishType: [];
    healthLabels: [];
    image: string;
    ingredientLines: [];
    // ingredients: Array<Ingredients>;
    label: string;
    mealType: [];
    shareAs: string;
    source: string;
    // totalDaily: Array<TotalDaily>;
    totalNutrients: Array<TotalNutrients>;
    totalTime: number;
    totalWeight: number;
    uri: string;
    url: string;
    yield: string;
    id: number;
  }

  export interface TotalNutrients {
    ENERC_KCAL: Array<EnercKcal>;
    FAT: Array<Fat>;
    FASAT: Array<Fasat>;
    FATRN: Array<Fatrn>;
    FAMS: Array<Fams>;
    FAPU: Array<Fapu>;
    CHOCDF: Array<Chocdf>;
    FIBTG: Array<Fibtg>;
    SUGAR: Array<Sugar>;
    PROCNT: Array<Procnt>;
    CHOLE: Array<Chole>;
    NA: Array<Na>;
    CA: Array<Ca>;
    MG: Array<Mg>;
    K: Array<K>;
    FE: Array<Fe>;
    ZN: Array<Zn>;
    P: Array<P>;
    VITA_RAE: Array<VitaRae>;
    VITC: Array<Vitc>;
    THIA: Array<Thia>;
    RIBF: Array<Ribf>;
    NIA: Array<Nia>;
    VITB6A: Array<Vitb6A>;
    FOLDFE: Array<Foldfe>;
    FOLFD: Array<Folfd>;
    FOLAC: Array<Folac>;
    VITB12: Array<Vitb12>;
    VITD: Array<Vitd>;
    TOCPHA: Array<Tocpha>;
    VITK1: Array<Vitk1>;
    WATER: Array<Water>;
  }

  export interface EnercKcal {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fat {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fasat {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fatrn {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fams {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fapu {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Chocdf {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fibtg {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Sugar {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Procnt {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Chole {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Na {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Ca {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Mg {
    label: string
    quantity: number
    unit: string
  }
  
  export interface K {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Fe {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Zn {
    label: string
    quantity: number
    unit: string
  }
  
  export interface P {
    label: string
    quantity: number
    unit: string
  }
  
  export interface VitaRae {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Vitc {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Thia {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Ribf {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Nia {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Vitb6A {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Foldfe {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Folfd {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Folac {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Vitb12 {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Vitd {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Tocpha {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Vitk1 {
    label: string
    quantity: number
    unit: string
  }
  
  export interface Water {
    label: string
    quantity: number
    unit: string
  }