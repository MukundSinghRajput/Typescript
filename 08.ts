const logDetails = (uid: string|number, item:string) => {
    console.log(`${item} has the uid of ${uid}`)
}

const greet = (user: {name:string, uid: string|number}) => {
    console.log(`${user.name} has the uid ${user.uid}`)
}

const greetAgain = (user: {name:string, uid: string|number}) => {
    console.log(`${user.name} has the uid ${user.uid}`)
}

// Just defining the same type again and again aren't you tiered well i am so let's learn type aliases

type StringOrNum = string|number
type userT = {name:string, uid: StringOrNum}

const logDetailsAgain = (uid: StringOrNum, item:string) => {
    console.log(`${item} has the uid of ${uid}`)
}

const greetAgainAndAgain = (user: userT) => {
    console.log(`${user.name} has the uid ${user.uid}`)
}

logDetailsAgain(40, "Ball")
greetAgainAndAgain({name:"Mukund", uid:10})