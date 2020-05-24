let container=document.getElementById("text");
let button=document.getElementById("submit");
let footer=document.getElementById("footer");
let paths=['/bag','/asshole','/awesome','/because','/bucket','/bye','/cool','/cup','/diabetes','/even',
'/everyone','/everything','/family','/fascinating','/flying','/ftfy','/fyyff','/give','/holygrail','/horse','/idea',
'/immensity','/jinglebells','/life','/logs','/looking','/me','/no'];
let names=['Chaitanya Raj','Ankit Verma','Jatin Dehmiwal','Ankit Rai','Simran Saini','Harshita Rawat','Jhanvi Mundra','Ishita Jain',
'Himanshi Bhardwaj','Saloni','Gagan Kumar','Deepak','Tanveer Alam','Ashu Chaudhary','Ashish Kain'];

function select(){
let name=names[Math.floor(Math.random()*names.length)];
let path=paths[Math.floor(Math.random()*paths.length)];
url=`https://foaas.com${path}/${name}`;
axios.get(url)
  .then((response)=>{
    console.log(response.data);
    console.log(response.data.message);
    container.innerHTML=response.data.message;
    footer.innerHTML=response.data.subtitle;
  });
}
  button.addEventListener("click",select);