export interface IPartialPokemon {
  id: number;
  forms: forms[];
  height: number;
  weight: number;
  sprites: Sprites;
}

export interface forms {
  name: string;
}

export interface Sprites {
  front_default:string;
}


export class PartialPokemon {
  protected constructor(
    public id = 0,
    public name = '',
    public height = 0,
    public weight = 0,
    public image = '',
  ) { }

  public static Build(item: IPartialPokemon): PartialPokemon {
    return new this(
      item.id,
      item.forms[0].name,
      item.height,
      item.weight,
      item.sprites.front_default
    )
    }


}
