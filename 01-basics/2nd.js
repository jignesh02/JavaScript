const accountId = 1122334;
let accountEmail = "jignesh@gmail.com";
var accountPassword = "01020345";
accountCity = "surat";

// accountId = 112;   const variable is not updeted and re-declared (objects and arrys can be modified)

accountEmail = "jb02@gmail.com";
accountPassword = "2123344";
accountCity = "delhi";

console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity]);

/*
    prefer not use var because of issue in block and functional scope
    use let in place of var
*/