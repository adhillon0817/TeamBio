const createEngineer = function(engineer) {
    return `
    
    `
}

const createIntern = function(intern) {
    return `
    
    `
}

const createManager = function(manager) {
    return `
    
    `
}
const teamCards = pageArray.join('')
const createTeam = generateTeamProfile(teamCards);
return createTeam;

const generateTeamProfile = function (teamCards) {
    return `
<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv=""X-UA-Compatible" content="ie=edge" />
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="../dist/style.css">
  </head>
  
  <body>
    <header>
        <h1 class="h1">
            <section class="navbar-brand mb-0 h1 w-100 text-center">My Team</section>
        </h1>
    </header>

    <main>
        <div class="container">
            <div class = "row justify-center align-center" id="position-card">
            ${teamCards}
            </div>
        </div>
    </main>
  </body>
`;
}

module.exports = generateHTML;