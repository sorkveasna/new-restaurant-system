Template.barChart.onCreated(function barChartOnCreated() {
    //Write Something Here
});
Template.barChart.onRendered(function () {
    drawChart();
});

Template.barChart.helpers({
    myChart(){
    }
});

Template.barChart.events({
    //Write Something Here
});
function drawChart() {
    var data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                fillColor: "rgba(0, 170, 176, 0.6)",
                strokeColor: "teal",
                pointColor: "white",
                pointStrokeColor: "teal",
                data: [1, 5, 10, 15, 10]
            }
        ]
    }

    // debugger
    //Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#myBarChart").get(0).getContext("2d");
    //This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx, {
        options: {
            responsive: true
        }
    });

    new Chart(ctx).Bar(data);
}
