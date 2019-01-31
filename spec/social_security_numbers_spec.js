
describe ('hasSsn', () => {
  it('returns true if it finds an SSN', () => {
    expect(hasSsn('The number is 234-60-1422')).toBe(true)
  })

  it('returns false if it does not find an SSN', () => {
    expect(hasSsn('The number is XXX-XX-1422')).toBe(false)
  })
})

describe ('grabSsn', () => {
  it ('returns an SSN if it finds an SSN', () => {
    let ssn = grabSsn('The number is 234-60-1422');
    expect(ssn).toEqual( '234-60-1422')
  })

  it('returns the first SSN it finds', () => {
    let ssn = grabSsn('The numbers are 350-80-0744, 234-60-1422, and 013-60-8762');
    expect(ssn).toEqual('350-80-0744')
  })
})

describe ('grabAllSsns', () => {
  it('returns a collection of all the SSNs if it finds any SSNs', () => {
    let allSsns = grabAllSsns('The numbers are 350-80-0744, 234-60-1422, and 013-60-8762');
    expect(allSsns).toEqual(['350-80-0744', '234-60-1422', '013-60-8762'])
  })

  it('returns null if does not find any SSNs', () => {
    let allSsns = grabAllSsns('The number is XXX-XX-1422');
    expect(allSsns).toBeNull()()
  })
})


describe ('hideAllSsns', () => {
  it('obfuscates any SSNs it finds', () => {
    let hidden_ssns = hideAllSsns('The numbers are 350-80-0744, 234-60-1422, and 013-60-8762');
    expect(hidden_ssns).toEqual('The numbers are XXX-XX-0744, XXX-XX-1422, and XXX-XX-8762')
  })

  it('returns its input if it finds no SSNs', () => {
    let input = 'The number is XXX-XX-1422'
    expect(hideAllSsns(input)).toEqual( input)
  })
})


describe ('formatSsns', () => {
  it('formats any SSNs it finds', () => {
    let formatted_ssns = formatSsns('The numbers are 350800744, 234.60.1422, and 013--60--8762');
    expect(formatted_ssns).toEqual('The numbers are 350-80-0744, 234-60-1422, and 013-60-8762');
  })

  it('returns its input if it finds no SSNs', () => {
    let input = 'The number is XXX-XX-1422'
    expect(formatSsns(input)).toEqual(input)
  })
})
