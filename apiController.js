module.exports = {
  tables: [],
  waitlist: [],
  amountOfTables: 5,
  newReservation: function(req){
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
  clear: function() {
    this.tables = this.waitlist;
    this.waitlist = [];
  }
}
