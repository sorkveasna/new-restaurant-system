Template.pieChart.onCreated(function pieChartOnCreated() {
    // this.subscribe('units');
});
Template.pieChart.onRendered(function () {
    drawChart();
});

Template.pieChart.helpers({
    myChart(){

    }
});

Template.pieChart.events({
    //Write Something Here
});
function drawChart() {
    var data = [
    {
        value: 25,
            label: 'Java',
        color: '#004d40'
    },
    {
        value: 10,
            label: 'Scala',
        color: '#00695c'
    },
    {
        value: 30,
            label: 'PHP',
        color: '#00796b'
    },
    {
        value : 35,
            label: 'HTML',
        color: '#00897b',
    }
    ]

    // debugger
    //Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#myPieChart").get(0).getContext("2d");
    //This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx, {
        type: 'doughnut',
        options: {
            responsive: true
        }
    });

    new Chart(ctx).Doughnut(data);
}