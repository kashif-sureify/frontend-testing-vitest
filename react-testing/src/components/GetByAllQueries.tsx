const GetByAllQueries = () => {
  return (
    <div>
      <label htmlFor="input1">Label for input 1</label>
      <input
        placeholder="Enter text here"
        id="input1"
        value={"Default Value"}
        disabled
      />

      <label htmlFor="input2">Label for input 2</label>
      <input
        placeholder="Another Placeholder"
        id="input2"
        value={"Another Value"}
        disabled
      />

      <input placeholder="Enter Something..." disabled />
      <input placeholder="Enter Something else..." disabled />

      <p>This is a paragraph with some text content.</p>
      <p>This is a paragraph with some text content.</p>

      <input value={"Some Display value"} disabled />
      <input value={"Another Display value"} />

      <img src="image1.png" alt="A simple image" />
      <img src="image2.png" alt="Another simple image" />

      <div title="This is a div with title attribute">
        Div content with title attribute
      </div>
      <div title="This is a div with title attribute">
        Another div content with title attribute
      </div>

      <button role="button" aria-label="This is a button" disabled>
        Disabled Button 1
      </button>
      <button role="button" aria-label="This is a button 2" disabled>
        Disabled Button 2
      </button>

      <div data-testid="custom-test-id-1">This div has test id 1.</div>
      <div data-testid="custom-test-id-2">This div has test id 2.</div>
    </div>
  );
};

export default GetByAllQueries;
