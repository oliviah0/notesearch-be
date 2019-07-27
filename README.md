# API Documentation for Conceptual Question and Answers Search

Base URL is:
```
https://notessearch-be.herokuapp.com
```

| HTTP VERB | URL |
| --- | ---|
| GET | /api/
| GET | /api/search?words={words}|
| GET | /api/random?amount={amount} | 
---

## GET /api
This route takes no paramters, it just wakes up the heroku server from sleeping.
Once finished, it will return a JSON object :
```
{ loaded : true }
```
## GET /api/search?words={words}
#### URI Parameters
| Name | Input | Required | Type | Description |
| --- | --- | --- | --- | --- |
| words | query | True | string | Search words, space separated

### Response

Returns a JSON, with property `results`
Which is an array of { question , answer 
}
```
{
  results :  
    [
      { 
        question: string,
        answer: Array of strings
      }
    ]
}
```

## GET /api/random?amount={amount}
#### URI Parameters
| Name | Input | Required | Type | Description |
| --- | --- | --- | --- | --- |
| amount | query | False | integer | Amount of random Q/A's you want to pull

### Response

Returns a JSON, with property `results`
Which is an array of { question , answer 
}
```
{
  results :  
    [
      { 
        question: string,
        answer: Array of strings
      }
    ]
}