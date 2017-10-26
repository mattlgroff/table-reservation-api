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

    if (this.waitlist.length > this.amountOfTables){
      this.tables = this.waitlist.slice(0, (this.amountOfTables - 1) );
      this.waitlist = this.waitlist.splice(this.amountOfTables); 
    }
    else {
      this.tables = this.waitlist;
      this.waitlist = [];
    }
  }
}
