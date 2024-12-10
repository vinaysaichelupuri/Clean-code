import { describe, it, expect } from "vitest";
import { getFullName } from "./task-2";

describe("task-2", () => {
  it("should get full name with first name and last name", () => {
    const fullName = getFullName("John", "Doe");
    expect(fullName).toEqual("John Doe");
  });
  it("should get full name with first name", () => {
    const fullName = getFullName("John");
    expect(fullName).toEqual("John");
  });
});
