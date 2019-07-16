# API Documentation for Conceptual Notes Search

| HTTP VERB | URL |
| --- | ---|
| GET | /api/search?words={words}|
---
### URI Parameters
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