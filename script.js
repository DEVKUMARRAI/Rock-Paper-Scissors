const images = document.querySelectorAll('img');
const divs = document.querySelectorAll('.child');
const your_score = document.querySelector('#you');
const computer_score = document.querySelector('#computer');
const button = document.querySelector('button');
const banner = document.querySelector('#bn');
const you_select = document.querySelector('#your-selection')
const com_select = document.querySelector('#computer-selection')
const banner_text = document.querySelector("#banner-text");
const reset=document.querySelector('#reset');
let value = 1;

button.onclick = () => 
{
        
        banner.classList.add('visible');
        setTimeout(() => {
            banner.classList.remove('visible');
        }, 1000)
        function Show_Win() 
        {
            banner.classList.add('visible');
            setTimeout(() => {
                banner.classList.remove('visible');
            }, 1000)
        }
        function Show_Loose() 
        {
            banner_text.classList.remove('win');
            banner_text.classList.add('loose');
            banner.classList.add('visible');
            setTimeout(() => {
                banner.classList.remove('visible');
                banner_text.classList.remove('loose');
                banner_text.classList.add('win');
                banner_text.innerHTML = '!!! GAME STARTED !!!'
            }, 1000)
        }
        function Show_Draw() 
        {
            banner_text.classList.remove('win');
            banner_text.classList.add('draw');
            banner.classList.add('visible');
            setTimeout(() => {
                banner.classList.remove('visible');
                banner_text.classList.remove('draw');
                banner_text.classList.add('win');
                banner_text.innerHTML = '!!! GAME STARTED !!!'
            }, 1000)
        }
        function Result(selected, computer) 
        {
            if (selected == 'rock' && computer == 'rock') {
                banner_text.innerHTML = 'DRAW';
                Show_Draw();
            }
            if (selected == 'rock' && computer == 'paper') {
                banner_text.innerHTML = 'YOU LOOSE';
                Show_Loose();
            }
            if (selected == 'rock' && computer == 'scissor') {
                banner_text.innerHTML = 'YOU WIN'
                Show_Win();
            }


            if (selected == 'paper' && computer == 'rock') {
                banner_text.innerHTML = 'YOU WIN'
                Show_Win();
            }
            if (selected == 'paper' && computer == 'paper') {
                banner_text.innerHTML = 'DRAW'
                Show_Draw();
            }
            if (selected == 'paper' && computer == 'scissor') {
                banner_text.innerHTML = 'YOU LOOSE'
                Show_Loose();
            }


            if (selected == 'scissor' && computer == 'rock') {
                banner_text.innerHTML = 'YOU LOOSE'
                Show_Loose();
            }
            if (selected == 'scissor' && computer == 'paper') {
                banner_text.innerHTML = 'YOU WIN'
                Show_Win();
            }
            if (selected == 'scissor' && computer == 'scissor') {
                banner_text.innerHTML = 'DRAW';
                Show_Draw();
            }
        }
        function clicked_image(e) 
        {
            if(value<=5)
            {
                function Random_Number() {
                    return Math.floor(Math.random() * 3) + 1;
                }
    
                let selected, computer;
                selected = e.target.id;
                let rand_num = Random_Number();
                if (rand_num == 1) {
                    computer = 'rock';
                }
                if (rand_num == 2) {
                    computer = 'paper';
                }
                if (rand_num == 3) {
                    computer = 'scissor';
                }
                Result(selected, computer);
                value++;
            }
        }
        images.forEach((Image) => {
                Image.addEventListener('click', clicked_image);
              })
              reset.onclick=()=>{
                value=1;
              }
}

