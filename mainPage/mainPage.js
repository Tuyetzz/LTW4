function toggleDropdown()
{
    var dropdown = document.getElementById("dropdownFrame");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function toLoginPage()
{
    window.location.href = '../index.html';
}


function openDateInput(){

    var stateType = document.getElementById("stateType").value;
    var dateInputFrame = document.getElementById("dateInputFrame");

    switch(stateType){
        case "Tất cả":
            dateInputFrame.innerHTML = '';
            break;
        case "Tự do":
            dateInputFrame.innerHTML = '';
            break;
        case "Theo lịch":
            dateInputFrame.innerHTML = `<label for = "dateInput">Ngày thi: </label>
                                    <input type = "date" id = "dateInput" style = "margin-left: 5px; margin-right: 5px; height: 25px;">
                                    <label for = "fromTimeInput">Từ: </label>
                                    <input type = "time" id = "fromTimeInput" style = "margin-left: 5px; margin-right: 5px; height: 25px;">
                                    <label for = "toTimeInput">Đến: </lable>
                                    <input type = "time" id = "toTimeInput" style = "margin-left: 5px; margin-right: 5px; height: 25px;">
                                    <label for = "sortType">Sắp xếp: </label>
                                    <select id = "sortType" style = "margin-left: 5px; margin-right: 5px; height: 25px;">
                                        <option value = "Sớm nhất">Sớm nhất</option>;
                                        <option value = "Muộn nhất">Muộn Nhất</option>;
                                    </select>`
            break;
        default:
    }
}

var data = [
    {'key': 1,'type':"Luyện tập", 'name':"kiểm tra iq", 'description':"bài thi 35 phút",'state':"Tự do",'date':"Không", 'time':"Không"},
    {'key': 2,'type':"Giữa kỳ", 'name':"C++ Mid test", 'description':"bài thi 60 phút",'state':"Theo lịch",'date':"03/04/2024", 'time':"11:00 AM"},
    {'key': 3,'type':"Giữa kỳ", 'name':"Hack Nasa", 'description':"bài thi 60 phút",'state':"Theo lịch",'date':"03/23/2024", 'time':"11:00 AM"},
    {'key': 4,'type':"Cuối kỳ", 'name':"Olumpda", 'description':"bài thi 60 phút",'state':"Theo lịch",'date':"03/24/2024", 'time':"09:00 AM"},
    {'key': 5,'type':"Giữa kỳ", 'name':"Thi ngoai ngu", 'description':"bài thi 60 phút",'state':"Theo lịch",'date':"03/12/2024", 'time':"07:00 AM"},
    {'key': 6,'type':"Cuối kỳ", 'name':"BT Lớn ATTT", 'description':"bài thi 60 phút",'state':"Theo lịch",'date':"03/20/2024", 'time':"06:00 PM"},
    {'key': 7,'type':"Giữa kỳ", 'name':"C++ Final test", 'description':"bài thi 60 phút",'state':"Theo lịch",'date':"03/19/2024", 'time':"03:00 PM"},
    {'key': 8,'type':"Cuối kỳ", 'name':"CNPM thực hành", 'description':"bài thi 60 phút",'state':"Theo lịch",'date':"04/03/2024", 'time':"09:00 PM"},
    {'key': 9,'type':"Cuối kỳ", 'name':"lịch sử đảng", 'description':"bài thi 60 phút",'state':"Theo lịch",'date':"04/15/2024", 'time':"08:15 AM"},
    {'key': 10,'type':"Luyện tập", 'name':"luyện tập mảng", 'description':"bài thi 25 phút",'state':"Tự do",'date':"Không", 'time':"Không"},
    {'key': 11,'type':"Luyện tập", 'name':"luyện tập AI", 'description':"bài thi 15 phút",'state':"Tự do",'date':"Không", 'time':"Không"},
    {'key': 12,'type':"Luyện tập", 'name':"câu hỏi ngân hàng đề vxl", 'description':"bài thi 15 phút",'state':"Tự do",'date':"Không", 'time':"Không"},
    {'key': 13,'type':"Luyện tập", 'name':"Thế giới động vật", 'description':"bài thi 35 phút",'state':"Tự do",'date':"Không", 'time':"Không"},
    {'key': 14,'type':"Luyện tập", 'name':"Luyện tập ICPC", 'description':"bài thi 45 phút",'state':"Tự do",'date':"Không", 'time':"Không"},
    {'key': 15,'type':"Luyện tập", 'name':"test skill", 'description':"bài thi 45 phút",'state':"Theo lịch",'date':"03/05/2024", 'time':"04:00 PM"}, 
]

var currentKey = null;

function startTest(recievedKey)
{
    const theTest = data.find(element => element.key == recievedKey);
    if(theTest.state == "Theo lịch")
    {
        let now = new Date();
        let openTime = new Date(`${theTest.date} ${theTest.time}`);
        if(now.getTime() < openTime.getTime())
        {
            window.alert("Bài thi chưa đến hạn mở. Vui lòng quay lại sau!");
            return;
        }
    }
    window.alert("Tham gia thi thành công.");
    currentKey = recievedKey;
    localStorage.setItem('testKey', currentKey);
    window.location.href = 'testInteface/testInterface.html'
    
}


createTable(data);

function createTable(data)
{
    var testTable = document.getElementById("testTable");
    testTable.innerHTML = '';
    for(var i = 0; i < data.length; ++i)
    {
        var row = `<tr>
                        <td>${i+1}</td>
                        <td>${data[i].type}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].description}</td>
                        <td>${data[i].state}</td>
                        <td>${data[i].date}</td>
                        <td>${data[i].time}</td>
                        <td>
                            <button onclick = "startTest(${data[i].key})">Bắt đầu</button>
                        </td>
                    </tr>`;
        testTable.innerHTML += row;
    }
    if(data.length == 0) testTable.innerHTML = `<div style = 'width: 100%'><label style = 'text-align: center'>Không tìm thấy dữ liệu</label></div>`
}

function convertTo24HourFormat(timeString) {
    const [time, period] = timeString.split(' ');
    const [hours, minutes] = time.split(':');

    let adjustedHours = parseInt(hours, 10);
    if (period === 'PM' && adjustedHours !== 12) {
        adjustedHours += 12;
    } else if (period === 'AM' && adjustedHours === 12) {
        adjustedHours = 0;
    }

    return new Date(0, 0, 0, adjustedHours, parseInt(minutes, 10));
}


function query()
{
    var testType = document.getElementById("testType").value;
    var testState = document.getElementById("stateType").value;
    var testDate = null, fromTime = null, toTime = null;
    var testName = document.getElementById("testName").value;
    if(testState == "Theo lịch")
    {
        testDate = document.getElementById("dateInput").value;
        fromTime = document.getElementById("fromTimeInput").value;
        toTime = document.getElementById("toTimeInput").value;
    }

    var filterArray = data.filter(function(object){
        var cdt1 = true, cdt2 = true, cdt3 = true, cdt4 = true, cdt5 = true;
        if(testType != "Tất cả")
        {
            if(testType != object.type) cdt1 = false;
        }
        if(testState != "Tất cả")
        {
            if(testState != object.state) cdt2 = false;
        }
        if(object.state == "Theo lịch" && testState == "Theo lịch"){
            if(testDate != ""){
                var queryDate = new Date(testDate); 
                queryDate = queryDate.toLocaleDateString('en-GB');
                cdt3 = queryDate === object.date;
            }

            if(fromTime != "" && toTime != ""){
                var queryFromTime = convertTo24HourFormat(fromTime);
                var queryToTime = convertTo24HourFormat(toTime);
                var currentTime = convertTo24HourFormat(object.time);
                cdt4 = currentTime >= queryFromTime && currentTime <= queryToTime;
            }
        }
        if(testName != "")
        {
            if(object.name != testName) cdt5 = false;
        }
        return cdt1 && cdt2 && cdt3 && cdt4 && cdt5;
    });

    if(testState == "Theo lịch"){
        var sortType = document.getElementById("sortType").value;
        if(sortType == "Sớm nhất") {
            filterArray.sort((a, b) => {
                const A = new Date(`${a.date} ${a.time}`);
                const B = new Date(`${b.date} ${b.time}`);
                return A.getTime() - B.getTime();
            });
        }
        else filterArray.sort((a, b) => {
            const A = new Date(`${a.date} ${a.time}`);
            const B = new Date(`${b.date} ${b.time}`);
            return B.getTime() - A.getTime();
        }); 
    }
    
    createTable(filterArray);
}

document.addEventListener('DOMContentLoaded', function () {
    var testName = document.getElementById('testName');
    var suggestionsList = document.getElementById('suggestions-list');

    testName.addEventListener('input', function () {
        var searchTerm = testName.value.toLowerCase();
        var suggestions = getSuggestions(searchTerm);

        suggestionsList.innerHTML = '';

        suggestions.forEach(function (suggestion) {
            var suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = suggestion;

            suggestionItem.addEventListener('click', function () {
                testName.value = suggestion;
                suggestionsList.innerHTML = '';
            });

            suggestionsList.appendChild(suggestionItem);
        });
    });

    // Mock function to get suggestions (replace with your own logic)
    function getSuggestions(searchTerm) {
        var suggestions = data.map(function(obj){
            return obj.name;
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