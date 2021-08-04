
describe("Thermostat tests", () => {
  it("Starts at 20", () => {
    let thermostat = new Thermostat();
    expect(thermostat.temperature()).toEqual(20);
  });
  it("Raises temperature with 'up'", () => {
    let thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });
});
