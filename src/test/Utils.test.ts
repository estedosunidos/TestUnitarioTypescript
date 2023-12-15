import { getStringInfo, toUpperCase } from "../app/Utils";
describe('Utils test suite', () => {
    it('should return uppercase of valid string', () => {
        // Arrange
        const sut = toUpperCase;
        const expected = 'ABC';
        // Act
        const actual = sut('abc');
        // Assert
        expect(actual).toBe(expected);
    });

  describe('ToUpperCase example',()=>{
    it.each([
        {input:'abc',expected:'ABC'},
        {input:'MY-STRING',expected:'MY-STRING'},
    ])('$input toUpperCase should be $expected',({input,expected})=>{
        const actaul=toUpperCase(input)
        expect(actaul).toBe(expected)


    })
  })
    describe('getStringInfo for arg My-String should', () => {
        test('return right length', () => {
            const actual = getStringInfo('My-String')
            expect(actual.characters).toHaveLength(9)
        })
        test('return right lower case ', () => {
            const actual = getStringInfo('My-String')
            expect(actual.lowerCase).toBe('my-string')
        })
        test('return right upper case ', () => {
            const actual = getStringInfo('My-String');
            expect(actual.upperCase).toBe('MY-STRING');
          });
          
        test('return extrainfo ', () => {
            const actual = getStringInfo('My-String')
            expect(actual.extraInfo).not.toBe(undefined)
            expect(actual.extraInfo).not.toBeUndefined()
            expect(actual.extraInfo).toBeDefined()
        })
 
    })
  
});

