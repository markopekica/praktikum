function dayOfYear (year, month, day) {
    // sve prosle zadatke sam obrisao (nenamjerno) dok sam pokusavao pushati na gh
    // pa radim opet pocevsi od: v3_zadatak1_dayOfYear
    let months = {
        1: 31,
        2: 28,
        '2Leap': 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }
    let result = 0

    if ( (month==2) && !(isLeapYear(year)) && (day==29)) {
        return 'greska - 29.2. ne postoji u godini koja nije prjestupna'
    }

    for (let i=1; i<month; i++) {
        if ( i==2 && isLeapYear(year) ) {
            result += months['2Leap']
        } else {
            result += months[i]
        }
    }

    return result + day
}


function isLeapYear(year) {
    // svaka djeljiva sa 4
    // osim za stoljeca; stoljeca su prjestupna samo ako su djeljiva sa
    if ( (year % 4 == 0) && year % 100 != 0 ) return true
    if ( (year % 4 == 0) && (year % 100 == 0) )
        if ( year % 400 == 0 )
            return true
    return false
}



module.exports = dayOfYear