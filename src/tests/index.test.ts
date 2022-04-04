import { StringBuilder } from "../index";

let builder: StringBuilder;

describe("StringBuilder should", () => {
  beforeEach(() =>{
    builder = new StringBuilder();
  });

  it("return empty string if no inputs", () => {
    expect(builder.toString()).toBe("");
  });

  it("append inputs in the same line", () => {
    builder
      .append("a")
      .append(null)
      .append(true)
      .append(null);

    expect(builder.toString()).toBe("atrue");
  });

  it("append inputs in different lines", () => {
    builder
      .appendLine("a")
      .appendLine(null)
      .appendLine('a')

    expect(builder.toString()).toBe(`${StringBuilder.Line}a${StringBuilder.Line}${StringBuilder.Line}a`);
  });

  it("append inputs in the same line when condition is met", () => {
    let trueCondition = true;
    let falseCondition = false;

    builder
      .append("a")
      .appendWhen(() => trueCondition, 5)
      .append('a')
      .appendWhen(() => falseCondition, "b");

    expect(builder.toString()).toBe("a5a");
  });

  it("append inputs in different lines", () => {
    let trueCondition = true;
    let falseCondition = false;

    builder
      .appendLineWhen(() => trueCondition, "a")
      .appendLineWhen(() => falseCondition, "b")
      .appendLine('a')

    expect(builder.toString()).toBe(`${StringBuilder.Line}a${StringBuilder.Line}a`);
  });
});