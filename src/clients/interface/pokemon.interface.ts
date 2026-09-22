export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability2[];
  past_abilities: Pastability[];
  forms: Ability[];
  game_indices: Gameindex[];
  held_items: Helditem[];
  location_area_encounters: string;
  moves: Move[];
  species: Ability;
  sprites: Sprites;
  cries: Cries;
  stats: Stat[];
  past_stats: Paststat[];
  types: Type[];
  past_types: any[];
}

interface Type {
  slot: number;
  type: Ability;
}

interface Paststat {
  generation: Ability;
  stats: Stat[];
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Ability;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface Sprites {
  other: Other;
  versions: Versions;
  back_shiny: string;
  back_female: null;
  front_shiny: string;
  back_default: string;
  front_female: null;
  front_default: string;
  back_shiny_female: null;
  front_shiny_female: null;
}

interface Versions {
  'generation-i': Generationi;
  'generation-v': Generationv;
  'generation-ii': Generationii;
  'generation-iv': Generationiv;
  'generation-ix': Generationix;
  'generation-vi': Generationvi;
  'generation-iii': Generationiii;
  'generation-vii': Generationvii;
  'generation-viii': Generationviii;
}

interface Generationviii {
  icons: Dreamworld;
  'brilliant-diamond-shining-pearl': Dreamworld;
}

interface Generationvii {
  icons: Dreamworld;
  'ultra-sun-ultra-moon': Home;
}

interface Generationiii {
  emerald: Officialartwork;
  'ruby-sapphire': Rubysapphire;
  'firered-leafgreen': Rubysapphire;
}

interface Rubysapphire {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
}

interface Generationvi {
  'x-y': Home;
  'omegaruby-alphasapphire': Home;
}

interface Generationix {
  'scarlet-violet': Dreamworld;
}

interface Generationiv {
  platinum: Showdown;
  'diamond-pearl': Showdown;
  'heartgold-soulsilver': Showdown;
}

interface Generationii {
  gold: Gold;
  silver: Gold;
  crystal: Crystal;
}

interface Crystal {
  animated: Officialartwork;
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
  back_shiny_transparent: string;
  front_shiny_transparent: string;
}

interface Gold {
  back_shiny: string;
  front_shiny: string;
  back_default: string;
  front_default: string;
  front_transparent: string;
}

interface Generationv {
  icons: Icons;
  'black-white': Blackwhite;
}

interface Blackwhite {
  animated: Showdown;
  back_shiny: string;
  back_female: null;
  front_shiny: string;
  back_default: string;
  front_female: null;
  front_default: string;
  back_shiny_female: null;
  front_shiny_female: null;
}

interface Icons {
  animated: Animated;
  front_default: string;
}

interface Animated {
  front_default: string;
}

interface Generationi {
  yellow: Yellow;
  'red-blue': Yellow;
}

interface Yellow {
  back_gray: string;
  front_gray: string;
  back_default: string;
  front_default: string;
  back_transparent: string;
  front_transparent: string;
}

interface Other {
  home: Home;
  showdown: Showdown;
  dream_world: Dreamworld;
  'official-artwork': Officialartwork;
}

interface Officialartwork {
  front_shiny: string;
  front_default: string;
}

interface Dreamworld {
  front_female: null;
  front_default: string;
}

interface Showdown {
  back_shiny: string;
  back_female: null;
  front_shiny: string;
  back_default: string;
  front_female: null;
  front_default: string;
  back_shiny_female: null;
  front_shiny_female: null;
}

interface Home {
  front_shiny: string;
  front_female: null;
  front_default: string;
  front_shiny_female: null;
}

interface Move {
  move: Ability;
  version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
  level_learned_at: number;
  version_group: Ability;
  move_learn_method: Ability;
  order: null;
}

interface Helditem {
  item: Ability;
  version_details: Versiondetail[];
}

interface Versiondetail {
  rarity: number;
  version: Ability;
}

interface Gameindex {
  game_index: number;
  version: Ability;
}

interface Pastability {
  generation: Ability;
  abilities: Ability3[];
}

interface Ability3 {
  is_hidden: boolean;
  slot: number;
  ability: null;
}

interface Ability2 {
  is_hidden: boolean;
  slot: number;
  ability: Ability;
}

interface Ability {
  name: string;
  url: string;
}