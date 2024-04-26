
function testGS(){
    const url = "https://script.googleusercontent.com/macros/echo?user_content_key=8rs4p77RFatMLqhyESMwuyGqgPINNekXukAjNUEv5Up7_1Ls1DGHZKkzmTbDoriJNB3m3Cy4EfqEaPcgPKDwqKROCRGeki8jm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNn2lZUnnM_Kinrlc7byQIMa0KdIt_wadetA6CzmL07mdEE4eohctcAXh7Q9jGTz05Hk-6hL3L6RrYO1I0mIh7RSOveqWQl1ldz9Jw9Md8uu&lib=MMrMLSgLf53QZxoig7Iv7u_jbiaRlqVGX";

    fetch(url)
        .then(d => d.json())
        .then(d => {
    
               document.getElementById("app").textContent = d[0].status;
    
        });
}

document.getElementById("btn").addEventListener("click",testGS);