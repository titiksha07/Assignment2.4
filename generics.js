var StudentDetails = (function () {
    function StudentDetails() {
        this.details = [];
    }
    return StudentDetails;
}());
var regular = { name: "Titi", roll: 20 };
var vocational = { name: "John", id: 200 };
var regData = new StudentDetails();
var vocData = new StudentDetails();
regData.details.push(regular);
vocData.details.push(vocational);
console.log(regData.details);
console.log(vocData.details);
