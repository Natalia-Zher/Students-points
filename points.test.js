const findBestStudent = require("./points");

// Test datasets
const testDatasets = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];

describe("findBestStudent", () => {
  it.each([
    {
      expectedName: "Ivan",
      label: "dataset #1",
      reason: "score 35, earlier date than Stepan",
      dataset: testDatasets[0],
    },
    {
      expectedName: "Marina",
      label: "dataset #2",
      reason: "score 25, earliest date",
      dataset: testDatasets[1],
    },
    {
      expectedName: "Varvara",
      label: "dataset #3",
      reason: "all score 0, earliest date",
      dataset: testDatasets[2],
    },
  ])(
    "should return $expectedName from $label ($reason)",
    ({ expectedName, label, reason, dataset }) => {
      const result = findBestStudent(dataset);
      expect(result?.name).toBe(expectedName);
    }
  );

  it("should return null for empty array", () => {
    expect(findBestStudent([])).toBeNull();
  });
});
