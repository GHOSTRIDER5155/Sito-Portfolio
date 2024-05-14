//---------------------------------------------------\ 
// Script for skills level                            |
// --------------------------------------------------/
// Load the Visualization API and the corechart package.
google.charts.load('current', {packages: ['corechart', 'bar']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawSkillsChart);

// Callback that creates and populates a data table,
// instantiates the bar chart, passes in the data and
// draws it.
function drawSkillsChart() {

    // Create the data table.
    var data = google.visualization.arrayToDataTable([
        ['Skill', 'Level', { role: 'style' }],
        ['C++   ', 90, '#FFD700'],
        ['HTML   ', 80, '#FFD700'],
        ['CSS   ', 80, '#FFD700'],
        ['JavaScript   ', 60, '#FFD700'],
        ['PHP   ', 50, '#FFD700'],
        ['SQL/NoSQL   ', 50, '#FFD700']
    ]);

    // Set chart options
    var options = {
        title: 'My Skills',
        chartArea: { width: '70%', backgroundColor: '#053F5E' },
        backgroundColor: '#053F5E',
        hAxis: {
            minValue: 0,
            maxValue: 100,
            title: 'Proficiency Level'
        },
        vAxis: {
            title: ''
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        legend: { position: 'none' }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
