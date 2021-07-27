function superbowlWin(arrayOfObj){
    let supBowl = arrayOfObj.find(function(obj) {
        return obj.result === "W"
    })

    debugger

    if (supBowl === undefined) {
        return supBowl
    } else {
        return supBowl["year"]
    }
}
