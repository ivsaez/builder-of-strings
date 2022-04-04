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

  it("append a sequence of elements", () => {
    let elements = [ "a", "b", "c" ];

    builder
      .appendSequence(elements);

    expect(builder.toString()).toBe("abc");
  });

  it("append a sequence of elements in different lines", () => {
    let elements = [ "a", "b", "c" ];

    builder
      .appendSequenceLines(elements);

    expect(builder.toString()).toBe(`${StringBuilder.Line}a${StringBuilder.Line}b${StringBuilder.Line}c`);
  });

  it("append a sequence of elements when a condition is met", () => {
    let trueCondition = true;
    let falseCondition = false;
    let elements = [ "a", "b", "c" ];

    builder
      .appendSequenceWhen(() => trueCondition, elements)
      .appendSequenceWhen(() => falseCondition, elements);

    expect(builder.toString()).toBe("abc");
  });

  it("append a sequence of elements in different lines when a condition is met", () => {
    let trueCondition = true;
    let falseCondition = false;
    let elements = [ "a", "b", "c" ];

    builder
      .appendSequenceLinesWhen(() => trueCondition, elements)
      .appendSequenceLinesWhen(() => falseCondition, elements);

    expect(builder.toString()).toBe(`${StringBuilder.Line}a${StringBuilder.Line}b${StringBuilder.Line}c`);
  });
});