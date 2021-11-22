let year = '2019';
let year2=2018;

describe("Get Year Dates",()=>{
    // it("should be a number",()=>{
    //     expect(parseInt(year)).toBe(2019);
    // })

    beforeEach(()=>{
        year2+=2;
    })

    it("should be next year",()=>{
        expect(year2).toBe(2020);
    })

    it("should be in the next 2 years",()=>{
        expect(year2).toBe(2022);
    })
});