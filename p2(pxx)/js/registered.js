// 头部
// logo点击返回首页
document.images[0].onclick = (() => location.href = '../html/index.html')

// 注册
const userObj = document.querySelector('#user')
const e_mailObj = document.querySelector('#e-mail')
const pwdObj = document.querySelector('#pwd')
const r_pwdObj = document.querySelector('#r_pwd')
const btnObj = document.querySelector('#btn')
let w = false,x = false,y = false,z = false
const userReg = /^[a-zA-Z\d]\w{2,18}[a-zA-Z\d]$/
const e_mailReg = /[a-zA-Z\d]{3,12}@[a-zA-Z\d]{2,9}.[a-z]{2,5}/
// 用户名
userObj.onblur = function(){
  let user_num = userObj.value
  if(!user_num) return
  if(userReg.test(user_num)){
    userObj.nextElementSibling.innerHTML = '账号通过'
    userObj.nextElementSibling.style.color = 'rgb(32, 255, 35)'
    w = true
    // userObj.previousElementSibling.style.display = 'block'
  }
  else{
    userObj.nextElementSibling.innerHTML = '由数字字母_组成，不能以_开头或结尾,长度4-20位'
    userObj.nextElementSibling.style.color = 'red'
  }
}
// 邮箱
e_mailObj.onblur = function(){
  let e_mail_num = e_mailObj.value
  if(!e_mail_num) return
  if(e_mailReg.test(e_mail_num)){
    e_mailObj.nextElementSibling.innerHTML = '邮箱可以'
    e_mailObj.nextElementSibling.style.color = 'rgb(32, 255, 35)'
    x = true
  }
  else{
    e_mailObj.nextElementSibling.innerHTML = '格式不正确'
    e_mailObj.nextElementSibling.style.color = 'red'
  }
}
// 密码
pwdObj.onblur = function(){
  let pwd_num = pwdObj.value.replace(/\s/g,'')
  if(pwd_num){
    r_pwdObj.onblur()
  }
  if(!pwd_num){
    pwdObj.nextElementSibling.innerHTML =''
    return
  }
  else{
    if(pwd_num.length < 6 || pwd_num.length > 20){
      y = false
      pwdObj.nextElementSibling.innerHTML = '密码长度不对'
      pwdObj.nextElementSibling.style.color = 'red'
      return
    }
    else{
      let a = 0 , b = 0 , c = 0;
      /\d+/.test(pwd_num) && (a=1);
      /[a-z]+/i.test(pwd_num) && ( b=1);
      /[^0-9a-z]+/i.test(pwd_num) && (c=1);
      if(a+b+c==1){
        pwdObj.nextElementSibling.innerHTML = '垃圾密码'
        pwdObj.nextElementSibling.style.color = 'red'
      }
      else if(a+b+c==2){
        pwdObj.nextElementSibling.innerHTML = '普通密码'
        pwdObj.nextElementSibling.style.color = 'rgb(255, 219, 42)'
      }
      else{
        pwdObj.nextElementSibling.innerHTML = '高质量密码'
        pwdObj.nextElementSibling.style.color = 'rgb(32, 255, 35)'
      }
      y=true;
    }
  }
}  
// 重复密码
r_pwdObj.onblur = function(){
  let r_pwd_num = r_pwdObj.value.replace(/\s/g,'')
  if(!r_pwd_num) return
  let pwd_num = pwdObj.value.replace(/\s/g,'')
  if(r_pwd_num === pwd_num){
    r_pwdObj.nextElementSibling.innerHTML = '一样的密码'
    r_pwdObj.nextElementSibling.style.color = 'rgb(32, 255, 35)'
    z = true
  }
  else{
    r_pwdObj.nextElementSibling.innerHTML = '密码不一样'
    r_pwdObj.nextElementSibling.style.color = 'red'
    z = false
  }
}
//注册按钮
btnObj.onclick = function(){
  if(w && x && y && z){
    confirm('提交成功')
    window.open('../html/login.html')
    window.close()
  }
}
