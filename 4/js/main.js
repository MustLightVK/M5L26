function calculateFinancialValues() {
    const totalPercents = $('#money-box-range').val();

    const income = strToNum($('#income-salary')) + strToNum($('#income-freelance')) + strToNum($('#income-add1')) + strToNum($('#income-add2'));
    const costs = strToNum($('#cost-flat')) + strToNum($('#cost-house-service')) + strToNum($('#cost-transport')) + strToNum($('#cost-credits'));

    const totalMonth = income - costs;

    const accumulation = ((totalMonth * totalPercents) / 100).toFixed();

    const spend = totalMonth - accumulation;
    const totalDay = (spend / 30).toFixed();
    const totalYear = accumulation * 12;

    return {
        totalMonth,
        accumulation,
        totalDay,
        spend,
        totalYear
    };
}


function updateDOMValues(values) {
    $('#total-month').val(values.totalMonth);
    $('#accumulation').val(values.accumulation);
    $('#total-day').val(values.totalDay);
    $('#spend').val(values.spend);
    $('#total-year').val(values.totalYear);
}

function strToNum(str) {
    return str.val() ? parseInt(str.val()) : 0;
}

$(document).ready(function () {
    $('input').on('input', function () {
        const financialValues = calculateFinancialValues();
        updateDOMValues(financialValues);
    });

    $('#money-box-range').on('input', function () {
        const financialValues = calculateFinancialValues();
        updateDOMValues(financialValues);
        $('#total-percents').html($('#money-box-range').val());
    });
});

