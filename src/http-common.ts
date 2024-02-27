import axios from "axios";
// import https from "https"

// const httpsAgent = new https.Agent({
//   rejectUnauthorized: false
// })

const username = "cshield";
const patToken = "3AA4C80F2620997632D471688A45BCD150BE4B9F5772A45B653A3EBCCD20EAFB-1" 
const encodedCreds = Buffer.from(username + ":"+ patToken).toString('base64');
const jwt = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIzMDNGQTQ5RUZGNThCOTg0MTk4MzJCMzk3NENBNTIzIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwOi8vaXNzdWVyLmV4YWN0YWwuY29tIiwibmJmIjoxNzA5MDE4NzQwLCJpYXQiOjE3MDkwMTg3NDAsImV4cCI6MTcwOTAyMjM0MCwiYXVkIjpbIkNvc3RYIEFQSSIsImh0dHA6Ly9pc3N1ZXIuZXhhY3RhbC5jb20vcmVzb3VyY2VzIl0sInNjb3BlIjpbIm9wZW5pZCIsImNvc3R4IiwiaW50ZXJuYWwiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6ImNvc3R4Iiwic3ViIjoiMjAwNTJiMmYtNjQ5MS00ODkwLThiNjMtNzU5NDU4ODU2Yjg3IiwiYXV0aF90aW1lIjoxNzA5MDE4NzQwLCJpZHAiOiJsb2NhbCIsImVtYWlsIjoiY3NoaWVsZCIsInVpZCI6IjIwMDUyYjJmLTY0OTEtNDg5MC04YjYzLTc1OTQ1ODg1NmI4NyIsInNpZCI6IkFEM0QxRURCMUUxQThDMjlFREI2MDI2NDZEOTM3NUVBIiwianRpIjoiODQwQTNDOUE3MzE2MzU4NEJGQTVDMjUyN0I5Q0I0NDUifQ.C2WLacsMo7hclv12sNBgSbk4kJ02ogl78pf8hJ9aDuLUWNFZDcSJ2kCN_-Y-uJkv1oD1IpOPQdNxpuAtlnpT0oZMMZbrdAbOJoCieeUCvZS5fdj9SwluFuaC1jtdFIe7n3lrKfAX1IH9srxHkkHX41BXtGHyVjowDPphq_sJlD2oA_hOK3KYh6fPXJOAflWDV7Blge3co_oHhTCAMBP6IV9ezqrrKrJI1kpvC-mCNbE7YwtAeY7v3_MyBa-PB3q2o8A8zsHRHDWt-yDmbWX8r8yYwZ0kd2Fx20uSDe0kqaT4mE2M5cby9Pp-iLSwXsB-eOPre9tMdd1z1pgZFVSO_A";
const useOdata = false;

export default axios.create({
  baseURL: "/api/v2",
  headers: {
    'Authorization': `${useOdata ? 'Basic' : 'Bearer'} ` + (useOdata ? patToken : jwt),
    'Accept': '*/*',
    'Host': `localhost:${useOdata ? '17032':'17012'}}`,
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
},
//httpsAgent: httpsAgent
});