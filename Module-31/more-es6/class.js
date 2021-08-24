class Support {
  name;
  designation = "support web dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "Start support session");
  }
}

const amir = new Support("Amir khan", "BD");
const salman = new Support("Solaiman Khan", "Dubai");
amir.startSession();
salman.startSession();
console.log(amir, salman);
