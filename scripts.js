function def()
{
    let obj=document.getElementById("numyears");
    for(let i=1;i<10;i++)
    {
        let temp=document.createElement("option");
        temp.text=""+i;
        temp.value=i;
        obj.appendChild(temp);
    }
}
function displayrate()
{
    let year=document.getElementById("roi");
    document.getElementById("selected_rate").innerHTML=year.value;
}
function calculate()
{
    let amount=document.getElementById("amount").value;
    let roi=document.getElementById("roi").value;
    let year=document.getElementById("numyears").value;
    let total=(amount*roi*year)/100;
    total+=amount;
    
    let endyear=new Date().getFullYear()+parseInt(year);
    

    document.getElementById("result").innerHTML="the total money is "+total+" earned on "+amount+" over "+year+" and will be given on "+endyear;
}