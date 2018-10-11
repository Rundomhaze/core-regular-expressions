

describe(' hasSsn', () => {
  test('returns true if it finds an SSN', () => expect(has_ssn("The number is 234-60-1422")).toBe(true));
  test('returns false if it does not find an SSN', () => expect(has_ssn("The number is XXX-XX-1422")).toBe(false));
});

describe('grab_ssn', () => {
  let ssn = grab_ssn('The number is 234-60-1422')
  expect(ssn).toEqual('234-60-1422')

  ssn = grab_ssn('The numbers are 350-80-0744, 234-60-1422, and 013-60-8762')
  expect(ssn).toEqual('350-80-0744')
});

describe('returns the first SSN it finds', () => {
  let ssn = grab_ssn('The numbers are 350-80-0744, 234-60-1422, and 013-60-8762')
  test('returns false if it does not find an SSN', () => expect(has_ssn("The number is XXX-XX-1422")).toEqual("350-80-0744"));

});
