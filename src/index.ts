export type StringBuildable = string | number | boolean;

export class StringBuilder{
  private _items: StringBuildable[];

  constructor(input: StringBuildable = null){
    this._items = [];

    this.append(input);
  }

  append(input: StringBuildable): StringBuilder{
    if(this.isValidInput(input)){
      this._items.push(input);
    }

    return this;
  }

  appendLine(input:StringBuildable): StringBuilder{
    this._items.push(StringBuilder.Line);
    return this.append(input);
  }

  appendWhen(condition: () => boolean, input: StringBuildable): StringBuilder{
    if(this.isValidCondition(condition)){
      return this.append(input);
    }

    return this;
  }

  appendLineWhen(condition: () => boolean, input: StringBuildable): StringBuilder{
    if(this.isValidCondition(condition)){
      return this.appendLine(input);
    }

    return this;
  }

  appendSequence(sequence: StringBuildable[]): StringBuilder{
    if(this.isValidSequence(sequence)){
      for(let element of sequence){
        this.append(element);
      }
    }

    return this;
  }

  appendSequenceLines(sequence: StringBuildable[]): StringBuilder{
    if(this.isValidSequence(sequence)){
      for(let element of sequence){
        this.appendLine(element);
      }
    }

    return this;
  }

  appendSequenceWhen(condition: () => boolean, sequence: StringBuildable[]): StringBuilder{
    if(this.isValidCondition(condition)){
      return this.appendSequence(sequence);
    }

    return this;
  }

  appendSequenceLinesWhen(condition: () => boolean, sequence: StringBuildable[]): StringBuilder{
    if(this.isValidCondition(condition)){
      return this.appendSequenceLines(sequence);
    }

    return this;
  }

  clear(): void{
    this._items = [];
  }

  toString(): string{
    return this._items.length === 0
      ? ""
      : this._items.join("");
  }

  static get Line(): string{
    return process.platform === "win32"
      ? "\r\n"
      : "\n";
  }

  private isValidInput(input: StringBuildable): boolean{
    return input != null;
  }

  private isValidCondition(condition: () => boolean): boolean{
    return condition != null && condition();
  }

  private isValidSequence(sequence: StringBuildable[]): boolean{
    return sequence != null && sequence.length > 0;
  }
}