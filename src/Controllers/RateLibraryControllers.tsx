

export async function GetRateLibrariesController() {
    try {
          const response = await fetch('https//localhost:17032/odata/v1.0/$metadata#RateLibraries',{
            method: "GET",
            headers: {
                Authorization: "Basic Y3NoaWVsZDozQUE0QzgwRjI2MjA5OTc2MzJENDcxNjg4QTQ1QkNEMTUwQkU0QjlGNTc3MkE0NUI2NTNBM0VCQ0NEMjBFQUZCLTE=",
                Accept: 'application/json',
                ContentType: 'application/json',
                Host: 'localhost:17032',
                AcceptEncoding: 'gzip, deflate, br',
                Connection: 'keep-alive',
                UserAgent: "cshield"
        }
    })

    response.ok;
    const result = await response.json();
    return result;  
    }
    catch (error) {
        console.log(error)
    }
}