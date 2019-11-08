let validate= require("../src/password_checker");

describe("passwordIsValid", function(){
    describe("validates the password", function(){
        let pass = "sH3pel!nG";
        let valid = validate.passwordIsValid(pass);

        it("Should check if the password is not empty", () => {
            expect(valid).not.toBeNull();
        });

        it("throws an error when password length is less than 8", function(){
            expect(valid.length).toBeGreaterThan(8);
        })

        it("throws an error when the password has no lowercase character", function () {
            expect(valid).toMatch(/[a-z]/);
        })

        it("throws an error when the password has no UPPERCASE character", function () {
            expect(valid).toMatch(/[A-Z]/);
        })

        it("throws an error when the password has no digit", function () {
            expect(valid).toMatch(/[0-9]/);
        })

        it("throws an error when the password has no special character", function () {
            expect(valid).toMatch(/[{(%$&*"'\|#@!)}]/);
        })
    })
})

describe("password is Ok", function(){
    let password = "sH3pel!nG";
    let valid = validate.passwordIsOk(password);

    let condition1 = /[a-z]/;
    let condition2 = /[A-Z]/;
    let condition3 = /[0-9]/;
    let condition4 = /[{(%$&*"'\|#@!)}]/;

    if ((password !== null) && (password.length < 8)){

        it("should return password not okay if it doesn't meet condition1 and condition2", function () {
        expect(valid).toMatch(condition1 || condition2 || condition3 || condition4);
    })
    }
})