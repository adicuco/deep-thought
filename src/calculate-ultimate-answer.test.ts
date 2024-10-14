import { expect, test } from "vitest";
import { calculateUltimateAnswer } from "./calculate-ultimate-answer";

test("The answer to life, the universe and everything should be 42", () => {
  const ultimateAnswer = calculateUltimateAnswer();
  expect(ultimateAnswer).toBe(42);
});
