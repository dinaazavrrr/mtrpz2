const ArrayList = require("./listArray");

describe("ArrayList", () => {
  let list;

  beforeEach(() => {
    list = new ArrayList();
  });

  test("should append and get length", () => {
    list.append("A");
    list.append("B");
    expect(list.length()).toBe(2);
  });

  test("should insert at correct position", () => {
    list.append("A");
    list.insert("B", 1);
    expect(list.get(1)).toBe("B");
  });

  test("should delete element at index", () => {
    list.append("X");
    list.append("Y");
    const removed = list.delete(1);
    expect(removed).toBe("Y");
    expect(list.length()).toBe(1);
  });

  test("should find first and last occurrence", () => {
    list.append("X");
    list.append("Y");
    list.append("X");
    expect(list.findFirst("X")).toBe(0);
    expect(list.findLast("X")).toBe(2);
  });

  test("should throw on invalid get", () => {
    expect(() => list.get(0)).toThrow("Invalid index");
  });

  test("should clone correctly", () => {
    list.append("A");
    const copy = list.clone();
    expect(copy.get(0)).toBe("A");
    copy.append("B");
    expect(list.length()).toBe(1);
  });

  test("should reverse list", () => {
    list.append("A");
    list.append("B");
    list.reverse();
    expect(list.get(0)).toBe("B");
  });

  test("should clear list", () => {
    list.append("Z");
    list.clear();
    expect(list.length()).toBe(0);
  });
});
