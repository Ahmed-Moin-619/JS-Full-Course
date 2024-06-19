const accountId = 144553
let accountEmail = "moin@test.com"
var accountPassword = "12345"
accountCity = "jaipur"

let currentState;

//accountId = 2 // Const Variables Can't Change

accountEmail = "dell@test.com"
accountPassword = "2121"
accountCity = "Bangaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, currentState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

/*
The const keyword was introduced in ES6 (2015)
Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope
*/

/*
The let keyword was introduced in ES6 (2015)
Variables declared with let have Block Scope
Variables declared with let must be Declared before use
Variables declared with let cannot be Redeclared in the same scope
*/