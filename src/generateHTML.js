const generateManager = function (manager) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>${manager.name}</h3>
        <h4>Manager<h4>
      </div>
  
      <div class="card-body"> 
        <p class="id">ID: ${manager.id}</p>
        <p class="email">Email: ${manager.email}</p>
        <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
      <div>
    </div>
  </div>
  `;
}

const generateEngineer = function (engineer) {
  return `
   <div class="col-4 mt-4">   
    <div class="card h-100">
      <div class="card-header">
        <h3>${engineer.name}</h3>
        <h4>Engineer<h4>
      </div>

      <div class="card-body">
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">Email: ${engineer.email}</p>
        <p class="github">Github: ${engineer.github}</p>
      </div>
    </div>
  </div>
  `
}

const generateIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3>${intern.name}</h3>
        <h4>Intern<h4>
      </div>

      <div class="card-body">
        <p class="id">ID: ${intern.id}</p>
        <p class="email">Email: ${intern.email}</p>
        <p class="school">School: ${intern.school}</p>
      </div>
    </div>
  </div>
  `
}

const generateHTML = (data) => {

  pageArr = [];

  for (let i=0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const managerCard = generateManager(employee);

      pageArr.push(managerCard);
    }

    if (role === 'Engineer') {
      const engineerCard = generateEngineer(employee);

      pageArr.push(engineerCard);
    }
 
    if (role === 'Intern') {
      const internCard = generateIntern(employee);

      pageArr.push(internCard);
    }
  
  }

  const employeeCards = pageArr.join('');

  const generateTeam = generatePage(employeeCards);
  return generateTeam;
}

const generatePage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.1/js/bootstrap.min.js">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              Team Profile
          </nav>
      </header>
      <main>
            <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
            </div>
      </main>
  </body>
  </html>
`;
}

module.exports = generateHTML;
