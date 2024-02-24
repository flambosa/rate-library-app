import axios from "axios";
// import https from "https"

// const httpsAgent = new https.Agent({
//   rejectUnauthorized: false
// })

const username = "cshield";
const patToken = "3AA4C80F2620997632D471688A45BCD150BE4B9F5772A45B653A3EBCCD20EAFB-1" 
const encodedCreds = Buffer.from(username + ":"+ patToken).toString('base64');
const jwt = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjIzMDNGQTQ5RUZGNThCOTg0MTk4MzJCMzk3NENBNTIzIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwOi8vaXNzdWVyLmV4YWN0YWwuY29tIiwibmJmIjoxNzA4NjY4MjE4LCJpYXQiOjE3MDg2NjgyMTgsImV4cCI6MTcwODY3MTgxOCwiYXVkIjpbIkNvc3RYIEFQSSIsImh0dHA6Ly9pc3N1ZXIuZXhhY3RhbC5jb20vcmVzb3VyY2VzIl0sInNjb3BlIjpbIm9wZW5pZCIsImNvc3R4IiwiaW50ZXJuYWwiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsicHdkIl0sImNsaWVudF9pZCI6ImNvc3R4Iiwic3ViIjoiMjAwNTJiMmYtNjQ5MS00ODkwLThiNjMtNzU5NDU4ODU2Yjg3IiwiYXV0aF90aW1lIjoxNzA4NjY4MjE4LCJpZHAiOiJsb2NhbCIsImVtYWlsIjoiY3NoaWVsZCIsInVpZCI6IjIwMDUyYjJmLTY0OTEtNDg5MC04YjYzLTc1OTQ1ODg1NmI4NyIsInNpZCI6IjU4MEI2MjMyRUI5RjUxRDFCRTdFOTFBMUU1Q0IxMzg0IiwianRpIjoiQkJEOEU4QTg4NURBNjY4MkUzQUU1MDA3MEU3NDAzODEifQ.EtL6gjAHgHG0_D00v9-KvtXiDvw2PRpwbxTHJnUCIgTdI_PEJs2viM6IYt8EDlz7ImnXdUjSApJAIDSj-hTvatmQj41LwbYp72G-1aIm0oa1Ze6scIMruWhZrOA4uHBI5EnRSk14HZdZ_kU1xfX8lh6rj6jhu02skFf9XBA6EOrtF49pCrMa0HxojDWETOeFq5ygN_A6EYHFrHHHI-FQjdY1p7TgTceWUPeH0OVctYrpx3SLLxK07c-KbVKA8lxlf3Bc45BC38drlcdxgfIcC1ownAiRrqXFTNhyicWdcYgm6ubGL_UN8DCYPT0WpeLptr3DLC5L7WckLM94pO4G7Q";
const useOdata = true;

export default axios.create({
  baseURL: "/api/odata/v1.0",
  headers: {
    'Authorization': `${useOdata ? 'Basic' : 'Bearer'} ` + (useOdata ? patToken : jwt),
    'Accept': '*/*',
    'Host': `localhost:${useOdata ? '17032':'17012'}}`,
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
},
//httpsAgent: httpsAgent
});