function convertMoney(){
    let quantity = document.getElementById("quantity").value;
    let FromCurrency = document.getElementById("FromCurrency").value;
    let ToCurrency= document.getElementById("ToCurrency").value;
    let Result;

    if (FromCurrency == "USD" && ToCurrency == "VND"){
        Result = "Result:" + (quantity*23000)+ " Đồng"
        }
        else if (FromCurrency == "VND" && ToCurrency == "USD"){
            Result= "Result:" + (quantity/23000) + " $"
        }
        else if (FromCurrency == "VND"){
            Result= "Result:" + quantity + " Đồng"
        }
        else {
            Result= "Result:" + quantity + " $"
        }
        if(typeof Result != 'number')
        {
            alert('Mày phải nhập số vào thằng ngu !');
        }else
            document.getElementById("Result").innerHTML= Result
    }