    
function callBack(data){
    console.log(data.responseJSON);
    var chart_data = data.responseJSON;
    array = []
    x = []
    for(let point in chart_data){
        x.push(chart_data[point].date);
        array.push(chart_data[point].score);
    }
    // console.log(array)
    bart_data = test(array,x)
    var ctx = document.getElementById("myChart").getContext("2d");
    var myNewChart = new Chart(ctx,{
        type: 'line',
        data: bart_data,
    });
    return;
};
function AJAXReq(callBack,stockName,success){
    console.log(stockName);
    $.ajax({
        url: 'threads/' + stockName,
        type: 'get',
        dataType: 'json',
        complete: callBack,
    });
    success();
    return;
};
function test(mata, x){
    var data = {
    labels: x,
    datasets: [
            {
                label: "Stonkssssss",
                backgroundColor: 'rgb(255, 99, 132)',
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,0.8)",
                data: mata
            }
        ]
    };
    return data;

};

// module.exports = { callBack, AJAXReq, test };