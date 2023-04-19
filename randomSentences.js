function randomSentenceGenerator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let names = ["Ivan", "Petar", "Georgi", "Aleksandra", "Daniela"];
    let places = ["Varna", "Sofia","Plovdiv","Burgas", "Stara Zagora"];
    let verbs = ["eats", "laughs", "drinks", "sleeps", "brings"];
    let nouns = ["stones", "cake", "laptop", "scooters", "apple"];
    let adverbs = ["warmly", "rapidly", "sadly", "furiously", "slowly"];
    let details = ["with a bear", "with a girl", "with a boy"];

    function getRandomWord(array) {
        let word = array[Math.floor(Math.random() * array.length)];
        return word;
    }
    
    let randomName = getRandomWord(names);
    let randomPlace = getRandomWord(places);
    let randomVerb = getRandomWord(verbs);
    let randomNouns = getRandomWord(nouns);
    let randomAdverbs = getRandomWord(adverbs);
    let randomDetails = getRandomWord(details);

    let who = `${randomName} from ${randomPlace}`;
    let action = `${randomAdverbs} ${randomVerb} ${randomNouns}`;
    let sentence = `${who} ${action} ${randomDetails}.`;

    console.log('Hello, this is your first random-generated sentence:');
    console.log(sentence);
    

    let recursiveAsyncReadLine = function () {
        readline.question('Click [Enter] to generate a new one.', string => {
            randomName = getRandomWord(names);
            randomPlace = getRandomWord(places);
            randomVerb = getRandomWord(verbs);
            randomNouns = getRandomWord(nouns);
            randomAdverbs = getRandomWord(adverbs);
            randomDetails = getRandomWord(details);
            who = `${randomName} from ${randomPlace}`;
            action = `${randomAdverbs} ${randomVerb} ${randomNouns}`;
            sentence = `${who} ${action} ${randomDetails}.`;
            console.log(sentence);
            recursiveAsyncReadLine();
        })
    }
    recursiveAsyncReadLine();
}
randomSentenceGenerator();