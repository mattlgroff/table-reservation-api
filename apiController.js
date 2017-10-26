const amountOfTables = 5;

module.exports = {
  newReservation: (req) => {
    let newReservation = req.body;

    if (this.tables.length < this.amountOfTables) {
      this.tables.push(newReservation);
      console.log("Added to tables: ");
      
    }
    else {
      this.waitlist.push(newReservation);
      console.log("Added to waitlist: ");
    }

    console.log(newReservation);
  },
  clear: () => {
    this.tables = this.waitlist;
    this.waitlist = [];
  },
  tables: [],
  waitlist: [],
  amountOfTables: 5
}
