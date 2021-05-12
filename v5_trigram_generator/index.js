// v5_zadatak
// http://codekata.com/kata/kata14-tom-swift-under-the-milkwood/


let txtToMutate = "I wish I may I wish I might"


// v2
let trigramGenerator = ( txtToMutate ) => {

    if( typeof txtToMutate != 'string' ) throw 'Passed argument should be of type string.'    // ako parametar nije string

    let wordArray = txtToMutate.split(" ")  // odovji string na razmacima

    if( wordArray.length < 3 ) return []    // ako je manje od 3 rjeci - vrati prazno polje

    return poveziVrijednostiNaParove(wordArray, [ ... new Set(napraviParove(wordArray)) ] )

}


napraviParove = (wordArray) => {

    let parovi = []

    wordArray.forEach( (element, index, theArray) => {

        if( wordArray[index+2] ){

            parovi.push( wordArray[index] + " " + wordArray[index+1] )

        }

    })

    return parovi

}


poveziVrijednostiNaParove = (wordArray, pairArray) => {

    let o = new Object()
    
    let result

    pairArray.forEach( (element, index, pairArray) => {  // nadji moguce rjeci koje idu nakon svakog od parova

        result = []

        wordArray.forEach( (element, index2, wordArray) => {

            if( pairArray[index] == (wordArray[index2] + " " + wordArray[index2+1]) ){  // ako je trenutni par isti kao ova i sljedeca rijec
    
                result.push( wordArray[index2+2] )
    
            }

        })

        o[pairArray[index]] = result

    })

    return o
}




// v1
// poceo sa testovima
// zavrsio sa bruteforce taktikama
//
/* let trigramGenerator = ( txtToMutate ) => {

    console.log("\n\n--------------------------trigramGenerator--------------------------\n\n")

    console.log("input: ", txtToMutate)

    if( typeof txtToMutate != 'string' ) throw 'Argument is not a string. It should be.'    // ako parametar nije string

    let result = []

    let wordArray = txtToMutate.split(" ")  // odovji string na razmacima

    if( wordArray.length < 3 ) return []    // ako je manje od 3 rjeci - vrati prazno polje

    const uniqueParovi = [ ... new Set(napraviParove(wordArray)) ]  // makni duple iz parova

    console.log("\noutput:\n------------- ")
    
    uniqueParovi.forEach( (element, index, pairArray) => {  // nadji moguce rjeci koje idu nakon svakog od parova

        result = []

        let par

        wordArray.forEach( (element, index2, wordArray) => {

            par = wordArray[index2] + " " + wordArray[index2+1]

            if( uniqueParovi[index] == par ){

                result.push( wordArray[index2+2] )
    
            }

        })

        console.log(uniqueParovi[index] + " => " + result)

    })

    return

} */


/* napraviParove = (wordArray) => {

    let parovi = []

    wordArray.forEach( (element, index, theArray) => {

        if( wordArray[index+2] ){

            parovi.push( wordArray[index] + " " + wordArray[index+1] )

        }

    })

    return parovi

}
 */


console.log( trigramGenerator(txtToMutate) )

module.exports = trigramGenerator