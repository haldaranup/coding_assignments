function UserInfo(name, location) {
    this.name = name
    this.location = location
}

function serveFood(food) {
    return `Serving ${food} to ${this.name} in ${this.location}`
}
serveFood.call(UserInfo)

function serveIn(name, location, food) {
    let data = new UserInfo(name, location)
    serveFood.call(data)
    return 
}








function billNote(total) {
    return `${this.name}'s bill is INR ${total}`
}



function generateInVoice(name, location, quantity, price) {
    let user = new UserInfo(name, location)
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
