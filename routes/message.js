const express=require('express')
//const data=require('/data')
const router=express.Router()
const fs=require('fs')

router.get('/',(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{

        if(err)
        {
            console.log(err)
            data="No chat exists"

        }
        res.send(`${data}<form action='/' onSubmit="document.getElementById('username').value=localStorage.getItem('username')" method='POST'>
        <input id='message' name='message' type='text' placeholder='Enter the message'>
        <input type='hidden' name='username' id='username'>
        <button type='submit'> Send </button></form>`)
    })
   
})

router.post('/',(req,res,next)=>{
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("username.txt",`${req.body.username} : ${req.body.message} <br>`,{flag:'a'}, (err)=> err ? console.log(err) :  res.redirect('/'))
    //data.push(`${req.body.username} : ${req.body.message}`)
})

module.exports=router