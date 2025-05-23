function UserInput({ onChange, input }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(event) => {
              onChange("initialInvestment", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(event) => {
              onChange("annualInvestment", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            min={5}
            type="number"
            required
            value={input.expectedReturn}
            onChange={(event) => {
              onChange("expectedReturn", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            max={99}
            maxLength={2}
            type="number"
            required
            value={input.duration}
            onChange={(event) => {
              onChange("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
