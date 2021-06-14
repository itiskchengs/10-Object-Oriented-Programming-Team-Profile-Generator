const memberBank = [];

function htmlHead() {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet"> 
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    `
}
function addInformation(teamMembers){
    for(let i = 0; i < teamMembers.length; i++){
    memberBank.push( `
    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 card-container">
        <div class="card" style="width: 18rem;">
            <div class="card-title">
                <h5>${teamMembers[i].name}</h5>
                <h6>${teamMembers[i].getRole()}</h6>
            </div>
            <div class="card-body">
                <p class="card-text">ID: ${teamMembers[i].id}</p>
                <p class="card-text">Email:<a href="mailto:${teamMembers[i].email}"> ${teamMembers[i].email}</a></p>
                <p class="card-text">${teamMembers[i].specialQuestion()}</p>
            </div>
        </div>
    </div>
        `);
    }
    return memberBank;
}
function generateFull(teamMembers) {
    return `
    ${htmlHead()}
    <body>
        <header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 header-container">
                        <h1>My Team</h1>
                    </div>
                </div>
            </div>
        <header>
            <div class="container team-container">
                <div class="row">
                    ${addInformation(teamMembers)}
                </div>
            </div>
    </body>
    `
}

module.exports = {
    generateFull,
}