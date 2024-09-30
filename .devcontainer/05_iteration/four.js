const myObject = {
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["Js","rb","py","java","cpp"]
for(const key in programming){
    console.log(programming[key])
}