let lang=document.getElementById("language");
let codeInput=document.getElementById("codeinput");
let compileBtn=document.getElementById("compilebtn");
let codeOutput=document.getElementById("codeoutput");

lang.addEventListener("click",function(){
  codeOutput.innerHTML="";
  switch(lang.value){
  case '8':
    codeInput.value=`import java.util.*;
    public class Main
{
	public static void main(String[] args) {
		System.out.println("Hello Java");
	}
}`;
    break;
  case '4':
    codeInput.value=`console.log("Hello JavaScript")`;
    break;
  case '7':
     codeInput.value=` #include <stdio.h> 
  int main() 
  { 
    //Write Code Here

    printf("Hello World");
    return 0;
   }`;    break;
  case '77':
    codeInput.value=`#include <iostream>

using namespace std;

int main()
{
    cout<<"Hello C++";

    return 0;
}`;
    break;
  case 0:
    codeInput.innerHTML=`print ('Hello Python')`;
  break;
  default:
    codeInput.innerHTML=`print ('Hello Python')`;
}
 
})

compileBtn.addEventListener("click",function(){
let request=new XMLHttpRequest();
request.open("POST","https://codequotient.com/api/executeCode");
request.setRequestHeader("Content-Type", "application/json");
let codeBody= { 
  code:codeInput.value, 
  langId :lang.value
  };

//codeOutput.innerText=codeBody;
request.send(JSON.stringify(codeBody));
request.addEventListener("load", function(){
  let response=JSON.parse(request.responseText);
  console.log(response.codeId);  
  getCompilerOutput(response.codeId);
})
})


function getCompilerOutput(codeId){
  let req=new XMLHttpRequest();
  req.open("GET",`https://codequotient.com/api/codeResult/${codeId}`);
  req.send();
  req.addEventListener("load",function(){
      let res=JSON.parse(req.responseText);
      let data=JSON.parse(res.data);
      if(data.status=="Pending"){
        getCompilerOutput(codeId);
                    console.log(data);

      }
      else{
        if(data.errors!=""){
          codeOutput.innerHTML=data.errors;
                      console.log(data.errors);
        }
        else{
            codeOutput.innerHTML=data.output;
            console.log(data.output);
        }
      }
  })
}