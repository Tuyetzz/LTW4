
function goBackToStatsPage()
{
    window.location.href = "../admin.html";
}

var stdInfo = [
    {'key': 1, 'msv': 'B21DCCN353', 'acc': 'slayerGod553', 'class':'E21CQCN09', 'name':'Vũ Cuồng Phong', 'dob':'28/09/2004', 'gpa': 3.2},
    {'key': 2, 'msv': 'B19DCCN553', 'acc': 'GpaDESTROYERSSStier3', 'class':'T21CQCN05', 'name':'Hoả Dực Long', 'dob':'28/07/2005', 'gpa': 3.9},
    {'key': 3, 'msv': 'B22DCCN003', 'acc': 'GODofCODE0101', 'class':'C21CQCN11', 'name':'Thuỷ Chi Vực', 'dob':'17/08/2003', 'gpa': 2.7},
]

var testData = [
    {'key': 1, 'testInfo' : [
        {'key' : 1, 'name' : 'Kzabazba', 'point': 100, 'state' : 'Đã hoàn thành', 'time' : '03/12/2024 11:00 AM - 03/12/2024 01:00 PM'},
        {'key' : 2, 'name' : 'Custom Valorant', 'point' : 80, 'state' : 'Đã hoàn thành', 'time' : '03/10/2024 08:00 AM - 03/10/2024 11:00 AM'},
        {'key' : 3, 'name' : 'From nowhere to somewhere - AI competition', 'point' : 'No data', 'state' : 'Chưa hoàn thành', 'time' : '04/10/2024 08:00 AM - 04/10/2024 07:00 AM'},
    ]},
    {'key': 2, 'testInfo' : [
        {'key' : 1, 'name' : 'K++ Programming', 'point': 100, 'state' : 'Đã hoàn thành', 'time' : '03/12/2024 11:00 AM - 03/12/2024 01:00 PM'},
        {'key' : 2, 'name' : 'Hack WIFI pratice', 'point' : 70, 'state' : 'Đã hoàn thành', 'time' : '03/10/2024 09:00 AM - 03/10/2024 11:00 AM'},
        {'key' : 3, 'name' : 'From nowhere to somewhere - AI competition', 'point' : 'No data', 'state' : 'Chưa hoàn thành', 'time' : '04/10/2024 08:00 AM - 04/10/2024 07:00 AM'},
    ]},
    {'key': 3, 'testInfo' : [
        {'key' : 1, 'name' : 'naver test', 'point': 75, 'state' : 'Đã hoàn thành', 'time' : '01/12/2024 11:00 AM - 01/12/2024 01:00 PM'},
        {'key' : 2, 'name' : 'Custom Valorant', 'point' : 80, 'state' : 'Đã hoàn thành', 'time' : '03/10/2024 08:00 AM - 03/10/2024 11:00 AM'},
    ]},
]

var testDetail = [
    {'keyPerson' : 1, 'keyTest' : 1, 'detail' : {'score' : 90, 'correctAns' : 9, 'QsQuantity' : 10, 'QsDetail' : [
        {'Qs' : 'How many ballonDor does Ronaldo have?', 'A' : '4', 'B' : '5', 'C' : '6', 'D' : '100', 'Ans' : 'B', 'stdChoice' : 'B', 'state' : '✓'},
        {'Qs' : 'Messi or Ronaldo, who is the GOAT?', 'A' : 'Messi', 'B' : 'Ronaldo', 'C' : 'Both deserved', 'D' : 'Nah, I am the Goat', 'Ans' : 'C', 'stdChoice' : 'C', 'state' : '✓'},
        {'Qs' : 'Is Manchester United the greatest football club of all time?', 'A' : 'No, Real Madrid is', 'B' : 'Liverpool W negative diff', 'C' : 'Man City is way better', 'D' : 'YES, MU is the GOAT of club', 'Ans' : 'D', 'stdChoice' : 'A', 'state' : '✕'},
    ]}}
]

function checkTest(stdKey, stdTestKey)
{
    var foundObject = testDetail.find(element => element.keyPerson == stdKey && element.keyTest == stdTestKey);
    var foundStd = stdInfo.find(element => element.key == stdKey);
    if(!foundObject) return;
    var newWindow = window.open('stdResultPage.html', '_blank');
    newWindow.onload = function(){
        var test = foundObject.detail;
        var stdResult = test.QsDetail;
        
        var overall = newWindow.document.getElementById("overall");
        overall.innerHTML = `<h1 style = "margin-top: 10px">Mã sinh viên: ${foundStd.msv}</h1>   
                            <h1>Họ và tên: ${foundStd.name}</h1><br> 
                            <h1>Score: ${test.score}</h1>
                            <h1>Correct Answers: ${test.correctAns}/${test.QsQuantity}<h1>`;
                            

        var resultTable = newWindow.document.getElementById("resultTable");
        resultTable.innerHTML = '';

        for(var i = 0; i < stdResult.length; ++i)
        {
            var row = `<tr>
                            <td>${i+1}</td>
                            <td>${stdResult[i].Qs}</td>
                            <td>${stdResult[i].A}</td>
                            <td>${stdResult[i].B}</td>
                            <td>${stdResult[i].C}</td>
                            <td>${stdResult[i].D}</td>
                            <td>${stdResult[i].Ans}</td>
                            <td>${stdResult[i].stdChoice}</td>
                            <td>${stdResult[i].state}</td>
                        </tr>`;
            resultTable.innerHTML += row;
        }
        if(stdResult.length == 0) resultTable.innerHTML = `<div><label>Không tìm thấy dữ liệu</label></div>`;
    }
}

function searchStd()
{
    var searchValue = document.getElementById("searchBar").value;
    var std = stdInfo.find(element => element.msv === searchValue);
    createTable(std.key);

    document.getElementById("msv").textContent =`Mã sinh viên: ${std.msv}`;
    document.getElementById("stdAcc").textContent =`Tài khoản sinh viên: ${std.acc}`;
    document.getElementById("stdClass").textContent =`Lớp: ${std.class}`;
    document.getElementById("stdName").textContent =`Họ và tên: ${std.name}`;
    document.getElementById("stdDob").textContent =`Ngày sinh: ${std.dob}`;
    document.getElementById("stdGpa").textContent =`GPA:  ${std.gpa}`;
}

function createTable(key)
{
    var testTable = document.getElementById("testTable");
    testTable.innerHTML = '';
    var testInfo = testData.find(element => element.key == key);
    testInfo = testInfo.testInfo;
    for(var i = 0; i < testInfo.length; ++i)
    {
        var row = `<tr>
                        <td>${i+1}</td>
                        <td>${testInfo[i].name}</td>
                        <td>${testInfo[i].point}</td>
                        <td>${testInfo[i].state}</td>
                        <td>${testInfo[i].time}</td>
                        <td>
                            <button onclick = "checkTest(${key}, ${testInfo[i].key})">Xem chi tiết</button>
                        </td>
                    </tr>`;
        testTable.innerHTML += row;
    }
    if(testInfo.length == 0) testTable.innerHTML = `<div style = 'width: 100%'><label style = 'text-align: center'>Không tìm thấy dữ liệu</label></div>`
}

document.addEventListener('DOMContentLoaded', function () {
    var searchBar  = document.getElementById('searchBar');
    var suggestionsList = document.getElementById('suggestions-list');

    searchBar.addEventListener('input', function () {
        var searchTerm = searchBar.value.toLowerCase();
        var suggestions = getSuggestions(searchTerm);

        suggestionsList.innerHTML = '';

        suggestions.forEach(function (suggestion) {
            var suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = suggestion;

            suggestionItem.addEventListener('click', function () {
                searchBar.value = suggestion;
                suggestionsList.innerHTML = '';
            });

            suggestionsList.appendChild(suggestionItem);
        });
    });

    // Mock function to get suggestions (replace with your own logic)
    function getSuggestions(searchTerm) {
        var suggestions = stdInfo.map(function(obj){
            return obj.msv;
        });

        return suggestions.filter(function (item) {
            return item.toLowerCase().includes(searchTerm);
        });
    }

    // Close suggestions on outside click
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.search-container')) {
            suggestionsList.innerHTML = '';
        }
    });
});