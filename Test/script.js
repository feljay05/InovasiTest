var tableData = [
          {
            id: 1372,
            productID: "10001",
            productName: "Test 1",
            amount: "1000",
            customerName: "abc",
            status: 0,
            transactionDate: "2022-07-10 11:14:52",
            createBy: "abc",
            createOn: "2022-07-10 11:14:52"
          },
          {
            id: 1373,
            productID: "10002",
            productName: "Test 2",
            amount: "2000",
            customerName: "abc",
            status: 0,
            transactionDate: "2022-07-11 13:14:52",
            createBy: "abc",
            createOn: "2022-07-10 13:14:52"
          },
          {
            id: 1374,
            productID: "10001",
            productName: "Test 1",
            amount: "1000",
            customerName: "abc",
            status: 0,
            transactionDate: "2022-08-10 12:14:52",
            createBy: "abc",
            createOn: "2022-07-10 12:14:52"
          },
          {
            id: 1375,
            productID: "10002",
            productName: "Test 2",
            amount: "1000",
            customerName: "abc",
            status: 1,
            transactionDate: "2022-08-10 13:10:52",
            createBy: "abc",
            createOn: "2022-07-10 13:10:52"
          },
          {
            id: 1376,
            productID: "10001",
            productName: "Test 1",
            amount: "1000",
            customerName: "abc",
            status: 0,
            transactionDate: "2022-08-10 13:11:52",
            createBy: "abc",
            createOn: "2022-07-10 13:11:52"
          },
          {
            id: 1377,
            productID: "10002",
            productName: "Test 2",
            amount: "2000",
            customerName: "abc",
            status: 0,
            transactionDate: "2022-08-12 13:14:52",
            createBy: "abc",
            createOn: "2022-07-10 13:14:52"
          },
          {
            id: 1378,
            productID: "10001",
            productName: "Test 1",
            amount: "1000",
            customerName: "abc",
            status: 0,
            transactionDate: "2022-08-12 14:11:52",
            createBy: "abc",
            createOn: "2022-07-10 14:11:52"
          },
          {
            id: 1379,
            productID: "10002",
            productName: "Test 2",
            amount: "1000",
            customerName: "abc",
            status: 1,
            transactionDate: "2022-09-13 11:14:52",
            createBy: "abc",
            createOn: "2022-07-10 11:14:52"
          },
          {
            id: 1380,
            productID: "10001",
            productName: "Test 1",
            amount: "1000",
            customerName: "abc",
            status: 0,
            transactionDate: "2022-09-13 13:14:52",
            createBy: "abc",
            createOn: "2022-07-10 13:14:52"
          },
          {
            id: 1381,
            productID: "10002",
            productName: "Test 2",
            amount: "2000",
            customerName: "abc",
            status: 0,
            transactionDate: "2022-09-14 09:11:52",
            createBy: "abc",
            createOn: "2022-07-10 09:11:52"
          },
          {
            id: 1382,
            productID: "10001",
            productName: "Test 1",
            amount: "1000",
            customerName: "abc",
            status: 0,
            transactionDate: "2022-09-14 10:14:52",
            createBy: "abc",
            createOn: "2022-07-10 10:14:52"
          },
          {
            id: 1383,
            productID: "10002",
            productName: "Test 2",
            amount: "1000",
            customerName: "abc",
            status: 1,
            transactionDate: "2022-08-15 13:14:52",
            createBy: "abc",
            createOn: "2022-07-10 13:14:52"
          }
]

$('th').on('click', function(){
    var column = $(this).data("column")
    var order = $(this).data("order")
    var text = $(this).html()
    text = text.substring(0, text.length - 1)
    console.log('Column was clicked', column, order);

    if(order = 'desc'){
        $(this).data('order', 'asc')
        tableData = tableData.sort((a,b)=> a[column] > b[column] ? 1 : -1)
        text += '&#9660'
    }else{
        $(this).data('order', 'desc')
        tableData = tableData.sort((a,b)=> a[column] < b[column] ? 1 : -1)
        text += '&#9650'
    }
    $(this).html(text)
})

for(var i in tableData){
    var row = `
    <tr>
    <td>${tableData[i].id}</td>
    <td>${tableData[i].productID}</td>
    <td>${tableData[i].productName}</td>
    <td>${tableData[i].amount}</td>
    <td>${tableData[i].customerName}</td>
    <td>${tableData[i].status}</td>
    <td>${tableData[i].transactionDate}</td>
    <td>${tableData[i].createBy}</td>
    <td>${tableData[i].createOn}</td>
    </tr>
    `
    var table = $('#table-body')
    table.append(row);
}

const group = tableData.reduce((group, trans)=>{
    const date = trans.transactionDate.split(' ')[0];
    if(!group[date]){
        group[date]=[];
    }
    group[date].push(trans);
    return group;
},{});

const groupArrays = Object.keys(group).map((date)=>{
    return{
        date
    };
});

var table = document.getElementById("table"), rIndex;
for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
        rIndex = this.rowIndex;
        console.log(rIndex);
        
        document.getElementById("id").value = this.cells[0].innerHTML;
        document.getElementById("productId").value = this.cells[1].innerHTML;
        document.getElementById("productName").value = this.cells[2].innerHTML;
        document.getElementById("amount").value = this.cells[3].innerHTML;
        document.getElementById("customerName").value = this.cells[4].innerHTML;
        document.getElementById("status").value = this.cells[5].innerHTML;
        document.getElementById("transDate").value = this.cells[6].innerHTML;
        document.getElementById("cBy").value = this.cells[7].innerHTML;
        document.getElementById("cOn").value = this.cells[8].innerHTML;
    };
}

function editRow()
{
    table.rows[rIndex].cells[0].innerHTML = document.getElementById("id").value;
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("productId").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("productName").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("amount").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("customerName").value;
    table.rows[rIndex].cells[5].innerHTML = document.getElementById("status").value;
    table.rows[rIndex].cells[6].innerHTML = document.getElementById("transDate").value;
    table.rows[rIndex].cells[7].innerHTML = document.getElementById("cBy").value;
    table.rows[rIndex].cells[8].innerHTML = document.getElementById("cOn").value;
}
// ADD
// function checkEmptyInput()
//             {
//                 var isEmpty = false,
//                     id = document.getElementById("id").value,
//                     productId = document.getElementById("productId").value,
//                     productName = document.getElementById("productName").value,
//                     amount = document.getElementById("amount").value,
//                     customerName = document.getElementById("customerName").value,
//                     status = document.getElementById("status").value,
//                     transDate = document.getElementById("transDate").value,
//                     cBy = document.getElementById("cBy").value,
//                     cOn = document.getElementById("cOn").value,;
            
//                 if(id === ""){
//                     alert("Id Cannot Be Empty");
//                     isEmpty = true;
//                 }
//                 else if(productId === ""){
//                     alert("Product Id Cannot Be Empty");
//                     isEmpty = true;
//                 }
//                 else if(productName === ""){
//                     alert("Product Name Cannot Be Empty");
//                     isEmpty = true;
//                 }
//                 else if(amount === ""){
//                     alert("Amount Cannot Be Empty");
//                     isEmpty = true;
//                 }
//                 else if(customerName === ""){
//                     alert("Customer Name Cannot Be Empty");
//                     isEmpty = true;
//                 }
//                 else if(status === ""){
//                     alert("Status Cannot Be Empty");
//                     isEmpty = true;
//                 }
//                 else if(transDate === ""){
//                     alert("Transaction Date Cannot Be Empty");
//                     isEmpty = true;
//                 }
//                 else if(cBy === ""){
//                     alert("Created By Cannot Be Empty");
//                     isEmpty = true;
//                 }
//                 else if(cOn === ""){
//                     alert("Created On Cannot Be Empty");
//                     isEmpty = true;
//                 }
//                 return isEmpty;
//             }

// function addRow()
// {
//     if(!checkEmptyInput()){
//         var newRow = table.insertRow(table.length),
//                 cell1 = newRow.insertCell(0),
//                 cell2 = newRow.insertCell(1),
//                 cell3 = newRow.insertCell(2),
//                 cell4 = newRow.insertCell(3),
//                 cell5 = newRow.insertCell(4),
//                 cell6 = newRow.insertCell(5),
//                 cell7 = newRow.insertCell(6),
//                 cell8 = newRow.insertCell(7),
//                 cell9 = newRow.insertCell(8),
//                 id = document.getElementById("id").value,
//                 productId = document.getElementById("productId").value,
//                 productName = document.getElementById("productName").value,
//                 amount = document.getElementById("amount").value,
//                 customerName = document.getElementById("customerName").value,
//                 status = document.getElementById("status").value,
//                 transDate = document.getElementById("transDate").value,
//                 cBy = document.getElementById("cBy").value,
//                 cOn = document.getElementById("cOn").value,;
            
//                 cell1.innerHTML = id;
//                 cell2.innerHTML = productId;
//                 cell3.innerHTML = productName;
//                 cell4.innerHTML = amount;
//                 cell5.innerHTML = customerName;
//                 cell6.innerHTML = status;
//                 cell7.innerHTML = transDate;
//                 cell8.innerHTML = cBy;
//                 cell9.innerHTML = cOn;
//                 selectedRowToInput();
//     }
// }