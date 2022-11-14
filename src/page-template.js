const createEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-title">
                            <h2>${engineer.name}</h2>
                            <h3>Engineer</h3>
                        </div>
                        <div class="card-body">
                            <p class="id">${engineer.id}</p>
                            <p class="email">email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                            <p class="gitHub">gitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                        </div>
                    </div>
                </div>
    `;
}

const createIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-title">
                            <h2>${intern.name}</h2>
                            <h3>Intern</h3>
                        </div>
                        <div class="card-body">
                            <p class="id">id:${intern.id}</p>
                            <p class="email">email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                            <p class="school">School: ${intern.school}</p>
                        </div>
                    </div>
                </div>
    `
}

const createManager = function(manager) {
    return `
    <div class="col-4 mt-4">
                    <div class="card h-100">
                        <div class="card-title">
                            <h2>${manager.name}</h2>
                            <h3>Manager</h3>
                        </div>
                        <div class="card-body">
                            <p class="id">id: ${manager.id}</p>
                            <p class="email">email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                            <p class="officeNumber">Office: ${manager.officeNumber}</p>
                        </div>
                    </div>
                </div>
    `
}


pageTemplate = (data) =>{
    pageArray = [];
    for(let i=0; i<data.length; i++){
        const employee = data[i];
        const role = employee.getRole();


        if (role === 'Manager') {
            const cardManager = generateManager(emoloyee)
            pageArray.push(cardManager);
        }
    }
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
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv=""X-UA-Compatible" content="ie=edge" />
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
        <nav class="navbar" style="background-color: #3B71CA;">
            <div class="container-fluid">
            <section class="navbar-brand mb-0 h1 w-100 text-center">My Team</section>
        </div>
        </nav>
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

module.exports = pageTemplate;