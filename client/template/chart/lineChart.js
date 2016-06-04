Template.chart.onCreated(function chartOnCreated() {
    //Write Something Here
});
Template.chart.onRendered(function () {
    drawChart();
});

Template.chart.helpers({
    myChart(){
    }
});

Template.chart.events({
    //Write Something Here
});
function drawChart() {
    var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                fillColor: "transparent",
                strokeColor: "teal",
                pointColor: "black",
                pointStrokeColor: "teal",
                data: [1, 5, 10, 15, 10]
            },
            {
                fillColor: "transparent",
                strokeColor: "#07A7AD",
                pointColor: "white",
                pointStrokeColor: "#07A7AD",
                data: [4, 38, 43, 19, 88]
            }
        ]
    }

    // debugger
    //Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#myChart").get(0).getContext("2d");
    //This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx, {
        options: {
            responsive: true
        }
    });

    new Chart(ctx).Line(data);
}
