import * as CanvasJS from "@canvasjs/charts";

// Bar Chart
const barChart = new CanvasJS.Chart("barChart", {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Monthly Sales"
    },
    axisY: {
        title: "Revenue (USD)"
    },
    data: [{
        type: "column",
        dataPoints: [
            { label: "Jan", y: 3000 },
            { label: "Feb", y: 5000 },
            { label: "Mar", y: 4000 }
        ]
    }]
});
barChart.render();

// Pie Chart
const pieChart = new CanvasJS.Chart("pieChart", {
    animationEnabled: true,
    title: {
        text: "User Distribution"
    },
    data: [{
        type: "pie",
        startAngle: 240,
        indexLabel: "{label} - {y}%",
        dataPoints: [
            { y: 45, label: "Chrome" },
            { y: 25, label: "Safari" },
            { y: 15, label: "Firefox" },
            { y: 15, label: "Others" }
        ]
    }]
});
pieChart.render();
