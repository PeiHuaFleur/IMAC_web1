const siteTitle = document.querySelector('#site-title');
// semicolon is not mandatory here
const siteTitle2 = document.querySelectorAll('#p-grid');
console.log(siteTitle);
siteTitle2.forEach(elm => console.log(elm.innerHTML));

//立即換名字
const inputName = document.querySelector('#name-written'); //輸入的新名字
let input;
let tem_input;
//const characterName = document.querySelector('#default-name'); //default
const changeName = () =>{ //更改使用者名稱
  // characterName.innerHTML = inputName;
  input= document.getElementById('name-written').value;
  if(input){ //判斷是否有輸入
    tem_input = input.slice(0, 20);//最多輸入20字元
    document.getElementById('default-name').innerHTML = tem_input;
  }else{
    document.getElementById('default-name').innerHTML = 'Default';
  }
  console.log(input);
  // console.log(inputName);
}
inputName.addEventListener('keyup',changeName);
//inputName.addEventListener('keyup',event => changeName(event.tuneget.value,changeName));

//顯示pop視窗 文字 圖片
const btn = document.querySelector('#start-btn');//命名start按鈕
const changePOP = () =>{
  //input= document.getElementById('name-written').value; //有沒有辦法記住這個數值
  const myselect = document.getElementById('class-select');
  const index = myselect.selectedIndex;
  let select_value = myselect.options[index].value;
  console.log(select_value);

  if(select_value==1){
    document.getElementById("popImg").src="img/hd-3d.png"
    console.log(01);
  }else if(select_value==2){
    document.getElementById("popImg").src="img/hd-cinema.png"
    console.log(02);
  }else if(select_value==3){
    document.getElementById("popImg").src="img/hd-web.png"
    console.log(03);
  }

//switch ne marche pas!!
  switch (select_value) {
    case 0:
      console.log('無');
      break;
    case 1:
      document.getElementById("popImg").src="img/hd-3d.png"
      console.log(01);
      break;
    case 2:
      document.getElementById("popImg").src="img/hd-cinema.png"
      console.log(02);
      break;
    case 3:
      document.getElementById("popImg").src="img/hd-web.png"
      console.log(03);
      break;
    default:
      break;
  }

  if(input && select_value!=0){
    tem_input = input.slice(0, 20);//最多輸入20字元
    document.getElementById('addName').innerHTML = tem_input;
    document.getElementById("pop").classList.remove("hide");
    console.log('有輸入');
  }
  else{
    alert("N'oubliez pas de remplir votre nom, prénom et cours.");
    console.log('沒有輸入');
  }


}
btn.addEventListener('click',changePOP);
