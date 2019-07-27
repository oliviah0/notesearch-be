# API Documentation for Conceptual Question and Answers Search

| HTTP VERB | URL |
| --- | ---|
| GET | /api/search?words={words}|
| GET | /api/random?amount={amount} | 
---
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