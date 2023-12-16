function calculateAvailabeMoney(income, costs){
    return income - costs;
}
function calculateDailySpend(spend){
    return(spend/30).toFixed();
}
function calculateAccumulation(totalMonth, totalPercents){
    return ((totalMonth * totalPercents)/100).toFixed();
}
function calculateAnnualSavings(accumulation){
    return accumulation * 12;
}

function updateDOMValues(totalMonth, accumulation, totalDay, spend, totalYear){
    $('#total-month').val(totalMonth);
    $('#accumulation').val(accumulation);
    $('#total-day').val(totalDay);
    $('#spend').val(spend);
    $('#total-year').val(totalYear);
}

function strToNum(str){
    return str.val() ? parseInt(str.val()) : 0;
}

$(document).ready(function(){
    let totalPercents = 0;

    $('input').on('input', function(){
        const income = strToNum($('#income-salary')) + strToNum($('#income-freelance')) + strToNum($('#income-add1')) + strToNum($('#income-add2'));
        const costs = strToNum($('#cost-flat')) + strToNum($('#cost-house-service')) + strToNum($('#cost-transport')) + strToNum($('#cost-credits'));
        const totalMonth = calculateAvailabeMoney(income, costs);
        const accumulation = calculateAccumulation(totalMonth, totalPercents);
        const spend = totalMonth - accumulation;
        const totalDay = calculateDailySpend(spend);
        const totalYear = calculateAnnualSavings(accumulation)
        updateDOMValues(totalMonth, accumulation, totalDay, spend, totalYear);
    })

    $('#money-box-range').on('input', function(){
        totalPercents = $(this).val();
        $('#total-percents').html(totalPercents);

        const income = strToNum($('#income-salary')) + strToNum($('#income-freelance')) + strToNum($('#income-add1')) + strToNum($('#income-add2'));
        const costs = strToNum($('#cost-flat')) + strToNum($('#cost-house-service')) + strToNum($('#cost-transport')) + strToNum($('#cost-credits'));
        const totalMonth = calculateAvailabeMoney(income, costs);
        const accumulation = calculateAccumulation(totalMonth, totalPercents);
        const spend = totalMonth - accumulation;
        const totalDay = calculateDailySpend(spend);
        const totalYear = calculateAnnualSavings(accumulation)
        updateDOMValues(totalMonth, accumulation, totalDay, spend, totalYear);
    })
})

