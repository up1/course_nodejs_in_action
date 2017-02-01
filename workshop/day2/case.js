var command = process.argv[2]

switch(command) {
    case 'add' :
        console.log(command)
        break
    default :
        console.log('Not match')
}