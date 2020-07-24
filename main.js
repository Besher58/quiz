let data=[
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
      question:"Which ocean lies on the east coast of the United States?",
      choice:["Eastern","Pacific","Indian","Atlantic"],
      answer:"Atlantic"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
      question:"Which is the world's highest mountain?",
      choice:["K2","Makalu","Mount Everest","Kilimanjaro"],
      answer:"Mount Everest"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
      question:"Which of these cities is not in Europe?",
      choice:["Prague","Moscow","Barcelona","Reykjavik"],
      answer:"Moscow"
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
      question:"True or False: Iceland is covered in ice.",
      choice:[true,false],
      answer:false
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"The United Kingdom is comprised of how many countries?",
      choice:[1,2,3,4],
      answer:4
    },
    { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
      question:"Which of the following countries do not border France?",
      choice:["Germany","Netherlands","Spain","Italy"],
      answer:"Netherlands"
    },
      { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
      question:"Which U.S. state is the Grand Canyon located in?",
      choice:["Wyoming","Arizona","New Mexico","Nevada"],
      answer:"Arizona"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
      question:"Which is the smallest country, measured by total land area?",
      choice:["Maldives","Monaco","Vatican"],
      answer:"Vatican"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
      question:"Which is the longest river in the world?",
      choice:["Amazon River","Congo River","Yellow River","Nile River"],
      answer:"Nile River"
    },
   { 
      url:"https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
      question:"Which is the largest body of water?",
      choice:["indian Ocean","Pacific Ocean","Atlantic Ocean","Nile River"],
      answer:"Pacific Ocean"
    }
]
let a=document.getElementById('content')

a.innerHTML+=`<img src="${data[0].url}" alt="">`
a.innerHTML+=`<h4>${data[0].question}</h4>`
a.innerHTML+=`<div id="container"></div>`
let b=document.getElementById('container')
b.classList.add('container')
b.innerHTML+=`<p>${data[0].choice[0]}</p>`
b.innerHTML+=`<p>${data[0].choice[1]}</p>`
b.innerHTML+=`<p>${data[0].choice[2]}</p>`
b.innerHTML+=`<p class="answer">${data[0].choice[3]}</p>`



a.innerHTML+=`<img src="${data[1].url}" alt="">`
a.innerHTML+=`<h4>${data[1].question}</h4>`
a.innerHTML+=`<div id="container1"></div>`
let c=document.getElementById('container1')
c.style.marginLeft='30%'
c.innerHTML+=`<p>${data[1].choice[0]}</p>`
c.innerHTML+=`<p>${data[1].choice[1]}</p>`
c.innerHTML+=`<p class="answer">${data[1].choice[2]}</p>`
c.innerHTML+=`<p>${data[1].choice[3]}</p>`



a.innerHTML+=`<img src="${data[2].url}" alt="">`
a.innerHTML+=`<h4>${data[2].question}</h4>`
a.innerHTML+=`<div id="container2"></div>`
let d=document.getElementById('container2')
d.style.marginLeft='30%'
d.innerHTML+=`<p>${data[2].choice[0]}</p>`
d.innerHTML+=`<p class="answer">${data[2].choice[1]}</p>`
d.innerHTML+=`<p>${data[2].choice[2]}</p>`
d.innerHTML+=`<p>${data[2].choice[3]}</p>`



a.innerHTML+=`<img src="${data[3].url}" alt="">`
a.innerHTML+=`<h4>${data[3].question}</h4>`
a.innerHTML+=`<div id="container3"></div>`
let e=document.getElementById('container3')
e.style.marginLeft='43%'
e.innerHTML+=`<p class="answer">${data[3].choice[0]}</p>`
e.innerHTML+=`<p>${data[3].choice[1]}</p>`



a.innerHTML+=`<img src="${data[4].url}" alt="">`
a.innerHTML+=`<h4>${data[4].question}</h4>`
a.innerHTML+=`<div id="container4"></div>`
let f=document.getElementById('container4')
f.style.marginLeft='37%'
f.innerHTML+=`<p>${data[4].choice[0]}</p>`
f.innerHTML+=`<p>${data[4].choice[1]}</p>`
f.innerHTML+=`<p>${data[4].choice[2]}</p>`
f.innerHTML+=`<p class="answer">${data[4].choice[3]}</p>`



a.innerHTML+=`<img src="${data[5].url}" alt="">`
a.innerHTML+=`<h4>${data[5].question}</h4>`
a.innerHTML+=`<div id="container5"></div>`
let g=document.getElementById('container5')
g.style.marginLeft='30%'
g.innerHTML+=`<p>${data[5].choice[0]}</p>`
g.innerHTML+=`<p class="answer">${data[5].choice[1]}</p>`
g.innerHTML+=`<p>${data[5].choice[2]}</p>`
g.innerHTML+=`<p>${data[5].choice[3]}</p>`



a.innerHTML+=`<img src="${data[6].url}" alt="">`
a.innerHTML+=`<h4>${data[6].question}</h4>`
a.innerHTML+=`<div id="container6"></div>`
let h=document.getElementById('container6')
h.style.marginLeft='30%'
h.innerHTML+=`<p>${data[6].choice[0]}</p>`
h.innerHTML+=`<p class="answer">${data[6].choice[1]}</p>`
h.innerHTML+=`<p>${data[6].choice[2]}</p>`
h.innerHTML+=`<p>${data[6].choice[3]}</p>`



a.innerHTML+=`<img src="${data[7].url}" alt="">`
a.innerHTML+=`<h4>${data[7].question}</h4>`
a.innerHTML+=`<div id="container7"></div>`
let l=document.getElementById('container7')
l.style.marginLeft='36%'
l.innerHTML+=`<p>${data[7].choice[0]}</p>`
l.innerHTML+=`<p>${data[7].choice[1]}</p>`
l.innerHTML+=`<p class="answer">${data[7].choice[2]}</p>`



a.innerHTML+=`<img src="${data[8].url}" alt="">`
a.innerHTML+=`<h4>${data[8].question}</h4>`
a.innerHTML+=`<div id="container8"></div>`
let m=document.getElementById('container8')
m.classList.add('container')
m.innerHTML+=`<p>${data[8].choice[0]}</p>`
m.innerHTML+=`<p>${data[8].choice[1]}</p>`
m.innerHTML+=`<p>${data[8].choice[2]}</p>`
m.innerHTML+=`<p class="answer">${data[8].choice[3]}</p>`



a.innerHTML+=`<img src="${data[9].url}" alt="">`
a.innerHTML+=`<h4>${data[9].question}</h4>`
a.innerHTML+=`<div id="container9"></div>`
let n=document.getElementById('container9')
n.classList.add('container')
n.innerHTML+=`<p>${data[9].choice[0]}</p>`
n.innerHTML+=`<p class="answer">${data[9].choice[1]}</p>`
n.innerHTML+=`<p>${data[9].choice[2]}</p>`
n.innerHTML+=`<p>${data[9].choice[3]}</p>`

