// For loop listing 2008 to 2004
for (let year = 2008; year >= 2004; year--) {
    console.log(year);
}

// While loop listing the inflation-adjusted values for 2005 to 2008
let year = 2004;
while (year <= 2008) {
    switch (year) {
        case 2004:
            console.log("2004: $1 → $1.57 (in 2024 dollars)");
            break;
        case 2005:
            console.log("2005: $1 → $1.52 (in 2024 dollars)");
            break;
        case 2006:
            console.log("2006: $1 → $1.48 (in 2024 dollars)");
            break;
        case 2007:
            console.log("2007: $1 → $1.44 (in 2024 dollars)");
            break;
        case 2008:
            console.log("2008: $1 → $1.37 (in 2024 dollars)");
            break;
    }
    year++;
}
