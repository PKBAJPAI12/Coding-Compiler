# CodeQuotient Assignment Coding Compiler

## User story 1:

You've to create a text editor to write your code, a output console to show output of your code and an option to select programming languages.

## User story 2:

There is also a button to compile the code. When you click on that button a POST request with code & language ID ( Python : 0 , JavaScript : 4 , C : 7 , C++ : 77 , Java : 8) send to server.

PFB the details of API

URL : https://codequotient.com/api/executeCode

Method : POST

DATA to Send : { "code" : "" , langId : ""}



## User story 3:

In response you 'll get an object with key error or codeId( your code submission ID to fetch result).

In case of error response is :

{"error":"Code is null"}
In case of success response is :

 {"codeId":"fghfghgkhk"}
## User story 4:

If your code is submitted successfully you'll receive a codeId. This id is used for fetch the result after interval of time. When you get the output, clear the interval

## User story 5:

You need to send a get request with codeId to fetch the result. In result of this request you get an object.

PFB the details of API

URL : https://codequotient.com/api/codeResult/${codeId}

Method : Get

If object's data field is empty it means result is not ready or removed from server.

{"data":{}}
If result is ready you'll get output or errors in data's object.

{"data"{output: "", langid: "0", code: "", errors: " "}}
