class TeamMember {
  name;

  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Support extends TeamMember {
  groupSupportTime;
  designation = "support web dev";
  constructor(name, address, time) {
    super(name, address);
    this.groupSupportTime = time;
  }
  startSession() {
    console.log(this.name, "Start support session");
  }
}

class StudentCare extends TeamMember {
  designation = "care web dev";
  buildARouting() {
    console.log(this.name, "Build A routine for", student);
  }
}

class NeptuneDev extends TeamMember {
  codeEditor;
  designation = "neptune app dev";
  constructor(name, address, editor) {
    super(name, address);
    this.codeEditor = editor;
  }
  releaseApp(version) {
    console.log(this.name, "Release app version", version);
  }
}

const amir = new Support("Amir khan", "BD", 11);
const salman = new Support("Solaiman Khan", "Dubai", 12);
// amir.startSession();
// salman.startSession();
// console.log(amir, salman);

const alia = new StudentCare("Alia batt", "Mumbai");
console.log(alia);
const ash = new NeptuneDev("Ash", "Mumbai", "Android studio");
ash.releaseApp("1.4.5");
console.log(ash.name);
