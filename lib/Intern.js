class Intern {

    constructor(name, id, email, school, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.github = github;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }

    getGitHub(){
        return this.github
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;