const DATA = [
	{
		src: "./images/stroy-control.png",
		lang: ["HTML", "Scss", "Js"],
		title: "Строй Контроль",
		netlify: "https://stroy-control-me.netlify.app",
		git: "https://github.com/iskandarov101/stroy-control"
	},
	{           // shunisi
    src: "./images/tmdb.png",
		lang: ["React"],
		title: "TMDB movies",      
		netlify: "https://ymdbmovies.netlify.app",
		git: "https://github.com/iskandarov101/movies"
	},
	{
		src: './images/foods-post.png',
		lang: ['React'],
		title: "Foods-post",
		netlify: 'https://foods-post.netlify.app',
		git: 'https://github.com/iskandarov101/food-post2'
	},
	{
		src: './images/todo-list.png',
		lang: ['React'],
		title: 'Todo-list',
		netlify: 'https://todo-listmen.netlify.app',
		git: 'https://github.com/iskandarov101/to-do-list'
	},
	{
		src: "./images/filter.png",
		lang: ["HTML", "Scss", "Js"],
		title: "Grandma",
		netlify: "https://filter-granma.netlify.app",
		git: "https://github.com/sanjar1311/p-8--filter-project"
	},
	{
		src: "./images/myteab.png",
		lang: ["HTML", "Scss", "Js"],
		title: "My-team",
		netlify: "https://my-temame.netlify.app",
		git: "https://github.com/iskandarov101/my-teams"
	},
	{
		src: "./images/dental.png",
		lang: ["HTML", "Scss", "Js"],
		title: "Dental Practice",
		netlify: "https://dental-flash.netlify.app/",
		git: "https://github.com/iskandarov101/dental-clinic"
	},
	{
		src: "./images/fylo.png",
		lang: ["HTML", "Scss", "Js"],
		title: "Fylo",
		netlify: "https://fylo-me.netlify.app/",
		git: "https://github.com/iskandarov101/Fylo"
	}
]
//===    S E A R CH   F O R M    ===//

const elProjectsForm = document.querySelector(".projects__form");
const elProjectsInput = document.querySelector(".projects__input");
const elProjectsItemTemplate = document.querySelector(".projects-item-template").content;
const elProjectsOutput = document.querySelector('.projects__list');
const elProjectsBtns = document.querySelectorAll(".projects__btn");


function displayProjects(array) {
 elProjectsOutput.innerHTML = ""
 let projectsFragment = document.createDocumentFragment()
 
for(let i = 0; i < array.length; i++) {
 	let projectItem = elProjectsItemTemplate.cloneNode(true)
 	
 	projectItem.querySelector(".projects__img").src = array[i].src;
 	
 	projectItem.querySelector(".projects__item-title").textContent = array[i].title
 	projectItem.querySelector(".projects__netlify").href = array[i].netlify
 	projectItem.querySelector(".projects__git").href = array[i].git
 	for(let m = 0; m < array[i].lang.length; m++) {
 			projectItem.querySelector(".projects__langs").textContent += array[i].lang[m] + " "
 		}
 		
 		projectsFragment.appendChild(projectItem)
 	}
 	elProjectsOutput.appendChild(projectsFragment)
 }
 
 displayProjects(DATA)
 
 
 elProjectsForm.addEventListener('submit', (e)=> {
 	e.preventDefault()
 	let inputReg = new RegExp(elProjectsInput.value, "gi")
 	let searchReasult = [];
 	
 	for(let i = 0; i < DATA.length; i++) {
 		for(let n = 0; n < DATA[i].lang.length; n++) {
 			if(DATA[i].lang[n].match(inputReg)){
 				searchReasult.push(DATA[i])
 			}
 		}
 	}
 	
 	elProjectsInput.value = ""
 	displayProjects(searchReasult)
 }) 
 //===   S O R T    B T N S   ===// 
 let react = []
 for(let i = 0; i < DATA.length; i++) {
 	for(let n = 0; n < DATA[i].lang.length; n++) {
 		if(DATA[i].lang[n] === "React"){
 			react.push(DATA[i])
 		}
 	}
 } 
 let js = []
 for(let i = 0; i < DATA.length; i++) {
 	for(let n = 0; n < DATA[i].lang.length; n++) {
 		if(DATA[i].lang[n] === "Js"){
 			js.push(DATA[i])
 		}
 	}
 }

elProjectsBtns.forEach(item => {
	item.addEventListener("click", (e)=> {
		if(e.target.classList.contains("projects__all-btn")) {
			displayProjects(DATA)
		}
		if(e.target.classList.contains("projects__js-btn")) {
			displayProjects(js)
		}
		if(e.target.classList.contains("projects__react-btn")) {
			displayProjects(react)
		}
	})
})




window.addEventListener("scroll", function() {
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed", window.scrollY > 5);
});
function navBack(){
    var nav = document.getElementById('nav').classList.toggle("change");
}