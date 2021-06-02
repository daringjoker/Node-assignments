const FS=require("fs");
let msg="This is being written from node using fs package";
//create file
FS.writeFile("output.txt",msg,(err)=>{
    if(err) throw err;
});

//read File
FS.readFile("output.txt",{encoding:"utf-8"},(err,data)=>{
    if(err) throw err;
    else if(data===msg){
        console.log("messege written and read successfully");
        console.log(data);
    }
    else{
        console.log("messege read is different than message written");
        console.log(data +" !== " +msg)
    }
})

//append file
FS.appendFile("output.txt","\n Succesful",(err)=>{
    if(err) throw err;
});

//delete file

setTimeout(()=>{
    console.log(FS.rmdir)
    FS.unlink("output.txt",(err)=>{
        if(err) throw err;
        else{
            console.log("file removed successfully!!");
        }
    })
},5000);