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
    let temp = [];
    let temp2 = [];

    if (this.waitlist.length > this.amountOfTables.length){
      for (let i =0; i < this.amountOfTables.length; i++){
        temp.push(this.waitlist[i]);
      }
      for (let i = this.amountOfTables.length; i < this.waitlist.length; i++){
        temp2.push(this.waitlist[i]);
      }

      this.tables = temp;
      this.waitlist = temp2;
    }
    else {
      this.tables = this.waitlist;
      this.waitlist = [];
    }
  }
}
