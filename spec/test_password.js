let validate= require("../src");

describe("passwordIsValid", function(){
    describe("validates the password", function(){
        it("throws an error when password is an empty string", function () {
            expect(validate.passwordIsValid("")).toBe("password should exist")
        })
        it("throws an error when password length is less than 8", function(){
            expect(validate.passwordIsValid("shepel")).toBe("password should be longer than than 8 characters")
        })

        it("throws an error when the password has no lowercase character", function () {
            expect(validate.passwordIsValid("SHEPELING")).toBe("password should have at least one lowercase letter")
        })

        it("throws an error when the password has no UPPERCASE character", function () {
            expect(validate.passwordIsValid("shepeling")).toBe("password should have at least one uppercase letter")
        })

        it("throws an error when the password has no digit", function () {
            expect(validate.passwordIsValid("Shepeling")).toBe("password should have at least one digit")
        })

        it("throws an error when the password has no special character", function () {
            expect(validate.passwordIsValid("Sh3p3ling")).toBe("password should have at least one special character")
        })
    })
})

describe("passwordIsOk", function(){
    it("returns false if password does not match (cond1 and cond2) and At least one patt", function () {
        expect(validate.passwordIsOk("shep")).toBe(false)
    })

    it("returns true if password match (cond1 and cond2) and At least one ptn", function () {
        expect(validate.passwordIsOk("Sh3p3l:ng")).toBe(true)
    })
})