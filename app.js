const amountOfTables = 5;

let tables = [];
let waitlist = [];

module.exports = {
  newReservation: (req) => {
    let newReservation = req.body;

    if (tables.length < amountOfTables) {
      tables.push(newReservation);
      console.log("Added to tables: ");
      
    }
    else {
      waitlist.push(newReservation);
      console.log("Added to waitlist: ");
    }

    console.log(newReservation);
  },
  clear: () => {
    tables = waitlist;
    waitlist = [];
  }
}
