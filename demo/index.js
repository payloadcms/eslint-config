// 'something' is assigned a value but never used
// 'something' is never reassigned. Use 'const' instead
let something = "";

// Identifier 'something_else' is not in camel case
// 'something_else' is assigned a value but never used
// Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`
const something_else = () => {
  return "something else" // Missing semicolon
} // Missing semicolon

const someProps = {
  prop1: "",
  prop_2: "",
  prop_3: "",
};

const {
  // 'prop1' is assigned a value but never used
  prop1,
  // 'prop2' is assigned a value but never used
  // Identifier 'prop_2' is not in camel case
  prop_2,
  // 'prop3' is assigned a value but never used
  // Missing trailing comma
  prop_3: prop3
} = someProps;

const inlineObject = { inlineProp1: "", inlineProp2: "", inlineProp3: "" };

const { inlineProp1, inlineProp2, inlineProp3 } = inlineObject;

const { inlineProp1: inlineProp1b, // Expected a line break after this opening brace
  inlineProp2: inlineProp2b,
  inlineProp3: inlineProp3b } = inlineObject; // Expected a line break before this closing brace
