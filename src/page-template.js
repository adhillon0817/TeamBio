const pageTemplate = (data) => {

const generateEngineer = function (engineer) {
    return `
      <div class="col-4 mt-4">
                      <div class="card h-100">
                          <div class="card-title">
                              <h2>${engineer.getName()}</h2>
                              <h3>Engineer</h3>
                          </div>
                          <div class="card-body">
                              <p class="id">${engineer.getId()}</p>
                              <p class="email">email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                              <p class="gitHub">gitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></p>
                          </div>
                      </div>
                  </div>
      `;
  };
  
  const generateIntern = function (intern) {
    return `
      <div class="col-4 mt-4">
                      <div class="card h-100">
                          <div class="card-title">
                              <h2>${intern.getName()}</h2>
                              <h3>Intern</h3>
                          </div>
                          <div class="card-body">
                              <p class="id">id:${intern.getId()}</p>
                              <p class="email">email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                              <p class="school">School: ${intern.getSchool()}</p>
                          </div>
                      </div>
                  </div>
      `;
  };
  
  const generateManager = function (manager) {
    return `
      <div class="col-4 mt-4">
                      <div class="card h-100">
                          <div class="card-title">
                              <h2>${manager.getName()}</h2>
                              <h3>Manager</h3>
                          </div>
                          <div class="card-body">
                              <p class="id">id: ${manager.getId()}</p>
                              <p class="email">email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                              <p class="officeNumber">Office: ${manager.getOfficeNumber()}</p>
                          </div>
                      </div>
                  </div>
      `;
  };

  // const generateTeamProfile = function (teamCards) {
  //   return `
        
  //     `;
  // };

  
 
    let pageArray = [];
  
    //creating engineer

    pageArray.push(data.filter(employee => employee.getRole() === "Engineer").map(employee => generateEngineer(engineer)).join(""));

    //creating intern
    pageArray.push(data.filter(employee => employee.getRole() === "Intern").map(employee => generateIntern(intern)).join(""));

    //creating manager
    pageArray.push(data.filter(employee => employee.getRole() === "Manager").map(employee => generateManager(manager)));

retun(pageArray.join(""));

};

module.exports = team => {
  return`
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
              ${pageTemplate(team)}
              </div>
          </div>
      </main>
    </body>
</html>
  `
};