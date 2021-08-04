
describe("Thermostat tests", () => {
  it("Starts at 20", () => {
    let thermostat = new Thermostat();
    expect(thermostat.temperature()).toEqual(20);
  });
});
