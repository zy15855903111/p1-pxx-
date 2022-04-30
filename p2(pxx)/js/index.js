// 头部
// logo点击返回首页
document.images[0].onclick = (() => location.href = '../html/index.html')
// 登录
document.querySelector('header ')
// 搜索下拉框
const search_ul = document.querySelector('#search ul')
var searcher = function(){
  const input = document.querySelector('#search input')
  let times = ''
  input.onkeydown = function () {
    search_ul.style.display = 'block'
  }
  input.onblur = function () {
    search_ul.style.display = 'none'
  }
  input.oninput = function () {
    clearTimeout(times)
    times = setTimeout(function () {
      search(this.value);
    }.bind(this), 100)
  }
  function search(val) {
    let script = document.createElement("script");
    script.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + val + "&json=1&p=3&sid=22084_1436_13548_21120_22036_22073&req=2&csor=0&cb=callback";
    document.head.appendChild(script);
    script.remove();
  }
}
searcher()
function callback(data){
  let str = ''
  data.s.forEach(kw => {str += '<li>' + kw + '</li>'})
  search_ul.innerHTML = str
}







// 导航栏
// 显示二级菜单
document.querySelector('#eat').addEventListener(
  'mouseenter',function(){
    document.querySelector('#eat .erji').style.height = '300px'
  })
document.querySelector('#eat').addEventListener(
  'mouseleave',function(){
    document.querySelector('#eat .erji').style.height = '0'
  })
document.querySelector('#play').addEventListener(
  'mouseenter',function(){
    document.querySelector('#play .erji').style.height = '300px'
  })
document.querySelector('#play').addEventListener(
  'mouseleave',function(){
    document.querySelector('#play .erji').style.height = '0'
  })

// 轮播图
var slideshow = function(){
  const banner = document.querySelector('.banner .center'),
  la = document.querySelector('.left_arrow'),
  ra = document.querySelector('.right_arrow'),
  lis = document.querySelectorAll('.banner ul li'),
  h1s = document.querySelectorAll('.banner h1')
  let index = 0,lastindex = 0,times
  la.onclick = function(){
    lastindex = index
    index--
    index < 0 ? index = lis.length - 1 : index
    change()
  }
  ra.onclick = function(){
    lastindex = index
    index++
    index > lis.length - 1 ? index = 0 : index
    change()
  }
  lis.forEach((li,key) => {
    li.onclick = function(){
        lastindex = index
        index = key
        change()
    }
  });
  function cycle(){
    times = setInterval(() =>{
        ra.onclick()
    },3000)
  }
  cycle()
  banner.onmouseenter = function(){
    clearInterval(times)
  }
  banner.onmouseleave = function(){
    cycle()
  }
  function change(){
    lis[index].className = 'on'
    lis[lastindex].className = ''
    h1s[index].className = 'on'
    h1s[lastindex].className = ''
}}
slideshow()

// 选项卡
var TAB = function(){
  const lis = document.querySelectorAll('section ul>li')
  const articles = document.querySelectorAll('article')
  lis.forEach((val,key) =>{
    val.index = key
    val.onclick = function(){
      for(let j = 0; j < lis.length; j++){
        lis[j].className = ''
        articles[j].className = ''
      }
      this.className = 'on'
      articles[val.index].className = 'on'
    }
  })
}
TAB()

// 侧边倒计时
var countdown = function(){
  const target_time = new Date('2022-5-1 00:00:00')
  let timer = setInterval(function(){
    let li = document.querySelector('#countdown li')
    let current_time = new Date()
    let res = diffTime(current_time,target_time)
    let str = `${res.day}天${res.hours}小时<br><h4>${res.minutes}分钟${res.seconds}秒</h4>`
    li.innerHTML = str
  },1000)
}
countdown()
function diffTime(t1, t2) {
  var sub = Math.ceil(Math.abs(t1 - t2) / 1000)
  return {
    day: parseInt(sub / (60 * 60 * 24)),
    hours: parseInt(sub % (60 * 60 * 24) / (60 * 60)),
    minutes: parseInt(sub % (60 * 60) / 60),
    seconds: sub % 60
  }
}
